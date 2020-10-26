import React, { Component } from 'react';
import PersonalDetails from '../Screens/PersonalDetails';
import RightSideBar from '../Screens/RightSideBar';
import NumberVerification from '../Screens/NumberVerification';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VehicleDetails from '../Screens/VehicleDetails';
import DetailsForm from '../Screens/DetailsForm';
import SubmitForm from '../Screens/SubmitForm';
import { connect } from 'react-redux';

class ReachAssessment extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    changeCount = (status, submitStatus) => {
        this.setState(prevState => ({
            count: status === 'prev' ? prevState.count - 1 : prevState.count + 1
        }), function() {
            if (submitStatus === "submitted") {
                console.log('Personal Details:', this.props.personalDetails)
                console.log('OTP:', this.props.otp)
                console.log('Vehicle Details:', this.props.vehicleDetails)
                console.log('Details:', this.props.details)
            }
        })
    }

    render() {
        let { count } = this.state;
        let progressCount = count * 25;
        let vehicleIcon = '';
        let heading = '';
        let section = '';
        switch(true) {
            case count === 0: 
                heading = "Please enter your details"
                section = <PersonalDetails changeCount={this.changeCount}/>
                break;
            case count === 1: 
                heading = "Please enter the 6 digit OTP code received on your phone"
                section = <NumberVerification changeCount={this.changeCount} />
                break;
            case count === 2: 
                heading = "Please choose your vehicle details"
                vehicleIcon = <i className="vehicle-icon">i</i>
                section = <VehicleDetails changeCount={this.changeCount} />
                break;
            case count === 3: 
                heading = "Please enter your details"
                section = <DetailsForm changeCount={this.changeCount} />
                break;
            case count === 4: 
                heading = "Successfully Submitted"
                section = <SubmitForm changeCount={this.changeCount} />
                break;
            default: break;
        }
        return (
            <div>
                <div className="mainSplit left">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <img className="logo" src='/logo/searchIcon.png' alt="logo"/>
                    <h3>Get Your Motor Quote</h3>
                    <div role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content form-elegant">
                                <div className="text-center">
                                    <p className="count-range">{count} of 4 completed</p>
                                    <ProgressBar variant="success" now={progressCount} />
                                    <h5 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel">{heading} {vehicleIcon}</h5>
                                </div>
                                {section}            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="split right">
                    <RightSideBar count={count} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        personalDetails: state.personalDetails,
        otp: state.otp,
        vehicleDetails: state.vehicleDetails,
        details: state.details
    }
}

export default connect(mapStateToProps, null)(ReachAssessment);