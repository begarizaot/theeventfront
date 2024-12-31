import { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js";

import { useEventId } from "../../../hooks";
import { getAnalyticsEvent } from "../../../../../store/slices";

export const useAnalytics = () => {
  const { eventId } = useEventId();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    ChartJS.register({
      id: "doughnutLabel",
      afterDatasetsDraw(chart: any) {
        const { ctx, options } = chart;
        const text = options.plugins.doughnutLabel.text;

        const centerX = chart.getDatasetMeta(0)?.data[0]?.x || 0;
        const centerY = chart.getDatasetMeta(0)?.data[0]?.y || 0;

        // Configurar el texto
        ctx.save();
        ctx.font = `bold 16px Arial`;
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, centerX, centerY);
        ctx.restore();
      },
    });

    // setChartData(data);
  }, []);

  useEffect(() => {
    eventId && fetchAnalytics();
  }, [eventId]);

  const onDoughnutLabel = (context: any) => {
    return {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        doughnutLabel: {
          text: context,
        },
      },
      cutout: "65%",
    };
  };

  const fetchAnalytics = async () => {
    try {
      const data = await getAnalyticsEvent(eventId);
      console.log(data);
      renderChart(data);
    } catch (error) {}
  };

  const renderChart = (dataReq: any) => {
    const res = dataReq.map((res: any) => {
      const dataChart = {
        labels: res?.data?.map((data: any) => data?.ticket_type_name),
        datasets: [
          {
            data: res?.data?.map(
              (data: any) => data?.ticket_type_price || data?.ticket_type_total
            ),
            backgroundColor: res?.data?.map(
              (data: any) => `#${data?.ticket_type_color}`
            ),
            hoverBackgroundColor: res?.data?.map(
              (data: any) => `#${data?.ticket_type_color}`
            ),
          },
        ],
      };

      return { ...res, dataChart };
    });

    setChartData(res);
  };

  return { chartData, onDoughnutLabel };
};
