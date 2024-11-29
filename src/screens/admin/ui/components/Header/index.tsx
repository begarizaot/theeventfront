import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { NavbarContext } from "../../../context";
import { LogoLink } from "../../../../../ui";

export const Header = () => {
  const navigate = useNavigate();
  const { showNav } = useContext(NavbarContext);

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="flex h-3rem align-items-center">
      <div className="col-2">
        <span
          className="pi pi-arrow-left text-2xl cursor-pointer"
          onClick={handleReturn}
        ></span>
      </div>
      <div className="col-8 text-center">
        <LogoLink div={true} className="w-8 sm:w-5" />
      </div>
      <div className="col-2 text-right">
        <span
          className="pi pi-th-large text-2xl cursor-pointer"
          onClick={showNav}
        ></span>
      </div>
    </div>
  );
};
