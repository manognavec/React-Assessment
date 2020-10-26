import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPersonalDetails } from '../Actions'

class PersonalDetails extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            number: ''
        }
    }
    setData = () => {
        this.props.setPersonalDetails(this.state)
        this.props.changeCount('next');
    }

    changeDetails = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
                <div className="modal-body mx-4">
                    <div className="form-group">
                        <input type="text" value={this.state.name} name="name" className="form-control" placeholder="Customer Name" onChange={this.changeDetails} />
                    </div>
                    <div className="form-group">
                        <input type="email" value={this.state.email} name="email" className="form-control" placeholder="Email Address" onChange={this.changeDetails} />
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.state.number} name="number" className="form-control" placeholder="Mobile Number" onChange={this.changeDetails} />
                    </div>
                    <button type="submit" className="btn btn-info" onClick={()=>this.setData()}>Next</button>
                </div>
        )
    }

}

export default connect(null,{ setPersonalDetails })(PersonalDetails)