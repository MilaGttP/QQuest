import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://qquest.azurewebsites.net/api',
    timeout: 10000,
    headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        "withCredentials": true,
    },
});

export default axiosInstance;
