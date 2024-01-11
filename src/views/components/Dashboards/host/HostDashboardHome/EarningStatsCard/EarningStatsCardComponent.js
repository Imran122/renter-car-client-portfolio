import React from "react";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import "./EarningStatsCard.css";

const EarningStatsCardComponent = ({
  startTime,
  endTime,
  startEarning,
  endEarning,
}) => {
  return (
    <article className="earning-stat-card border">
      <div className=" mb-3">
        <div className="d-flex justify-content-between align-items-top">
          <h4 className="mb-1 fs-4">${startEarning}</h4>

          {/* startEarn > endEarn ? rise : fall */}
          {Number(startEarning) > Number(endEarning) ? (
            <p className="earning-stat-card-icon-rise flex-justify-align-center rounded-circle">
              <AiOutlineRise />
            </p>
          ) : (
            <p className="earning-stat-card-icon-fall flex-justify-align-center rounded-circle">
              <AiOutlineFall />
            </p>
          )}
        </div>
        <small>{startTime} earning</small>
      </div>
      <hr style={{ zIndex: -1 }} />
      <div className="">
        <h4 className="mb-1 fs-4">${endEarning}</h4>
        <small>{endTime} earning</small>
      </div>
    </article>
  );
};

export default EarningStatsCardComponent;
