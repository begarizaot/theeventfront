import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../../../../store";
import {
  eventsFreesInic,
  getEventDetailById,
  getEventFreeTiekcts,
} from "../../../../../store/slices";

import { useEventId, useForwardMail } from "../../../hooks";
import { CheckoutContext, LoadingContext } from "../../../../../context";

export const useFreeTickets = () => {
  const { showCheckout, isCheckout } = useContext(CheckoutContext);
  const { showLoading } = useContext(LoadingContext);

  const { eventId } = useEventId();
  const { onForwardMail, toastErrEmail } = useForwardMail();

  const [pages, setPages] = useState<any>({});
  const [search, setSearch] = useState<any>("");

  const dispatch: AppDispatch = useDispatch();
  const { data, loading, pagination, analytic } = useSelector(
    (state: RootState) => state.eventFreeTickets
  );

  useEffect(() => {
    dispatch(eventsFreesInic());
  }, []);

  useEffect(() => {
    onFetch();
  }, [dispatch, pages.page, eventId, search, isCheckout]);

  const onFetch = async () => {
    eventId &&
      dispatch(
        getEventFreeTiekcts(eventId, {
          size: 6,
          page: (pages?.page || 0) + 1,
          search,
        })
      );
  };

  const onSearchFreeTickets = async (req: any) => {
    setSearch(req);
  };

  const onPageChange = (event: any) => {
    setPages(event);
  };

  const onRefresh = () => {
    pages.page > 0 ? setPages({ page: 0, first: 0 }) : onFetch();
  };

  const onCreateFreeTicket = async () => {
    showLoading(true);
    try {
      const res = await getEventDetailById(eventId);
      showLoading(false);
      showCheckout(res, true);
    } catch (error) {
      showLoading(false);
    }
  };

  return {
    data,
    pages,
    loading,
    analytic,
    pagination,
    toastErrEmail,
    onRefresh,
    onPageChange,
    onForwardMail,
    onCreateFreeTicket,
    onSearchFreeTickets,
  };
};
