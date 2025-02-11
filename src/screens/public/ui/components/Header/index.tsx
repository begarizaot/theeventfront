import "./styles.css";
import { useLocation } from "react-router-dom";

import { useHeader } from "./useHeader";
import { LinkNavs } from "../LinkNav";
import { NavsDrawer } from "../../drawer";

import { LogoLinkComp } from "../../../../../ui/components";

export const HeaderComp = () => {
  let { pathname } = useLocation();

  const { onShownNavsDrawer, openSearch, showNavsDrawer, navs } = useHeader();

  return (
    <>
      <NavsDrawer
        navs={navs}
        visible={showNavsDrawer}
        onClose={() => onShownNavsDrawer(false)}
      />
      <header className="bgNav h-14 sm:h-16 fixed w-full z-20 text-white ">
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 gap-4 px-10 max-w-[80rem] mx-auto h-full items-center pb-2">
          {/* logo */}
          <div className="col-span-3 sm:col-span-3 grid grid-cols-3 gap-4 items-center">
            <div className="col-span-2 sm:col-span-1">
              <LogoLinkComp onClick={() => onShownNavsDrawer(false)} />
            </div>
            <div className="col-span-1 hidden lg:block">
              {pathname != "/" && (
                <button
                  className="bg-white/20 py-1 px-2 w-full text-center rounded-md text-white cursor-pointer text-xs"
                  onClick={openSearch}
                >
                  <span className="pi pi-search text-xs mr-2"></span>
                  <span>Search Event</span>
                </button>
              )}
            </div>
          </div>
          {/* navs and icon */}
          <div className="hidden lg:flex justify-end gap-6 sm:col-span-3 lg:col-span-3">
            {navs.map((res, index) => {
              return <LinkNavs key={index} {...res} />;
            })}
          </div>
          <div className="flex lg:hidden justify-end gap-6 text-xl col-span-1 lg:col-span-5">
            <button
              className="pi pi-search cursor-pointer"
              onClick={openSearch}
            ></button>
            <span
              className={`pi cursor-pointer ${
                showNavsDrawer ? "pi-times rotate-90" : "pi-bars"
              } transition delay-150 duration-300 ease-in-out`}
              onClick={() => onShownNavsDrawer(!showNavsDrawer)}
            ></span>
          </div>
        </div>
      </header>
    </>
  );
};
