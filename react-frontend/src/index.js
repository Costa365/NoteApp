import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Header} from "./components/Header";

import AddNote from './components/AddNote';
import ListNotes from './components/ListNotes';
import UpdateNote from './components/UpdateNote';
import WithAuth from './components/WithAuth';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';

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
      <Route path='/login' component={Login} />
      <Route path='/logout' component={WithAuth(Logout)} />
      <Route path='/register' component={Register} />

      <Route path='/add' component={WithAuth(AddNote)} />
      <Route exact path='/' component={WithAuth(ListNotes)} />
      <Route path='/update/:id' component={WithAuth(UpdateNote)} />
      </div>
      </Router>
    </div>
  </div>
,
  document.getElementById('root')
);
