import { Button } from "antd";

interface CardEventsCarouselProps {
  title: string;
  date: string;
  fallow: number;
  image: string;
  className?: string;
}

export const CardEventsCarousel = ({
  date,
  fallow,
  image,
  title,
  className,
}: CardEventsCarouselProps) => {
  return (
    <div
      className={`h-60 sm:h-80 xl:h-96 bg-cover rounded-xl shadow-lg ${className} p-4 text-white relative`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url(${image})`,
      }}
    >
      <div className="bg-white/10 px-2 py-1 text-xs rounded-lg inline-block">
        <span>{fallow}</span> Going
      </div>

      <div className="mt-auto absolute bottom-6 flex flex-col gap-2 px-4 left-0">
        <p className="text-xs">{date}</p>
        <h2 className="text-lg sm:text-2xl line-clamp-1 ">{title}</h2>

        <Button className="w-30 sm:w-28 lg:w-40 rounded-3xl! uppercase btnStyle">
          <span className="font-bold text-xs">Book Now!</span>
        </Button>
      </div>
    </div>
  );
};
