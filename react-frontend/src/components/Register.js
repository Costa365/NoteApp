import React, { Component } from 'react';
import Swal from 'sweetalert2';
import UserService from './UserService';

export default class Register extends Component {
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
    this.userService.register(this.state.email, this.state.password, res=>{
      if (res === true) {
        Swal.fire({
          icon: 'success',
          title: 'Registered successfully',
          text: 'You may now log in'
        }).then((result) => {
          if (result.value) {
            window.location.replace("/");
          }});

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Unable to register',
          text: 'Email may already be registered'
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
       <input className="btn btn-primary mb-2" type="submit" value="Register"/>
      </form>
    );
  }
}