import React from 'react';
import {Component} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import MyTable from './Table';
import {ExcelRenderer, OutTable} from 'react-excel-renderer';

class ImportButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
          rows: [],
          cols: []
        };
      }

    changeHandler(event) {
        let fileObj = event.target.files[0];
        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
          if (err) {
            console.log(err);
          } else {
            this.setState({
              cols: resp.cols,
              rows: resp.rows
            });
            console.log(this.state);
          }
        });
      }



    render() {
        return (
            <div>
            {/*my button - onclick import excel file*/}
            <input
          className="btn"
          type="file"
          onChange={this.changeHandler.bind(this)}
          style={{ padding: "10px" }}/><br></br>
    
          {/* <MyTable
                         {...this.props} //pass properties from App to Table
            /> */}

            <OutTable
            id="customers"
                    data={this.state.rows}
                    columns={this.state.cols}
                    tableClassName="ExcelTable2007"
                    tableHeaderRowClass="heading"
                    />
            </div>
        )
    }

}

export default ImportButton;