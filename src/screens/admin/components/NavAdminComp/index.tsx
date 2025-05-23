import "./styles.scss";
import { Link, NavLink } from "react-router-dom";
import { Menu, Skeleton, theme } from "antd";
import { useContext } from "react";

import { useHeader } from "./useHeader";
import { GlobalContext } from "../../../../context";

const { useToken } = theme;

interface NavAdminCompProp {
  onShowNav: () => void;
}

export const NavAdminComp = ({ onShowNav }: NavAdminCompProp) => {
  const { token } = useToken();

  const { globalDate } = useContext(GlobalContext);
  const { adminDate, loadingAdmin } = useHeader();

  const onNavLinkClick = (nav: any) => {
    console.log(nav);
    return (
      <NavLink
        to={String(nav?.path).replace("{idEvent}", adminDate.id_event)}
        key={nav.id}
        className={({ isActive }) =>
          ` flex items-center gap-2 py-2 pl-2 text-sm rounded-tl-2xl rounded-bl-2xl  ${
            isActive ? "bg-white! text-black!" : "text-white/30!"
          }`
        }
        onClick={onShowNav}
      >
        <span className={`pi ${nav?.icon}`} />
        <span>{nav?.name}</span>
      </NavLink>
    );
  };

  return (
    <div className="grid pt-5 bg-nav h-screen-m sticky top-0 contMenuAdmin">
      <div className="flex flex-col">
        <div className=" justify-end px-8 mb-6 flex sm:hidden">
          <span
            className="pi pi-times text-xl text-white cursor-pointer"
            onClick={onShowNav}
          ></span>
        </div>
        <Link to={"/"} className="px-4">
          <img
            src={globalDate?.url_image_logo}
            alt=""
            className="w-[90%]! ml-auto"
          />
        </Link>

        <div className="mt-20 pl-8">
          <div className="grid gap-3">
            {loadingAdmin &&
              [1, 2, 3, 4, 5].map((ind: any) => (
                <div className="col-span-1 h-9!" key={ind}>
                  <Skeleton.Node
                    active
                    className="bg-white/20 w-full! rounded-tl-2xl rounded-bl-2xl h-full!"
                  />
                </div>
              ))}

            {!loadingAdmin &&
              (adminDate?.Nav ?? [])?.map((nav: any) =>
                nav?.menu?.path ? (
                  onNavLinkClick(nav?.menu)
                ) : (
                  <Menu
                    mode="inline"
                    className="menuItemAdmin"
                    items={[
                      {
                        key: nav.id,
                        label: nav?.menu?.name,
                        icon: <span className={`pi ${nav?.menu?.icon}`} />,
                        children: nav?.menuItems?.map((item: any) => ({
                          key: item.id,
                          label: onNavLinkClick(item),
                        })),
                        // [
                        //   { key: "9", label: "Option 9" },
                        //   { key: "10", label: "Option 10" },
                        //   { key: "11", label: "Option 11" },
                        //   { key: "12", label: "Option 12" },
                        // ],
                      },
                    ]}
                  />
                )
              )}

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
        className="flex items-center mt-auto mb-5 gap-2 pl-8 py-3 cursor-pointer text-white"
        onClick={onShowNav}
        style={{ backgroundColor: token.colorPrimary }}
      >
        <span className="pi pi-sign-out"></span>
        <span>Logout</span>
      </div>
    </div>
  );
};
