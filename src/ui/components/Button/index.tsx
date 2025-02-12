import { Button } from "antd";

interface ButtonCompProps {
  htmlType?: "button" | "submit" | "reset";
  className?: string;
  lable?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export const ButtonComp = ({
  htmlType = "button",
  className,
  lable,
  disabled,
  loading,
  onClick,
}: ButtonCompProps) => {
  return (
    <Button
      type="primary"
      htmlType={htmlType}
      className={`
        w-full 
        bg-transparent! 
        border-1! 
        border-white! 
        rounded-3xl! 
        py-4! 
        font-bold! 
        focus:bg-white! 
        focus:text-black! 
        disabled:text-white/60! 
        disabled:hover:bg-white/60! 
        hover:bg-white! 
        hover:text-black! 
        ${className}`}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
    >
      {lable}
    </Button>
  );
};
