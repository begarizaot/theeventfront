import "./styles.css";
import { useHeader } from "./useHeader";

import { NavsDrawer } from "../../drawer";
import { LogoLinkComp } from "../../../../../ui/components";

export const HeaderComp = () => {
  const { onShownNavsDrawer, showNavsDrawer, navs } = useHeader();

  return (
    <>
      <NavsDrawer
        navs={navs}
        visible={showNavsDrawer}
        onClose={() => onShownNavsDrawer(false)}
      />
      <header className="bgNav h-14 sm:h-16 fixed w-full z-20 text-white ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 px-10 max-w-[80rem] mx-auto h-full items-center pb-2">
          {/* logo */}
          <div className="col-span-1">
            <LogoLinkComp onClick={() => onShownNavsDrawer(false)} />
          </div>
          {/* navs and icon */}
          <div className="hidden lg:flex justify-end gap-6 sm:col-span-3 lg:col-span-5">
            {navs.map((res, index) => {
              return (
                <p className="cursor-pointer" key={index}>
                  {res.label}
                </p>
              );
            })}
          </div>
          <div className="flex lg:hidden justify-end gap-6 text-xl sm:col-span-3 lg:col-span-5">
            <span className="pi pi-search cursor-pointer"></span>
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
