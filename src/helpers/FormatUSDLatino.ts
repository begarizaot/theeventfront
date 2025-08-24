export const FormatUSDLatino = (value: any, digits = 0) => {
  if (typeof value !== "number") {
    value = parseFloat(value);
  }

  if (isNaN(value)) return "";

  // Convertimos a string usando formato estándar y luego reemplazamos
  const formatted = value
    .toLocaleString("de-DE", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: digits,
    })
    .replace("$", "")
    .replace(/,/g, "#")
    .replace(/\./g, ",")
    .replace(/#/g, ".");

  return `${formatted}`;
};
