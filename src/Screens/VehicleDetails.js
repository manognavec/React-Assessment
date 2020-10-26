import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVehicleDetails } from '../Actions';

class VehicleDetails extends Component {

    constructor() {
        super();
        this.state = {
            vehicle_make: '',
            vehicle_model: '',
            vehicle_type: '',
            manufacturing_year: '',
            vehicle_value: ''
        }
    }

    changeDetails = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    }

    setData  = () => {
        this.props.setVehicleDetails(this.state);
        this.props.changeCount('next');
    }

    render() {
        return (
                <div className="modal-body mx-4">
                    <div className="form-group">
                        <input type="text" name="vehicle_make" value={this.state.vehicle_make} className="form-control" onChange={this.changeDetails} placeholder="Vehicle Make" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="vehicle_model" value={this.state.vehicle_model} className="form-control" onChange={this.changeDetails} placeholder="Vehicle Model" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="vehicle_type" value={this.state.vehicle_type} className="form-control" onChange={this.changeDetails} placeholder="Variant Type" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="manufacturing_year" value={this.state.manufacturing_year} className="form-control" onChange={this.changeDetails} placeholder="Manufacturing Year" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="vehicle_value" value={this.state.vehicle_value} className="form-control" onChange={this.changeDetails} placeholder="Vehicle Value" />
                    </div>
                    <button type="submit" className="btn btn-info" onClick={this.setData}>Next</button>
                </div>
        )
    }

}

export default connect(null,{ setVehicleDetails })(VehicleDetails);