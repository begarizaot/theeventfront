export const useFooter = () => {
  const nav = [
    {
      label: "Terms & Conditions",
      link: "/terms-and-condition",
    },
    {
      label: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      label: "Contact Us",
      link: "/contact-us",
    },
  ];

  const redSocial = [
    {
      icon: "pi-instagram",
      link: "https://www.instagram.com/theeventjet/?igsh=MXJrYWxoZTJ5M2sydw%3D%3D#",
      class: "bgIntagram",
    },
    {
      icon: "pi-whatsapp",
      link: "https://api.whatsapp.com/send?phone=18136250599",
      class: "bgWhatsapp",
    },
    {
      icon: "pi-twitter",
      link: "https://x.com/theeventjet?s=21&t=BWVmpSES_PcX98LqAefhSQ",
      class: "border-1",
    },
    {
      icon: "pi-tiktok",
      link: "https://www.tiktok.com/@the.event.jet?_t=8pv0ictRhuN&_r=1",
      class: "border-1",
    },
  ];

  return {
    nav,
    redSocial,
  };
};
