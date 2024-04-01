# Basic React Architecture

### Table of Contents
- [Basic React Architecture](#basic-react-architecture)
    - [Table of Contents](#table-of-contents)
    - [After cloning the repo](#after-cloning-the-repo)
    - [Routing](#routing)
      - [Files Structure](#files-structure)
      - [Routing Configuration](#routing-configuration)
      - [Usage](#usage)
    - [API Module](#api-module)
      - [Files](#files)
      - [Usage](#usage-1)
      - [Request Interceptors:](#request-interceptors)
      - [Response Interceptors:](#response-interceptors)
      - [Configuration:](#configuration)
    - [Linting And Formatting](#linting-and-formatting)
      - [Enabling 'Format on Save'](#enabling-format-on-save)
      - [Rules](#rules)

### After cloning the repo
1. Change `title` and `meta` tags in `index.html` file

### Routing 

Here is an outline of the routing structure implemented in the React application. The routing is managed using the `react-router-dom (6.22.3*)` library, providing navigation functionality within the application.

#### Files Structure
1. **appRouting/routing.tsx**: Defines the routing configuration for the application, including public and private routes.
2. **approuting/authRedirect.tsx**: Implements the logic for redirecting users based on authentication status.
3. **appRouting/config/router.config.tsx**: Configures the routing settings, including private routes, public routes, and default redirection.
4. **appRouting/config/private.routing.ts**: Defines the private routes available in the application.
5. **appRouting/config/public.routing.ts**: Defines the public routes available in the application.
6. **src/App.tsx**: Integrates the routing provider with the React application.

#### Routing Configuration 
The routing configuration is modularized to keep the code organized and maintainable. Here's an overview of each file's role in the routing setup:

1. **routing.tsx**:
   - Imports necessary functions and components from `react-router-dom`.
   - Defines the router using `createBrowserRouter` from `react-router-dom`.
   - Maps over the public and private routes defined in `router.config.tsx` to create Route components.
   - Utilizes `Suspense` to handle lazy loading of components and a custom `RequireAuth` component for authentication checks.

2. **authRedirect.tsx**:
   - Implements a function `RequireAuth` that checks the user's authentication status.
   - If the user is not authenticated, redirects to the default route defined in `router.config.tsx`.

3. **router.config.tsx**:
   - Configures the routing settings such as private routes, public routes, and default redirection.
   - Defines an authentication key for checking the user's authentication status.

4. **private.routing.ts**:
   - Lists all private components and routes available in the application.
   - New private pages can be appended to the array to extend the application's functionality.

5. **public.routing.ts**:
   - Lists all public components and routes available in the application.
   - New public pages can be appended to the array to extend the application's functionality.

6. **App.tsx**:
   - Integrates the routing provider with the React application by wrapping the application with `RouterProvider`.

#### Usage
To use the routing functionality in your React application:
1. Define public and private routes in `private.routing.ts` and `public.routing.ts` respectively.
2. Configure routing settings in `router.config.tsx` as per your application requirements.
3. Integrate the routing provider in your `App.tsx` file using `RouterProvider` and pass the router configuration.

```jsx
import { RouterProvider } from "react-router-dom";
import { router } from "./appRouting/routing";

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
```
### API Module
The API module provides a convenient interface for making HTTP requests within a React application using Axios. It encapsulates common HTTP methods like GET, POST, PUT, and DELETE, along with request and response interceptors for handling headers, errors, and responses. This documentation aims to provide an overview of the module's functionality, usage, and configuration.

#### Files
1. `api.ts`: Contains the Axios instance creation and exports functions for making HTTP requests.
2. `requestInterceptor.ts`: Defines request interceptors for modifying request configurations before they are sent.
3. `responseInterceptor.ts`: Defines response interceptors for handling responses and errors.

#### Usage
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

### Linting And Formatting

The architecture utilizes ESLint and Prettier to enforce coding standards, detect syntax errors, and maintain code consistency. For detailed setup instructions, please refer to our Medium post [here](https://medium.com/globant/improving-code-quality-in-react-with-eslint-prettier-and-typescript-86635033d803).

#### Enabling 'Format on Save'

To enable automatic formatting on saving files, set `editor.formatOnSave` to `true` in the `settings.json` file located within the `.vscode` directory.

#### Rules

Prettier Rules (located in `.prettierrc.json` file):
1. `trailingComma: "none"`: This rule specifies whether or not to add trailing commas in multi-line object literals, arrays, and function parameters. In this configuration, the rule is set to "none", meaning no trailing commas will be added.
2. `tabWidth: 2`: This rule defines the number of spaces each tab represents in the code. In this configuration, the tab width is set to 2 spaces.
3. `semi: true`: This rule determines whether or not to add semicolons at the end of statements. In this configuration, the rule is set to true, meaning semicolons will be added.
4. `singleQuote: true`: This rule specifies whether to use single quotes or double quotes for string literals. In this configuration, the rule is set to true, indicating the usage of single quotes.

ESLint Rules (located in `.eslintrc.json` file):
1. `"no-use-before-define": "off"`: This rule is turned off, allowing the use of variables before they are declared. However, the TypeScript version of this rule ("@typescript-eslint/no-use-before-define") is set to "error", enforcing that variables must be declared before they are used.
2. `"react/jsx-filename-extension": [ "warn", { "extensions": [ ".tsx" ] } ]`: This rule issues a warning if JSX is used in files with extensions other than .tsx. It helps maintain consistency by encouraging the use of .tsx files for React components.
3. `"import/extensions": [ "error", "ignorePackages", { "ts": "never", "tsx": "never" } ]`: This rule ensures that file extensions are explicitly specified in import statements. For TypeScript files (ts and tsx), the extensions are set to "never", meaning they should not be included in import paths.
4. `"no-shadow": "off"`: This rule is turned off, allowing variables to be re-declared in inner scopes without raising an error. However, the TypeScript version ("@typescript-eslint/no-shadow") is set to "error", enforcing that variables are not shadowed within the same scope.
5. `"@typescript-eslint/explicit-function-return-type": [ "error", { "allowExpressions": true } ]`: This rule requires explicit return types for functions in TypeScript, allowing expressions to be exempted. It promotes code clarity and type safety by explicitly specifying function return types.
6. `"max-len": [ "warn", { "code": 100, "ignoreComments": true, "ignoreUrls": true } ]`: This rule warns when lines exceed a maximum length of 100 characters, ignoring comments and URLs. It encourages code readability and prevents excessively long lines.
7. `"react-hooks/rules-of-hooks": "error"`: This rule enforces the correct usage of React hooks, ensuring that they are called only in function components or custom hooks and not conditionally or nested within other functions.
8. `"react-hooks/exhaustive-deps": "warn"`: This rule warns if dependencies are not specified exhaustively in the useEffect or useLayoutEffect hook. It ensures that all variables referenced inside the hook's callback are included in the dependency array.
9. `"import/prefer-default-export": "off"`: This rule is turned off, allowing named exports to be used instead of a default export. It provides flexibility in module export patterns.
10. `"react/prop-types": "off"`: This rule is turned off, disabling the requirement to define prop types for React components. It's useful when using TypeScript for type checking instead.
11. `"prettier/prettier": [ "error", { "endOfLine": "auto" } ]`: This rule enforces Prettier's formatting rules within ESLint, ensuring consistent code style across the project. The endOfLine option is set to "auto" to maintain consistent line endings.

