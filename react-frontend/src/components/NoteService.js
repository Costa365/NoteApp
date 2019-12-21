import axios from 'axios';

export default class NoteService {

  all(callback) {
    axios.get('http://localhost:6200/notes', {withCredentials:true})
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error);
      callback(null);
    });
  }

  get(id,callback) {
    axios.get('http://localhost:6200/notes/'+id, {withCredentials:true})
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error);
      callback(null);
    });
  }

  add(data,callback) {
    axios.post('http://localhost:6200/notes/add/', {
    desc: data
    }, {withCredentials:true})
    .then(function (response) {
      callback();
    })
    .catch(function (error) {
      console.log(error);
      callback();
    });
  }

  update(data, id, callback){
    axios.post('http://localhost:6200/notes/update/'+id, {
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
    axios.get('http://localhost:6200/notes/delete/'+id, {withCredentials:true})
    .then(function(response){
      callback();
    })
    .catch(function(response){
      console.log('Error deleting');
      callback();
    });
  }
}