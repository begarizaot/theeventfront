import { Select } from "antd";

interface Props {
  data: any[];
}

export const ListTicketsComp = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {data?.map((item, index) => (
        <div className="flex justify-between" key={index}>
          <div>
            <h1 className="font-bold text-sm">
              {item.name} <span className="text-lg">${item.price}</span>
            </h1>
            {item.description && (
              <p className="htmlStyle">{item.description}</p>
            )}
          </div>

          <Select
            placeholder="0"
            className="w-20 sm:w-30 selectStyle"
            options={[
              { label: "0", value: 0 },
              { label: "1", value: 1 },
              { label: "2", value: 2 },
            ]}
          />
        </div>
      ))}
    </div>
  );
};
