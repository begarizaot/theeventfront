import { useCallback, useState } from "react";
import debounce from "lodash.debounce";

import { theEventApi } from "../../../../../apis";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e: any) => {
    setSearch(e.target.value);
    onSearchEvent(e.target.value);
  };

  const onClearSearch = () => {
    setSearch("");
    setEvents([]);
  };

  const onInitialState = () => {
    setIsLoading(true);
    setEvents([]);
  };

  const onSearchEvent = useCallback(
    debounce((event) => {
      event.length > 2 && fetchEvents({ name: event });
    }, 500),
    []
  );

  const fetchEvents = async ({ name = "" }: any) => {
    onInitialState();
    try {
      const { data } = await theEventApi.get(
        `event/getEventSearch?eventName=${name}`
      );
      setEvents(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return { search, isLoading, events, onChange, onClearSearch };
};
