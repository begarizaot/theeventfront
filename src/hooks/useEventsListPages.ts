import { useState } from "react";
import { theEventApi } from "../apis";

export const useEventsListPages = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [pagination, setPagination] = useState<any>({});

  const onInitialState = () => {
    setIsLoading(true);
    setEvents([]);
    setPagination({});
  };

  const fetchEvents = async ({ size = 3, page = 1 }: any) => {
    onInitialState();
    try {
      const { data } = await theEventApi.get(
        `event/getEventList?size=${size}&page=${page}`
      );
      setEvents(data.data);
      setPagination(data.pagination);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return { events, pagination, isLoading, onInitialState, fetchEvents };
};
