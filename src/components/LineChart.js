import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "This Week",
        data: [10000, 15000, 17500, 20000, 15000, 18000, 22000],
        borderColor: "#1E90FF",
        backgroundColor: "rgba(30, 144, 255, 0.2)",
        tension: 0.4,
        pointBorderColor: "#1E90FF",
        pointBackgroundColor: "#fff",
        pointRadius: 6,
        fill: true,
      },
      {
        label: "Last Week",
        data: [9000, 14000, 17000, 16000, 12000, 15000, 19000],
        borderColor: "#FF6347",
        backgroundColor: "rgba(255, 99, 71, 0.2)",
        tension: 0.4,
        pointBorderColor: "#FF6347",
        pointBackgroundColor: "#fff",
        pointRadius: 6,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Days of the Week",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales",
        },
        ticks: {
          beginAtZero: true,
          stepSize: 5000,
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto", paddingTop: "30px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
