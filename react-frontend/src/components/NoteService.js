import axios from 'axios';

export default class NoteService {

  constructor(){
    this.host = window.location.protocol + "//" + window.location.hostname;
    if(process.env.NODE_ENV === 'development'){
      this.host = this.host + ':6200';
    }
    else{
      this.host = window.location.protocol + "//api-" + window.location.hostname;
    }
  }

  all(callback) {
    axios.get(this.host + '/notes/', {withCredentials:true})
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      callback(null);
    });
  }

  get(id,callback) {
    axios.get(this.host + '/notes/'+id, {withCredentials:true})
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      callback(null);
    });
  }

  add(data,callback) {
    axios.post(this.host + '/notes/add/', {
    desc: data
    }, {withCredentials:true})
    .then(function (response) {
      callback();
    })
    .catch(function (error) {
      callback();
    });
  }

  update(data, id, callback){
    axios.post(this.host + '/notes/update/'+id, {
      desc: data
    }, {withCredentials:true})
    .then(function(response) {
      callback();
    })
    .catch(function(response) {
      callback();
    });
  }

  delete(id, callback){
    axios.get(this.host + '/notes/delete/'+id, {withCredentials:true})
    .then(function(response){
      callback();
    })
    .catch(function(response){
      callback();
    });
  }
}
