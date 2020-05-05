import React from 'react';
import {Component} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import EventPage from './EventPage';

class MyCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        hideTable1: false,
        };
       this.hideComponent = this.hideComponent.bind(this);
      }

      hideComponent(name) {
        console.log(name);
        this.setState({ hideTable1: !this.state.hideTable1 });
      }

    render() {
       const { hideTable1 } = this.state;
        return (
            <div>
                <ReactBootStrap.Card style={{ width: '18rem', borderRadius: '10px'}} bg="dark" text="white">
                    <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title>{this.props.eventname}</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                        This is an event I made.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button variant="primary" onClick={() => this.hideComponent("hideTable1")}>Toggle the Event</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>

                {hideTable1 && <EventPage {...this.props}/>} 
            </div>

        );
    }
}

    export default MyCard;
