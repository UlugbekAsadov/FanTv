// lib/axios.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Example base URL from environment variables
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optionally, you can add a response interceptor for handling responses and errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
