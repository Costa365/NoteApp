import React, { Component } from 'react';
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
        alert('Unable to log in!');
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        Login:
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
       <input type="submit" value="Submit"/>
      </form>
    );
  }
}