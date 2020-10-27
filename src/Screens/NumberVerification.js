import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setOTP } from '../Actions';

class NumberVerification extends Component {

    constructor() {
        super();
        this.state = {
            otp: '',
            otpError: ''
        }
    }

    changeDetails = (e) => {
        let { value } = e.target;
        var pattern = new RegExp(/^[0-9]*$/);
        if (value.length <= 4 && pattern.test(value)) {
            this.setState({ otp: value, otpError: '' })
        }
    }

    setData = () => {
        if(this.state.otp && this.state.otp.length === 4) {
            this.props.setOTP(this.state.otp);
            this.props.changeCount('next');
        }else {
            this.setState({ otpError: 'Please enter 4-digit OTP' })
        }
    }

    render() {
        return (
                <div className="modal-body mx-4">
                    <h5>+97195687423</h5>
                    <img className="icon" src="/logo/verification.png" alt="logo" />
                    <div className="form-group">
                        <input type="text" value={this.state.otp} className="form-control" autoComplete="off" onChange={this.changeDetails} placeholder="Enter OTP" />
                        <span className="required">*</span>
                        <span className="error">{this.state.otpError}</span>
                    </div>
                    <p>Didn't receive code? <a href="/">Resend</a></p>
                    <button type="submit" className="btn btn-info" onClick={this.setData}>Next</button>
                </div>
        )
    }

}

export default connect(null,{ setOTP })(NumberVerification)