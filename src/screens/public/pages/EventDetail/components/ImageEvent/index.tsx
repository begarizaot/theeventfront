import "./styles.scss";

import { Link } from "react-router-dom";

import { Divider } from "primereact/divider";
import { BtnTicket, FromUi } from "../../ui";

interface ImageEventProps {
  data: any;
}

export const ImageEvent = ({ data }: ImageEventProps) => {
  return (
    <>
      <div
        className="imageBackgroud h-26rem bgGradient"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <div className="grid z-1 relative text-white">
        <div className="col-12 sm:col-6 lg:col-4 h-25rem">
          <div className="effectBorder p-1 border-round w-full h-full relative">
            <div
              className="bgFull bg-center bg-no-repeat absolute w-full h-full border-round"
              style={{
                backgroundImage: `url(${data.image})`,
              }}
            ></div>
          </div>
        </div>
        <div className="col-12 sm:col-6 lg:col-8 flex justify-content-center  flex-column gap-3 sm:gap-4">
          <span className="font-bold text-center sm:text-left text-3xl sm:text-2xl lg:text-4xl">
            Secreto en Concierto
          </span>
          <div className="hidden sm:flex flex-column align-items-center sm:align-items-start lg:flex-row lg:align-items-center gap-3">
            <FromUi />
            <Divider layout="vertical" className="h-1rem hidden lg:block" />
            <BtnTicket className="lg:w-4" />
          </div>
          <div className="flex align-items-center gap-3">
            <span>Share with friends:</span>
            <div className="flex align-items-center gap-3">
              {data.shareData.map((item: any, index: number) => (
                <Link
                  to={item.link}
                  key={index}
                  className={`no-underline text-white`}
                  target="_blank"
                >
                  <span className={`pi ${item.icon} text-xl`}></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
