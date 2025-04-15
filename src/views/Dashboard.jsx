import React from "react";

const Dashboard = ({ sidebarToggle }) => {
  return <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>Home</div>;
};

export default Dashboard;
