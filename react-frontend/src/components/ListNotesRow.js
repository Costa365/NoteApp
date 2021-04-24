import React, { Component } from 'react';
import './Styles.css';

export default class ListNotesRow extends Component {

  render() {
    return (
        <tr>
          <td>
            <button id={this.props.obj._id} onClick={this.props.onUpdate} type="button" value="Edit" className="btn btn-primary btn-xs styles-margin">Edit</button>
            <button id={this.props.obj._id} onClick={this.props.onDelete} type="button" value="Delete" className="btn btn-danger btn-xs styles-margin">Delete</button>
            <textarea readonly cols="40" rows="6" type="text" value={this.props.obj.desc} className="styles-div-note-view"></textarea>
          </td>
        </tr>
    );
  }
}