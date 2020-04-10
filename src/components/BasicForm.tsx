import React, { useContext, useRef, useEffect } from 'react'
import { UserContext } from './UserContext'

function BasicForm(props: any) {
    
    const focusMe = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (focusMe.current !== null) focusMe.current.focus()
    }, [])

    const { userInfo, setUserInfo } = useContext(UserContext)

    const handleFirstName = (e: any) => setUserInfo({ ...userInfo, firstName: e.target.value })
    const handleLastName = (e: any) => setUserInfo({ ...userInfo, lastName: e.target.value })
    const handleEmail = (e: any) => setUserInfo({ ...userInfo, email: e.target.value })

    return (
        <div>
            <h2 className="bar">Enter User Details</h2>
            <div className="center">
                <input type="text" placeholder="First name" onChange={handleFirstName} value={userInfo.firstName} ref={focusMe} />
                <input type="text" placeholder="Last name" onChange={handleLastName} value={userInfo.lastName}/>
                <input type="text" placeholder="Email" onChange={handleEmail} value={userInfo.email}/>
                <button onClick={props.nextStep}>Continue</button>
            </div>
        </div>
    )
}

export default BasicForm