import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./Header";
import AddNote from './AddNote';
import ListNotes from './ListNotes';
import UpdateNote from './UpdateNote';
import WithAuth from './WithAuth';
import UserState from './UserState';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.userState = new UserState();
  }

  render() {
    return (
      <div className="container">
        <Header user={this.userState.userName()}/>

        <Router>
          <div>
            <Route exact path='/' component={WithAuth(ListNotes)} />
            <Route path='/add' component={WithAuth(AddNote)} />
            <Route path='/update/:id' component={WithAuth(UpdateNote)} />
          </div>
        </Router>
      </div>
    );
  }
}
