import { Button, Empty, Skeleton, Spin } from "antd";
import {
  AnalyticCircleComp,
  AnalyticDashboardComp,
  AnalyticTextComp,
} from "./components";
import { useEventAnalytics } from "./useEventAnalytics";
import { useState } from "react";

export const EventAnalyticsPage = () => {
  const { isLoading, dataAnalityc, eventShared, handleDownloadPDF } =
    useEventAnalytics();

  const [isLoadingPdf, setIsLoadingPdf] = useState(false);

  return (
    <>
      {/* <Spin spinning={isLoadingPdf} fullscreen size="large" /> */}
      <div className="px-4 sm:px-6 py-3 grid">
        <div className="col-span-1 flex items-center justify-between">
          <h1 className="text-2xl font-bold bebasNeue">Event Analytics</h1>

          {!isLoading && (
            <Button
              className="rounded-3xl! btnStyle"
              onClick={() => {
                setIsLoadingPdf(true);
                // setTimeout(() => {
                //   handleDownloadPDF(
                //     "eventAnalytics",
                //     eventShared?.name
                //   ).finally(() => {
                //     setIsLoadingPdf(false);
                //   });
                // }, 200);
              }}
            >
              Download PDF
            </Button>
          )}
        </div>
        {!isLoading && !dataAnalityc?.eventSales && (
          <div className="col-span-1 h-60 flex items-center justify-center">
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              classNames={{ description: "text-white!" }}
              className="m-2!"
            />
          </div>
        )}
        {isLoading && (
          <div className="col-span-1 grid grid-cols-1 lg:grid-cols-2 mt-2 gap-3">
            <div className="col-span-2 h-10">
              <Skeleton.Node
                active
                className="bg-white/20 w-full! rounded-xl h-full!"
              />
            </div>
            <div className="col-span-2 h-40">
              <Skeleton.Node
                active
                className="bg-white/20 w-full! rounded-xl h-full!"
              />
            </div>
            {[1, 2, 3, 4].map((item: any) => (
              <div className="col-span-1 h-54" key={item}>
                <Skeleton.Node
                  active
                  className="bg-white/20 w-full! rounded-xl h-full!"
                />
              </div>
            ))}
          </div>
        )}
        {!isLoading && (
          <div
            className="col-span-1 grid grid-cols-1 lg:grid-cols-2 mt-2 gap-3"
            id="eventAnalytics"
          >
            <h1 className="col-span-1 lg:col-span-2 text-2xl font-bold bebasNeue text-center ">
              {eventShared?.name}
            </h1>
            {dataAnalityc?.eventSales && (
              <div className="col-span-1 lg:col-span-2">
                <AnalyticTextComp data={dataAnalityc?.eventSales} />
              </div>
            )}
            {dataAnalityc?.eventSales &&
              (dataAnalityc?.eventSales?.ticketData ?? []).map(
                (item: any, ind: any) => (
                  <div className="col-span-1" key={ind}>
                    <AnalyticCircleComp data={item} loadingPdf={isLoadingPdf} />
                  </div>
                )
              )}
            {dataAnalityc.scanStats && (
              <div className="col-span-1">
                <AnalyticDashboardComp
                  active={dataAnalityc.scanStats.totalScanned}
                  inActive={dataAnalityc.scanStats.totalTickets}
                  porcentage={dataAnalityc.scanStats.percentageScanned}
                  loadingPdf={isLoadingPdf}
                  ticket={dataAnalityc.scanStats.ticketSales}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
