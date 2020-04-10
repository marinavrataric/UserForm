import React, { useState } from 'react'
import BasicForm from './BasicForm'
import DetailForm from './DetailForm'
import ConfirmForm from './ConfirmForm'
import Success from './Success'

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

    const nextStep = () => {
        setUserInfo({ ...userInfo, step: userInfo.step + 1 })
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
            {userInfo.step === 0 ? <BasicForm nextStep={nextStep} /> : switchPage(userInfo.step)}
        </div>
    )
}

export default UserForm