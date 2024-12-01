import { useState } from "react";

export const useScanner = () => {
  const [dataScanner, setDataScanner] = useState("");

  const handleScanner = (data: any) => {
    console.log(data);
    setDataScanner(data);
  };

  return { dataScanner, handleScanner };
};
