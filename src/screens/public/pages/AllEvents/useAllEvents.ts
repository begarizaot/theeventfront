import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getEventListPage } from "../../../../store/slices";
import { AppDispatch, RootState } from "../../../../store";

export const useAllEvents = () => {
  const [pages, setPages] = useState<any>({});

  const dispatch: AppDispatch = useDispatch();
  const { events, loading, pagination } = useSelector(
    (state: RootState) => state.events
  );

  useEffect(() => {
    dispatch(getEventListPage({ size: 6, page: (pages?.page || 0) + 1 }));
  }, [dispatch, pages.page]);

  const onPageChange = (event: any) => {
    setPages(event);
  };

  return { onPageChange, events, loading, pagination, pages };
};
