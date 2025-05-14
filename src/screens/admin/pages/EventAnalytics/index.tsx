import { AnalyticCircleComp, AnalyticDashboardComp, AnalyticTextComp } from "./components";

export const EventAnalyticsPage = () => {
  return (
    <div className="px-4 sm:px-6 py-3 grid">
      <div className="col-span-1 flex items-center justify-between">
        <h1 className="text-2xl font-bold bebasNeue">Event Analytics</h1>
      </div>
      <div className="col-span-1 grid grid-cols-1 lg:grid-cols-2 mt-2 gap-3">
        <div className="col-span-1">
          <AnalyticTextComp />
        </div>
        <div className="col-span-1">
          <AnalyticCircleComp />
        </div>
        <div className="col-span-1">
          <AnalyticDashboardComp />
        </div>
      </div>
    </div>
  );
};
