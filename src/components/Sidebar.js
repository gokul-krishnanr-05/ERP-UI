import React from "react";
import "./Sidebar.css"

const Sidebar = () => {
  const menuItems = [
    { label: "Company Snapshot" },
    { label: "Open Order Report" },
    { label: "Cart & Sold Lookup" },
    { label: "Inventory Snap Shot" },
    { label: "Balance to Sales Summary" },
    { label: "Period Comparison Report" },
    { label: "Style Cost Report (IS Sales)" },
    { label: "Shipping /Receiving Log" },
    { label: "Style Availability by Date" },
    { label: "Purchase Order Report" },
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <img
            src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/analytics-circle-blue-1024.png"
            alt="Logo"
            className="sidebar-logo"
          />
          <div>
            <h2 className="sidebar-title">Reports</h2>
          </div>
        </div>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li className="menu-item">
              <span className="label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
