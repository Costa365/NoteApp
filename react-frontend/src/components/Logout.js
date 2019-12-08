import React, { Component } from 'react';
import UserService from './UserService';

export default class Logout extends Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.userService = new UserService();
  }

  handleClick() {
    this.userService.logout(res=>{
      if (res === true) {
        alert('Logged out successfully!');
      } else {
        alert('Unable to log out!');
      }
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>Logout</button>
    );
  }
}