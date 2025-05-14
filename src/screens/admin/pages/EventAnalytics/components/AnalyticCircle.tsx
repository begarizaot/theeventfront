import { theme } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useHexToRgba } from "../../../../../hooks";

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

export const AnalyticCircleComp = () => {
  const { token } = useToken();
  const { hexToRgba } = useHexToRgba();

  const data = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: [1, 2, 3, 4].map((_, i) => {
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
        text: "$100.000.00",
        fontSize: 25,
      },
    },
  };

  return (
    <div className="bg-nav p-3! rounded-xl text-white! flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="pi pi-chart-line text-3xl rounded-2xl"></span>
        <p className="text-xl bebasNeue">Event Comp</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 min-h-23">
        <div className="col-span-1 flex flex-col gap-1 ">
          <div className="flex items-center justify-between text-sm">
            <p>Number of tickets Sold</p>
            <p>$1.00</p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <p>Ticket Price</p>
            <p>$1.00</p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center max-h-40">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
