import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import AddNote from './AddNote';
import ListNotes from './ListNotes';
import UpdateNote from './UpdateNote';
import WithAuth from './WithAuth';
import Register from './Register';
import UserState from './UserState';
import NoMatch from './NoMatch';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.userState = new UserState();

    if(!this.userState.isLoggedIn()){
      this.RegisterComp = 
        <div>
          Create notes online and access them from your browser. Register now and start creating notes! 
          <div className="styles-div-margin"></div>
          <Register />
        </div>;
    }
    else{
      this.ListComp = 
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={WithAuth(ListNotes)} />
              <Route path='/add' component={WithAuth(AddNote)} />
              <Route path='/update/:id' component={WithAuth(UpdateNote)} />
              <Route path='/register' component={Register} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
    }
  }

  render() {
    return (
      <div className="container">
        <Header user={this.userState.userName()}/>
        
        {this.RegisterComp}
        {this.ListComp}

        <Footer />
      </div>
    );
  }
}
