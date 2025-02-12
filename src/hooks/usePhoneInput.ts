import { useState } from "react";

const formatPhoneNumber = (value: any) => {
  if (!value) return "";

  // Remover todo lo que no sea dígito
  const cleaned = value.replace(/\D/g, "");

  // Limitar la longitud a 10 dígitos
  const limited = cleaned.slice(0, 10);

  // Aplicar formato (999) 999-9999
  const match = limited.match(/^([2-9]{1}[0-9]{2})([0-9]{3})([0-9]{4})?$/);

  if (match) {
    return `(${match[1]}) ${match[2]}${match[3] ? "-" + match[3] : ""}`;
  }

  return limited;
};

const usePhoneInput = (initialValue = "") => {
  const [value, setValue] = useState(formatPhoneNumber(initialValue));

  const handleChange = (event: any) => {
    const formattedValue = formatPhoneNumber(event.target.value);
    console.log(formattedValue)
    setValue(formattedValue);
  };

  const onReset = () => {
    setValue("");
  };

  return { value, onChange: handleChange, onReset, maxLength: 14 };
};

export default usePhoneInput;
