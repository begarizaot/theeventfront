// hooks/useBogotaTime.ts
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const useMoment = (date?: any) => {
  // Si se pasa una fecha, úsala. Si no, usa el momento actual
  const bogotaTime = dayjs(date || new Date()).tz('America/Bogota')
  return bogotaTime;
};
