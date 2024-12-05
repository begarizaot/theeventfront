import { theEventApi } from "../../../apis";

import {
  ticketTypeFailure,
  ticketTypeStart,
  ticketTypeSuccess,
} from "./ticketTypeSlices";

export const getListTicketTypeByEvent = (idEvent?: any) => {
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
