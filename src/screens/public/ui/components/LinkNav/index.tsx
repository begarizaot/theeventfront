import { Link } from "react-router-dom";
import { NavsDrawerProps } from "../../types";

export const LinkNavs = (res: NavsDrawerProps) => {
  const { to } = res;
  return to ? (
    <Link to={to} className={`${res.class} text-white!`} onClick={res.onClick}>
      {res.label}
    </Link>
  ) : (
    <p className={res.class} onClick={res.onClick}>
      {res.label}
    </p>
  );
};
