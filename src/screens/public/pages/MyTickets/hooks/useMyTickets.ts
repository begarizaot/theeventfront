import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store";
import { getListMyTicket } from "../../../../../store/slices";


export const useMyTickets = () => {
    const [pages, setPages] = useState<any>({});

    const dispatch: AppDispatch = useDispatch();
    const { mytickets, loading, pagination } = useSelector(
      (state: RootState) => state.ticket
    );
  
    useEffect(() => {
      dispatch(getListMyTicket({ size: 6, page: (pages?.page || 0) + 1 }));
    }, [dispatch, pages.page]);
  
    const onPageChange = (event: any) => {
      setPages(event);
    };
  
    return { onPageChange, data:mytickets, loading, pagination, pages };
}
