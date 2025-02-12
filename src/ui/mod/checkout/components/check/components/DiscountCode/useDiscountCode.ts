import { useState } from "react";
import { DiscountCodeCompProps } from "./interfaces";

export const useDiscountCode = ({ onFinish }: DiscountCodeCompProps) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e: any) => {
    setCode(e.target.value);
  };

  const onApply = () => {
    console.log("Apply", code);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onFinish();
    }, 1000);
  };
  return { code, loading, onChange, onApply };
};
