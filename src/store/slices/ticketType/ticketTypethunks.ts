import { theEventApi } from "../../../apis";

import {
  ticketTypeFailure,
  ticketTypeStart,
  ticketTypeSuccess,
} from "./ticketTypeSlices";

// GETS
export const getListTicketTypeByEvent = (idEvent: any) => {
  return async (dispatch: any) => {
    dispatch(ticketTypeStart());
    try {
      const { data } = await theEventApi.get(
        `ticket-type/getListTicketTypeByEvent/${idEvent}`
      );

      if (!data.status) {
        return dispatch(ticketTypeFailure(data.message));
      }

      dispatch(
        ticketTypeSuccess({ data: data.data, pagination: data.pagination })
      );
    } catch (error) {
      dispatch(ticketTypeFailure("Failed to fetch ticket types"));
    }
  };
};

// POSTS
export const postValidateTicketEvent = (idEvent: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post(
        `ticket-type/postValidateTicketEvent/${idEvent}`,
        dataReq
      );
      if (!data.status) {
        return reject(data.message);
      }
      resolve(data);
    } catch (error) {
      reject("Failed to validate ticket, please try again later");
    }
  });
};
