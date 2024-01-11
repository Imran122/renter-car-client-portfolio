import React from "react";
import CarBookRequestCardComponent from "./CarBookRequestCard/CarBookRequestCardComponent";
import "./SellerDashboardHome.css";

const SellerDashboardHomeComponent = () => {
  return (
    <div className="row g-0">
      <div className="col col-12 col-xl-8">
        <div className="not-dashboard-home-left-col border-end">
          {/* booking request card */}
          <CarBookRequestCardComponent />
        </div>
      </div>

      <div className="col col-12 col-xl-4">
        
      </div>
    </div>
  );
};

export default SellerDashboardHomeComponent;
