
import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorage } from "../hooks";

interface PrivateRouterProps {
  redirectPath?: string;
}

export const PrivateUserRouter = ({
  redirectPath = "/",
}: PrivateRouterProps) => {
  const data = getLocalStorage("userData");
  
  if (!data?.token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
