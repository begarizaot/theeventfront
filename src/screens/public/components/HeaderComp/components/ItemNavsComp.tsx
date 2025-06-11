import { Avatar } from "antd";
import { theme } from "antd";
import { Link } from "react-router-dom";

const { useToken } = theme;

interface HeaderProps {
  header: any;
  userData: any;
  className?: string;
  classNameItems?: string;
  onClose?: (open: boolean) => void;
}
export const ItemNavsComp = ({
  header,
  userData,
  className,
  classNameItems,
  onClose,
}: HeaderProps) => {
  const { token } = useToken();

  return (
    <>
      <div className={`flex items-center lg:gap-5 xl:gap-8 ${className}`}>
        {header?.navItems.map((nav: any) => (
          <Link
            key={nav.id}
            to={nav.href}
            className={`text-white! uppercase text-sm ${classNameItems}`}
            onClick={() => onClose && onClose(false)}
          >
            {nav.label}
          </Link>
        ))}
        {!userData?.id && (
          <Link
            to={`/auth/login`}
            className={`text-white! uppercase text-sm ${classNameItems}`}
            onClick={() => onClose && onClose(false)}
          >
            Login
          </Link>
        )}
        {userData?.isOrganizer && (
          <Link
            to={"/createEvent"}
            className={`text-black! uppercase text-sm ${classNameItems} bg-white! px-3 py-1 rounded-full`}
            onClick={() => onClose && onClose(false)}
          >
            Create Event
          </Link>
        )}
      </div>
      {userData?.id && (
        <Link
          to={"/profile"}
          className="flex items-center gap-1  px-2 py-1 rounded-full cursor-pointer"
          style={{ backgroundColor: token.colorPrimary }}
          onClick={() => onClose && onClose(false)}
        >
          <Avatar
            icon={<span className="pi pi-user"></span>}
            className="bg-white! text-black!"
            size="small"
          />
          <h1 className="font-bold uppercase text-xs text-white!">
            {userData.firstName} {userData.lastName}
          </h1>
        </Link>
      )}
    </>
  );
};
