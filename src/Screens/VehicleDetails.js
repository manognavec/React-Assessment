import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVehicleDetails } from '../Actions';

class VehicleDetails extends Component {

    constructor() {
        super();
        this.state = {
            vehicle_make: 'Toyota',
            vehicle_model: 'Camry',
            vehicle_type: '',
            manufacturing_year: '2020',
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
                <select className="browser-default custom-select mb-4" name="vehicle_make" onChange={this.changeDetails}>
                    <option value="" disabled>Choose option</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Ford">Ford</option>
                    <option value="Honda">Honda</option>
                    <option value="Chevrolet">Chevrolet</option>
                </select>
            
                <select className="browser-default custom-select mb-4" name="vehicle_model" onChange={this.changeDetails}>
                    <option value="" disabled>Choose option</option>
                    <option value="Camry">Camry</option>
                    <option value="Maruti Suzuki Alto">Maruti Suzuki Alto</option>
                    <option value="Tata Altroz">Tata Altroz</option>
                    <option value="Renault Kwid">Renault Kwid</option>
                </select>
            
                <div className="form-group">
                    <input type="text" name="vehicle_type" value={this.state.vehicle_type} className="form-control" onChange={this.changeDetails} placeholder="Variant Type" />
                </div>
                
            
                <select className="browser-default custom-select mb-4" name="manufacturing_year" onChange={this.changeDetails}>
                    <option value="" disabled>Choose option</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
            
                <div className="form-group">
                    <input type="text" name="vehicle_value" value={this.state.vehicle_value} className="form-control" onChange={this.changeDetails} placeholder="Vehicle Value" />
                </div>
            
                <button type="submit" className="btn btn-info" onClick={this.setData}>Next</button>
            
            </div>
        )
    }

}

export default connect(null,{ setVehicleDetails })(VehicleDetails);