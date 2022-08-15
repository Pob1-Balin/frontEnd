import axios from "axios";
import { API } from "../../config";

const API_URL = 'http://localhost:7000/api/v1/users/'


// Register
const register = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}
// GetUser
const getUser = async (token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      const response = await axios.get(API_URL+'me', config)
      return response.data
}

// Password reset request
const resetPassword = async (userData) => {
    const response = await axios.post('http://localhost:7000/api/v1/users/request-mail', userData).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}


const authService = {
    register,
    logout,
    login,
    getUser,
    resetPassword,
}

export default authService