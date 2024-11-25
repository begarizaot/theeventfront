import { Link } from "react-router-dom";

import "./style.scss";

import { LogoLink } from "../../../../../ui";
import { useFooter } from "./useFooter";


export const Footer = () => {
  const { nav, redSocial } = useFooter();

  return (
    <div className="gird text-center my-3">
      <div className="col-12">
        <LogoLink />
      </div>

      <div className="col-12 sm:gap-2 gap-1 flex flex-wrap justify-content-center">
        {nav.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="no-underline text-white px-2 sm:px-3 py-1 sm:py-2 border-round text-sm sm:text-xl"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="col-12 gap-4 flex flex-wrap justify-content-center">
        {redSocial.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={`no-underline text-white w-2rem h-2rem sm:w-3rem sm:h-3rem border-circle flex justify-content-center align-items-center ${item.class}`}
          >
            <span className={`pi ${item.icon} text-sm sm:text-xl`}></span>
          </Link>
        ))}
      </div>

      <div className="col-12 text-white text-xs sm:text-sm">
        © {new Date().getFullYear()} - The Event Jet, All Rights Reserved.
      </div>
    </div>
  );
};
