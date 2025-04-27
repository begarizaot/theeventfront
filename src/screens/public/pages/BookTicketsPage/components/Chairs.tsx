import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Select } from "antd";
import { useMemo } from "react";

interface ChairsCompProp {
  loading: boolean;
  seats: any[];
  onSelect?: (val: any) => void;
}

export const ChairsComp = ({ loading, seats, onSelect }: ChairsCompProp) => {
  const useSelectOptions = (max: number): any[] => {
    return useMemo(() => {
      return Array.from({ length: max + 1 }, (_, i) => ({
        value: i,
        label: i.toString(),
      }));
    }, [max]);
  };

  return (
    <div className="bgCard p-3 rounded-xl h-full overflow-auto flex flex-col">
      <div className="grid">
        <h1 className="text-base font-bold">Select your seats</h1>

        <div className="grid gap-2 mt-2">
          {!loading &&
            seats.map((val) => (
              <div className="col-span-1" key={val.id}>
                <div className="grid grid-cols-5">
                  <div className="col-span-4">
                    <h1 className="font-bold">{val.title}</h1>
                    {val?.description && (
                      <BlocksRenderer content={val?.description || []} />
                    )}
                  </div>
                  <div className="col-span-1 flex items-center">
                    <Select
                      placeholder="Quantity"
                      className="customSelect w-full"
                      value={val.select ?? 0}
                      options={useSelectOptions(
                        (val.stock < val.limit ? val.stock : val.limit) || 0
                      )}
                      onChange={(e) =>
                        onSelect?.({ id: val.id, value: e })
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
