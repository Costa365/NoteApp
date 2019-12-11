import React from "react";

import Login from './Login';
import Logout from './Logout';
import Register from './Register';

export const Header = (props) => {
  const form = <span><Login /><Register /><Logout /></span>;

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">ReactJS Notes</a>
        </div>
      </div>

      {form}
        
      </nav>
  );
}