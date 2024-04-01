import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { routingConfig } from './config/router.config';
import { Suspense } from 'react';
import { RequireAuth } from './authRedirect';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routingConfig.public.map((publicRoute) => {
        const Component = publicRoute.element;
        return (
          <Route
            key={publicRoute.path}
            path={publicRoute.path}
            element={
              //Error Boundary
              <Suspense fallback={<>Loading ...</>}>
                {/* {Theming} */}
                <Component />
              </Suspense>
            }
          />
        );
      })}
      {routingConfig.private.map((privateRoute) => {
        const Component = privateRoute.element;
        return (
          <Route
            key={privateRoute.path}
            path={privateRoute.path}
            element={
              //Error Boundary
              <RequireAuth>
                <Suspense fallback={<>Loading ...</>}>
                  {/* {Theming} */}
                  <Component />
                </Suspense>
              </RequireAuth>
            }
          />
        );
      })}
    </>
  )
);
