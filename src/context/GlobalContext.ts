import { createContext } from "react";
import { GlobalData } from "../interfaces/GlobalInterface";

interface GlobalContextProps {
  globalDate: GlobalData | null;
  loading: boolean;
}
export const GlobalContext = createContext<GlobalContextProps>({
  globalDate: null,
  loading: false,
});
