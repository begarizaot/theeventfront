import "./styles.scss";
import { useContext, useState } from "react";

import { Nav } from "../NavBar";
import { NavBarSidebar } from "../../sidebar";
import { SearchContext } from "../../../context";
import { LogoLink } from "../../../../../ui";
import { useLocation } from "react-router-dom";

export const Header = () => {
  let { pathname } = useLocation();

  const { showModal } = useContext(SearchContext);

  const [isModalNav, setIsModalNav] = useState(false);

  return (
    <>
      <NavBarSidebar
        visible={isModalNav}
        showVisible={() => setIsModalNav(false)}
      />
      <div className="contHeader h-5rem pt-2 fixed z-2 top-0 w-full left-0 ">
        <div className="flex max-width-80 mx-auto px-4 sm:px-6 pt-1">
          <div className="col-2 lg:hidden">
            <span
              className="pi pi-bars text-white text-xl"
              onClick={() => setIsModalNav(true)}
            ></span>
          </div>
          <div className="col-8 text-center flex align-items-center lg:text-left lg:col-5">
            <LogoLink
              classLink="flex justify-content-center mr-auto lg:justify-content-start"
              className={`w-10 sm:w-6 ${pathname != "/" ? "lg:w-8" : "lg:w-5"}`}
            />
            <div className="hidden lg:block">
              {pathname != "/" && (
                <div
                  className="bg-white-alpha-30 w-12rem py-1 px-2 text-center border-round text-white cursor-pointer text-sm"
                  onClick={showModal}
                >
                  <span className="pi pi-search text-xs mr-2"></span>
                  <span>Search Event</span>
                </div>
              )}
            </div>
          </div>
          <div className="col-2 lg:col-7">
            <div className="hidden lg:flex justify-content-end gap-4">
              <Nav onCLick={() => setIsModalNav(false)} />
            </div>
            <div className="text-right lg:hidden">
              <span
                className="pi pi-search text-white text-xl "
                onClick={showModal}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
