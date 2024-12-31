import "./styles.scss";
import { useContext } from "react";

import { SearchContext } from "../../../../context";

const ulrImg =
  "https://res.cloudinary.com/det46rxjs/image/upload/v1732042088/background_Home_56bde4bae7.svg";

export const InformacionCom = () => {
  const { showModal } = useContext(SearchContext);

  return (
    <div className="informationComp relative">
      <div
        className="bg-cover bg-center bg-no-repeat absolute w-full h-full bgGradient"
        style={{
          backgroundImage: `url(${ulrImg})`,
        }}
      ></div>
      <div className="absolute inset justify-content-center flex flex-column text-center align-content-center text-white px-4 sm:px-6">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl m-0">Now Boarding</h1>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl m-0 mt-1 mb-3 effectPrimary ">
          Your One Stop For Events
        </h1>

        <div
          className="w-full bg-white border-round-3xl flex align-items-center py-2 px-3 cursor-pointer w-12 sm:w-10 lg:w-8 mx-auto"
          onClick={showModal}
        >
          <span className="text-black-alpha-20 text-sm sm:text-base mr-1 white-space-nowrap overflow-hidden text-overflow-ellipsis pointer-events-none">
            Search events by name, artist or genre
          </span>
          <span className="pi pi-search border-circle bgBody border-0 text-xs sm:text-sm p-2 ml-auto"></span>
        </div>
      </div>
    </div>
  );
};
