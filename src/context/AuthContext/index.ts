import { createContext } from "react";

interface AuthContextProps {
  userData: any;
  showLogin: () => void;
  showRegister: () => void;
  showResetPassword: () => void;
  onLogin: (data: any) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  userData: {},
  showLogin: () => {},
  showRegister: () => {},
  showResetPassword: () => {},
  onLogin: () => {},
});
