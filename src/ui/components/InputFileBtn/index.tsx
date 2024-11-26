import { Button } from "primereact/button";
import { useRef } from "react";

interface InputFileBtnProps {
  label?: string;
  icon?: string;
  handleChange: (event: any) => void;
}

export const InputFileBtn = ({
  handleChange,
  label = "Upload a file",
  icon = "pi pi-upload",
}: InputFileBtnProps) => {
  const hiddenFileInput = useRef<any>(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <Button
        label={label}
        icon={icon}
        outlined
        className="border-round-3xl outlinedBtn text-sm"
        type="button"
        onClick={handleClick}
      />
      <input
        type="file"
        onChange={handleChange} // ADDED
        ref={hiddenFileInput}
        accept="image/*"
        style={{ display: "none" }}
      />
    </>
  );
};
