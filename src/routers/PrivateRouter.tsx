import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context";

interface PrivateRouterProps {
  redirectPath?: string;
}

export const PrivateRouter = ({ redirectPath = "/" }: PrivateRouterProps) => {
  const { userData } = useContext(AuthContext);
  if (!userData.token) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
