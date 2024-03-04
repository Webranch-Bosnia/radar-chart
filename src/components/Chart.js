import React from "react";
// NPM
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  Tooltip,
  RadialLinearScale,
  Filler,
} from "chart.js";
// Register chart tools that we gonna use through this chart
ChartJS.register(PointElement, LineElement, RadialLinearScale, Tooltip, Filler);

//
const RadarChart = () => {
  // Data
  const data = {
    labels: [
      ["Sales", "80/100"],
      ["Customer Support", "50/100"],
      ["Information Technology", "60/100"],
      ["Administration", "20/10"],
    ],
    datasets: [
      {
        data: [3.5, 6, 4, 1.7],
        borderWidth: 3,
        borderColor: ["#7b161a"],
        backgroundColor: "rgba(123, 22,	26, 0.3)",
      },
    ],
  };

  // Options
  const options = {
    scale: {
      min: 1,
      max: 6,
      ticks: {
        stepSize: 0.5,
      },
    },
    scales: {
      r: {
        // https://www.chartjs.org/docs/latest/axes/radial/
        angleLines: {
          color: "#7b161a",
        },
        grid: {
          color: "#7b161a",
        },

        pointLabels: {
          // https://www.chartjs.org/docs/latest/axes/radial/#point-labels
          color: "#7b161a",
          font: {
            size: 16,
          },
        },
        ticks: {
          // https://www.chartjs.org/docs/latest/axes/radial/#ticks
          color: "transparent",
          backdropColor: "transparent", // https://www.chartjs.org/docs/latest/axes/_common_ticks.html
        },
      },
    },
    plugins: {},
  };

  //
  return (
    <div
      style={{
        background: "#f5f3f3",
      }}
    >
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
