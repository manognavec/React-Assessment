import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setOTP } from '../Actions';

class NumberVerification extends Component {

    constructor() {
        super();
        this.state = {
            otp: ''
        }
    }

    changeDetails = (e) => {
        let { value } = e.target;
        if (value.length <= 4) {
            this.setState({ otp: value })
        }
    }

    setData = () => {
        this.props.setOTP(this.state);
        this.props.changeCount('next');
    }

    render() {
        return (
                <div className="modal-body mx-4">
                    <h5>+997895643</h5>
                    <img className="icon" src="/logo/verification.png" alt="logo" />
                    <div className="form-group">
                        <input type="number" value={this.state.otp} className="form-control" autoComplete="off" onChange={this.changeDetails} placeholder="Enter OTP" />
                    </div>
                    <p>Didn't receive code? <a href="/">Resend</a></p>
                    <button type="submit" className="btn btn-info" onClick={this.setData}>Next</button>
                </div>
        )
    }

}

export default connect(null,{ setOTP })(NumberVerification)