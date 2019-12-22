import axios from 'axios';

export default class UserService {

  isAuth(callback) {
    axios.get('http://localhost:6200/user/checkToken', {withCredentials:true})
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error);
      callback(null);
    });
  }

  login(em, pw, callback) {
    axios.post('http://localhost:6200/user/login/', {
    email: em, password: pw
    }, {withCredentials: true})
    .then(function (response) {
      callback(true);
    })
    .catch(function (error) {
      console.log(error);
      callback(false);
    });
  }

  logout(callback) {
    axios.post('http://localhost:6200/user/logout/', {
      action: 'logout'
    }, {withCredentials: true})
    .then(function (response) {
      console.log(response);
      callback(true);
    })
    .catch(function (error) {
      console.log(error);
      callback(false);
    });
  }

  register(em, pw,callback) {
    axios.post('http://localhost:6200/user/register/', {
    email: em, password: pw
    })
    .then(function (response) {
      console.log(response);
      callback(true);
    })
    .catch(function (error) {
      console.log(error);
      callback(false);
    });
  }
  
}