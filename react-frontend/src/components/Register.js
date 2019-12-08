import React, { Component } from 'react';
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
        alert('Register successfully!');
      } else {
        alert('Unable to register!');
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Register Below!</h1>
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