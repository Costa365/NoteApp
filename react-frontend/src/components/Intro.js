import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Styles.css';

export default class Intro extends Component {
  
  render() {
    return (
      <div>
        
        <div>
          <img className="styles-banner-img" src="./coffee-notes.jpg" alt=""/> 
        </div> 
        <div className="styles-intro-txt-div">
          Create and manage notes securely from your web browser. <Link to="/register">Register</Link> now and start creating notes! 
        </div>
      </div>
    );
  }
}