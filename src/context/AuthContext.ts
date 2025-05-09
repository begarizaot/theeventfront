import { createContext } from "react";

interface AuthContextProps {
  infoDate: any;
  onValueInfo: (value: any) => void;
  onLoading: (value: boolean) => void;
  onError: (value: string) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  onValueInfo: () => {},
  onLoading: () => {},
  onError: () => {},
  infoDate: "",
});
