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
        barThickness: 10, 
        barPercentage: 0.5, 
      },
      {
        label: "Sales Forecast (Last Week)",
        data: [45000, 47000, 50000, 55000, 52000, 53000, 54000],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        barThickness: 10, 
        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales Forecast",
        font: {
          size: 20,
          weight: "bold",
        },
        padding: {
          bottom: 15,
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
          text: "Sales (in USD)",
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
          stepSize: 10000,
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

  return (
    <div style={{ width: "80%", margin: "0 auto", paddingTop: "30px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
