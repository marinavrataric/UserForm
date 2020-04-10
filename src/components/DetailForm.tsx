import React from 'react'

function DetailForm(props: any) {

    return (
        <div>
            <h2 className="bar">Enter Personal Details</h2>
            <div className="center">
                <input type="text" placeholder="Occupation" />
                <input type="text" placeholder="City"/>
                <input type="text" placeholder="Bio"/>
                <button onClick={props.nextStep}>Continue</button>
                <button onClick={props.prevStep}className="btnBack">Back</button>
            </div>
        </div>
    )
}

export default DetailForm