import { theEventApi } from "../../lib";
import { FirstUpperCase } from "../../helpers";
import { useMoment } from "../../hooks";

export const getListTeamAccess = (
  id_event?: any,
  sizePage = {
    page: 1,
    size: 10,
  },
  search = ""
) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<any>(
        `team-access/getListTeamAccess/${id_event}?size=${sizePage.size}&page=${
          sizePage.page
        }${search ? `&search=${search}` : ""}`
      );

      if (!data.status) return reject(data?.message);

      const res = (data.data ?? []).map((item: any) => {
        item.key = item.id;
        item.customer = `${FirstUpperCase(
          item.user_id?.firstName
        )} ${FirstUpperCase(item.user_id?.lastName)}`;
        item.teamRole = item?.type_role_id?.name;
        item.purchasedDate = useMoment(item.createdAt).format("DD/MM/YYYY");
        return item;
      });

      resolve({
        data: res,
        pagination: data.pagination,
      });

      resolve(data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const postCreateTeamAccess = (id_event: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<any>(
        `team-access/postCreateTeamAccess/${id_event}`,
        dataReq
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

export const putUpdateTeamAccess = (id_event: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.put<any>(
        `team-access/putUpdateTeamAccess/${id_event}`,
        dataReq
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
