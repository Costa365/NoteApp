import React, { Component } from 'react';
import Swal from 'sweetalert2';
import UserService from './UserService';
import { Link } from 'react-router-dom';
import "./Styles.css";

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
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
    
    this.userService.login(this.state.username, this.state.password, res=>{
      if (res === true) {
        window.open("/","_self");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Unable to log in',
          text: 'Please ensure that username / password are correct'
        });
      }
    });
  }

  render() {
    return (
      <div>
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
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
        <input className="btn btn-primary mb-2 styles-margin styles-button-margin" type="submit" value="Login"/>
        </form>
        <br />
        <Link to="/forgot">Reset</Link> your password if you've forgotton it.<br />
        <Link to="/register">Register</Link> if you don't have an account.
      </div>
    );
  }
}