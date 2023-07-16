import React from "react";

const Dashboardlayout = ({ children }) => {
  return (
    <div>
      <div>Sidebar</div>
      {children}
    </div>
  );
};

export default Dashboardlayout;
