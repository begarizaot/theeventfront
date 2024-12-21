import { NumberFormat } from "../../../../../helpers";

interface DataCardProps {
  data: any;
}

export const DataCard = ({ data }: DataCardProps) => {
  const { label, value, currency } = data;
  return (
    <div className="bgCard flex flex-column p-2 border-round h-full">
      <p className="m-0">{label}</p>
      <h1 className="m-0 ml-auto mt-auto">
        {currency && <span>{currency}</span>}{" "}
        {currency ? NumberFormat(value, 2) : value}
      </h1>
    </div>
  );
};
