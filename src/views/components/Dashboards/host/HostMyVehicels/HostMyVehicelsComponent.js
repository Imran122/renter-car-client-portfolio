import React from "react";
import { Route, Routes } from "react-router-dom";
import HostMyVehicelsRentComponent from "./RentCarList/HostMyVehicelsRentComponent";
import HostMyVehicelsSellComponent from "./SellCarList/HostMyVehicelsSellComponent";
import "./MyVehicles.css";

const HostMyVehicelsComponent = () => {
  return (
    <div className="row g-0">
      <div className="col col-12 col-xl-10">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          <Routes>
              <Route
                index
                element={<HostMyVehicelsRentComponent />}
              />
              <Route
                path="sell-car-list"
                element={<HostMyVehicelsSellComponent />}
              />
            </Routes>
        </div>
      </div>
    </div>
  );
};

export default HostMyVehicelsComponent;
