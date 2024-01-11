import React from "react";
import EarningStatsCardComponent from "../EarningStatsCard/EarningStatsCardComponent";
import "./EarningStats.css";
import useHostEarningData from "../../../../../../hooks/useHostEarningData";
const EarningStatsComponent = () => {
  const [hostEraningData, setHostEraningData] = useHostEarningData();

  return (
    <div className="row g-2 g-xxl-3">
      <div className="col col-3">
        <EarningStatsCardComponent
          startTime="Today's"
          endTime="Yesterdays"
          startEarning={hostEraningData.todaysAllCost}
          endEarning={hostEraningData.yesterdaysAllCost}
        />
      </div>
      <div className="col col-3">
        <EarningStatsCardComponent
          startTime="This Weeks"
          endTime="Last Weeks"
          startEarning={hostEraningData.RunningWeeklyCost}
          endEarning={hostEraningData.previousWeeklyCost}
        />
      </div>
      <div className="col col-3">
        <EarningStatsCardComponent
          startTime="This Months"
          endTime="Last Months"
          startEarning={hostEraningData.currentMonthCost}
          endEarning={hostEraningData.previousMonthCost}
        />
      </div>
      <div className="col col-3">
        <EarningStatsCardComponent
          startTime="This Years"
          endTime="Last Years"
          startEarning={hostEraningData.runningYearCost}
          endEarning="0"
        />
      </div>
      {/*      <div className="col col-12">
        <div
          className="content-wrapper border d-flex justify-content-between align-items-center"
          style={{ padding: 20 }}
        >
          <div className="">
            <h4 className="mb-1">$8693</h4>
            <small>Current balance</small>
          </div>
          <button className="button-style primary-button cr-button">
            Withdraw
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default EarningStatsComponent;
