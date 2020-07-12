import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Styles.css';

export default class Intro extends Component {
  
  render() {
    return (
      <div>
        Create notes online and access them from your browser. <Link to="/register">Register</Link> now and start creating notes! 
        <div>
          <img className="styles-tech-img" src="./mern.jpg" alt=""/> 
        </div> 
      </div>
    );
  }
}