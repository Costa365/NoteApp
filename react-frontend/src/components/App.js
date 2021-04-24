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
import Reset from './Reset';
import Forgot from './Forgot';
import Intro from './Intro';
import UserState from './UserState';
import NoMatch from './NoMatch';
import './Styles.css';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.userState = new UserState();

    if(!this.userState.isLoggedIn()){
      this.Comp =
        <Router>
          <div>
            <Header user={this.userState.userName()}/>
              <div>  
                <Switch>
                  <Route exact path='/' component={Intro} />
                  <Route path='/register' component={Register} />
                  <Route path='/login' component={Login} />
                  <Route path='/reset' component={Reset} />
                  <Route path='/forgot' component={Forgot} />
                  <Route component={NoMatch} />
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
              <Route exact path='/' component={WithAuth(ListNotes,{ "user": this.userState.userName() } )}  />
              <Route path='/add' component={WithAuth(AddNote, {})} />
              <Route path='/update/:id' component={WithAuth(UpdateNote, {})} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
    }
  }

  render() {
    return (
      <Router>
      <div className="container styles-main">
        {this.Comp}
        <Footer />
      </div>
      </Router>
    );
  }
}
