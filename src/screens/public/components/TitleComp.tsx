interface TitleCompProps {
  title: string;
}

const styles = {
  background:
    "linear-gradient(180deg, rgba(238, 119, 35, 0) 50%, var(--ant-color-primary) 100%)",
};

export const TitleComp = ({ title }: TitleCompProps) => {
  return (
    <p
      className="px-2 py-1 text-[10px] rounded-4xl uppercase"
      style={{ ...styles }}
    >
      {title}
    </p>
  );
};
