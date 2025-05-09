import { createContext } from "react";

interface UserContextProps {
  userData: any;
  onValueUser: (value: any) => void;
}

export const UserContext = createContext<UserContextProps>({
  onValueUser: () => {},
  userData: "",
});
