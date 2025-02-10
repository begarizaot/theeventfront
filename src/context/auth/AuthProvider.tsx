import { useState } from "react";
import { AuthContext } from ".";

import { LoginDrawer } from "../../ui/drawer";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogin, setIsLogin] = useState(false);

  const onShowLogin = (status: boolean) => {
    setIsLogin(status);
  };

  return (
    <AuthContext.Provider value={{ onShowLogin }}>
      <LoginDrawer visible={isLogin} onClose={() => onShowLogin(false)} />
      {children}
    </AuthContext.Provider>
  );
};
