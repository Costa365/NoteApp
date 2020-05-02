import React, { Component } from 'react';
import Swal from 'sweetalert2';
import UserService from './UserService';
import './Styles.css';

export default class Forgot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
    };

    this.userService = new UserService();
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    
    this.userService.forgot(this.state.email, res=>{
      if (res === true) {
          Swal.fire({
          icon: 'success',
          title: 'Email reset request submitted',
          text: 'An email will be sent to the email address if it is valid'
          }).then((result) => {
          if (result.value) {
              window.location.replace("/");
          }});

      } else {
          Swal.fire({
          icon: 'error',
          title: 'Unable to reset password',
          text: 'Something went wrong, please try again.'
          });
      }
    });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.onSubmit}>
        <input
          className="form-control styles-margin"
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
       <input className="btn btn-primary mb-2 styles-margin" type="submit" value="Send Reset Link"/>
      </form>
    );
  }
}