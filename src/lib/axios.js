import axios from 'axios';

// const baseURL = import.meta.env.MODE == 'development' ? 'http://localhost:8080/api' : '/api'
const axiosInstance = axios.create({
  baseURL: 'https://chatty-backend-1pxd.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // This allows cookies to be sent with requests
})

export default axiosInstance;