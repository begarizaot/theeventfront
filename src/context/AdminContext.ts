import { createContext } from "react";

interface AuthContextProps {
  adminDate: any;
  loadingAdmin?: boolean;
}

export const AdminContext = createContext<AuthContextProps>({
  adminDate: null,
});
