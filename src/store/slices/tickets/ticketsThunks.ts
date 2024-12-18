import { AppDispatch } from "../..";
import { theEventApi } from "../../../apis";
import {
  myTicketFailure,
  myTicketStart,
  myTicketSuccess,
  selectTicket,
} from "./ticketSlices";

export const getListMyTicket = (req?: any) => {
  const { size = 3, page = 1 } = req || {};
  return async (dispatch: AppDispatch) => {
    dispatch(myTicketStart());
    try {
      const { data } = await theEventApi.get<any>(
        `ticket/getListMyTicket?size=${size}&page=${page}`
      );

      if (!data.status) {
        return dispatch(myTicketFailure(data.message));
      }

      dispatch(
        myTicketSuccess({ data: data.data, pagination: data.pagination })
      );
    } catch (error) {
      dispatch(myTicketFailure("Failed to fetch events"));
    }
  };
};

export const getTicketDetail = (idTicket?: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch(myTicketStart());
    try {
      const { data } = await theEventApi.get(`ticket/getDetailMyTicket/${idTicket}`);

      if (!data.status) {
        return dispatch(myTicketFailure(data.message));
      }

      dispatch(selectTicket(data.data));
    } catch (error) {
      dispatch(myTicketFailure("Failed to fetch events"));
    }
  };
};
