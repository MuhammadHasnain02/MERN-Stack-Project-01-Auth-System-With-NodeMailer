import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Backend base URL
  withCredentials: true, // Send cookies if any
});

// Request interceptor to add the Access Token to headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
