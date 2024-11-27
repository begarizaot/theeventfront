import { Link } from "react-router-dom";
import { environment } from "../../../environments/environment";

interface LogoLinkProps {
  classLink?: string;
  className?: string;
  div?: boolean;
}

export const LogoLink = ({ className, classLink, div }: LogoLinkProps) => {
  const image = () => {
    return (
      <img
        src={`${environment.PUBLIC_URL}/assets/images/bg-white.png`}
        alt=""
        className={`w-6 sm:w-4 lg:w-3 ${className ? className : ""}`}
      />
    );
  };

  return (
    <>
      {div ? (
        image()
      ) : (
        <Link to="/" className={classLink}>
          {image()}
        </Link>
      )}
    </>
  );
};
