import React, { Component } from 'react';

class SubmitForm extends Component {

    render() {
        return (
                <div className="modal-body mx-4">
                    <div className="form-group">
                        <p>Thanks for your details, our staff will be back with our best quote within an hour.</p>
                        <img className="icon" src="/logo/submit.png" alt="logo" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Done</button>
                    </div>
                </div>
        )
    }

}

export default SubmitForm;