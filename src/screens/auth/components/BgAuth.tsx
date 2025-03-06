import { Link } from "react-router-dom";

import bgImage from "../../../assets/auth/login.png";
import logo from "../../../assets/logoWhite.png";

export const BgAuth = () => {
  return (
    <div
      className="
          col-span-2 
          bg-cover bg-center
          px-8 sm:px-10 
          py-6 sm:py-8"
      style={{
        backgroundImage: `linear-gradient(180deg, #121212 1.6%, rgba(18, 18, 18, 0) 51.29%, #121212 100%), url(${bgImage})`,
      }}
    >
      <div className="h-full flex flex-col">
        <Link to={`/`} className="w-45">
          <img src={logo} alt="logo" />
        </Link>

        <div className="mt-10 sm:mt-auto">
          <h1 className="text-2xl font-bold">Lorem ipsum</h1>
          <p className="text-xs mt-4 h-8 sm:h-auto overflow-hidden overflow-ellipsis">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
            amet tellus non risus ullamcorper pulvinar ut eu ex. In libero mi,
            suscipit semper est vitae, euismod porttitor velit. In non metus
            diam. Duis elit metus, dapibus nec libero vel, accumsan porttitor
            mauris. Mauris condimentum blandit eros, ac dignissim lectus
            malesuada luctus.
          </p>
        </div>
      </div>
    </div>
  );
};
