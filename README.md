# Basic React Architecture

### Table of Contents
- [Basic React Architecture](#basic-react-architecture)
    - [Table of Contents](#table-of-contents)
    - [After cloning the repo](#after-cloning-the-repo)
    - [Routing Documentation](#routing-documentation)
      - [Files Structure](#files-structure)
      - [Routing Configuration](#routing-configuration)
      - [Usage](#usage)

### After cloning the repo
1. Change title and meta tags in `index.html` file

### Routing Documentation 

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