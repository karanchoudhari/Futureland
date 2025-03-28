import axios from 'axios';

// Base URL dynamically set hota hai environment variables se
const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3002/api'
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://13.126.84.252:80/api'
  , // Environment variable
  timeout: 5000, // Optional: Timeout 5 seconds
  headers: {
    'Content-Type': 'application/json', // Optional:  
    'x-auth-token':localStorage.getItem('token')
  },
});

export default axiosInstance;