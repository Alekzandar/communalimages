import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


//Table for viewing and interacting with existing data in database
class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    //Delete could succinctly be handled here
    delete() {
        axios.get('http://localhost:4200/imageport/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            .then(window.location.reload())  //refresh window upon deletion

    }
  render() {
    return (
      //Direct user to appropriate window depending on their selection
        <tr>
          <td>
            {this.props.obj.url}
          </td>
          <td>
            {this.props.obj.width}
          </td>
          <td>
            {this.props.obj.height}
          </td>
          <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;