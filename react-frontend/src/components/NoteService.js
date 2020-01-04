import axios from 'axios';

export default class NoteService {

  constructor(){
    this.host = window.location.protocol + "//" + window.location.hostname;
  }

  all(callback) {
    axios.get(this.host + ':6200/notes', {withCredentials:true})
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      callback(null);
    });
  }

  get(id,callback) {
    axios.get(this.host + ':6200/notes/'+id, {withCredentials:true})
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      callback(null);
    });
  }

  add(data,callback) {
    axios.post(this.host + ':6200/notes/add/', {
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
    axios.post(this.host + ':6200/notes/update/'+id, {
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
    axios.get(this.host + ':6200/notes/delete/'+id, {withCredentials:true})
    .then(function(response){
      callback();
    })
    .catch(function(response){
      callback();
    });
  }
}