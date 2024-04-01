import { useLocation, Navigate } from "react-router-dom";
import { AuthKey, routingConfig } from "./config/router.config";
import { getToken } from "../core/utils/localStorage";

export function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation();

  if (!getToken(AuthKey)) {
    return (
      <Navigate
        to={routingConfig.defaultRedirect}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}
