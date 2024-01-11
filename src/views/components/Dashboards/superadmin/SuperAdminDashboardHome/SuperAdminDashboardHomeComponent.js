import React, { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import chartImg from "../../../../../assets/images/chart.png";
import useSuperAdminEarningData from "../../../../../hooks/useSuperAdminEarningData";
import { getCookie } from "../../../../../utilities/helper";
import CarBookRequestCardComponent from "./CarBookRequestCard/CarBookRequestCardComponent";
import EarningStatsComponent from "./EarningStats/EarningStatsComponent";
import MostBookedCarsComponent from "./MostBookedCars/MostBookedCarsComponent";

import "./SuperAdminDashboardHome.css";
Chart.register(...registerables);
const SuperAdminDashboardHomeComponent = () => {
  const [superAdminEarningData, setSuperAdminEarningData] =
    useSuperAdminEarningData();
  const [barChartData, setBarChartData] = useState([]);
  //fetch data from fajedb json file

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/admin-month-income-chart`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setBarChartData(data));
  }, []);
  //rent car ,sell car user count data
  const [adminRentSellUserData, setAdminRentSellUserData] = useState([]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API}/api/supedadmin-user-sellcar-rentcarcount`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${getCookie("token")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setAdminRentSellUserData(data));
  }, []);

  console.log("gggg", adminRentSellUserData);
  return (
    <div className="row g-0">
      <div className="col col-12 col-xl-8">
        <div className="not-dashboard-home-left-col border-end">
          {/* booking request card */}
          <div className="row g-4 mb-4 flex-wrap">
            {/* upcoming bookings card */}
            <div className="col col-6 col-lg-4">
              <article className="upcoming-bookings-count-card d-md-flex justify-content-between align-items-center p-4 h-100">
                <div className="mb-2 mb-md-0">
                  <h5>Total</h5>
                  <small>Sell Car</small>
                </div>
                <h2 className="fw-bolder">
                  {adminRentSellUserData.TotalSellCar}
                </h2>
              </article>
            </div>
            {/* this month bookings card */}
            <div className="col col-6 col-lg-4">
              <article className="this-month-bookings-count-card d-md-flex justify-content-between align-items-center p-4 h-100">
                <div className="mb-2 mb-md-0">
                  <h5>Total</h5>
                  <small>Rent Car</small>
                </div>
                <h2 className="fw-bolder">
                  {adminRentSellUserData.TotalRentCar}
                </h2>
              </article>
            </div>
            {/* third bookings card */}
            <div className="col col-12 col-lg-4">
              <article className="total-bookings-count-card d-md-flex justify-content-between align-items-center p-4 h-100">
                <div className="mb-2 mb-md-0">
                  <h5>Total</h5>
                  <small>User</small>
                </div>
                <h2 className="fw-bolder">
                  {adminRentSellUserData.TotalUserData}
                </h2>
              </article>
            </div>
          </div>
          {/* <CarBookRequestCardComponent /> */}

          <div className="mt-4 row row-cols-1 row-cols-xl-1 g-x-md-1 g-x-xxl-4">
            {/* chart col */}
            <div className="col">
              <div className="content-wrapper cr-border text-center mb-4 mb-xl-0">
                <Bar
                  data={{
                    labels: barChartData.map((Data) => Data.Month),

                    datasets: [
                      {
                        label: "MonthLy Earning ",
                        data: barChartData.map((Data) => Data.monthlyEarning),
                        fill: false,
                        tension: 0.1,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                      /*   {
                            label: "Quantity",
                            data: [47, 52, 67, 58, 9, 50],
                            backgroundColor: "orange",
                            borderColor: "red",
                          }, */
                    ],
                  }}
                  height={400}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        suggestedMax: 45,
                        ticks: {
                          beginAtZero: true,
                          stepSize: 500,
                        },
                      },
                    },
                    legend: {
                      labels: {
                        fontSize: 25,
                      },
                    },
                  }}
                />
              </div>
            </div>
            {/* earning statistics col */}
            <div className="col mt-4">
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

export default SuperAdminDashboardHomeComponent;
