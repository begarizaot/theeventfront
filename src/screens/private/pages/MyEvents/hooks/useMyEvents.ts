import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../../../../store";
import { getMyEventListPage } from "../../../../../store/slices";

export const useMyEvents = () => {
  const itemsMenu = [{ label: "My Event" }, { label: "Shared Event" }];
  const [itemIndex, setItemIndex] = useState(0);
  const [pages, setPages] = useState<any>({});

  const dispatch: AppDispatch = useDispatch();
  const { myEvents, myEventLoading, pagination } = useSelector(
    (state: RootState) => state.events
  );

  useEffect(() => {
    dispatch(
      getMyEventListPage({
        size: 6,
        page: (pages?.page || 0) + 1,
        shared: itemIndex == 1,
      })
    );
  }, [dispatch, pages.page, itemIndex]);

  const onPageChange = (event: any) => {
    setPages(event);
  };

  const onTabChange = (e: any) => {
    if (e.index != itemIndex) {
      setItemIndex(e.index);
      setPages({ first: 0, page: 0 });
    }
  };

  return {
    onPageChange,
    onTabChange,
    events: myEvents,
    loading: myEventLoading,
    pagination,
    pages,
    itemsMenu,
    itemIndex,
  };
};
