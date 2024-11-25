import { Link } from "react-router-dom";
import { environment } from "../../../environments/environment";

interface LogoLinkProps {
  classLink?: string;
  className?: string;
}

export const LogoLink = ({ className, classLink }: LogoLinkProps) => {
  return (
    <Link to="/" className={classLink}>
      <img
        src={`${environment.PUBLIC_URL}/assets/images/bg-white.png`}
        alt=""
        className={`w-6 sm:w-4 lg:w-3 ${className}`}
      />
    </Link>
  );
};
