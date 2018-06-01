import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import splash from '../media/Background.gif'
import '../App.css'



//Implemting Reactstrap to create landing page
export default class HomeComponent extends Component{

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

	render() {
		return (

		<body class = "bodyStyle">
			<div class = "imgcontainer">
				<img src= {splash} alt = "landingimage"/>
        <Button onClick={this.toggle}>Welcome to 'The Gallery'</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>About The Project</ModalHeader>
          <ModalBody>
            This project invites the user to contribute to the communal image gallery and consider when such a portal may serve useful for communal development. </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Explore</Button>
          </ModalFooter>
        </Modal>



			</div>
		</body>
		);
	}
}
