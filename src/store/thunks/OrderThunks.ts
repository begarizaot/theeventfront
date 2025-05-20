import { AppDispatch } from "..";
import { FirstUpperCase, GroupedTickets } from "../../helpers";
import { useMoment } from "../../hooks";
import { theEventApi } from "../../lib";
import {
  myOrdersFailure,
  myOrdersStart,
  myOrdersSuccess,
} from "../slices/OrdersSlices";

interface paymentRes {
  data: DataRes;
  status: boolean;
  message: string;
}

export interface DataRes {
  id: string;
  client_secret: string;
}

export const getSendMail = (idOrder: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<any>(
        `order/getSendMail/${idOrder}`
      );

      if (!data.status) {
        reject(data.message);
        return;
      }

      resolve(data.message);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const getMyOrders = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(myOrdersStart());
    try {
      const { data } = await theEventApi.get<any>(`order/getMyOrders`);

      if (!data.status)
        return dispatch(myOrdersFailure("Error al cargar los datos"));

      dispatch(myOrdersSuccess(data.data));
    } catch (error) {
      dispatch(myOrdersFailure("Error al cargar los datos"));
    }
  };
};

export const getAllOrders = (
  idOrder: any,
  sizePage = {
    page: 1,
    size: 10,
  },
  search = ""
) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<any>(
        `order/getAllOrders/${idOrder}?size=${sizePage.size}&page=${
          sizePage.page
        }${search ? `&search=${search}` : ""}`
      );

      if (!data.status) {
        reject(data.message);
        return;
      }

      const res = (data.data ?? []).map((item: any) => {
        item.key = item.id;
        item.customer = `${FirstUpperCase(
          item.users_id?.firstName
        )} ${FirstUpperCase(item.users_id?.lastName)}`;
        item.phone = `${item.users_id?.country_id?.code}${item.users_id?.phoneNumber}`;
        item.total = `${item.base_price}`;
        item.tickets = GroupedTickets(item.tickets_id)
          .map((item: any) => `${item.quantity ?? ""} ${item.title ?? ""}`)
          .join(", ");
        item.discountCode = item.event_discount_code_id?.name ?? "";
        item.purchasedDate = useMoment(item.createdAt).format("DD/MM/YYYY");
        item.table = (item.tickets_id ?? [])
          .map((item: any) => `${item.table ?? ""}`)
          .filter((item: any) => item !== "")
          .join(", ");
        return item;
      });

      resolve({
        data: res,
        pagination: data.pagination,
      });
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const getRefundOrder = (idEvent: any, idOrder: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<any>(
        `order/getRefundOrder/${idEvent}/${idOrder}`
      );

      if (!data.status) {
        reject(data.message);
        return;
      }

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const postCreatePayment = (dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<paymentRes>(
        `order/postCreatePayment`,
        dataReq
      );

      if (!data.status) {
        reject(data.message);
        return;
      }

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const postCreateOrder = (dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<paymentRes>(
        `order/postCreateOrder`,
        dataReq
      );

      if (!data.status) {
        reject(data.message);
        return;
      }

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};
