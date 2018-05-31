import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


//Creating necessary components for each navbar link
//import HomeComponent from './components/HomeComponent';
import UploadComponent from './components/UploadComponent';
import EditComponent from './components/EditComponent';
import ViewComponent from './components/ViewComponent';

//App referencing and generating the necessary components into
//the displayed navbar structure 
//Switch specifies components to render

class App extends Component {
  render() {
    return (
    <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Communal Gallery Platform</a>
            <div class = "col-sm-12 col-md-6 col-lg-4">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/home'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/view'} className="nav-link">View</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/upload'} className="nav-link">Upload</Link>
                </li>
              </ul>
            </div>
          </nav>

          
          <Switch>
              <Route exact path='/upload' component={UploadComponent} />
              <Route path='/edit/:id' component={EditComponent} />
              <Route path='/view' component={ViewComponent} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;