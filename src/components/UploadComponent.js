import React, { Component } from 'react';
import axios from 'axios';


//Component for uploading new image data to database
export default class UploadComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeURL = this.onChangeURL.bind(this);
        this.onChangeWidth = this.onChangeWidth.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            url: '',
            width: '',
            height: ''
        }
    }


//Field-specific data to be pushed
    onChangeURL(e) {
        this.setState({
            url: e.target.value
        });
    }
    onChangeWidth(e) {
        this.setState({
            width: e.target.value
        });
    }
    onChangeHeight(e) {
        this.setState({
            height: e.target.value
        });
    }

//Post form data to database and redirect to view window
    onSubmit(e) {
        e.preventDefault();
        const imageport = {
            url: this.state.url,
            width: this.state.width,
            height: this.state.height
        }
        axios.post('http://localhost:4200/imageport/add', imageport)
        .then(res => console.log(res.data));
        this.setState({
            url: '',
            width: '',
            height: ''
        })
        this.props.history.push('/view')
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Contribute New Image</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add URL:  </label>
                        <input type="text" value={this.state.url} className="form-control" onChange={this.onChangeURL}/>
                    </div>
                    <div className="form-group">
                        <label>Add Image Width: </label>
                        <input type="number" value={this.state.width} className="form-control" onChange={this.onChangeWidth}/>
                    </div>
                     <div className="form-group">
                        <label>Add Image Height: </label>
                        <input type="number" value={this.state.height} className="form-control" onChange={this.onChangeHeight}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Contribute" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}