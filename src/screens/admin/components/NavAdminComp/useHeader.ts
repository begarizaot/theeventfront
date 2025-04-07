import { useEffect, useState } from "react";

export const useHeader = () => {
  const [navs, setNavs] = useState<any[]>([]);

  useEffect(() => {
    fechNavs();
  }, []);

  const fechNavs = async () => {
    setNavs([
      {
        id: 1,
        name: "Event Details",
        path: "/admin/eventDetails/1",
        icon: "pi-home",
      },
      {
        id: 2,
        name: "Event Analytics",
        path: "/admin/eventAnalytics/1",
        icon: "pi-users",
      },
      {
        id: 3,
        name: "Ticket Control",
        path: "/admin/ticketControl/1",
        icon: "pi-verified",
      },
      {
        id: 4,
        name: "Team Access",
        path: "/admin/teamAccess/1",
        icon: "pi-objects-column",
      },
      {
        id: 5,
        name: "Comp Control",
        path: "/admin/compControl/1",
        icon: "pi-id-card",
      },
      {
        id: 6,
        name: "QR Scanner",
        path: "/qrScanner",
        icon: "pi-qrcode",
      },
    ]);
  };

  return { navs };
};
