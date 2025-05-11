import axios from "axios"

/**
    * @function signUpService 
    * @param data
    * @description This function is used to signup the user
*/
export const signUpService = async (data) => {
    try {
        const result = await axios.post('/customer/sign-up', data)
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function signUpOtpVerifyService
    * @param { otp, phone }
    * @description This function is used to verify otp while signup
*/
export const signUpOtpVerifyService = async ({ otp, phone }) => {
    try {
        const result = await axios.post('/customer/sign-up/otp-verify', {
            otp,
            phone
        })
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function loginService
    * @param { phone, password }
    * @description This function is used to signin the user
*/
export const loginService = async ({ phone, password }) => {
    try {
        const result = await axios.post('/customer/login', {
            phone,
            password
        })
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function loginOtpVerifyService
    * @param { otp, phone }
    * @description This function is used to verify otp while signin
*/
export const loginOtpVerifyService = async ({ otp, phone }) => {
    try {
        const result = await axios.post('/customer/login/otp-verify', {
            otp,
            phone
        })
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function academyLoginService
    * @param { phone, password }
    * @description This function is used to signin the organizer
*/
export const academyLoginService = async ({ phone, password }) => {
    try {
        const result = await axios.post('/academy/login', {
            phone,
            password
        })
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
    * @function coachLoginService
    * @param { phone, password }
    * @description This function is used to signin the organizer
*/
export const coachLoginService = async ({ phone, password }) => {
    try {
        const result = await axios.post('/coach/login', {
            phone,
            password
        })
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function academyLogoutService 
    * @param
    * @description This function is used to sign out the organizer
*/
export const academyLogoutService = async () => {
    try {
        const result = await axios.post('/academy/auth/logout', {})
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function coachLogoutService 
    * @param
    * @description This function is used to sign out the organizer
*/
export const coachLogoutService = async () => {
    try {
        const result = await axios.post('/coach/auth/logout', {})
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function forgetPasswordService
    * @param { phone }
    * @description This function is used to send OTP to user phone for reset forget-password
*/
export const forgetPasswordService = async ({ phone }) => {
    try {
        const result = await axios.post('/customer/forgot-password', {
            phone
        })
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function forgetPasswordOtpVerifyService
    * @param { otp, phone }
    * @description This function is used to verify otp while resetting password
*/
export const forgetPasswordOtpVerifyService = async ({ otp, phone }) => {
    try {
        const result = await axios.post('/customer/forgot-password/otp-verify', {
            otp,
            phone
        })
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function resetPasswordService 
    * @param data
    * @description This function is used to reset password
*/
export const resetPasswordService = async (data) => {
    try {
        const result = await axios.post('/customer/reset-password', data)
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function resendOtpService
    * @param { phone }
    * @description This function is used to resend OTP
*/
export const resendOtpService = async ({ phone }) => {
    try {
        const result = await axios.post('/customer/resend-otp', {
            phone
        })
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function getCustomerProfileDetails
    * @param data
    * @description This function is used to change password for player
*/
export const getCustomerProfileDetails = async () => {
    try {
        const result = await axios.get('/customer/auth/profile')
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function getCoachProfileDetails
    * @param data
    * @description This function is used to change password for player
*/
export const getCoachProfileDetails = async () => {
    try {
        const result = await axios.get('/coach/auth/profile')
        return result;
    } catch (error) {
        return error;
    }
}

/**
    * @function getAcademyProfileDetails
    * @param data
    * @description This function is used to change password for player
*/
export const getAcademyProfileDetails = async () => {
    try {
        const result = await axios.get('/academy/auth/profile')
        return result;
    } catch (error) {
        return error;
    }
}