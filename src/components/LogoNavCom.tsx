import { Link } from "react-router-dom";

interface LogoNavComProps {
  urlLogo?: string;
  classLogo?: string;
  navLogo?: any;
}

export const LogoNavCom = ({
  urlLogo,
  classLogo,
  navLogo,
}: LogoNavComProps) => {
  const logoDark = "https://www.theeventjet.com/assets/bg-white-BF_g_ajj.png";

  return (
    <>
      <Link to={navLogo || "/"} className="flex items-center">
        <img src={urlLogo || logoDark} alt="logo" className={`${classLogo}`} />
      </Link>
    </>
  );
};
