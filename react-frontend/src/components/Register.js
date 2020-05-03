import React, { Component } from 'react';
import Swal from 'sweetalert2';
import UserService from './UserService';
import './Styles.css';

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
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
    this.userService.register(this.state.username, this.state.email, this.state.password, res=>{
      if (res === true) {
        Swal.fire({
          icon: 'success',
          title: 'Registered successfully',
          text: 'You may now log in'
        }).then((result) => {
          if (result.value) {
            window.location.replace("/login");
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
          className="form-control styles-margin"
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleInputChange}
          required
        />
        <input
          className="form-control styles-margin"
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          className="form-control styles-margin"
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
       <input className="btn btn-primary mb-2 styles-margin" type="submit" value="Register"/>
      </form>
    );
  }
}