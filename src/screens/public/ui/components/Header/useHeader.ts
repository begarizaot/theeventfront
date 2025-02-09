import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../context/Search";
import { NavsDrawerProps } from "../../types";

export const useHeader = () => {
  const { openSearch } = useContext(SearchContext);

  const [showNavsDrawer, setShowNavsDrawer] = useState(false);
  const [navs, setNavs] = useState<NavsDrawerProps[]>([]);

  useEffect(() => {
    fetchNavs();
  }, []);

  const fetchNavs = async () => {
    const classNavs =
      "text-center border-white font-bold text-sm sm:text-base cursor-pointer";
    const classAdd = "border-b-[0.5px] lg:border-0 py-3";
    setNavs([
      {
        label: "Profile",
        class: `${classNavs} ${classAdd}`,
        to: "/profile",
        onClick: () => onShownNavsDrawer(false),
      },
      {
        label: "My Tickets",
        class: `${classNavs} ${classAdd}`,
        to: "/my_tickets",
        onClick: () => onShownNavsDrawer(false),
      },
      {
        label: "My Event Manager",
        class: `${classNavs} ${classAdd}`,
        to: "/my_event_manager",
        onClick: () => onShownNavsDrawer(false),
      },
      {
        label: "Sign Out",
        class: `${classNavs} py-3 mt-auto`,
        onClick: () => {
          console.log("Sign Out");
          onShownNavsDrawer(false)
        },
      },
    ]);
  };

  const onShownNavsDrawer = (status: any) => {
    setShowNavsDrawer(status);
  };

  return { navs, showNavsDrawer, onShownNavsDrawer, openSearch };
};
