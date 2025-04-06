import { Avatar } from "antd";
import { Link } from "react-router-dom";

import { SearchComp } from "../";
import { LogoNavCom } from "../../../../ui/components";
import { useHeader } from "./useHeader";

export const HeaderComp = () => {
  const { navs } = useHeader();

  return (
    <div className="absolute w-full z-20">
      <div className="max-w-[80rem] mx-auto grid grid-cols-2 py-3 px-4 sm:px-6">
        {/* logo and search */}
        <div className="items-center col-span-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <LogoNavCom />
          {/* search */}
          <SearchComp className="hidden lg:flex" />
        </div>
        {/* nav */}
        <div className="col-span-1 lg:hidden flex justify-end gap-6 items-center">
          <div className="bg-white/10 h-7 w-7 rounded-full cursor-pointer flex items-center justify-center">
            <span className="pi pi-search text-xs"></span>
          </div>
          <span className="pi pi-bars text-xl"></span>
        </div>
        <div className="col-span-1 hidden lg:flex justify-end gap-3">
          <div className="flex items-center lg:gap-5 xl:gap-8">
            {navs.map((nav) => (
              <Link
                key={nav.title}
                to={nav.link}
                className="text-white uppercase text-sm"
              >
                {nav.title}
              </Link>
            ))}
          </div>
          <Link
            to={"/profile"}
            className="flex items-center gap-1 bgPrimary px-2 py-1 rounded-full cursor-pointer"
          >
            <Avatar
              icon={<span className="pi pi-user"></span>}
              className="bg-white! text-black!"
              size="small"
            />
            <h1 className="font-bold uppercase text-xs">David Jones</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
