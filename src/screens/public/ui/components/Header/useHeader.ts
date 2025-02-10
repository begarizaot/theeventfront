import { useContext, useEffect, useState } from "react";

import { SearchContext } from "../../../context/Search";
import { AuthContext } from "../../../../../context";

import { NavsDrawerProps } from "../../types";

export const useHeader = () => {
  const { openSearch } = useContext(SearchContext);
  const { onShowLogin } = useContext(AuthContext);

  const [showNavsDrawer, setShowNavsDrawer] = useState(false);
  const [navs, setNavs] = useState<NavsDrawerProps[]>([]);

  useEffect(() => {
    fetchNavs();
  }, []);

  const fetchNavs = async () => {
    const classNavs =
      "text-center border-white font-bold text-sm sm:text-base cursor-pointer";
    const classAdd = "border-b-[0.5px] lg:border-0 py-3";
    // setNavs([
    //   {
    //     label: "Profile",
    //     class: `${classNavs} ${classAdd}`,
    //     to: "/profile",
    //     onClick: () => onShownNavsDrawer(false),
    //   },
    //   {
    //     label: "My Tickets",
    //     class: `${classNavs} ${classAdd}`,
    //     to: "/my_tickets",
    //     onClick: () => onShownNavsDrawer(false),
    //   },
    //   {
    //     label: "My Event Manager",
    //     class: `${classNavs} ${classAdd}`,
    //     to: "/my_event_manager",
    //     onClick: () => onShownNavsDrawer(false),
    //   },
    //   {
    //     label: "Sign Out",
    //     class: `${classNavs} py-3 mt-auto`,
    //     onClick: () => {
    //       console.log("Sign Out");
    //       onShownNavsDrawer(false)
    //     },
    //   },
    // ]);

    setNavs([
      {
        label: "Sign In",
        class: `${classNavs} ${classAdd}`,
        onClick: () => {
          onShowLogin(true);
          onHiddenNavsDrawer();
        },
      },
      {
        label: "Register",
        class: `${classNavs} ${classAdd}`,
        onClick: () => console.log("Register"),
      },
      {
        label: "All Events",
        class: `${classNavs} ${classAdd}`,
        onClick: () => console.log("All Events"),
      },
    ]);
  };

  const onHiddenNavsDrawer = () => {
    setShowNavsDrawer(false);
  };

  const onShownNavsDrawer = (status: any) => {
    setShowNavsDrawer(status);
  };

  return { navs, showNavsDrawer, onShownNavsDrawer, openSearch };
};
