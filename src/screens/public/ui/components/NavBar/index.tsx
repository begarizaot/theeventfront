import { memo, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../../../context";

interface NavProps {
  onCLick: () => void;
}

interface ItemProps {
  label: string;
  link?: string;
  onClick?: () => void;
}

export const Nav = memo(({ onCLick }: NavProps) => {
  const { showLogin, showRegister, userData } = useContext(AuthContext);

  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    userData.token ? handelIsLogin() : handelIsLogout();
    // handelIsLogin()
  }, [userData]);

  const handelIsLogout = () => {
    setItems([
      {
        label: "Login",
        onClick: showLogin,
      },
      {
        label: "Register",
        onClick: showRegister,
      },
      {
        label: "All Events",
        link: "events",
      },
    ]);
  };

  const handelIsLogin = () => {
    setItems([
      {
        label: "My Events",
        link: "manager/myEvents",
      },
      {
        label: "Create Event",
        link: "manager/createEvent",
      },
      {
        label: "My Tickets",
        link: "tickets",
      },
      {
        label: "My Profile",
        link: "manager/profile",
      },
    ]);
  };

  return (
    <>
      {items.map((item, index) =>
        item.link ? (
          <Link
            key={index}
            to={item.link || ""}
            className="text-white no-underline hoverLink pb-1"
            onClick={onCLick}
          >
            <span className={`text-base`}>{item.label}</span>
          </Link>
        ) : (
          <span
            key={index}
            className="text-white no-underline hoverLink pb-1 cursor-pointer"
            onClick={() => {
              item.onClick && item.onClick();
              onCLick();
            }}
          >
            <span className={`text-base`}>{item.label}</span>
          </span>
        )
      )}
    </>
  );
});
