import { createContext } from "react";

interface NavbarContextProps {
  mdTable: boolean;
  isNav: boolean;
  showNav: () => void;
}

export const NavbarContext = createContext<NavbarContextProps>({
  mdTable: false,
  isNav: true,
  showNav: () => {},
});
