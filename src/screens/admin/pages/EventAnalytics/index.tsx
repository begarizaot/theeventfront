import {
  AnalyticCircleComp,
  AnalyticDashboardComp,
  AnalyticTextComp,
} from "./components";
import { useEventAnalytics } from "./useEventAnalytics";

export const EventAnalyticsPage = () => {
  const { dataAnalityc } = useEventAnalytics();

  return (
    <div className="px-4 sm:px-6 py-3 grid">
      <div className="col-span-1 flex items-center justify-between">
        <h1 className="text-2xl font-bold bebasNeue">Event Analytics</h1>
      </div>
      <div className="col-span-1 grid grid-cols-1 lg:grid-cols-2 mt-2 gap-3">
        {dataAnalityc?.eventSales && (
          <div className="col-span-2">
            <AnalyticTextComp data={dataAnalityc?.eventSales} />
          </div>
        )}
        {dataAnalityc?.eventSales &&
          (dataAnalityc?.eventSales?.ticketData ?? []).map(
            (item: any, ind: any) => (
              <div className="col-span-1" key={ind}>
                <AnalyticCircleComp data={item} />
              </div>
            )
          )}
        {dataAnalityc.scanStats && (
          <div className="col-span-1">
            <AnalyticDashboardComp
              active={dataAnalityc.scanStats.totalScanned}
              inActive={dataAnalityc.scanStats.totalTickets}
              porcentage={dataAnalityc.scanStats.percentageScanned}
            />
          </div>
        )}
      </div>
    </div>
  );
};
