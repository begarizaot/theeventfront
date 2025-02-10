import { Button } from "antd";

interface ButtonCompProps {
  htmlType?: "button" | "submit" | "reset";
  className?: string;
  lable?: string;
}

export const ButtonComp = ({
  htmlType = "button",
  className,
  lable,
}: ButtonCompProps) => {
  return (
    <Button
      type="primary"
      htmlType={htmlType}
      className={`w-full bg-transparent! border-1! border-white! rounded-3xl! py-4! font-bold! btnBackground hover:bg-white! hover:text-black! ${className}`}
    >
      {lable}
    </Button>
  );
};
