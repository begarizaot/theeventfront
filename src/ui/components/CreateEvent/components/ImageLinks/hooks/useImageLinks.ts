import { useEffect, useState } from "react";

export const useImageLinks = ({ setInput, data, changeImage }: any) => {
  const [file, setFile] = useState<any>("");

  useEffect(() => {
    data.imageUrl && setFile(data.imageUrl);
  }, [data.imageUrl]);

  function handleChange(e: any) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setInput({ image: e.target.files[0] });
    changeImage && changeImage(e.target.files[0]);
  }

  return { file, handleChange };
};
