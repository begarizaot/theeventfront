import { Link } from "react-router-dom";

export const DetailsLinkComp = (item: any) => {
  return item.to ? (
    <Link
      to={item.to}
      className={`flex items-center gap-2 text-lg text-white ${
        item.hidden ? "hidden" : ""
      }`}
      target="_blank"
    >
      <span className={`pi ${item.icon} text-xl textPrimary`}></span>
      <p>{item.label}</p>
    </Link>
  ) : (
    <div
      className={`flex items-center gap-2 text-lg ${
        item.hidden ? "hidden" : ""
      }`}
    >
      <span className={`pi ${item.icon} text-xl textPrimary`}></span>
      <p>{item.label}</p>
    </div>
  );
};
