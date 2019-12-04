import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Header} from "./components/Header";

import AddNote from './components/AddNote';
import ListNotes from './components/ListNotes';
import UpdateNote from './components/UpdateNote';

import './index.css';

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <Header/>
      </div>
    </div>
    <div>
      <Router>
      <div>
      <Route path='/add' component={AddNote} />
      <Route exact path='/' component={ListNotes} />
      <Route path='/update/:id' component={UpdateNote} />
      </div>
      </Router>
    </div>
  </div>
,
  document.getElementById('root')
);
