import { Avatar, Carousel, Rate } from "antd";
import { TitleComp } from "../../../components";
import { useRef, useState } from "react";

interface AllTestimonialsProps {
  list: any[];
}

export const AllTestimonialsComp = ({ list }: AllTestimonialsProps) => {
  const carouselRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    slidesToShow: 6.3,
    dots: false,
    centerMode: true,
    beforeChange: (_: any, next: any) => setActiveIndex(next),
    responsive: [{ breakpoint: 640, settings: { slidesToShow: 1 } }],
  };

  const handleAvatar = () => {
    const dataRes = list[activeIndex];
    return (
      <div className="col-span-1 hidden sm:block mt-4 px-4 sm:px-6 order-2">
        <div className="flex gap-8 items-center justify-center">
          <div
            className="cursor-pointer h-7 w-7 flex items-center justify-center bgPrimary rounded-full"
            onClick={() => carouselRef.current?.prev()}
          >
            <span className="pi pi-chevron-left text-sm text-black"></span>
          </div>
          <div className="w-[78%]">
            <Carousel {...settings} ref={carouselRef}>
              {list.map((item, index) => (
                <div key={index} className="flex! flex-col items-center gap-1">
                  <Avatar
                    src={item.img}
                    className={`h-16! w-16! border-3! ${
                      activeIndex == index ? "borderPrimary " : "border-white!"
                    }`}
                  />
                  {activeIndex == index && (
                    <span className="pi pi-sort-down-fill text-white"></span>
                  )}
                </div>
              ))}
            </Carousel>
          </div>
          <div
            className="cursor-pointer h-7 w-7 flex items-center justify-center bgPrimary rounded-full"
            onClick={() => carouselRef.current?.next()}
          >
            <span className="pi pi-chevron-right text-sm text-black"></span>
          </div>
        </div>

        <div className="bg-white/10 grid border border-white rounded-xl py-3 px-20 lg:px-40 mt-1 text-center">
          <h1 className="font-bold text-lg montserrat">
            {dataRes?.name || ""}
          </h1>
          {dataRes?.stars && <Rate disabled value={dataRes?.stars || 0} />}
          <p className="mt-2">{dataRes?.testimonial || ""}</p>
        </div>
      </div>
    );
  };

  const handleMobile = () => {
    return (
      <div className="col-span-1 sm:hidden mb-4 order-1">
        <Carousel {...settings}>
          {list.map((item, index) => (
            <div key={index} className="pl-2">
              <div className="bg-white/10 grid border border-white rounded-xl py-3 mt-1 text-white px-3">
                <p className="text-9xl h-13 text-primary">“</p>
                <p className="mt-2">{item?.testimonial || ""}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Avatar src={item.img} className={`h-10! w-10!`} />
                  <div className="grid">
                    <h1 className="font-bold text-xs montserrat">
                      {item?.name || ""}
                    </h1>
                    {item?.stars && (
                      <Rate
                        className="text-xs!"
                        disabled
                        value={item?.stars || 0}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 w-full mx-auto max-w-[80rem] gap-3">
      <div className="col-span-1 flex flex-col items-center justify-center gap-4 px-4 sm:px-6 order-2 sm:order-1">
        <TitleComp title="Testimonials" />
        <h1 className="text-3xl bebasNeue">What Our Clients Say</h1>
        <p className="text-xs">Real Stories. Real Results.</p>
      </div>

      {handleAvatar()}
      {handleMobile()}
    </div>
  );
};
