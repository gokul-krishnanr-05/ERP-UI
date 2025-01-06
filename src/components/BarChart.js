import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Sales Forecast (This Week)",
        data: [50000, 55000, 60000, 62000, 58000, 59000, 61000],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Sales Forecast (Last Week)",
        data: [45000, 47000, 50000, 55000, 52000, 53000, 54000],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
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
          stepSize: 10000,
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto", paddingTop: "30px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
