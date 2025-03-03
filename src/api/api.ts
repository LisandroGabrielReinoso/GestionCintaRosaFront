import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'http://localhost:5220/api',
        withCredentials:true,
        timeout:5000,
        headers:{
            'Content-Type':'application/json',
        }
    });

export default api;