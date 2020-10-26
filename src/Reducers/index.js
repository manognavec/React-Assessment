import { SET_PERSONAL_DETAILS, SET_OTP, SET_VEHICLE_DETAILS, SET_DETAILS } from '../Actions';

const initialState = {
    personalDetails: '',
    otp: '',
    vehicleDetails: '',
    details: ''
}

const Details = (state = initialState, action) => {
    switch(action.type) {
        case SET_PERSONAL_DETAILS: 
            return {...state, personalDetails: action.data}
        case SET_OTP:
            return {...state, otp: action.data}
        case SET_VEHICLE_DETAILS:
            return {...state, vehicleDetails: action.data}
        case SET_DETAILS:
            return {...state, details: action.data}
        default :
            return state;
    }
}

export default Details