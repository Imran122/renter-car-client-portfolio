import React from "react";
import chartImg from "../../../../../assets/images/chart.png";
import CarBookRequestCardComponent from "./CarBookRequestCard/CarBookRequestCardComponent";
import EarningStatsComponent from "./EarningStats/EarningStatsComponent";
import MostBookedCarsComponent from "./MostBookedCars/MostBookedCarsComponent";

import "./HostDashboardHome.css";

const HostDashboardHomeComponent = () => {
  return (
    <div className="row g-0">
      <div className="col col-12 col-xl-8">
        <div className="not-dashboard-home-left-col border-end">
          {/* booking request card */}

          <CarBookRequestCardComponent />

          <div className="mt-4 row row-cols-1 row-cols-xl-1 g-x-md-1 g-x-xxl-4">
            <div className="col">
              <div className="content-wrapper">
                <EarningStatsComponent />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col col-12 col-xl-4">
        <div className="not-dashboard-home-right-col">
          <MostBookedCarsComponent />
        </div>
      </div>
    </div>
  );
};

export default HostDashboardHomeComponent;
