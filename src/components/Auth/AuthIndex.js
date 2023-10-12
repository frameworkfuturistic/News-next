import React from 'react'
import { decryptData } from './EncryptDecrypt';
const AuthIndex = () => {

    const secretKey = 'mysecretkey';

    const userData = window.localStorage.getItem("userData")
    const data = JSON.parse(userData)

    const header = {
        headers:
        {
            Authorization: `Bearer ${data?.token}`,
            Accept: 'application/json',
        }
    }

    console.log(header)
    console.log(data)

    // let data;
    // if (userData) {
    //     try {
    //         const encryptedData = JSON.parse(userData || ''); // Provide a default empty string if userData is null
    //         data = decryptData(encryptedData, secretKey)
    //     } catch (error) {
    //         console.log("Catch Error in encryptedData", error)
    //     }
    // }

    let type = null;
    switch (data?.type) {
        case 0:
            type = "user"
            break;
        case 9:
            type = "admin"
            break;

        default:
            break;
    }

    const myData = {
        firstName: data?.firstName,
        lastName: data?.lastName,
        userEmail: data?.userEmail,
        token: data?.token,
        isLoggedIn: true,
        userIs: type,
        userImg: data?.userImg,
        header: header
    }

    return myData;
}

export default AuthIndex