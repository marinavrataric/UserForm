import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function Success() {

    const { userInfo } = useContext(UserContext)

    return (
        <div>
            <h2 className="bar">Success</h2>
            <h1 className="info1">Thank you {userInfo.firstName} for your submission!</h1>
            <h3>You will get an email for further instrucions.</h3>
        </div>
    )
}

export default Success