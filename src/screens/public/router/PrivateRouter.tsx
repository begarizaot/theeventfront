import { useContext } from "react";
import { Navigate, Routes } from "react-router-dom";

import { AuthContext } from "../../../context";

interface PrivateRouterProps {
  children: React.ReactNode;
}

export const PrivateRouter = ({ children }: PrivateRouterProps) => {
  const { userData } = useContext(AuthContext);
//   return <Routes>{children}</Routes>;

  return userData.token ? <Routes>{children}</Routes> : <Navigate to="/" />;
};
