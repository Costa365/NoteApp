import React, { Component } from 'react';
import Swal from 'sweetalert2';
import NoteService from './NoteService';
import ListNotesRow from './ListNotesRow';

export default class ListNotes extends Component {

  constructor(props) {
      super(props);
      this.state = {items: ''};
      this.noteService = new NoteService();

      this.onDelete = this.onDelete.bind(this);
      this.onUpdate = this.onUpdate.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount(){
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
      let thisRef = this;
      let id = event.target.id;
      Swal.fire({
        title: "Are you sure?", 
        text: "Note will be permanently deleted", 
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          
          thisRef.noteService.delete(id,()=>{
            thisRef.fillData();
          });
        }
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
        <div className="panel panel-default">
          <div className="panel-heading">Notes</div>
          <div className="panel-body">
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
      );
    }
  }