import { Link } from "react-router-dom";

interface LogoNavComProps {
  classLogo?: string;
}

export const LogoNavCom = ({ classLogo }: LogoNavComProps) => {
  const logoDark = "https://www.theeventjet.com/assets/bg-white-BF_g_ajj.png";

  return (
    <>
      <Link to="/" className="flex items-center">
        <img src={logoDark} alt="logo" className={`${classLogo}`} />
      </Link>
    </>
  );
};
