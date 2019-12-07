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
        alert('Logged in successfully!');
      } else {
        alert('Unable to log in!');
      }
    });
    
    /*
    fetch('http://localhost:6200/user/login/', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
        console.log('ALL GOOOOOOD!!!!');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });*/
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
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