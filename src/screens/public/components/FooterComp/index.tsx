import { Link } from "react-router-dom";
import { useFooter } from "./useFooter";
import { SearchComp } from "../";

export const FooterComp = () => {
  const { navs, redes } = useFooter();

  return (
    <div className="bg-[linear-gradient(360deg,#410010_-3.59%,#121212_100%)]">
      <div className="max-w-[80rem] mx-auto grid grid-cols-1 py-3 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="col-span-1 flex justify-center sm:justify-start">
            <img
              src="https://s3-alpha-sig.figma.com/img/b2a7/be45/03eabfd214ef55fd613f2d303dae807d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bkmi-Ij1jmAO28AW~oVrBBMGpI0lz~U5BMiwZWmQhDWLQJF3QOx9-QMgzShHG99yX9PTRj3Ymnp-4kgJcmRYmgKpKauWFx1kSSWTrxVtE7yPzKevULX2p3laEUb-Z9f0zRLjvX64nKWNHn~jIJvq0ocwHpkeys7SJGjXGZT8JNx2HKUDSQSbc3oPaBWOj13IvXac6vVRTiDt3flSSgzthy6Jo1ghFqSiM5NnC40KizU1sa1TMhNpaD3l8S7k5siPZXNDrJkxlKqrqPyYksqwC-VDr1ZCdnSAVzHjYdXK22LI0epvBowbIeaMaC9SU0xEETJVu-JBACxhHrWPhSTqIQ__"
              alt=""
              className="w-50"
            />
          </div>
          <div className="col-span-3 flex gap-3 sm:justify-end justify-center">
            {navs.map((nav, index) => (
              <Link to={nav.link} key={index}>
                <p className="text-white uppercase text-sm">{nav.title}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center my-4 sm:my-6">
          <SearchComp className="flex w-80" />
        </div>

        <div className="flex justify-center gap-6">
          {redes.map((red, index) => (
            <div
              key={index}
              className="h-8 w-8 bgPrimary rounded-2xl flex justify-center items-center"
            >
              <span className={`pi ${red.icon}`}></span>
            </div>
          ))}
        </div>

        <div className="text-center mt-5 border-t border-white pt-2 text-sm bebasNeue">
          © {new Date().getFullYear()} - The Event Jet, All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
