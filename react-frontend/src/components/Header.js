import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './Login';
import Logout from './Logout';
import './Styles.css';

export default class Header extends Component {

  constructor(props) {
    super(props);
    
    if(this.props.user != null){
      this.LogoutComp = <Logout />;
    }
    else {
      this.LoginComp = <Login />;
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">

        <a className="navbar-brand" href="/#" title="Notes"> 
        <img className="styles-logo-img" src="./logo.png" alt=""/> 
        </a>
        <span className="navbar-text pull-right">{this.props.user}
        <Router>
          <span>
            {this.LoginComp}
            {this.LogoutComp}
          </span>
        </Router>
        </span>
        </div>
      </nav>
    );
  }
}
