import axios from 'axios';
import Config from 'react-native-config';

// Axios instance
const service = axios.create({
    baseURL: Config.CMS_BASE_URL,

    // Default request header
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': Config.AWS_API_KEY,
    },
    // Request timeout
    timeout: 60 * 1000,
    withCredentials: false,
});

// Request Interceptor
service.interceptors.request.use(
    request => {
        console.log('Starting Request: ', JSON.stringify(request, null, 2));
        return request;
    },
    config => {
        return config;
    },
    err => {
        console.log('Request interceptor: ' + err);
        return Promise.reject(err.message);
    },
);

// Response Interceptor
service.interceptors.response.use(
    response => {

        console.log('Receiving Response: ', response.data);
        if (response.status) {
            return response.data;
        } else {
            return Promise.reject(
                response.data && response.data.error
                    ? response.data.error
                    : response.data && response.data.message
                        ? response.data.message
                        : 'this is error message',
            );
        }
    },
    err => {
        // Ensure failed requests throw after interception
        console.log('Response interceptor: ' + err);
        return Promise.reject(err);
    },
);
export default service;
