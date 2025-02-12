import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://qquest.azurewebsites.net/api',
    timeout: 10000,
    headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        "withCredentials": true,
        credentials: "include"
    },
});

export const axiosInstanceJSON = axios.create({
    baseURL: 'https://qquest.azurewebsites.net/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "withCredentials": true,
        credentials: "include"
    },
});
