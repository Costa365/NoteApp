import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import WithAuth from './WithAuth';

export default class Header extends Component {

  constructor(props) {
    super(props);



    this.LoginComp = WithAuth(Login,false);
    this.RegisterComp = WithAuth(Register,false);
    this.LogoutComp = WithAuth(Logout);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
        <a className="navbar-brand" href="/#">Notes</a>
        {this.props.user}
        <Router>
          <span>
            <this.LoginComp />
            <this.RegisterComp />
            <this.LogoutComp />
          </span>
        </Router>
        </div>
      </nav>
    );
  }
}
