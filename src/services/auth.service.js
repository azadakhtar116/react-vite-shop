import axios from 'axios'

const baseUrl = import.meta.env.base_url // process.env.baseUrl

export const loginService1 = ({ token }, inputValue) => axios.post(
  `${baseUrl}/auth/login`, inputValue,
  {
    headers: {
      Authorization: `Bearer ${token}`,
     // Accept: 'multipart/form-data'
      Accept: 'application/json'
    }
  }
)

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

// &page=${1}&perPage=${countPerPage}
// export const userListService = ({ countPerPage, page, token }) => axios.get(`${baseUrl}/admin/customer/list?paginate=1&page=${page}&perPage=${countPerPage}`, {
//   headers: {
//     Authorization: `Bearer ${token}`,
//     Accept: 'application/json'
//   }
// }) 

// export const getSingleDataService = ({ id, token }) => axios.get(`${baseUrl}/admin/customer/single/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       Accept: 'application/json',
//     },
//   });

// export const userSearchListService = ({ searchValue, countPerPage, page, token }) => axios.get(`${baseUrl}/admin/customer/list?page=${1}&limit=${countPerPage}&search=${searchValue}`, {
//   headers: {
//     Authorization: `Bearer ${token}`,
//     Accept: 'application/json'
//   }
// })

// export const exportListService = ({ token, startDate, endDate }) => axios.get(`${baseUrl}/admin/users/list?startDate=${startDate}&endDate=${endDate}`, {
//   headers: {
//     Authorization: `Bearer ${token}`,
//     Accept: 'application/json'
//   }
// })

// export const addUserService = ({ token }, formData) => axios.post(
//   `${baseUrl}/admin/customer/store`, formData,
//   {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       Accept: 'multipart/form-data'
//       // 'application/json',
//     }
//   }
// )

// export const userStatusChange = ({ id, token }, formData) => axios.post(
//   `${baseUrl}/admin/customer/status/${id}`, formData,
//   { 
//     headers: {
//       Authorization: `Bearer ${token}`,
//       Accept: 'application/json'
//     }
//   }
// )

// export const userUpdateData = (
//   { token },
//   formData
//   // const id = formData.get('id')
// ) => axios.post(
//   `${baseUrl}/admin/customer/update/${formData.get('id')}`,
//   formData,
//   {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       Accept: 'multipart/form-data',
//       "Content-Type": "multipart/form-data"
//     }
//   }
// )

// export const userDelete = ({ id, token }) => axios.delete(
//     `${baseUrl}/admin/customer/delete/${id}`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         Accept: 'application/json'
//       }
//     }
//   )


// export const FileUploadService = (data, id, token) => axios.post(`${baseUrl}/healthTips/manage/file?id=${id}`, data, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       Accept: 'application/json'
//     }
//   })