export function useParseNumbers(data: any) {
  if (!data) return {};
  const result: any = {};
  for (const key in data) {
    const value = data[key];
    if (
      typeof value === "string" &&
      value.trim() !== "" &&
      !isNaN(Number(value))
    ) {
      result[key] = Number(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}
