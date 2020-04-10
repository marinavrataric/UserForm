import React, { useState, useEffect } from 'react'
import BasicForm from './BasicForm'
import DetailForm from './DetailForm'
import ConfirmForm from './ConfirmForm'
import Success from './Success'
import { UserContext } from './UserContext'

interface UserInfo {
    step: number
    firstName: string,
    lastName: string,
    email: string,
    occupation: string,
    city: string,
    bio: string
}

function UserForm() {

    const [userInfo, setUserInfo] = useState<UserInfo>({
        step: 0,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    })
    
    let getUser: any

    useEffect(() => {
        getUser = localStorage.getItem('user_info')
        getUser = JSON.parse(getUser)
        if (getUser !== null) {
            setUserInfo({
                ...userInfo,
                firstName: getUser.firstName,
                lastName: getUser.lastName,
                email: getUser.email,
                occupation: getUser.occupation,
                city: getUser.city,
                bio: getUser.bio
            })
        }
    }, [])

    const nextStep = () => {
        setUserInfo({ ...userInfo, step: userInfo.step + 1 })
        localStorage.setItem('user_info', JSON.stringify(userInfo))
    }

    const prevStep = () => {
        setUserInfo({ ...userInfo, step: userInfo.step - 1 })
    }

    const switchPage = (step: number) => {
        switch (step) {
            case 1:
                return <DetailForm nextStep={nextStep} prevStep={prevStep} />
            case 2:
                return <ConfirmForm nextStep={nextStep} prevStep={prevStep} />
            case 3:
                return <Success />
        }
    }

    return (
        <div>
            <UserContext.Provider value={{ userInfo, setUserInfo }}>
                {userInfo.step === 0 ? <BasicForm nextStep={nextStep} /> : switchPage(userInfo.step)}
            </UserContext.Provider>
        </div>
    )
}

export default UserForm