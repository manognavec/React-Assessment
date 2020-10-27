import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDetails } from '../Actions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DetailsForm extends Component {
    constructor() {
        super();
        this.state = {
            dob: new Date(),
            issue_date: new Date(),
            company_name: '',
            dobError: '',
            issueDateError: ''
        }
    }

    changeDetails = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    } 

    setData = () => {
        let { dob, issue_date } = this.state;
        if(dob && issue_date) {
            let dobFormat = (dob.getMonth()+1)+'/'+dob.getDate()+'/'+dob.getFullYear();
            let issueDateFormat = (issue_date.getMonth()+1)+'/'+issue_date.getDate()+'/'+issue_date.getFullYear();
            let details = {
                dob: dobFormat,
                issue_date: issueDateFormat,
                company_name: this.state.company_name
            }
            this.props.setDetails(details);
            this.props.changeCount('next','submitted');
        }else {
            if(!dob) {
                this.setState({ dobError: 'Please enter Date of Birth '})
            }
            if(!issue_date) {
                this.setState({ issueDateError: 'Please enter License issue date '})
            }
        }
    }

    setDate = (date, name) => {
        if(name === 'dob') {
            this.setState({ dobError: '' })
        }
        if(name === 'issue_date') {
            this.setState({ issueDateError: '' })
        }
        this.setState({ [name]: date })
    }

    render() {
        return (
                <div className="modal-body mx-4">
                    <div className="form-group">
                        <DatePicker className="form-control" selected={this.state.dob} onChange={(date) => this.setDate(date, 'dob')}/>
                        <span className="required">*</span>
                        <span className="error">{this.state.dobError}</span>
                    </div>
                    <div className="form-group">
                        <DatePicker className="form-control" selected={this.state.issue_date} onChange={(date) => this.setDate(date, 'issue_date')}/>
                        <span className="required">*</span>
                        <span className="error">{this.state.issueDateError}</span>
                    </div>
                    <div className="form-group">
                        <input type="text" name="company_name" value={this.state.company_name} className="form-control" onChange={this.changeDetails} placeholder="Company Name" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={()=>this.props.changeCount('prev')}>Previous</button>
                        <button type="submit" className="btn btn-info" onClick={this.setData}>Submit</button>
                    </div>
                </div>
        )
    }

}

export default connect(null,{ setDetails })(DetailsForm);