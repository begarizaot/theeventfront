import { useEffect, useState } from "react";

import image1 from "../../../../assets/home/carousel/1.png";
import image2 from "../../../../assets/home/carousel/2.png";
import image3 from "../../../../assets/home/carousel/3.png";
import image4 from "../../../../assets/home/carousel/4.png";

export const useHome = () => {
  const [carousel, setCarousel] = useState<any>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bgImage, setBgImage] = useState(carousel[0]?.image || "");
  const settings = {
    dots: false,
    // infinite: true,
    slidesToShow: 1.2, // Valor por defecto (pantallas grandes)
    draggable: true,
    afterChange: (current: number) => {
      setCurrentSlide(current);
      setBgImage(carousel[current]?.image || "");
    },
    responsive: [
      {
        breakpoint: 1025, // Tablets y laptops pequeñas
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

  useEffect(() => {
    fetchCarousel();
  }, []);

  const fetchCarousel = async () => {
    setCarousel([
      {
        id: 1,
        title: "Music Event that will Blow your Mind",
        date: "2021-07-01",
        fallow: 100,
        image: image1,
      },
      {
        id: 2,
        title: "Valentine’s Day party top of tower 2 ",
        date: "2021-07-01",
        fallow: 100,
        image: image2,
      },
      {
        id: 3,
        title: "Veronica Weds Adam",
        date: "2021-07-01",
        fallow: 100,
        image: image3,
      },
      {
        id: 4,
        title: "Be Ready to be Blown out by none other than DJ Khaled ",
        date: "2021-07-01",
        fallow: 100,
        image: image4,
      },
    ]);
  };

  return { carousel, currentSlide, bgImage, settings };
};
