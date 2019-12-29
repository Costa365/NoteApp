import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './Login';
import Logout from './Logout';

export default class Header extends Component {

  constructor(props) {
    super(props);
    
    if(this.props.user != null){
      this.LogoutComp = <Logout />;
    }
    else {
      this.LoginComp = <Login />;
      this.registerLink = <a href="/Register">Register</a>;
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
        <a className="navbar-brand" href="/#">Notes</a>
        {this.props.user}
        <Router>
          <span>
            {this.LoginComp}
            {this.LogoutComp}
            {this.registerLink}
          </span>
        </Router>
        </div>
      </nav>
    );
  }
}
