import { AxiosError, AxiosRequestConfig } from 'axios';
import { AuthKey } from '../appRouting/config/router.config.ts';
import { getToken } from '../core/utils/localStorage.ts';

export const onRequest = (config: AxiosRequestConfig) => {
  const token = getToken(AuthKey);

  // Modify headers based on application requirement.
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  config.headers = {
    'Content-type': 'application/json',
    ...config.headers,
    ...headers
  };
  return config;
};

export const onRequestError = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);
