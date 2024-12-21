import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEventId } from "../../../hooks";
import { LoadingContext } from "../../../../../context";

import { AppDispatch, RootState } from "../../../../../store";
import {
  eventsAnalyticsInic,
  getEventAnalytics,
  getForwardMailOrder,
} from "../../../../../store/slices";

export const useAnalytics = () => {
  const { showLoading } = useContext(LoadingContext);
  const { eventId } = useEventId();

  const toastRes = useRef<any>(null);

  const [pages, setPages] = useState<any>({});
  const [search, setSearch] = useState<any>("");

  const dispatch: AppDispatch = useDispatch();
  const { data, loading, pagination, analytic } = useSelector(
    (state: RootState) => state.eventAnalytics
  );

  useEffect(() => {
    dispatch(eventsAnalyticsInic());
  }, []);

  useEffect(() => {
    onFetch();
  }, [dispatch, pages.page, eventId, search]);

  const onFetch = async () => {
    eventId &&
      dispatch(
        getEventAnalytics(eventId, {
          size: 6,
          page: (pages?.page || 0) + 1,
          search,
        })
      );
  };

  const onSearchAnalytics = async (req: any) => {
    setSearch(req);
  };

  const onPageChange = (event: any) => {
    setPages(event);
  };

  const onRefresh = () => {
    pages.page > 0 ? setPages({ page: 0, first: 0 }) : onFetch();
  };

  const onForwardMail = async (ev: any) => {
    showLoading(true);
    try {
      await getForwardMailOrder(ev);
      showLoading(false);
      toastRes.current.show({
        severity: "success",
        summary: "Success",
        detail: "Mail sent",
        life: 3000,
      });
    } catch (error) {
      showLoading(false);
      toastRes.current.show({
        severity: "error",
        summary: "Error",
        detail: error,
        life: 3000,
      });
    }
  };

  return {
    pages,
    analytic,
    data,
    loading,
    pagination,
    toastRes,
    onPageChange,
    onRefresh,
    onSearchAnalytics,
    onForwardMail,
  };
};
