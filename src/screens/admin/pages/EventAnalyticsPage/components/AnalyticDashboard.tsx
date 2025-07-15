import { Progress, theme } from "antd";
const { useToken } = theme;

interface AnalyticDashboardProps {
  active: any;
  inActive: any;
  porcentage: any;
  loadingPdf?: boolean;
  ticket?: any[];
}

export const AnalyticDashboardComp = ({
  active,
  inActive,
  porcentage,
  loadingPdf = false,
  ticket = [],
}: AnalyticDashboardProps) => {
  const { token } = useToken();

  return (
    <div className="bg-nav p-3! rounded-xl text-white! flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {/* <span className="pi pi-chart-line text-3xl rounded-2xl"></span> */}
        <p className="text-xl bebasNeue">Event Check-ins</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
        <div className="col-span-1 flex flex-col gap-1 ">
          <div className="flex items-center justify-between text-sm">
            <p>Checked In</p>
            <p>
              {active ?? 0}/{inActive ?? 0}
            </p>
          </div>

          {loadingPdf &&
            (ticket ?? []).map((item: any, ind: any) => (
              <div
                className="flex items-center justify-between text-sm"
                key={ind}
              >
                <p>{item.title ?? ""}</p>
                <div className="flex items-center gap-2">
                  <span
                    className="pi pi-ticket text-xs"
                    style={{
                      color: token.colorPrimary,
                    }}
                  ></span>
                  <p>{item.quantity ?? ""}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="col-span-1 flex justify-center items-center ">
          <Progress
            type="dashboard"
            percent={Number(porcentage)}
            format={
              ((percent: number) => {
                return (
                  <div className="flex items-center justify-center">
                    <div className="bg-white font-bold bebasNeue rounded-full h-12 w-12 flex items-center justify-center text-xl">
                      {percent}%
                    </div>
                  </div>
                );
              }) as any
            }
            strokeColor={token.colorPrimary}
            trailColor="#ffffff"
            strokeWidth={15}
            gapDegree={170}
            strokeLinecap="butt"
          />
        </div>
      </div>
    </div>
  );
};
