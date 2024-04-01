import { AxiosError, AxiosRequestConfig, AxiosRequestHeaders, InternalAxiosRequestConfig } from 'axios';
// import { AuthKey } from '../appRouting/config/routing.config';
// import {getToken} from '../core/utils/localStoraje.ts'

export const onRequest = (config: AxiosRequestConfig) => {
    const token = ''// const token = getToken(AuthKey); 

    // Modify headers based on application requirement.
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    config.headers = {
        'Content-type': 'application/json',
        ...config.headers,
        ...headers,
    };
    return config;
};

export const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);