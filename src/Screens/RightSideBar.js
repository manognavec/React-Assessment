import React, { Component } from 'react';

class RightSideBar extends Component {
    render() {
        let { count } = this.props;
        let step1 = '';
        let step2 = '';
        let step3 = '';
        switch(true) {
            case count === 0:
                step1 = 'Validate for correct email format'
                step2 = 'Mobile number maxlength 10'
                break;
            case count === 1:
                step1 = 'Display the mobile number enter on the previous step'
                step2 = 'OTP maxlength 4 digits'
                break;
            case count === 2:
                step1 = 'Use static values for vehicle makes'
                step2 = 'Use static values for vehicle modals'
                step3 = 'Use static values for manufacturing year'
                break;
            case count === 3:
                step1 = 'Use any datepicker library or default HTML date for "Date of Birth" field'
                step2 = 'Use any datepicker library or default HTML date for "License Issue" field'
                break;
            case count === 4:
                step1 = 'Display static heading, description and image as given in the design'
                step2 = 'Console.log all the data captured on previous steps'
                break;
            default: break;
        }
        return (
            <div className="right-bar">
                <h5>{step1}</h5>
                <h5>{step2}</h5>
                <h5>{step3}</h5>
                <h5>Step Counter {count}/4</h5>
                <h5>Progress {count*25}%</h5>
            </div>
        )
    }
}

export default RightSideBar