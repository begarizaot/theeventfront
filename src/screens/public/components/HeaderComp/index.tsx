import { Avatar } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { theme } from "antd";
const { useToken } = theme;

import { SearchComp } from "../";
import { useHeader } from "./useHeader";
import { LogoNavCom } from "../../../../components";
import { NavHeader } from "./Drawer";

export const HeaderComp = () => {
  const { header, userData, onOpenNav, openNav } = useHeader();
  const { token } = useToken();

  return (
    <>
      <NavHeader
        data={{ header, userData }}
        openNav={openNav}
        setOpenNav={onOpenNav}
      />
      <div className="absolute w-full z-20">
        <div className="max-w-[80rem] mx-auto grid grid-cols-2 py-3 px-4 sm:px-6">
          {/* logo and search */}
          <div className="items-center col-span-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <LogoNavCom
              navLogo={header?.logo.href}
              urlLogo={header?.logo.urlImage}
            />
            {/* search */}
            <SearchComp className="hidden lg:flex" />
          </div>
          {/* nav */}
          <div className="col-span-1 lg:hidden flex justify-end gap-6 items-center">
            <div className="bg-white/10 h-7 w-7 rounded-full cursor-pointer flex items-center justify-center">
              <span className="pi pi-search text-xs"></span>
            </div>
            <span
              className="pi pi-bars text-xl"
              onClick={() => onOpenNav(true)}
            ></span>
          </div>
          <div className="col-span-1 hidden lg:flex justify-end gap-3">
            <div className="flex items-center lg:gap-5 xl:gap-8">
              {header?.navItems.map((nav) => (
                <Link
                  key={nav.id}
                  to={nav.href}
                  className="text-white uppercase text-sm"
                >
                  {nav.label}
                </Link>
              ))}
              {!userData?.id && (
                <Link
                  to={`/auth/login`}
                  className="text-white uppercase text-sm"
                >
                  Login
                </Link>
              )}
              {userData?.isOrganizer && (
                <Link
                  to={"/createEvent"}
                  className="text-black uppercase text-sm bg-white px-3 py-1 rounded-full"
                >
                  Create Event
                </Link>
              )}
            </div>
            {userData?.id && (
              <Link
                to={"/profile"}
                className="flex items-center gap-1  px-2 py-1 rounded-full cursor-pointer"
                style={{ backgroundColor: token.colorPrimary }}
              >
                <Avatar
                  icon={<span className="pi pi-user"></span>}
                  className="bg-white! text-black!"
                  size="small"
                />
                <h1 className="font-bold uppercase text-xs">
                  {userData.firstName} {userData.lastName}
                </h1>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
