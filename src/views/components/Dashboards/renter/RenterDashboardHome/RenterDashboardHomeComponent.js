import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import carImg from "../../../../../assets/images/iris.png";
import userImg2 from "../../../../../assets/images/user-img-2.png";
import userImg3 from "../../../../../assets/images/user-img-3.png";
import userImg4 from "../../../../../assets/images/user-img-4.png";
import useRenterBookCountData from "../../../../../hooks/useRenterBookCountData";
import useRenterTodaysBookCar from "../../../../../hooks/useRenterTodaysBookCar";
import "./RenterDashboardHome.css";

const RenterDashboardHomeComponent = () => {
  const [renterTodaysBookCar, setRenterTodaysBookCar] =
    useRenterTodaysBookCar();
  const [renterBookCountData, setRenterBookCountData] =
    useRenterBookCountData();
  return (
    <div className="row g-0 h-100">
      <div className="col col-12 col-xl-8">
        <div className="content-wrapper px-2 px-md-3 px-xxl-5 py-3 py-md-4 border-end h-100">
          {/* start of bookings count cards */}
          <div className="row g-4 mb-4 flex-wrap">
            {/* upcoming bookings card */}
            <div className="col col-6 col-lg-4">
              <article className="upcoming-bookings-count-card d-md-flex justify-content-between align-items-center p-4 h-100">
                <div className="mb-2 mb-md-0">
                  <h5>Todays</h5>
                  <small>Bookings</small>
                </div>
                <h2 className="fw-bolder">
                  {renterBookCountData.todaysDataCount}
                </h2>
              </article>
            </div>
            {/* this month bookings card */}
            <div className="col col-6 col-lg-4">
              <article className="this-month-bookings-count-card d-md-flex justify-content-between align-items-center p-4 h-100">
                <div className="mb-2 mb-md-0">
                  <h5>This Month</h5>
                  <small>Bookings</small>
                </div>
                <h2 className="fw-bolder">
                  {renterBookCountData.currentMonthBookCount}
                </h2>
              </article>
            </div>
            {/* third bookings card */}
            <div className="col col-12 col-lg-4">
              <article className="total-bookings-count-card d-md-flex justify-content-between align-items-center p-4 h-100">
                <div className="mb-2 mb-md-0">
                  <h5>Total</h5>
                  <small>Bookings</small>
                </div>
                <h2 className="fw-bolder">
                  {renterBookCountData.totalBookCount}
                </h2>
              </article>
            </div>
          </div>
          {/* end of bookings count cards */}

          {/* start of scheduled bookings */}
          <div className="border">
            {/* title */}
            <div className="p-4 d-flex justify-content-between align-items-center border-bottom">
              <h5 className="fw-500">Todays Bookings</h5>
              <button className="p-2 border rounded-circle bg-transparent d-flex justify-content-center align-items-center">
                <BsThreeDotsVertical />
              </button>
            </div>
            {/* details */}
            {renterTodaysBookCar.map((data) => (
              <div className="p-4" key={data._id}>
                {/* car details */}
                <div className="d-flex">
                  <div className="cr-border flex-justify-align-center me-2 ">
                    <img
                      className="img-fluid book-car-image"
                      src={data.carImage}
                      alt="car thumbs"
                    />
                  </div>
                  {/* car thumb and model */}
                  <div className="flex-grow-1 d-md-flex justify-content-between">
                    <div className="mb-2 mb-md-0">
                      <h5 className="fw-500 mb-2">
                        {data.carMake} {data.carModel}
                      </h5>
                      <small className="car-book-status p-1 rounded fw-500">
                        {data.booktStatus}
                      </small>
                    </div>
                    {/* money limit */}
                    <div className="d-flex d-md-block book-money-title">
                      <h3>${data.totalAmountCost}</h3>
                      <button className="book-money-btn">
                        <BsThreeDotsVertical />
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="d-none d-md-block my-4" />
                {/* trip details */}
                <div className="d-md-flex mt-4 mt-md-0">
                  {/* trip start */}
                  <div className="trip-details-item d-flex justify-content-between d-md-block me-md-4">
                    <small>Trip Start</small>
                    <p className="fw-500">
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      }).format.apply(data?.tripStartDateTime)}
                    </p>
                  </div>
                  <hr className="my-2 d-md-none" />
                  {/* trip end */}
                  <div className="trip-details-item d-flex justify-content-between d-md-block me-md-4">
                    <small>Trip End</small>
                    <p className="fw-500">
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      }).format.apply(data.tripEndDateTime)}
                    </p>
                  </div>
                  <hr className="my-2 d-md-none" />
                  {/* trip start */}
                  <div className="trip-details-item d-flex justify-content-between d-md-block me-md-4">
                    <small>Delivery Location</small>
                    <p className="fw-500">{data.pickupAddress?.address}</p>
                  </div>
                  <hr className="my-2 d-md-none" />
                </div>
              </div>
            ))}
          </div>
          {/* end of scheduled bookings */}
        </div>
      </div>
      {/* <div className="d-none d-md-block col col-12 col-xl-4">
      
        <div className="content-wrapper px-2 px-md-3 px-xxl-5 py-3 py-md-4">
        
          <article className="d-flex align-items-start p-3 border mb-3">
            <img
              className="img-fluid border rounded-circle"
              src={userImg2}
              alt="user profile"
              width={40}
              height={40}
            />
            <div className="notification-card-detail ms-2">
              <p className="mb-2">
                <strong>Guy Hawkins</strong> accepted your bookings for{" "}
                <strong>Mercedez Benz GLA</strong>
              </p>
              <small>Today at 9:42 AM</small>
            </div>
          </article>
         
          <article className="d-flex align-items-start p-3 border mb-3">
            <img
              className="img-fluid border rounded-circle"
              src={userImg3}
              alt="user profile"
              width={40}
              height={40}
            />
            <div className="notification-card-detail ms-2">
              <p className="mb-2">
                Your boooking is confirmed for
                <strong>Mercedez Benz GLA</strong>
              </p>
              <small>Today at 9:42 AM</small>
            </div>
          </article>
     
          <article className="d-flex align-items-start p-3 border mb-3">
            <img
              className="img-fluid border rounded-circle"
              src={userImg4}
              alt="user profile"
              width={40}
              height={40}
            />
            <div className="notification-card-detail ms-2">
              <p className="mb-2">
                <strong>Guy Hawkins</strong>
                sent you message for booking of Mercedez Benz
                <strong>Mercedez Benz</strong>
              </p>
              <small>Today at 9:42 AM</small>
            </div>
          </article>
        </div>
      </div> */}
    </div>
  );
};

export default RenterDashboardHomeComponent;
