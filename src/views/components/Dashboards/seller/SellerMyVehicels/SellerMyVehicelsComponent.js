import React from "react";
import MyVehicleDetails from "./MyVehicleDetails";
import "./MyVehicles.css";

const SellerMyVehicelsComponent = () => {
  return (
    <div className="row g-0">
      <div className="col col-12 col-xl-10">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          <MyVehicleDetails />
        </div>
      </div>
    </div>
  );
};

export default SellerMyVehicelsComponent;
