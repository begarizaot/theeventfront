// hooks/useBogotaTime.ts
import { useMemo } from "react";
import moment from "moment-timezone";

export const useMoment = (date?: any) => {
  const bogotaTime = useMemo(() => {
    // Si se pasa una fecha, úsala. Si no, usa el momento actual
    return date
      ? moment.tz(date, "America/Bogota")
      : moment.tz("America/Bogota");
  }, [date]);

  return bogotaTime;
};
