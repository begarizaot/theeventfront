import { useState } from "react";

export const useImageUpload = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const beforeUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setPreview(e.target.result);
      setFile(file);
    };
    reader.readAsDataURL(file);
    return false;
  };

  return { preview, file, beforeUpload };
};
