import { Button } from "antd";

interface ImgTitleCompProps {
  dataEvent: any;
}

export const ImgTitleComp = ({ dataEvent }: ImgTitleCompProps) => {
  return (
    <div className="sm:h-[50vh] lg:h-[42vh] mx-auto max-w-[80rem] px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1 order-2 sm:order-1">
          <div
            className="h-90 bg-cover rounded-xl shadow"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url(${dataEvent?.img})`,
            }}
          ></div>
        </div>
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-center gap-2 order-1 sm:order-2">
          <h1 className="text-4xl bebasNeue">{dataEvent?.title}</h1>
          <p>{dataEvent?.date}</p>
          <div className="flex items-center gap-3 text-sm">
            <p className="flex items-center gap-1">
              <span className="pi pi-map-marker"></span> {dataEvent?.city}
            </p>
          </div>
          <p>{dataEvent?.hour}</p>

          <div className="flex flex-wrap gap-2 text-xs">
            {dataEvent?.categories?.map((category: any, index: any) => (
              <p
                key={index}
                className="border border-white px-2 py-[2px] rounded-full"
              >
                {category}
              </p>
            ))}
          </div>

          <Button className="w-full sm:w-40 rounded-3xl! uppercase btnStyle mt-4 hidden! sm:block!">
            <span className="font-bold text-xs">Book Tickets</span>
          </Button>
        </div>

        <div className="col-span-1 lg:col-span-2 flex flex-col justify-center gap-2 order-3 mb-3 sm:hidden!">
          <Button className="w-full sm:w-40 rounded-3xl! uppercase btnStyle">
            <span className="font-bold text-xs">Book Tickets</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
