interface Props {
  data: any[];
}

export const ListSelectsComp = ({ data }: Props) => {
  return (
    <div className="flex lg:flex-col gap-2">
      {data?.map((item, index) => (
        <div className="flex justify-between items-center gap-2" key={index}>
          <h1 className="font-bold text-sm">{item.name} <span className="text-xs hidden">(1,2)</span></h1>
          <p className="text-lg font-bold"><span className="text-sm">{item.quantity}x</span> ${item.price}</p>
        </div>
      ))}
    </div>
  );
};
