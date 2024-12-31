import { useEffect, useState } from "react";
import convertToPngAndUpload from "../../../../../../helpers/ConvertToPng";

export const useImageLinks = ({ setInput, data, changeImage }: any) => {
  const [file, setFile] = useState<any>("");

  useEffect(() => {
    data.imageUrl && setFile(data.imageUrl);
  }, [data.imageUrl]);

  async function handleChange(e: any) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setInput({ image: await convertToPngAndUpload(e.target.files[0]) });
    changeImage && changeImage(await convertToPngAndUpload(e.target.files[0]));
  }

  return { file, handleChange };
};
