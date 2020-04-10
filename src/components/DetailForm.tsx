import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function DetailForm(props: any) {

    const { userInfo, setUserInfo } = useContext(UserContext)

    const handleOccupation = (e: any) => setUserInfo({ ...userInfo, occupation: e.target.value })
    const handleCity = (e: any) => setUserInfo({ ...userInfo, city: e.target.value })
    const handleBio = (e: any) => setUserInfo({ ...userInfo, bio: e.target.value })

    return (
        <div>
            <h2 className="bar">Enter Personal Details</h2>
            <div className="center">
                <input type="text" placeholder="Occupation" onChange={handleOccupation} value={userInfo.occupation}/>
                <input type="text" placeholder="City" onChange={handleCity} value={userInfo.city}/>
                <input type="text" placeholder="Bio" onChange={handleBio} value={userInfo.bio}/>
                <button onClick={props.nextStep}>Continue</button>
                <button onClick={props.prevStep}className="btnBack">Back</button>
            </div>
        </div>
    )
}

export default DetailForm