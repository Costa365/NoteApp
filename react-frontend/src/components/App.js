import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./Header";
import AddNote from './AddNote';
import ListNotes from './ListNotes';
import UpdateNote from './UpdateNote';
import WithAuth from './WithAuth';
import UserState from './UserState';
import NoMatch from './NoMatch';

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
            <Switch>
              <Route exact path='/' component={WithAuth(ListNotes)} />
              <Route path='/add' component={WithAuth(AddNote)} />
              <Route path='/update/:id' component={WithAuth(UpdateNote)} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
