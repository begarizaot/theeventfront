import { NumberFormat } from "../../../../helpers";
import { useAnalytics } from "./hooks/useAnalytics";

import { Chart } from "primereact/chart";

export const Analytics = () => {
  const { chartData, onDoughnutLabel } = useAnalytics();
  return (
    <div className="grid justify-content-center">
      {chartData.map((data: any, index) => (
        <div className="col-6 sm:col-6 text-center" key={index}>
          <Chart
            type={data.type}
            data={data.dataChart}
            options={onDoughnutLabel(
              `${data.currency ? data.currency : ""} ${NumberFormat(
                data.value,
                data.currency ? 2 : 0
              )}`
            )}
            className="w-full flex justify-content-center"
          />
          <h1 className="text-xs sm:text-base font-semibold m-0 mt-2">{data.label}</h1>
        </div>
      ))}
    </div>
  );
};
