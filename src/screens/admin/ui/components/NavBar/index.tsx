import "./styles.scss";
import { useContext } from "react";
import { NavbarContext } from "../../../context";

import { Menu } from "primereact/menu";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const { isNav, mdTable, showNav } = useContext(NavbarContext);
  const itemRenderer = (item: any) => (
    <div className="p-menuitem-content">
      <NavLink
        to={item.link}
        className={(res) => {
          // console.log(res);
          return "flex align-items-center justify-content-between p-menuitem-link text-white";
        }}
      >
        <span className="text-sm lg:text-base">{item.label}</span>
        <span className={`bgPrimary p-2 border-circle text-sm ${item.icon}`} />
      </NavLink>
    </div>
  );
  let items = [
    {
      template: () =>
        mdTable && (
          <div className="px-3 text-right py-3" onClick={showNav}>
            <span className="pi pi-times text-white text-lg"></span>
          </div>
        ),
    },
    {
      label: "Analytics",
      template: itemRenderer,
      icon: "pi pi-chart-bar",
      link: `/admin/1/analytics`,
    },
    {
      label: "Event Details",
      template: itemRenderer,
      icon: "pi pi-eye",
      link: `/admin/1/eventDetail`,
    },
    {
      label: "Team Access",
      template: itemRenderer,
      icon: "pi pi-users",
    },
    {
      label: "Free Tickets",
      icon: "pi pi-ticket",
      template: itemRenderer,
    },
    {
      label: "Discount Code",
      icon: "pi pi-code",
      template: itemRenderer,
    },
    {
      label: "Scan Tickets",
      icon: "pi pi-qrcode",
      template: itemRenderer,
    },
    {
      label: "Ticket Control",
      icon: "pi pi-receipt",
      template: itemRenderer,
    },
    {
      label: "Download Guest List",
      icon: "pi pi-download",
      template: itemRenderer,
    },
  ];

  return (
    <>
      {mdTable && isNav && (
        <div className="layoutMobileBack bg-black-alpha-70 animate__animated animate__fadeIn"></div>
      )}
      <div
        className={`${
          isNav
            ? "col-10 sm:col-5 lg:col-4 xl:col-3 animate__fadeInLeft p-0"
            : "col-0 animate__fadeOutLeft"
        } ${mdTable ? "layoutMobile" : ""} animate__animated transition`}
      >
        <div
          className={
            isNav ? "flex animate__animated animate__fadeIn  h-full" : "hidden"
          }
        >
          <Menu model={items} className="w-full navBar" />
        </div>
      </div>
    </>
  );
};