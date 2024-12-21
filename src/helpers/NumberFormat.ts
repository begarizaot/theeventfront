export const NumberFormat = (number: any, digits: any = 0) => {
  return Number(number).toLocaleString(navigator.language, {
    minimumFractionDigits: digits,
  });
};
