import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDetails } from '../Actions';

class DetailsForm extends Component {
    constructor() {
        super();
        this.state = {
            dob: '',
            issue_date: '',
            company_name: ''
        }
    }

    changeDetails = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    } 

    setData = () => {
        this.props.setDetails(this.state);
        this.props.changeCount('next','submitted');
    }

    render() {
        return (
                <div className="modal-body mx-4">
                    <div className="form-group">
                        <input type="text" name="dob" value={this.state.dob} className="form-control" onChange={this.changeDetails} placeholder="04/09/1900" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="issue_date" value={this.state.issue_date} className="form-control" onChange={this.changeDetails} placeholder="08/01/2020" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="company_name" value={this.state.company_name} className="form-control" onChange={this.changeDetails} placeholder="Company Name" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={()=>this.props.changeCount('prev')}>Previous</button>
                        <button type="button" class="btn btn-info" onClick={this.setData}>Submit</button>
                    </div>
                </div>
        )
    }

}

export default connect(null,{ setDetails })(DetailsForm);