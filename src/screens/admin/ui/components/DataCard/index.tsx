interface DataCardProps {
  label: string;
  value: any;
}

export const DataCard = ({ label, value }: DataCardProps) => {
  return (
    <div className="bgCard flex flex-column p-2 border-round h-full">
      <p className="m-0">{label}</p>
      <h1 className="m-0 ml-auto mt-auto">{value}</h1>
    </div>
  );
};
