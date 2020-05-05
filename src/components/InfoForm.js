import React from 'react';
import {Component} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Form from 'react-bootstrap/Form';  

//my infoform module being called by the infomodal

class InfoForm extends Component {

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
                <Form.Label>Start Date</Form.Label>
                    <Form.Control /*onChange={this.childFormChange}*/ type="date" name="startdate"/>
                </Form.Group>
                <Form.Group>
                <Form.Label>End Date</Form.Label>
                    <Form.Control /*onChange={this.childFormChange}*/ type="date" name="enddate"/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Start Time</Form.Label>
                    <Form.Control /*onChange={this.childFormChange}*/ type="time" name="starttime"/>
                </Form.Group>
                <Form.Group>
                <Form.Label>End-Time</Form.Label>
                    <Form.Control /*onChange={this.childFormChange}*/ type="time" name="endtime"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Event Description</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form>
        );
    }

  }

export default InfoForm;