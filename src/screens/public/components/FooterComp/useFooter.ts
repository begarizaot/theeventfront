import { useEffect, useState } from "react";

export const useFooter = () => {
  const [navs, setNavs] = useState<any[]>([]);
  const [redes, setRedes] = useState<any[]>([]);

  useEffect(() => {
    fetchNavs();
    fetchRedes();
  }, []);

  const fetchNavs = async () => {
    setNavs([
      { id: 1, title: "All Events", link: "/" },
      { id: 1, title: "Contact us", link: "/" },
      { id: 1, title: "Gallery", link: "/" },
    ]);
  };

  const fetchRedes = async () => {
    setRedes([
      {
        icon: "pi-instagram",
        link: "https://www.instagram.com/theeventjet/?igsh=MXJrYWxoZTJ5M2sydw%3D%3D#",
      },
      {
        icon: "pi-whatsapp",
        link: "https://api.whatsapp.com/send?phone=18136250599",
      },
      {
        icon: "pi-twitter",
        link: "https://x.com/theeventjet?s=21&t=BWVmpSES_PcX98LqAefhSQ",
      },
      {
        icon: "pi-tiktok",
        link: "https://www.tiktok.com/@the.event.jet?_t=8pv0ictRhuN&_r=1",
      },
    ]);
  };

  return { navs, redes };
};
