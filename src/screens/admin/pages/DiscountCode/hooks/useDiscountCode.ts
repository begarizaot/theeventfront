import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

import { useEventId } from "../../../hooks";

import { LoadingContext } from "../../../../../context";

import { AppDispatch, RootState } from "../../../../../store";
import {
  eventsDiscountInic,
  getEventDiscountCode,
  postDiscountStatusEvent,
} from "../../../../../store/slices";

export const useDiscountCode = () => {
  const { showLoading, hiddenLoading } = useContext(LoadingContext);

  const { eventId } = useEventId();

  const toastErr = useRef<any>(null);

  const [pages, setPages] = useState<any>({});
  const [search, setSearch] = useState<any>("");
  const [editData, setEditData] = useState({});
  const [isCreateCode, setIsCreateCode] = useState(false);

  const dispatch: AppDispatch = useDispatch();
  const { data, loading, pagination, analytic } = useSelector(
    (state: RootState) => state.eventDiscountCode
  );

  useEffect(() => {
    dispatch(eventsDiscountInic());
  }, []);

  useEffect(() => {
    onFetch();
  }, [dispatch, pages.page, eventId, search]);

  const onFetch = async () => {
    eventId &&
      dispatch(
        getEventDiscountCode(eventId, {
          size: 6,
          page: (pages?.page || 0) + 1,
          search,
        })
      );
  };

  const onSearchDiscountCode = async (req: any) => {
    setSearch(req);
  };

  const onPageChange = (event: any) => {
    setPages(event);
  };

  const onRefresh = () => {
    pages.page > 0 ? setPages({ page: 0, first: 0 }) : onFetch();
  };

  const showCreateCode = () => {
    setIsCreateCode(!isCreateCode);
    setEditData({});
  };

  const onEditCode = (ev: any) => {
    setIsCreateCode(true);
    setEditData({
      ...ev,
      amount: ev.amount_max,
      start_date: new Date(ev.start_date),
      end_date: new Date(ev.end_date),
    });
  };

  const onActiveInactive = (ev: any) => {
    MySwal.fire({
      title: "are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        showLoading(true);
        postDiscountStatusEvent(eventId, {
          disable: !ev.disable,
          id: ev.id,
        })
          .then(() => {
            onFetch();
          })
          .catch((error) => {
            onErrorData(error);
          })
          .finally(() => {
            hiddenLoading();
          });
      }
    });
  };

  const onErrorData = (error: any) => {
    toastErr.current.show({
      severity: "error",
      summary: "Error",
      detail: error,
      life: 3000,
    });
  };

  return {
    data,
    pages,
    loading,
    eventId,
    toastErr,
    editData,
    analytic,
    pagination,
    isCreateCode,
    onFetch,
    onRefresh,
    onEditCode,
    onPageChange,
    showCreateCode,
    onActiveInactive,
    onSearchDiscountCode,
  };
};
