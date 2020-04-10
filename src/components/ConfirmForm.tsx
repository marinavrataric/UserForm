import React from 'react'

function ConfirmForm(props: any) {

    return (
        <div>
            <h2 className="bar">Confirm Form</h2>
            <div className="center">
                <p className="pConfirm">First Name:</p>
                <p className="pConfirm">Last Name:</p>
                <p className="pConfirm">Email:</p>
                <p className="pConfirm">Occupation:</p>
                <p className="pConfirm">City:</p>
                <p className="pConfirm">Bio:</p>
                <button className="confirm" onClick={props.nextStep}>Confirm & continue</button>
                <button className="btnBack" onClick={props.prevStep}>Back</button>
            </div>
        </div>
    )
}

export default ConfirmForm