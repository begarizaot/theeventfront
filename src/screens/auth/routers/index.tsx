import { Route, Routes } from "react-router-dom";
import { LoginPages, OtpPages, RegisterPage } from "../pages";
import { PrivateLoginRouter } from "./PrivateRouter";
import { AuthProvider } from "../../../provider";

export const AuthRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<LoginPages />} />
        <Route path="register" element={<RegisterPage />} />
        <Route element={<PrivateLoginRouter redirectPath="/auth/login" />}>
          <Route path="otp" element={<OtpPages />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
