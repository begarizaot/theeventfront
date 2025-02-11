import { useState } from "react";

export const useFooter = () => {
  const [navData] = useState([
    {
      label: "Terms & Conditions",
      class: ``,
      to: "/terms_and_condition",
    },
    {
      label: "Privacy Policy",
      class: ``,
      to: "/privacy_policy",
    },
    {
      label: "Contact Us",
      class: ``,
      to: "/contact_us",
    },
  ]);

  const [redSocial] = useState([
    {
      icon: "pi-instagram",
      to: "https://www.instagram.com/theeventjet/?igsh=MXJrYWxoZTJ5M2sydw%3D%3D#",
      class: "bgIntagram",
    },
    {
      icon: "pi-whatsapp",
      to: "https://api.whatsapp.com/send?phone=18136250599",
      class: "bgWhatsapp",
    },
    {
      icon: "pi-twitter",
      to: "https://x.com/theeventjet?s=21&t=BWVmpSES_PcX98LqAefhSQ",
      class: "border-1",
    },
    {
      icon: "pi-tiktok",
      to: "https://www.tiktok.com/@the.event.jet?_t=8pv0ictRhuN&_r=1",
      class: "border-1",
    },
  ]);

  return { navData, redSocial };
};
