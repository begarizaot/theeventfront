import { Link } from "react-router-dom";
import { LogoLinkComp } from "../../../../../ui/components";
import { useFooter } from "./useFooter";

export const FooterComp = () => {
  const { navData, redSocial } = useFooter();

  return (
    <footer className="flex flex-col px-10 max-w-[80rem] mx-auto py-4 gap-4 text-white text-center items-center relative z-10">
      <LogoLinkComp
        className="w-[60%] sm:w-[30%] lg:w-[25%]"
        contClassName="flex justify-center"
      />
      {/* navs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {navData.map((res, index) => (
          <Link to={res.to} className={`text-sm sm:text-base`} key={index}>
            {res.label}
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-10">
        {redSocial.map((res, index) => (
          <Link
            to={res.to}
            className={`pi ${res.icon} text-xl cursor-pointer`}
            key={index}
            target="_blank"
          />
        ))}
      </div>

      <p className="text-xs sm:text-sm">
        © {new Date().getFullYear()} - The Event Jet, All Rights Reserved.
      </p>
    </footer>
  );
};
