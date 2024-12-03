import { useEffect, useState } from "react";

import { theEventApi } from "../apis";

import moment from "moment";

export const useEventDetail = (idEvent:any) => {

  const [eventDetail, setEventDetail] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchEventDetail();
  }, []);

  const onInitialState = () => {
    setIsLoading(true);
    setEventDetail({});
  };

  const fetchEventDetail = async () => {
    onInitialState();
    try {
      const { data } = await theEventApi.get(`event/getEventDetail/${idEvent}`);
      setEventDetail(data.data);
      handleShareData();
      handleDetail(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleShareData = () => {
    setEventDetail((e: any) => ({
      ...e,
      shareData: [
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
      ],
    }));
  };

  const handleDetail = (ev: any) => {
    const {
      map_id,
      start_date,
      end_date,
      event_age_restriction_id: restriction,
    } = ev;

    setEventDetail((e: any) => ({
      ...e,
      detail: [
        {
          icon: "pi pi-building",
          label: map_id?.label || "",
        },
        {
          icon: "pi pi-map-marker",
          label: map_id?.labelCompl || "",
          link: `https://www.google.com/maps/search/?api=1&query=${
            map_id?.labelCompl || ""
          }`,
        },
        {
          icon: "pi pi-calendar",
          label: `${moment(start_date).format("dddd")}, ${moment(
            start_date
          ).format("MMMM")} ${moment(start_date).format("DD")}, ${moment(
            start_date
          ).format("YYYY")}`,
        },
        {
          icon: "pi pi-clock",
          label: `${moment(start_date).format("hh:mm a")} - ${moment(
            end_date
          ).format("hh:mm a")}`,
        },
        {
          icon: "pi pi-id-card",
          label: restriction?.name || "",
        },
      ],
    }));
  };

  return { eventDetail, isLoading };
};
