import "./styles.scss";
import { LogoLink } from "../../../../ui";
import { NavLink, useNavigate } from "react-router-dom";
import { memo } from "react";

export const Header = memo(() => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };
  return (
    <div className="contHeader h-5rem pt-2 fixed z-2 top-0 w-full left-0 ">
      <div className="flex max-width-80 mx-auto px-4 sm:px-6 pt-1">
        <div className="col-2 sm:col-1">
          <span
            className="pi pi-arrow-left text-white text-xl cursor-pointer"
            onClick={handleReturn}
          ></span>
        </div>
        <div className="col-8 flex align-items-center justify-content-center text-center sm:text-left">
          <LogoLink classLink="" className="w-10 sm:w-6 lg:w-4" />
        </div>
        <div className="col-2 sm:col-3 text-right">
          <NavLink
            to="/manager/createEvent"
            className={({ isActive }) =>
              `text-white text-xl cursor-pointer no-underline ${isActive ? "hidden" : ""}`
            }
          >
            <span className="pi pi-plus sm:hidden"></span>
            <span className="hidden sm:block">Create Event</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
});
