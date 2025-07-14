import { FormatUSDLatino } from "../../../../../helpers";

interface AnalyticTextCompProps {
  data?: any;
}
export const AnalyticTextComp = ({ data }: AnalyticTextCompProps) => {
  return (
    <div className="bg-nav p-3! rounded-xl text-white! flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {/* <span className="pi pi-chart-line text-3xl rounded-2xl"></span> */}
        <p className="text-xl bebasNeue">Event Sales</p>
      </div>

      <h1 className="font-bold text-3xl">
        ${FormatUSDLatino(data?.totalBasePrice, 2) || "0.00"}
      </h1>
      <div className="grid gap-1">
        {(data?.ticketsGrouped ?? []).map((item: any, ind: any) => (
          <div className="flex items-center justify-between text-sm" key={ind}>
            <p>{item.title ?? ""}</p>
            <p>${FormatUSDLatino(item.totalValue, 2) ?? ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
