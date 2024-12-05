import { createContext } from "react";

interface AuthContextProps {
  errorRes: any;
  userData: any;
  showLogin: () => void;
  showRegister: () => void;
  showResetPassword: () => void;
  onLogin: (data: any) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  errorRes: null,
  userData: {},
  showLogin: () => {},
  showRegister: () => {},
  showResetPassword: () => {},
  onLogin: () => {},
});
