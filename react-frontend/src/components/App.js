import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Header} from "./Header";
import AddNote from './AddNote';
import ListNotes from './ListNotes';
import UpdateNote from './UpdateNote';
import WithAuth from './WithAuth';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Header/>
          </div>
        </div>
        <div>
          <Router>
          <div>
          <Route exact path='/' component={WithAuth(ListNotes)} />
          <Route path='/add' component={WithAuth(AddNote)} />
          <Route path='/update/:id' component={WithAuth(UpdateNote)} />
          </div>
          </Router>
        </div>
      </div>
    );
  }
}
