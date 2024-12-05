import { useEffect, useRef, useState } from "react";
import { AuthContext } from ".";
import { LoginSidebar, RegisterSidebar, ResetPasswordSidebar } from "../../ui";

import { Toast } from "primereact/toast";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const errorRes = useRef<any>(null);

  const [userData, setUserData] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isResetPassword, setisResetPassword] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

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
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const hideAll = () => {
    setIsLogin(false);
    setIsRegister(false);
    setisResetPassword(false);
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        errorRes,
        showLogin,
        showRegister,
        showResetPassword,
        onLogin,
      }}
    >
      <Toast ref={errorRes} />
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
