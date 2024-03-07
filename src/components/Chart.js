import React, { useEffect, useState } from "react";
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
  const [metaScore, setMetaScore] = useState({ labes: [], datasets: [] })
  const readCookie = () => {
    let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)metaScore\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    return cookieValue.slice(1, -1);
  };

  useEffect(() => {
    const metaScoreTmp = readCookie();
    const meta = JSON.parse(metaScoreTmp)

    if (!metaScore.datasets.data) {
      const labels = Object.entries(meta).map(([key, value]) => {
        const newValue = value * 10
        return [key, `${newValue} / 100`]
      })
      const data = Object.keys(meta).map((v, i) => {
        return meta[v]
      })
      setMetaScore({
        labels,
        datasets: [
          {
            data,
            borderWidth: 3,
            borderColor: ["#7b161a"],
            backgroundColor: "rgba(123, 22,	26, 0.3)",
          },
        ],
      })
    }
  }, [metaScore.datasets.data])
  // Options
  const options = {
    scale: {
      min: 1,
      max: 10,
      ticks: {
        stepSize: 1,
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
      <Radar data={metaScore} options={options} />
    </div>
  );
};

export default RadarChart;
