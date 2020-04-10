import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function ConfirmForm(props: any) {

    const { userInfo } = useContext(UserContext)

    return (
        <div>
            <h2 className="bar">Confirm Form</h2>
            <div className="center">
                <p className="pConfirm">First Name:</p>
                <p className="info">{userInfo.firstName}</p>
                <p className="pConfirm">Last Name:</p>
                <p className="info">{userInfo.lastName}</p>
                <p className="pConfirm">Email:</p>
                <p className="info">{userInfo.email}</p>
                <p className="pConfirm">Occupation:</p>
                <p className="info">{userInfo.occupation}</p>
                <p className="pConfirm">City:</p>
                <p className="info">{userInfo.city}</p>
                <p className="pConfirm">Bio:</p>
                <p className="info marg">{userInfo.bio}</p>
                <button className="confirm" onClick={props.nextStep}>Confirm & continue</button>
                <button className="btnBack" onClick={props.prevStep}>Back</button>
            </div>
        </div>
    )
}

export default ConfirmForm