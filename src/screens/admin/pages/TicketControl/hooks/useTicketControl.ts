import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEventId, useForwardMail } from "../../../hooks";

import { AppDispatch, RootState } from "../../../../../store";
import {
  eventsTicketControlInic,
  getEventTicketControls,
} from "../../../../../store/slices";

export const useTicketControl = () => {
  const { eventId } = useEventId();
  const { onForwardMail, toastErrEmail } = useForwardMail();

  const [pages, setPages] = useState<any>({});
  const [search, setSearch] = useState<any>("");

  const dispatch: AppDispatch = useDispatch();
  const { data, loading, pagination } = useSelector(
    (state: RootState) => state.eventTicketControl
  );

  useEffect(() => {
    dispatch(eventsTicketControlInic());
  }, []);

  useEffect(() => {
    onFetch();
  }, [dispatch, pages.page, eventId, search]);

  const onFetch = async () => {
    eventId &&
      dispatch(
        getEventTicketControls(eventId, {
          size: 6,
          page: (pages?.page || 0) + 1,
          search,
        })
      );
  };

  const onSearchTicketControl = async (req: any) => {
    setSearch(req);
  };

  const onPageChange = (event: any) => {
    setPages(event);
  };

  const onRefresh = () => {
    pages.page > 0 ? setPages({ page: 0, first: 0 }) : onFetch();
  };

  return {
    pages,
    data,
    loading,
    pagination,
    toastErrEmail,
    onPageChange,
    onRefresh,
    onSearchTicketControl,
    onForwardMail,
  };
};
