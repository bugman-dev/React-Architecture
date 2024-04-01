import { useLocation, Navigate } from "react-router-dom";
import { AuthKey, routingConfig } from "./config/router.config";
// import { getCookie } from "../core/utils/cookie";

export function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation();

//   if (!getCookie(AuthKey)) {
//     return (
//       <Navigate
//         to={routingConfig.defaultRedirect}
//         state={{ from: location }}
//         replace
//       />
//     );
//   }

  return children;
}