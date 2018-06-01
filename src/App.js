import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, NavbagToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

//Creating necessary components for each navbar link
//import HomeComponent from './components/HomeComponent';
import UploadComponent from './components/UploadComponent';
import EditComponent from './components/EditComponent';
import ViewComponent from './components/ViewComponent';

//App referencing and generating the necessary components into
//the displayed navbar structure 
//Switch specifies components to render

const navStyle = {
  backgroundColor: "#64bf6a"
}

class App extends Component {
  render() {
    return (


    <body style = {{backgroundColor :  "#ffb564"}} >
    <Router>
        <div className = "container">
        <Navbar style  = {navStyle} light expand = "md">
        <NavbarBrand className="navbar navbar-expand-lg">
            <a className="navbar-brand" style = {{textAlign: "center", color: "white", fontSize : 25}}>Communal Gallery Platform</a>
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
          </NavbarBrand>
          </Navbar>
          
          <Switch>
              <Route exact path='/upload' component={UploadComponent} />
              <Route path='/edit/:id' component={EditComponent} />
              <Route path='/view' component={ViewComponent} />
          </Switch>

        </div>
      </Router>
    </body>

    );
  }
}

export default App;