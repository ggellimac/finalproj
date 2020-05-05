import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import InfoModal from './InfoModal';

const InfoButton = (props) => {
    {/*don't show modal on page load */}
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
        {/*my button - onclick show the modal*/}
        <ReactBootStrap.Button id="create-button" variant="primary" onClick={() => setModalShow(true)}>Details</ReactBootStrap.Button>


        {/*my modal */}
        <InfoModal
                    {...props}
                    onFormChange={props.changeTheState} //pass properties from App to Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
        />
        </div>
    )
}

export default InfoButton;