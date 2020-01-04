import axios from 'axios';
import UserState from './UserState';

export default class UserService {

  constructor(props) {
    this.userState = new UserState();
    this.host = window.location.protocol + "//" + window.location.hostname;
  }

  isAuth(callback) {
    let thisRef = this;
    axios.get(this.host + ':6200/user/checkToken', {withCredentials:true})
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      if(thisRef.userState.isLoggedIn()){
        thisRef.userState.sessionEnded();
        window.location.reload();
      }
      callback(null);
    });
  }

  login(em, pw, callback) {
    let thisRef = this;
    axios.post(this.host + ':6200/user/login/', {
    email: em, password: pw
    }, {withCredentials: true})
    .then(function (response) {
      callback(true);
      thisRef.userState.loggedIn(em);
    })
    .catch(function (error) {
      callback(false);
    });
  }

  logout(callback) {
    this.userState.loggedOut();
    axios.post(this.host + ':6200/user/logout/', {
      action: 'logout'
    }, {withCredentials: true})
    .then(function (response) {
      callback(true);
    })
    .catch(function (error) {
      callback(false);
    });
  }

  register(em, pw,callback) {
    axios.post(this.host + ':6200/user/register/', {
    email: em, password: pw
    })
    .then(function (response) {
      callback(true);
    })
    .catch(function (error) {
      callback(false);
    });
  }
}