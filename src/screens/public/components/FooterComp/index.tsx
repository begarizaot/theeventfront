import { Link } from "react-router-dom";
import { useFooter } from "./useFooter";
import { SearchComp } from "../";
import { LogoNavCom } from "../../../../components";
// import { LogoNavCom } from "../../../../components";

export const FooterComp = () => {
  const { footer, } = useFooter();

  return (
    <div className="bg-[linear-gradient(360deg,#410010_-3.59%,#121212_100%)]">
      <div className="max-w-[80rem] mx-auto grid grid-cols-1 py-3 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {/* <div className="col-span-1 flex justify-center sm:justify-start">
            <LogoNavCom
              navLogo={footer?.logo.href}
              urlLogo={footer?.logo.urlImage}
              classLogo="w-50"
            />
          </div> */}
          <div className="col-span-4 flex flex-wrap gap-3 justify-center">
            {(footer?.navItems ?? []).map((nav:any) => (
              <Link
                key={nav.id}
                to={nav.href}
                className="text-white uppercase text-sm"
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center my-4 sm:my-6">
          <SearchComp className="flex w-80" />
        </div>

        <div className="flex justify-center gap-6">
          {(footer?.socialLinks ?? []).map((red, index) => (
            <Link
              key={index}
              to={red.href}
              className="h-8 w-8 bgPrimary rounded-2xl flex justify-center items-center"
              target="_blank"
            >
              <span className={`pi ${red.label}`}></span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-5 border-t border-white pt-2 text-sm bebasNeue">
          {footer?.text}
        </div>
      </div>
    </div>
  );
};
