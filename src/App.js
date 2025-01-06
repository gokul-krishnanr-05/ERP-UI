import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardCard from "./components/DashboardCard";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import "./styles.css";
import SecondBar from "./components/SecondBar";


const App = () => {
  return (
<>
        <Navbar />
        <SecondBar/>
        <div className="app-container">
        <Sidebar/>
        <main className="main-container">
        <div className="content">
        
            <DashboardCard/>
      
          <div className="charts-grid">
            <div className="line-chart">
              <LineChart />
            </div>
            <div className="bar-chart">
              <BarChart />
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
  
};

export default App;
