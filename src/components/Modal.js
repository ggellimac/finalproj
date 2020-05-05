import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import MyForm from './Form';

//my modal module being called by the button
const MyVerticallyCenteredModal = (props) => {
    return (
      <ReactBootStrap.Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ReactBootStrap.Modal.Header closeButton>
          <ReactBootStrap.Modal.Title id="contained-modal-title-vcenter">
            Enter The Event Name
          </ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>
        <ReactBootStrap.Modal.Body>
           <MyForm 
            {...props}
            onFormChange={props.changeTheState}
           /> 
        </ReactBootStrap.Modal.Body>
        <ReactBootStrap.Modal.Footer>
          <ReactBootStrap.Button onClick={props.onHide}>Close</ReactBootStrap.Button>
        </ReactBootStrap.Modal.Footer>
      </ReactBootStrap.Modal>
    );
  }

  export default MyVerticallyCenteredModal;