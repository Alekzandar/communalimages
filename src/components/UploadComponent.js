import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';


require('bootstrap');


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
        window.location.reload(); //refresh view window to reflect update
    }

    render() {
        return (
            <div class = "uploadStyle" style={{marginTop: 50}}>
                <h3>Contribute New Image</h3>
                   <div class="buttons-preview">

                <button class="btn btn-outline-info" data-toggle="modal" data-target="#modal-warning">Before Contributing</button>
                </div>
                    <div id="modal-warning" class="modal modal-message modal-warning fade" >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <i class="fa fa-warning"></i>
                                </div>
                                <div class="modal-title"><b>Upload Guide</b></div>

                                <div class="modal-body">For <u>wider</u> images set values that roughly maintain aspect ratio. (i.e width: 5, height: 3) </div>
                                <div class="modal-body">For <u>taller</u> images set values that roughly maintain aspect ratio. (i.e width: 3, height: 5) </div>
                                <div class="modal-footer">
                                    <small><font color="red">Disclaimer: Abuse of service will lead to it's termination.</font></small>
                                    <button type="button" class="btn btn-warning" data-dismiss="modal">OK</button>
                                </div>
                            </div> 
                        </div> 
                    </div>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Add URL:  </label>
                        <input type="url" value={this.state.url} className="form-control" onChange={this.onChangeURL} placeholder ="https://cdn.theatlantic.com/static/mt/assets/science/cat_caviar.jpg" required/>
                    </div>
                    <div className="form-group">
                        <label>Add Image Width: </label>
                        <input type="number" value={this.state.width} className="form-control" min = "2" max = "10" onChange={this.onChangeWidth} required/>
                    </div>
                     <div className="form-group">
                        <label>Add Image Height: </label>
                        <input type="number" value={this.state.height} className="form-control" min = "2" max = "10" onChange={this.onChangeHeight} required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Contribute!" className="btn btn-primary"/>
                    </div>
                </form>


            </div>
        )
    }
}