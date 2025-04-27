import { theme } from "antd";
const { useToken } = theme;

interface TextPrimaryProps {
  label?: any;
  className?: string;
}

export const TextPrimary = ({ label, className }: TextPrimaryProps) => {
  const { token } = useToken();

  return (
    <span className={`${className}`} style={{ color: token.colorPrimary }}>
      {label}
    </span>
  );
};
