import { useEffect, useState } from "react";
import { NavsDrawerProps } from "./type";

export const useHeader = () => {
  const [showNavsDrawer, setShowNavsDrawer] = useState(false);
  const [navs, setNavs] = useState<NavsDrawerProps[]>([]);

  useEffect(() => {
    fetchNavs();
  }, []);

  const fetchNavs = async () => {
    const classNavs =
      "text-center border-white font-bold text-sm sm:text-base cursor-pointer";
    const classAdd = "border-b-[0.5px] py-3";
    setNavs([
      { label: "Profile", class: `${classNavs} ${classAdd}` },
      { label: "My Tickets", class: `${classNavs} ${classAdd}` },
      { label: "My Event Manager", class: `${classNavs} ${classAdd}` },
      { label: "Sign Out", class: `${classNavs} py-3 mt-auto` },
    ]);
  };

  const onShownNavsDrawer = (status: any) => {
    setShowNavsDrawer(status);
  };

  return { navs, showNavsDrawer, onShownNavsDrawer };
};
