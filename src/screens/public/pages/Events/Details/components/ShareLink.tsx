import { Link } from "react-router-dom";

export const ShareLinkComp = (item: any) => {
  return item.to ? (
    <Link
      to={item.to}
      className={`no-underline w-10 lg:w-12 h-10 lg:h-12 rounded-full flex justify-center items-center  ${item.class}`}
      target="_blank"
    >
      <span className={`pi ${item.icon} text-base lg:text-xl`}></span>
    </Link>
  ) : (
    <button
      className={`cursor-pointer w-10 lg:w-12 h-10 lg:h-12 rounded-full flex justify-center items-center  ${item.class}`}
      onClick={item.onClick}
    >
      <span className={`pi ${item.icon} text-base lg:text-xl`}></span>
    </button>
  );
};
