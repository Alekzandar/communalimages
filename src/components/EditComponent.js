import React, { Component } from 'react';
import axios from 'axios';


//Component for editing existing files in database
export default class EditComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeURL = this.onChangeURL.bind(this);
        this.onChangeWidth = this.onChangeWidth.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {url: '', width: '', height: ''};
    }

//Retrieve database object to be edited
    componentDidMount() {
        axios.get('http://localhost:4200/imageport/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ url: response.data.url, width: response.data.width, height: response.data.height });
            })
            .catch(function (error) {
                console.log(error);
            })
        }

//Field-specific changes
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

//Stage edits to update and post to database, redirecting to gallery window
    onSubmit(e) {
        e.preventDefault();
        const imageport = {
            url: this.state.url,
            width: this.state.width,
            height: this.state.height
        }
        axios.post('http://localhost:4200/imageport/update/'+this.props.match.params.id, imageport)
        .then(res => console.log(res.data));
        this.setState({
            url: '',
            width: '',
            height: ''
        })
        this.props.history.push('/view');
        window.location.reload(); //refresh view window to reflect update
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Edit Existing Image Data</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Image URL:  </label>
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
                        <input type="submit" value="Update Image Values" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}