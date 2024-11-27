import { useEffect, useState } from "react";
import { NavbarContext } from ".";
import { useMediaQuery } from "../../../../hooks";

interface NavbarProviderProps {
  children: React.ReactNode;
}

export const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const md = useMediaQuery("(max-width: 991px)");
  const [isNav, setIsNav] = useState(true);

  useEffect(() => {
    if (md) {
      setIsNav(false);
      return;
    }
    setIsNav(true);
  }, [md]);

  const showNav = () => {
    setIsNav(!isNav);
  };

  return (
    <NavbarContext.Provider value={{ showNav, isNav, mdTable:md }}>
      {children}
    </NavbarContext.Provider>
  );
};
