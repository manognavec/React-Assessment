import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPersonalDetails } from '../Actions'

class PersonalDetails extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            number: '',
            nameError: '',
            numberError: ''
        }
    }
    setData = () => {
        let { name, email, number } = this.state;
        if(name && number) {
            let details = {
                'Name': name,
                'Email': email,
                'Mobile Number': number
            }
            this.props.setPersonalDetails(details);
            this.props.changeCount('next');
        }else {
            if(!name) {
                this.setState({ nameError: 'Please enter Name' })
            }
            if(!number) {
                this.setState({ numberError: 'Please enter Mobile Number'})
            }
        }
    }

    changeDetails = (e) => {
        let { name, value } = e.target;
        var pattern = new RegExp(/^[0-9]*$/);
        if (name !== 'number' || pattern.test(value)) {
            if(name === 'name') {
                this.setState({ nameError: '' })
            }
            if(name === 'number') {
                this.setState({ numberError: '' })
            }
            this.setState({ [name]: value })
        }
    }
    render() {
        return (
                <div className="modal-body mx-4">
                    <div className="form-group">
                        <input type="text" value={this.state.name} name="name" className="form-control" placeholder="Customer Name" onChange={this.changeDetails} />
                        <span className="required">*</span>
                        <span className="error">{this.state.nameError}</span>
                    </div>
                    <div className="form-group">
                        <input type="email" value={this.state.email} name="email" className="form-control" placeholder="Email Address" onChange={this.changeDetails} />
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend">+971</span>
                            </div>
                            <input type="text" className="form-control" value={this.state.number} name="number" placeholder="Mobile Number" onChange={this.changeDetails} aria-describedby="inputGroupPrepend" />
                        </div>
                        <span className="required">*</span>
                        <span className="error">{this.state.numberError}</span>
                    </div>
                    <button type="submit" className="btn btn-info" onClick={this.setData}>Next</button>
                </div>
        )
    }

}

export default connect(null,{ setPersonalDetails })(PersonalDetails)