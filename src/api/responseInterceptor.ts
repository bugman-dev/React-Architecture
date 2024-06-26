import { AxiosError, AxiosResponse } from 'axios';

enum HTTP_STATUS {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  SERVER_ERROR = 500,
  UNAUTHORIZED = 401
}

export function onResponseError(error: AxiosError): Promise<AxiosError> {
  if (error.response?.status === HTTP_STATUS.SERVER_ERROR) {
    // Redirect to error page
  } else if (error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
    // Trigger a toast
  }
  return Promise.reject(error.response);
}

export function onResponse(response: AxiosResponse) {
  if (response.status === HTTP_STATUS.SUCCESS) {
    return Promise.resolve(response.data);
  }
}
