import axios from 'axios';

export default class AdminService {

  constructor(){
    this.host = window.location.protocol + "//" + window.location.hostname;
    if(process.env.NODE_ENV === 'development'){
      this.host = this.host + ':6200';
    }
  }

  users(callback) {
    axios.get(this.host + '/admin/users', {withCredentials:true})
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      callback(null);
    });
  }
}