import { AppDispatch } from "../..";
import { theEventApi } from "../../../apis";
import {
  teamAccessFailure,
  teamAccessStart,
  teamAccessSuccess,
} from "./teamAccessSlice";

// GET
export const getTeamTypeRoles = () => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get(`team-type-role/getTeamTypeRoles`);
      if (!data.status) {
        return reject(data.message);
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getTeamAccessList = (idEvent?: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch(teamAccessStart());
    try {
      const { data } = await theEventApi.get(
        `team-access/getTeamAccessList/${idEvent}`
      );

      if (!data.status) {
        return dispatch(teamAccessFailure());
      }

      dispatch(teamAccessSuccess({ data: data.data }));
    } catch (error) {
      dispatch(teamAccessFailure());
    }
  };
};
// -------------------------------------------------------------

// POST
export const postCreateTeamAccess = (idEvent: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post(
        `team-access/postCreateTeamAccess/${idEvent}`,
        dataReq
      );
      if (!data.status) {
        return reject(data.message);
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

// -------------------------------------------------------------

// PUT
export const putUpdateTeamAccess = (idEvent: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.put(
        `team-access/putUpdateTeamAccess/${idEvent}`,
        dataReq
      );
      if (!data.status) {
        return reject(data.message);
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
// -------------------------------------------------------------

// DELETE
export const delRemoveTeamAccess = (idEvent: any, idTicket: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.delete(
        `team-access/delRemoveTeamAccess/${idEvent}/${idTicket}`
      );
      if (!data.status) {
        return reject(data.message);
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

// -------------------------------------------------------------
