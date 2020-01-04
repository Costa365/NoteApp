import React, { Component } from 'react';
import NoteService from './NoteService';
import './Styles.css'

export default class UpdateNote extends Component {

  constructor(props) {
    super(props);
    this.noteService = new NoteService();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.state = {
      _id: '',
      desc: ''
    };
  }

  componentDidMount(){
    let id =this.props.match.params.id;
    var thisRef = this;
    this.noteService.get(id, function(data){
      thisRef.setState(data);
    });
  }

  handleChange(event) {
    this.setState({desc: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //reference to the component "this"
    var thisRef = this;
    //Update in database
    this.noteService.update(
      this.state.desc,
      this.state._id,
      function() {
        thisRef.props.history.push('/');
      }
    );
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="panel panel-default">
          <div className="panel-heading">Edit Note</div>
          <div className="panel-body">
          <p>Note</p>
            <input type="hidden" value={this.state._id} />
                <textarea cols="40" rows="6" type="text" value={this.state.desc} onChange={this.handleChange} className="form-control"></textarea>
          </div>
          <div className="panel-footer">
          <button type="submit" className="btn btn-primary styles-margin">Update</button>
          <button type="button" className="btn btn-default styles-margin" onClick={this.handleCancel}>Cancel</button>
          </div>
        </div>
      </form>
    );
  }
}