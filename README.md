# React + TypeScript + Vite

### API Module Documentation
The API module provides a convenient interface for making HTTP requests within a React application using Axios. It encapsulates common HTTP methods like GET, POST, PUT, and DELETE, along with request and response interceptors for handling headers, errors, and responses. This documentation aims to provide an overview of the module's functionality, usage, and configuration.

#### Files:
1. `api.ts`: Contains the Axios instance creation and exports functions for making HTTP requests.
2. `requestInterceptor.ts`: Defines request interceptors for modifying request configurations before they are sent.
3. `responseInterceptor.ts`: Defines response interceptors for handling responses and errors.

#### Usage:
To use the API module in your React application, follow these steps:

1. Import the desired functions from `api.ts` into your component.
2. Use the imported functions to make HTTP requests.
Example:
```jsx
import { getData, postData } from './api/api';

// Make a GET request
getData('/users')
    .then(response => {
        // Handle successful response
    })
    .catch(error => {
        // Handle error
    });

// Make a POST request
const payload = { name: 'John Doe', email: 'john@example.com' };
postData('/users', payload)
    .then(response => {
        // Handle successful response
    })
    .catch(error => {
        // Handle error
    });
```

#### Request Interceptors:
The `requestInterceptor.ts` file defines two interceptors:
1. `onRequest`: Modifies request configurations before sending, such as adding headers.
2. `onRequestError`: Handles errors that occur during request interception.

To customize request behavior, modify the `onRequest` function according to your requirements.

#### Response Interceptors:
The `responseInterceptor.ts` file defines two interceptors:
1. `onResponse`: Handles successful responses by resolving the data.
2. `onResponseError`: Handles errors that occur during response processing, such as HTTP errors.

Customize the `onResponseError` function to handle specific HTTP error statuses, such as redirecting to an error page or displaying a toast notification.

#### Configuration:
- Base URL: The base URL for API requests can be configured in `api.ts` by setting the `baseURL` property in the Axios instance creation.
- Timeout: The timeout for API requests is set to 120 seconds by default but can be adjusted in `api.ts`.

**Note:** Ensure to configure environment-specific variables such as the base URL appropriately, possibly using environment variables or configuration files.
