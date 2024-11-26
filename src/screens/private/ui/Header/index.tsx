import "./styles.scss";
import { LogoLink } from "../../../../ui";
import { useNavigate } from "react-router-dom";
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
        <div className="col-10 flex align-items-center justify-content-center text-center sm:text-left sm:col-11">
          <LogoLink classLink="" className="w-10 sm:w-4 lg:w-2" />
        </div>
      </div>
    </div>
  );
});
