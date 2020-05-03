import React, { Component } from 'react';
import Swal from 'sweetalert2';
import UserService from './UserService';
import './Styles.css';
import queryString from 'query-string';

export default class Reset extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPassword : '',
      confirmPassword : '',
      token : ''
    };

    this.userService = new UserService();
  }

  componentDidMount(){
    let params = queryString.parse(this.props.location.search);
    this.setState({
      'token': params.token
    });
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    
    if(this.state.newPassword !== this.state.confirmPassword){
        Swal.fire({
            icon: 'error',
            title: 'Passwords do not match',
            text: 'Passwords do not match'
          });
    } else {
      this.userService.reset(this.state.token, this.state.newPassword, res=>{
        if (res === true) {
          Swal.fire({
            icon: 'success',
            title: 'Password reset has been reset successfully',
            text: 'You may now log in'
          }).then((result) => {
            if (result.value) {
              window.location.replace("/login");
            }});

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Unable to reset password',
            text: 'Token may be invalid. Please try again.'
          });
        }
      });
    }
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.onSubmit}>
        <input
          className="form-control styles-margin"
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={this.state.newPassword}
          onChange={this.handleInputChange}
          required
        />
        <input
          className="form-control styles-margin"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={this.state.confirmPassword}
          onChange={this.handleInputChange}
          required
        />
       <input className="btn btn-primary mb-2 styles-margin" type="submit" value="Set Password"/>
      </form>
    );
  }
}