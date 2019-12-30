import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return (
        <footer className="page-footer font-small blue">
        <hr />
        <div className="footer-copyright text-center py-3">
        Made by 
        <a href="http://costa365.rf.gd"> Costa Constantinou </a> 
        using: 
        <a href="https://www.docker.com/"> Docker</a> | 
        <a href="https://nodejs.org/en/"> Node.js</a> | 
        <a href="https://expressjs.com/"> Express</a> | 
        <a href="https://reactjs.org/"> React</a> | 
        <a href="https://www.mongodb.com/"> MongoDB</a> | 
        <a href="https://sweetalert2.github.io/"> Sweet Alert 2</a>
        </div>
        </footer>
    );
  }
}
