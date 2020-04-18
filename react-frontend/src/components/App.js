import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import AddNote from './AddNote';
import ListNotes from './ListNotes';
import UpdateNote from './UpdateNote';
import WithAuth from './WithAuth';
import Register from './Register';
import Login from './Login';
import UserState from './UserState';
import NoMatch from './NoMatch';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.userState = new UserState();

    if(!this.userState.isLoggedIn()){
      this.Comp =
        <Router>
          <div>
            <Header user={this.userState.userName()}/>
            Create notes online and access them from your browser. Register now and start creating notes! 
            <div className="styles-div-margin"></div>
              <div>  
                <Switch>
                  <Route path='/register' component={Register} />
                  <Route path='/login' component={Login} />
                </Switch>
              </div>
          </div>
        </Router>
    }
    else{
      this.Comp = 
        <Router>
          <div>
            <Header user={this.userState.userName()}/>
            <Switch>
              <Route exact path='/' component={WithAuth(ListNotes)} />
              <Route path='/add' component={WithAuth(AddNote)} />
              <Route path='/update/:id' component={WithAuth(UpdateNote)} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
    }
  }

  render() {
    return (
      <Router>
      <div className="container">
        {this.Comp}
        <Footer />
      </div>
      </Router>
    );
  }
}
