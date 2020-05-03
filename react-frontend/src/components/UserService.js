import axios from 'axios';
import Swal from 'sweetalert2';
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
        Swal.fire({
          icon: 'info',
          title: 'User logged out',
          text: 'Session has timedout, so please log in again'
        }).then(() => {
          thisRef.userState.sessionEnded();
          window.location.reload();
        });
      }
      callback(null);
    });
  }

  login(un, pw, callback) {
    let thisRef = this;
    axios.post(this.host + ':6200/user/login/', {
    username: un, password: pw
    }, {withCredentials: true})
    .then(function (response) {
      callback(true);
      thisRef.userState.loggedIn(un);
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

  register(un, em, pw,callback) {
    axios.post(this.host + ':6200/user/register/', {
    username: un, email: em, password: pw
    })
    .then(function (response) {
      callback(true);
    })
    .catch(function (error) {
      callback(false);
    });
  }

  forgot(em,callback) {
    axios.post(this.host + ':6200/user/forgot/', {
      email: em
    })
    .then(function (response) {
      callback(true);
    })
    .catch(function (error) {
      callback(false);
    });
  }

  reset(tk,pw,callback) {
    axios.post(this.host + ':6200/user/reset/', {
      token: tk,
      password: pw
    })
    .then(function (response) {
      callback(true);
    })
    .catch(function (error) {
      callback(false);
    });
  }
}