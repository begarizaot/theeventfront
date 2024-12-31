export const RemoveCharacters = (text: any) => {
  return `${text}`.replace(/[^\w]/gi, "");
};
