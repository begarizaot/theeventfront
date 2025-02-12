import { ItemValue } from "./itemValue";

export const TotalValuesComp = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="col-span-1 border-b-2">
        <ItemValue title="General" price={65} quantity={2} icon="pi-ticket" />
      </div>
      <div className="col-span-1 border-b-2">
        <ItemValue title="Subtotal" price={130} />
        <ItemValue title="Service Fee" price={10.40} />
        <ItemValue title="Processing Fee" price={4.50} />
      </div>
      <div className="col-span-1">
        <ItemValue title="Total" price={144.90} />
      </div>
    </div>
  );
};
