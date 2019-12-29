import React, { Component } from 'react';
import Swal from 'sweetalert2';
import UserService from './UserService';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: ''
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
    
    this.userService.login(this.state.email, this.state.password, res=>{
      if (res === true) {
        window.location.reload();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Unable to log in',
          text: 'Please ensure that email / password are correct'
        });
      }
    });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.onSubmit}>
        <input
          className="form-control"
          type="email"
          name="email"
          id="inputEmailLogin"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
       <input className="btn btn-primary mb-2" type="submit" value="Login"/>
      </form>
    );
  }
}