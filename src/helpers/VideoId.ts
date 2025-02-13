export const VideoId = (url: any = "") => {
  if (!url) return;
  const rx =
    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  return url?.match(rx)[1];
};
