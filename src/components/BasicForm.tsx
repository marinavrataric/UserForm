import React from 'react'

function BasicForm(props: any) {

    return (
        <div>
            <h2 className="bar">Enter User Details</h2>
            <div className="center">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="Email" />
                <button onClick={props.nextStep}>Continue</button>
            </div>
        </div>
    )
}

export default BasicForm