import { createContext } from "react";

export const UserContext = createContext(
    {
        userInfo: {
            step: 0,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: ''
        },
        setUserInfo: (userInfo: {
            step: number,
            firstName: string,
            lastName: string,
            email: string,
            occupation: string,
            city: string,
            bio: string
        }) => { }
    })