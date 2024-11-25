import { useEffect, useState } from "react";

export const useEventDetail = () => {
  const [eventDetail] = useState({
    image:
      "https://res.cloudinary.com/dii5f60xx/image/upload/v1727559209/events/event_Id_4_8e1f2afeb0.png",
  });

  const [shareData, setShareData] = useState<any>([]);
  const [detail, setDetail] = useState<any>([]);

  useEffect(() => {
    fetchEventDetail();
  }, []);

  const fetchEventDetail = async () => {
    handleShareData();
    handleDetail();
  };

  const handleShareData = () => {
    setShareData([
      {
        icon: "pi pi-facebook",
        link: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
      },
      {
        icon: "pi pi-twitter",
        link: `https://twitter.com/intent/tweet?url=${window.location.href}`,
      },
      {
        icon: "pi pi-whatsapp",
        link: `https://web.whatsapp.com/send?text=${window.location.href}`,
      },
      {
        icon: "pi pi-envelope",
        link: `https://outlook.office.com/mail/deeplink/compose?mailtouri=${window.location.href}`,
      },
    ]);
  };

  const handleDetail = () => {
    setDetail([
      {
        icon: "pi pi-building",
        label: "809 Lounge Restaurant & Grill",
      },
      {
        icon: "pi pi-map-marker",
        label: "3710 W Waters Ave, Tampa, FL 33614",
        link: `https://www.google.com/maps/search/?api=1&query=`,
      },
      {
        icon: "pi pi-calendar",
        label: "Saturday, November 23, 2024",
      },
      {
        icon: "pi pi-clock",
        label: "9:00 PM - 3:00 AM",
      },
      {
        icon: "pi pi-id-card",
        label: "21+",
      },
    ]);
  };

  return { eventDetail, shareData, detail };
};
