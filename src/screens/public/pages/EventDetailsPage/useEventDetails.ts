import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { MetaContext } from "../../../../context/MetaContext";
import { getLocalStorage } from "../../../../hooks";
import {
  getEventDetail,
  putUpdateEventFollowing,
} from "../../../../store/thunks";

import { EventData } from "../../../../interfaces/EventsInterface";
import { message } from "antd";

const { VITE_PUBLIC_URL } = import.meta.env;

export const useEventDetails = () => {
  const { id } = useParams();

  const { eventMeta } = useContext(MetaContext);

  const [messageApi, contextHolder] = message.useMessage();

  const [eventDetail, setEventDetail] = useState<EventData>();
  const [eventShare, setEventShare] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getEventDetailStorage();
    getArtistDetailApi();
  }, []);

  const getEventDetailStorage = () => {
    setEventDetail(getLocalStorage("event"));
  };

  const getArtistDetailApi = async () => {
    setIsLoading(true);
    const res = await getEventDetail(id);
    putUpdateEventFollowing(id);
    setEventDetail(res);
    getShareLink();
    setIsLoading(false);
  };

  const getShareLink = () => {
    setEventShare([
      {
        icon: "pi pi-whatsapp",
        link: `https://wa.me/?text=${VITE_PUBLIC_URL}/event/${id}`,
        linkMovil: `whatsapp://send?text=${VITE_PUBLIC_URL}/event/${id}`,
      },
      {
        icon: "pi pi-twitter",
        link: `https://twitter.com/intent/tweet?url=${VITE_PUBLIC_URL}/event/${id}`,
        linkMovil: `twitter://post?message=${VITE_PUBLIC_URL}/event/${id}`,
      },
      {
        icon: "pi pi-link",
        link: `${VITE_PUBLIC_URL}/event/${id}`,
        linkMovil: `${VITE_PUBLIC_URL}/event/${id}`,
        click: () => {
          navigator.clipboard.writeText(`${VITE_PUBLIC_URL}/event/${id}`);
          messageApi.success("Link copied!");
        },
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

  return { isLoading, eventDetail, eventMeta, eventShare, contextHolder };
};
