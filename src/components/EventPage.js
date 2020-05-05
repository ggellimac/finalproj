import React from 'react';
import {Component} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import ImportButton from './ImportButton';
import InfoButton from './InfoButton'

class EventPage extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    

    return (
      <div className="App">
        <h1>Test Event</h1>
        <p>{this.props.eventname} Description. This is an event I made.</p>
        <InfoButton />
        <div class="filters">
            <h4>Filters</h4>
            <input type="checkbox" name="firstname" value="First Name"/>
            <label id="boxes" for="vehicle1"> First Name</label>
            <input type="checkbox" name="lasttname" value="Last Name"/>
            <label id="boxes" for="vehicle1"> Last Name</label>
            <input type="checkbox" name="id" value="Panther ID"/>
            <label id="boxes" for="vehicle1"> PantherID</label>
        </div>
        <ImportButton />
      </div>
        
    );

  }

}

export default EventPage;
