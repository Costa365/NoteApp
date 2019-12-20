import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import WithAuth from './WithAuth';

export const Header = (props) => {

  const LoginComp = WithAuth(Login,false);
  const RegisterComp = WithAuth(Register,false);
  const LogoutComp = WithAuth(Logout);
  
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/#">ReactJS Notes</a>
        </div>
      </div>

      <Router>
      <span>
        <LoginComp />
        <RegisterComp />
        <LogoutComp />
      </span>
      </Router>
        
      </nav>
  );
}