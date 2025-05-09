import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

import { AppDispatch, RootState } from "../../../../../store";
import { getMyOrders } from "../../../../../store/thunks";
import { useMoment } from "../../../../../hooks";

export const MyTicketsComp = () => {
  const dispatch: AppDispatch = useDispatch();
  const { ordersDate, loading } = useSelector(
    (state: RootState) => state.myOrders
  );

  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 gap-3">
      {loading &&
        [1, 2, 3].map((ind: any) => (
          <div className="col-span-1 h-50 lg:h-40!" key={ind}>
            <Skeleton.Node
              active
              className="bg-white/20 w-full! rounded-xl h-full!"
            />
          </div>
        ))}
      {!loading &&
        ordersDate?.map((order: any) => (
          <Link
            key={order.id}
            to={order?.url_pdf}
            target="_blank"
            className="col-span-1 bg-center rounded-xl shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url(${order?.event_id?.url_image})`,
            }}
          >
            <div className="grid grid-cols-2 h-50! lg:h-40! p-2 content-center gap-2">
              <div className="col-span-2 text-2xl bebasNeue">
                {order?.event_id?.name}
              </div>
              <div className="col-span-1">
                {useMoment(order?.event_id?.start_date).format("dddd, Do MMMM")}
              </div>
              <div className="col-span-1 text-right">ID: {order?.order_id}</div>
              <div className="col-span-1 mt-2">
                <p className="text-sm/1">Amount paid</p>
                <h1 className="font-bold text-2xl">${order.total_price}</h1>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};
