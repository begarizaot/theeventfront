import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getLocalStorage } from "../../../../hooks";
import {
  getEventDetail,
  onInitializePixel,
  pixelViewContent,
  putUpdateEventFollowing,
} from "../../../../store/thunks";

import { EventData } from "../../../../interfaces/EventsInterface";
import { message } from "antd";

const { VITE_PUBLIC_URL } = import.meta.env;

export const useEventDetails = () => {
  const { id } = useParams();

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
    dataPixel(res);
  };

  const dataPixel = async (data: any) => {
    if (!data?.pixel_id) return;
    const { pixel_id, name, id_event } = data;
    const { pixel_tiktok_id } = pixel_id;
    if (pixel_tiktok_id) {
      await onInitializePixel(pixel_tiktok_id);
      pixelViewContent({
        contens: [{
          content_id: id_event,
          content_name: name,
        }],
      });
    }
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


  return { isLoading, eventDetail, eventShare, contextHolder };
};
