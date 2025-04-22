import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { MetaContext } from "../../../../context/MetaContext";
import { getLocalStorage } from "../../../../hooks";
import { getEventDetail } from "../../../../store/thunks";

import { EventData } from "../../../../interfaces/EventsInterface";

export const useEventDetails = () => {
  const { id } = useParams();
  const { eventMeta } = useContext(MetaContext);

  const [eventDetail, setEventDetail] = useState<EventData>();
  const [eventShare, setEventShare] = useState<any[]>([]);

  useEffect(() => {
    getEventDetailStorage();
    getArtistDetailApi();
  }, []);

  const getEventDetailStorage = () => {
    setEventDetail(getLocalStorage("event"));
  };

  const getArtistDetailApi = async () => {
    const res = await getEventDetail(id);
    setEventDetail(res);
    getShareLink();
  };

  const getShareLink = () => {
    setEventShare([
      {
        icon: "pi pi-instagram",
        link: "https://www.instagram.com/",
      },
      {
        icon: "pi pi-whatsapp",
        link: "https://web.whatsapp.com/",
      },
      {
        icon: "pi pi-twitter",
        link: "https://x.com/?lang=es",
      },
    ]);
  };

  // const defaultProps = {
  //   center: {
  //     lat: 4.710989,
  //     lng: -74.072092,
  //   },
  //   zoom: 11,
  // };

  return { eventDetail, eventMeta, eventShare };
};
