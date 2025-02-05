import { Link } from "react-router-dom";

interface LogoLinkProps {
  contClassName?: string;
  className?: string;
  onClick?: () => void;
}

export const LogoLinkComp = ({
  contClassName,
  className,
  onClick,
}: LogoLinkProps) => {
  return (
    <Link to="/" onClick={onClick} className={`${contClassName}`}>
      <img
        src="https://www.theeventjet.com/assets/bg-white-BF_g_ajj.png"
        alt=""
        className={`${className}`}
      />
    </Link>
  );
};
