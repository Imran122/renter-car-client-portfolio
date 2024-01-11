import React from "react";
import { Link } from "react-router-dom";
import MyVehicleSellDetails from "./MyVehicleSellDetails";
import "../MyVehicles.css";

const HostMyVehicelsSellComponent = () => {
  return (
    <div className="row g-0">
      <div className="col col-12 col-xl-10">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          <div className="vehicles-button">
            <Link
              to={'/dashboard/my-vehicles'}
            >
              Rent Car List
            </Link>

            <Link
              to={'/dashboard/my-vehicles/sell-car-list'}
              className="active"
            >
              Sell Car List
            </Link>

            <h2>List of Sell Car List: </h2>
          </div>
          <MyVehicleSellDetails />
        </div>
      </div>
    </div>
  );
};

export default HostMyVehicelsSellComponent;
