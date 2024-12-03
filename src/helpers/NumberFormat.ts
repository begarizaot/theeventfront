export const NumberFormat = (number: any, digits: any = 0) => {
  return number.toLocaleString(navigator.language, {
    minimumFractionDigits: digits,
  });
};
