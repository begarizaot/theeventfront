import "./styles.scss";
interface InputIconProps {
  children?: React.ReactNode;
  icon?: string;
  className?: string;
}

export const InputIcon = ({ icon, children, className }: InputIconProps) => {
  return (
    <div
      className={`InputIconCont w-full border-round-3xl flex align-items-center py-2 px-3 border-1 ${className}`}
    >
      {icon && <span className={`pi ${icon} textPrimary`}></span>}
      {children}
    </div>
  );
};
