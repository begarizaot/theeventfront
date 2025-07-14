// hooks/useBogotaTime.ts
import dayjs from "dayjs";
import moment from "moment-timezone";

export const useMoment = (date?: any) => {
  // Si se pasa una fecha, úsala. Si no, usa el momento actual
  const bogotaTime = date
    ? moment.tz(date, "America/Bogota")
    : moment.tz("America/Bogota");
  return dayjs(bogotaTime.format("YYYY-MM-DD HH:mm:ss"));
};
