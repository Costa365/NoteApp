import React, { Component } from "react";
import './Styles.css';


export default class Intro extends Component {
  
  render() {
    return (
      <div>
        Create notes online and access them from your browser. Register now and start creating notes! 
        <div>
          <img className="styles-tech-img" src="./mern.jpg" alt=""/> 
        </div> 
      </div>
    );
  }
}