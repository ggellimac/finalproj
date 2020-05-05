import React from 'react';
import {Component} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Form from 'react-bootstrap/Form';  

//my from module being called by the modal

class MyForm extends Component {

    constructor(props) {
        super(props);
        this.childFormChange = this.childFormChange.bind(this);
    }

    childFormChange(e) {
        e.preventDefault()
        this.props.changeTheState(e.target.fnewname.value)
    }

    render() {
        return (
            <Form onSubmit={this.childFormChange.bind(this)}> 
           
                <Form.Group>
                    <Form.Control /*onChange={this.childFormChange}*/ type="text" name="fnewname" placeholder="Your Awesome Event" required />
                </Form.Group>
                <ReactBootStrap.Button variant="primary" type="submit">
                    Create
                </ReactBootStrap.Button>
            </Form>
        );
    }

  }

export default MyForm;