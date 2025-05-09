import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context";

interface PrivateRouterProps {
  redirectPath?: string;
}

export const PrivateUserRouter = ({
  redirectPath = "/",
}: PrivateRouterProps) => {
  const { userData } = useContext(UserContext);
  
  if (!userData?.token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
