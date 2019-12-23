import React, { Component } from 'react';

export default class ListNotesRow extends Component {

  render() {
    return (
        <tr>
          <td>
            <button id={this.props.obj._id} onClick={this.props.onUpdate} type="button" value="Edit" className="btn btn-primary btn-xs">Edit</button>
            <button id={this.props.obj._id} onClick={this.props.onDelete} type="button" value="Delete" className="btn btn-danger btn-xs">Delete</button>
            <textarea readonly cols="10" rows="2" type="text" value={this.props.obj.desc} onChange={this.handleChange} className="form-control"></textarea>
          </td>
        </tr>
    );
  }
}