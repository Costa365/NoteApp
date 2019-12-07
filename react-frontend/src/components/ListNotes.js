import React, { Component } from 'react';
import NoteService from './NoteService';
import ListNotesRow from './ListNotesRow';

export default class IndexItem extends Component {

  constructor(props) {
      super(props);
      this.state = {items: ''};
      this.noteService = new NoteService();

      //bind
      this.onDelete = this.onDelete.bind(this);
      this.onUpdate = this.onUpdate.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
    }
    componentWillMount(){
      this.fillData();
    }

    fillData() {
      var thisRef = this;
      this.noteService.all((data)=>{
          thisRef.setState({ items: data });
      })
    }

    tabRow(){
      if(this.state.items instanceof Array){

        var thisRef = this;
        return this.state.items.map(function(object, i){
            return <ListNotesRow onDelete={thisRef.onDelete} onUpdate={thisRef.onUpdate} obj={object} key={i} />;
        })
      }
    }

    onDelete(event) {
      let id = event.target.id;
      var thisRef = this;
      this.noteService.delete(id,()=>{
        thisRef.fillData();
      });
    }

    onUpdate(event) {
      let id = event.target.id;
      this.props.history.push('/update/'+id);
    }

    handleAdd() {
      this.props.history.push('/add');
    }

    render() {
      return (
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">List of Notes</div>
            <div className="panel-body">
            <p>Click on the task description to edit</p>
              <table id="note-list" className="table table-bordered">
                <tbody>
                  {this.tabRow()}
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <button onClick={this.handleAdd} className="btn btn-info">New note</button>
            </div>
          </div>
        </div>
      );
    }
  }