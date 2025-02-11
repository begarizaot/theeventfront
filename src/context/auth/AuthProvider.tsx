import { useState } from "react";
import { AuthContext } from ".";

import { LoginDrawer, OtpDrawer, RegisterDrawer } from "../../ui/drawer";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isOtp, setIsOtp] = useState(false);

  const onShowLogin = (status: boolean) => {
    onHiddenAll();
    setIsLogin(status);
  };

  const onShowRegister = (status: boolean) => {
    onHiddenAll();
    setIsRegister(status);
  };

  const onShowOtp = (status: boolean) => {
    onHiddenAll();
    setIsOtp(status);
  };

  const onHiddenAll = () => {
    setIsLogin(false);
    setIsRegister(false);
    setIsOtp(false);
  };

  return (
    <AuthContext.Provider value={{ onShowLogin, onShowRegister, onShowOtp }}>
      <LoginDrawer visible={isLogin} onClose={() => onShowLogin(false)} />
      <RegisterDrawer
        visible={isRegister}
        onClose={() => onShowRegister(false)}
      />
      <OtpDrawer visible={isOtp} onClose={() => onShowOtp(false)} />
      {children}
    </AuthContext.Provider>
  );
};
