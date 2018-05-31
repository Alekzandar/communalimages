import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import ImageGallery from './GalleryComponent';


//Component for rendering Gallery and Edit Table
export default class ViewComponent extends Component {

//Populate database data into edit table and construct
  constructor(props) {
      super(props);
      this.state = {imageports: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4200/imageport')
      .then(response => {
        this.setState({ imageports: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
        return this.state.imageports.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

//Render gallery and table with necessary headers
    render() {
      return (
        <div className="container">
            <ImageGallery></ImageGallery>
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>URL</td>
                  <td>Width</td>
                  <td>Height</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }
