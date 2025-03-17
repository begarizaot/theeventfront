import { Button } from "antd";

interface CardEventComProps {
  img: string;
  title: string;
  date: string;
  following: string;
  location: string;
  hour: string;
  restriction: string;
  price: string;
}

export const CardEventCom = ({
  img,
  title,
  following,
  date,
  hour,
  location,
  restriction,
  price,
}: CardEventComProps) => {
  return (
    <div
      className="cardEventCom group 
      h-[400px] sm:h-[500px] 
      bg-cover rounded-2xl shadow-2xl text-white px-4 py-5 relative 
      hover:shadow-[0px_0px_7.5px_0px_#25b7ec]"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url(${img})`,
      }}
    >
      <div className="flex items-center justify-between">
        <p
          className="bg-white/20 px-3 py-1 rounded-4xl 
        text-sm sm:text-base"
        >
          {following}
        </p>

        <div className="flex items-center gap-2">
          <span className="pi pi-id-card text-xl"></span>
          <p className="font-bold">{restriction}</p>
        </div>
      </div>

      <div className="absolute bottom-5 grid gap-2 lg:h-[160px] lg:group-hover:h-[196px] transition-all duration-300">
        <h1
          className="font-medium 
          text-3xl sm:text-4xl 
          uppercase bebasNeue line-clamp-2 overflow-hidden text-ellipsis"
        >
          {title}
        </h1>
        <p className="text-base">{date}</p>
        <div className="flex items-center gap-2 sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="pi pi-map-marker"></span>
            <p>{location}</p>
          </div>

          <p>{hour}</p>
        </div>

        <div className="lg:opacity-0 lg:max-h-0 overflow-hidden grid grid-cols-2 gap-2 mt-3 transition-all duration-300 group-hover:opacity-100 group-hover:max-h-32">
          <Button className="w-full rounded-3xl! uppercase btnStyle btnbord">
            <span className="font-bold text-xs">Book Now!</span>
          </Button>

          <div className="text-center">
            <p className="font-bold text-3xl">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
