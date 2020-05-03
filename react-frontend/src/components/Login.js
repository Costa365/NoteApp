import React, { Component } from 'react';
import Swal from 'sweetalert2';
import UserService from './UserService';
import { Link } from 'react-router-dom';
import "./Styles.css";

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
        //window.location.reload();
        window.open("/","_self");
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
      <div>
        <form className="form-inline" onSubmit={this.onSubmit}>
          <input
            className="form-control styles-margin"
            type="email"
            name="email"
            id="inputEmailLogin"
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
        <input className="btn btn-primary mb-2 styles-margin styles-button-margin" type="submit" value="Login"/>
        </form>
        <Link to="/forgot">Forgot password?</Link>
      </div>
    );
  }
}