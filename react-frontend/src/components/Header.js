import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import './Styles.css';

export default class Header extends Component {

  constructor(props) {
    super(props);
    
    if(this.props.user != null){
      this.LogoutComp = <Logout />;
      this.UserName = <span className="styles-margin styles-username-text">{this.props.user}</span>
    }
    else {
      this.AccessComp = 
        <div>
        
        <Link to="/login">
        <button className="btn btn-primary mb-2 styles-margin styles-button-margin styles-header-button">Login</button>
        </Link>
      
        <Link to="/register">
        <button className="btn btn-primary mb-2 styles-margin styles-button-margin styles-header-button">Register</button>
        </Link>
        </div>
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">

        <a className="navbar-brand" href="/#" title="Notes"> 
        <img className="styles-logo-img" src="./logo.png" alt=""/> 
        </a>
        <span className="navbar-text pull-right">{this.UserName}
          <span>  
            {this.LogoutComp}
            {this.AccessComp}
          </span>
        </span>
        </div>
      </nav>
    );
  }
}
