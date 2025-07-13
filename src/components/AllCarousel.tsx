import { Carousel } from "antd";

interface AllCarouselProps {
  list: any[];
}

export const AllCarouselComp = ({ list }: AllCarouselProps) => {
  return (
    list.length > 0 && (
      <Carousel
        dots={false}
        autoplay
        slidesToShow={2.3}
        responsive={[{ breakpoint: 640, settings: { slidesToShow: 1 } }]}
      >
        {(list ?? []).map((val, index) => (
          <img src={val} alt="" className="px-6 h-20 rounded-xl!" key={index} />
        ))}
      </Carousel>
    )
  );
};
