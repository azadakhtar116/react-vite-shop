import axios from "axios"

/**
    * @function signUpService 
    * @param data
    * @description This function is used to signup the user
*/

/**
    * @function loginService
    * @param inputsValue
    * @description This function is used to signin the user
*/
export const loginService = async (inputsValue) => {
    try {
        const result = await axios.post('/auth/login', inputsValue)
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function logoutService
    * @param
    * @description This function is used to sign out the user
*/
export const logoutService = async () => {
    try {
        const result = await axios.post('/customer/auth/logout', {})
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function getProfileDetails
    * @param data
    * @description This function is used to change password for player
*/
export const getProfileDetails = async () => {
    try {
        const result = await axios.get('/academy/auth/profile')
        return result;
    } catch (error) {
        return error;
    }
}