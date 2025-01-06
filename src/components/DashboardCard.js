import React from "react";
import './DashboardCard.css';
import {
  FaExclamationTriangle,
  FaWallet,
  FaMoneyBillWave,
  FaChartLine,
  FaImage,
  FaShippingFast,
  FaBook,
  FaClipboardList
} from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="cards-grid">
      <div className="dashboard-card">
        <div className="card-header">
          <FaMoneyBillWave className="icon" />
          <h3>Total Revenue</h3>
        </div>
        <p>$32,350.00</p>
      </div>
      <div className="dashboard-card">
        <div className="card-header">
          <FaChartLine className="icon" />
          <h3>Total Expenses</h3>
        </div>
        <p>$6,000.00</p>
      </div>
      <div className="dashboard-card">
        <div className="card-header">
          <FaWallet className="icon" />
          <h3>Accounts Receivable</h3>
        </div>
        <p>$56,034.00</p>
      </div>
      <div className="dashboard-card">
        <div className="card-header">
          <FaClipboardList className="icon" />
          <h3>Accounts Payable</h3>
        </div>
        <p>$67,083.00</p>
      </div>
      <div className="dashboard-card">
        <div className="card-header">
          <FaImage className="icon" />
          <h3>Item Missing Image</h3>
        </div>
        <p>3,478</p>
      </div>
      <div className="dashboard-card">
        <div className="card-header">
          <FaExclamationTriangle className="icon" />
          <h3>Items Missing FOB Costs</h3>
        </div>
        <p>237</p>
      </div>
      <div className="dashboard-card">
        <div className="card-header">
          <FaShippingFast className="icon" />
          <h3>PO Items Missing Costs</h3>
        </div>
        <p>160</p>
      </div>
      <div className="dashboard-card">
        <div className="card-header">
          <FaBook className="icon" />
          <h3>Booked</h3>
        </div>
        <p>0/$0.00</p>
      </div>
    </div>
  );
};

export default Dashboard;
