import React from "react";
import "./SecondBar.css";

const SecondBar = () => {
  const menuItems = [
    { label: "Receivables", icon: "https://img.icons8.com/small/16/1A1A1A/download--v1.png" },
    { label: "Returns", icon: "https://img.icons8.com/ios/50/1A1A1A/circled-left-2.png" },
    { label: "Customers", icon: "https://img.icons8.com/ios-glyphs/30/1A1A1A/user--v1.png" },
    { label: "Payable", icon: "https://img.icons8.com/ios/50/1A1A1A/bank-card-back-side--v1.png" },
    { label: "Sales", icon: "https://img.icons8.com/material-rounded/24/1A1A1A/us-dollar.png" },
    { label: "Inventory", icon: "https://img.icons8.com/ios-filled/50/1A1A1A/menu--v6.png" },
    { label: "Imports", icon: "https://img.icons8.com/ios/50/1A1A1A/long-arrow-down.png" },
    { label: "Cutting Tickets", icon: "https://img.icons8.com/forma-regular/24/1A1A1A/price-tag.png" },
    { label: "EDI", icon: "https://img.icons8.com/material/24/1A1A1A/left-and-right-arrows.png" },
    { label: "Showroom", icon: "https://img.icons8.com/ios/50/1A1A1A/marker--v1.png" },
  ];

  return (
    <div className="bar">
   <div className="bar-item dashboard">
        <img src="https://img.icons8.com/ios/50/1A1A1A/speedometer.png" alt="Dashboard" className="icon" />
        <span className="label">Dashboard</span>
      </div>
       {menuItems.map((item) => (
        <div className="bar-item">
          <img src={item.icon} alt={item.label} className="icon" />
          <span className="label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SecondBar;
