import { theEventApi } from "../../lib";

export const getTeamTypeRol = () => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<any>(
        `team-type-role/getTeamTypeRol`
      );

      if (!data.status) return reject("Error al cargar los datos");

      const res = ((data?.data as any) ?? []).map((country: any) => ({
        label: `${country?.name}`,
        value: country?.id || "",
      }));

      resolve(res);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};
