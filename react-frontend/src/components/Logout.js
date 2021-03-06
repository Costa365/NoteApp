import React, { Component } from 'react';
import Swal from 'sweetalert2';
import UserService from './UserService';
import './Styles.css';

export default class Logout extends Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.userService = new UserService();
  }

  handleClick() {
    this.userService.logout(res=>{
      if (res === true) {
        document.location.href="/";
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Unable to log out',
          text: 'Session may have timedout or service may be inaccessible'
        }).then(() => {
          document.location.href="/";
        });
      }
    });
  }

  render() {
    return (
      <button className="btn btn-primary mb-2 styles-margin styles-button-margin" onClick={this.handleClick}>Logout</button>
    );
  }
}