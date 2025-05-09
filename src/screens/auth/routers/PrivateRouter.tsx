import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../../context";

interface PrivateRouterProps {
  redirectPath?: string;
}

export const PrivateLoginRouter = ({
  redirectPath = "/",
}: PrivateRouterProps) => {
  const { infoDate } = useContext(AuthContext);
  
  if (!infoDate?.type) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
