import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouterProps {
  redirectPath?: string;
}

export const PrivateRouter = ({ redirectPath = "/" }: PrivateRouterProps) => {
  const data = JSON.parse(localStorage.getItem("userData") || "{}");
  if (!data.token) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
