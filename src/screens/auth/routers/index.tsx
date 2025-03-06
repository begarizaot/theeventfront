import { Route, Routes } from "react-router-dom";
import { LoginPages, RegisterPage } from "../pages";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPages />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
};
