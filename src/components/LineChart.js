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
      title: {
        display: true,
        text: "Invoices",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
        footerColor: "#fff",
        footerFont: { weight: "bold" },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Days of the Week",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        grid: {
          color: "rgba(200, 200, 200, 0.5)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        grid: {
          color: "rgba(200, 200, 200, 0.5)",
        },
        ticks: {
          beginAtZero: true,
          stepSize: 5000,
        },
      },
    },
    legend: {
      position: "top",
      labels: {
        font: {
          size: 14,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
