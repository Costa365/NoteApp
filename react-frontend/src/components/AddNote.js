import React, { Component } from 'react';
import NoteService from './NoteService';

export default class AddNote extends Component {

  constructor(props) {
      super(props);
      this.state = {value: ''};

      this.noteService = new NoteService();

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      this.noteService.add(this.state.value,()=>{
        this.props.history.push('/');
      });
    }

    handleCancel(event) {
      event.preventDefault();
      this.props.history.push('/');
    }

    handleChange(event) {
      event.preventDefault();
      this.setState({value: event.target.value});
    }

    render() {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="panel panel-default">
              <div className="panel-heading">Add Task</div>
              <div className="panel-body">
              <p>Task description</p>
                <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"/>
              </div>
              <div className="panel-footer">
              <button type="submit" className="btn btn-primary">Add</button>
              <button type="button" className="btn btn-default" onClick={this.handleCancel}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }