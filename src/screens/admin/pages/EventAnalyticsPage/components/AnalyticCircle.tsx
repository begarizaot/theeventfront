import { theme } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useHexToRgba } from "../../../../../hooks";
import { FormatUSDLatino } from "../../../../../helpers";

const { useToken } = theme;

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
  id: "centerTextPlugin",
  beforeDraw: (chart: any) => {
    const { width, height, ctx } = chart;
    const text = chart.config.options.plugins.centerText.text;
    const fontSize = chart.config.options.plugins.centerText.fontSize || 16;
    const fontColor =
      chart.config.options.plugins.centerText.color || "#ffffff";

    ctx.save();
    ctx.font = `bold ${fontSize}px "Bebas Neue", sans-serif`;
    ctx.fillStyle = fontColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, width / 2, height / 2);
    ctx.restore();
  },
};

ChartJS.register(centerTextPlugin);

interface AnalyticCircleCompProps {
  data?: any;
  loadingPdf?: boolean;
}

export const AnalyticCircleComp = ({
  data,
  loadingPdf,
}: AnalyticCircleCompProps) => {
  const { token } = useToken();
  const { hexToRgba } = useHexToRgba();

  const dataAnality = {
    labels: (data?.ticketsGrouped ?? [{ title: "" }]).map(
      (item: any) => item.title ?? ""
    ),
    datasets: [
      {
        label: "Quantity",
        data: (data?.ticketsGrouped ?? [{ quantity: data.totalQuantity }]).map(
          (item: any) => item.quantity ?? ""
        ),
        backgroundColor: (data?.ticketsGrouped ?? [1]).map((_: any, i: any) => {
          if (i === 0) return token.colorPrimary;
          const opacity = 1 - i * 0.5;
          return hexToRgba(token.colorPrimary, opacity);
        }),
      },
    ],
  };
  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      centerText: {
        text: `$${data.totalValue ?? ""}`,
        fontSize: 25,
      },
    },
  };

  return (
    <div className="bg-nav p-3! rounded-xl text-white! flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {/* <span
          className={`pi ${data.icon ?? "pi-chart-line"} text-3xl rounded-2xl`}
        ></span> */}
        <p className="text-xl bebasNeue">{data.type ?? ""}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 min-h-23">
        <div className="col-span-1 flex flex-col gap-1 ">
          {(data?.ticketsGrouped ?? []).map((item: any, ind: any) => (
            <div
              className="flex lg:grid items-center justify-between text-sm"
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
                <p>-</p>
                {!loadingPdf && (
                  <p>${FormatUSDLatino(item.totalValue, 2) ?? ""}</p>
                )}

                {loadingPdf && (
                  <p>Sold at ${FormatUSDLatino(item.price) ?? ""} each</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1 flex justify-center items-center max-h-40">
          <Doughnut data={dataAnality} options={options} />
        </div>
      </div>
    </div>
  );
};
