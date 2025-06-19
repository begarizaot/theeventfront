import { Image, Select } from "antd";
import { useMemo, useState } from "react";
import { ComDescription } from "../../../../../components";

interface ChairsCompProp {
  imgMap?: any;
  loading: boolean;
  seats: any[];
  onSelect?: (val: any) => void;
}

export const ChairsComp = ({
  imgMap,
  loading,
  seats,
  onSelect,
}: ChairsCompProp) => {
  const [visible, setVisible] = useState(false);

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
                      <ComDescription contenido={val?.description} />
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
                      onChange={(e) => onSelect?.({ id: val.id, value: e })}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div
          className="hidden sm:block h-70 w-70 bg-cover bg-center rounded-lg cursor-pointer hover:opacity-80 mt-8"
          onClick={() => setVisible(true)}
          style={{ backgroundImage: `url(${imgMap})` }}
        ></div>

        <Image
          className="hidden"
          rootClassName="w-full"
          src="error"
          fallback={imgMap ?? ""}
          preview={{
            visible: visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        />
      </div>
    </div>
  );
};
