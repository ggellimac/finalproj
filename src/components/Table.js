import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

//my modal module being called by the button
const MyTable = (props) => {


    return (
        <div>
        <ReactBootStrap.Table id="data-table"
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
            <thead closeButton>
                <tr>
                    <th colSpan="11">Event Name</th>
                </tr>
                <tr>
                    <th>PantherID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Department</th>
                    <th>Level</th>
                    <th>Campus</th>
                    <th>Degree</th>
                    <th>Email</th>
                    <th>College</th>
                    <th>Year</th>
                    <th>Check-In</th>
                </tr>
            </thead>
          </ReactBootStrap.Table>
        </div>


    //   >
   
    //       <ReactBootStrap.Table.Title id="contained-modal-title-vcenter">
    //       
    //       </ReactBootStrap.Table.Title>
 
    //     <ReactBootStrap.Table.Row>
    //         <ReactBootStrap.Table.Col>
    //             <p>hello this is a table</p>
    //         </ReactBootStrap.Table.Col>
    //     </ReactBootStrap.Table.Row>
    //     <ReactBootStrap.Table.Footer>
    //       <ReactBootStrap.Button onClick={props.onHide}>Close</ReactBootStrap.Button>
    //     </ReactBootStrap.Table.Footer>
      
    );
  }

  export default MyTable;
