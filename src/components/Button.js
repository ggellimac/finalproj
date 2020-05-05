import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import MyVerticallyCenteredModal from './Modal';

const Lbutton = (props) => {
    {/*don't show modal on page load */}
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
        {/*my button - onclick show the modal*/}
        <ReactBootStrap.Button id="create-button" variant="primary" onClick={() => setModalShow(true)}>Create Event</ReactBootStrap.Button>


        {/*my modal */}
        <MyVerticallyCenteredModal
                    {...props}
                    onFormChange={props.changeTheState} //pass properties from App to Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
        />
        </div>
    )
}

export default Lbutton;