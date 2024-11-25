import { useState } from "react";
import { AuthContext } from ".";
import { LoginSidebar, RegisterSidebar, ResetPasswordSidebar } from "../../ui";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userData, setUserData] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isResetPassword, setisResetPassword] = useState(false);

  const showLogin = () => {
    hideAll();
    setIsLogin(!isLogin);
  };

  const showRegister = () => {
    hideAll();
    setIsRegister(!isRegister);
  };

  const showResetPassword = () => {
    hideAll();
    setisResetPassword(!isResetPassword);
  };

  const onLogin = (data: any) => {
    setUserData(data);
  };

  const hideAll = () => {
    setIsLogin(false);
    setIsRegister(false);
    setisResetPassword(false);
  };

  return (
    <AuthContext.Provider
      value={{ userData, showLogin, showRegister, showResetPassword, onLogin }}
    >
      <LoginSidebar visible={isLogin} showVisible={showLogin} />
      <RegisterSidebar visible={isRegister} showVisible={showRegister} />
      <ResetPasswordSidebar
        visible={isResetPassword}
        showVisible={showResetPassword}
      />
      {children}
    </AuthContext.Provider>
  );
};
