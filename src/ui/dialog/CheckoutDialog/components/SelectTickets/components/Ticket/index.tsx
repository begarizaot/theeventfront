import { memo } from "react";
import { ArrowRight } from "../../../../../../icons";
import { NumberFormat } from "../../../../../../../helpers";

interface TicketProps {
  data: any[];
  freeTicket: any;
  onSelected: (ev: any) => void;
}

export const Ticket = memo(({ data, freeTicket, onSelected }: TicketProps) => {
  return (
    <div className="grid h-full align-content-start overflow-auto">
      {data?.map((value) => {
        const showCapacity =
          !freeTicket && (value.max_capacity <= 0 || value.soldOut);
        return (
          <div className="col-12" key={value?.id}>
            <div className="grid">
              <div className="col-2 lg:col-1 flex align-items-center">
                <ArrowRight color={`#${value.color || "#ff0000"}`} />
              </div>
              <div className="col-8 lg:col-9">
                <div className="flex align-items-center gap-2">
                  <p className="m-0 text-sm">{value?.name}</p>
                  <span className="font-bold text-lg">
                    ${NumberFormat(value?.price)}
                  </span>
                </div>
                <div className="text-sm flex flex-column sm:block">
                  {value?.description
                    ?.split("\n")
                    .map((item: string, index: number) => (
                      <span key={index} className="lowercase">
                        {item}
                      </span>
                    ))}
                </div>
              </div>
              <div className="col-2 flex align-items-center relative">
                {showCapacity && (
                  <div className="absolute bgPrimary px-2 py-1 left-0 z-2 border-round w-full text-center">
                    <span className="text-sm pointer-events-none">
                      Sold out
                    </span>
                  </div>
                )}
                <select
                  className="selectStyle h-2rem w-4rem bg-transparent text-white text-center border-round bgBorder"
                  onChange={(ev) => {
                    const quantity = ev.target.value;
                    onSelected({ ...value, quantity: Number(quantity) });
                  }}
                  disabled={showCapacity}
                >
                  {[
                    ...Array(
                      freeTicket
                        ? 8
                        : value.max_capacity > value.event_capacity
                        ? value.event_capacity + 1
                        : value.max_capacity + 1
                    ).keys(),
                  ].map((_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});
