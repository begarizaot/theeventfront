import { Carousel } from "antd";

interface AllCarouselProps {
  list: any[];
  dotPosition?: "top" | "bottom" | "left" | "right";
}

export const AllCarouselComp = ({ list, dotPosition }: AllCarouselProps) => {
  return (
    <>
      {list.length > 0 && (
        <Carousel
          dots={false}
          autoplay
          slidesToShow={2.3}
          responsive={[{ breakpoint: 640, settings: { slidesToShow: 1 } }]}
          dotPosition={dotPosition || "bottom"}
        >
          {(list ?? []).map((val, index) => (
            <img
              src={val}
              alt=""
              className="px-6 h-20 rounded-xl! object-contain"
              key={index}
            />
          ))}
        </Carousel>
      )}
    </>
  );
};
