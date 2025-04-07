import { Link, NavLink } from "react-router-dom";

import logoImage from "../../../../assets/logoWhite.png";
import { useHeader } from "./useHeader";

interface NavAdminCompProp {
  onShowNav: () => void;
}

export const NavAdminComp = ({ onShowNav }: NavAdminCompProp) => {
  const { navs } = useHeader();

  return (
    <div className="grid pt-5 bg-nav h-screen-m sticky top-0">
      <div className="flex flex-col">
        <div className=" justify-end px-8 mb-6 flex sm:hidden">
          <span
            className="pi pi-times text-xl text-white cursor-pointer"
            onClick={onShowNav}
          ></span>
        </div>
        <Link to={""} className="px-4">
          <img src={logoImage} alt="" className="w-[90%]! ml-auto" />
        </Link>

        <div className="mt-20 pl-8">
          <div className="grid gap-3">
            {navs.map((nav) => (
              <NavLink
                to={nav.path}
                key={nav.id}
                className={({ isActive }) =>
                  ` flex items-center gap-2 py-2 pl-2 text-sm rounded-tl-2xl rounded-bl-2xl  ${
                    isActive ? "bg-white! text-black!" : "text-white/30!"
                  }`
                }
                onClick={onShowNav}
              >
                <span className={`pi ${nav.icon}`} />
                <span>{nav.name}</span>
              </NavLink>
            ))}

            <div className="border-t border-white pt-3">
              <NavLink
                to={"/admin/qrScanner/1"}
                className={({ isActive }) =>
                  ` flex items-center gap-2 py-2 pl-2 text-sm rounded-tl-2xl rounded-bl-2xl  ${
                    isActive ? "bg-white! text-black!" : "text-white/30!"
                  }`
                }
                onClick={onShowNav}
              >
                <span className={`pi pi-cog`} />
                <span>Settings</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center mt-auto mb-5 gap-2 pl-8 bg-red-700 py-3 cursor-pointer text-white"
        onClick={onShowNav}
      >
        <span className="pi pi-sign-out"></span>
        <span>Logout</span>
      </div>
    </div>
  );
};
