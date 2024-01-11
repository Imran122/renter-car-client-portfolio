import React from "react";
import { Link } from "react-router-dom";
import MyVehicleDetails from "./MyVehicleDetails";
import "../MyVehicles.css";

const HostMyVehicelsRentComponent = () => {
  return (
    <div className="row g-0">
      <div className="col col-12 col-xl-10">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          <div className="vehicles-button">
            <Link
              to={'/dashboard/my-vehicles'}
              className="active"
            >
              Rent Car List
            </Link>

            <Link
              to={'/dashboard/my-vehicles/sell-car-list'}
            >
              Sell Car List
            </Link>

            <h2>List of Rent Car List: </h2>
          </div>
          <MyVehicleDetails />
        </div>
      </div>
    </div>
  );
};

export default HostMyVehicelsRentComponent;
