import React, { useState } from "react";

import "./MyBookings.css";
import AddReview from "./AddReview";

const RenterBookingCardComponent = (props) => {
  const {
    _id,
    userId,
    firstname,
    booktStatus,
    carMake,
    carModel,
    carRegistrationState,
    chargePlanName,
    deliveryCharges,
    insuranceName,
    driverLicenseExpireDate,
    driverLicenseIssueDate,
    insuranceExpDate,
    tripStartDateTime,
    tripEndDateTime,
    driverLicenseNumber,
    insurancePolicyNumber,
    nameOnDriverLicense,
    pickupAddress,
    dropupAddress,
    hoursTotal,
    rentCharges,
    totalAmountCost,
    carImage,
    profileImage,
  } = props.myBookingCarData;
  let startDate = new Date(tripStartDateTime);
  let enddate = new Date(tripEndDateTime);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* start of scheduled bookings */}
      <div className="cr-border cr-booking-card">
        {/* title */}
        {/* details */}
        <div className="p-4">
          {/* car details */}
          <div className="d-flex">
            <div className="cr-border me-2 book-car-image">
              <img
                className="img-fluid"
                src={carImage}
                alt="car thumbs"
              />
            </div>
            {/* car thumb and model */}
            <div className="flex-grow-1 d-md-flex justify-content-between">
              <div className="mb-2 mb-md-0">
                <h5 className="fw-500 mb-2">
                  {carMake} {carModel}
                </h5>
                <small className="car-book-status p-1 rounded fw-500">
                  {booktStatus}
                </small>
              </div>

              <div className="d-flex d-md-block book-money-title">
                <h3>${totalAmountCost}</h3>
              </div>
              {/* money limit */}
              <AddReview id={_id} booktStatus={booktStatus} />
              {/*  add revire */}
            </div>
          </div>
          <hr className="d-none d-md-block my-4" />
          {/* trip details */}
          <div className="d-md-flex mt-4 mt-md-0">
            {/* trip start */}
            <div className="trip-details-item d-flex justify-content-between d-md-block me-md-4">
              <small>Trip Start</small>
              <p className="fw-500">{startDate.toLocaleString()}</p>
            </div>
            <hr className="my-2 d-md-none" />
            {/* trip end */}
            <div className="trip-details-item d-flex justify-content-between d-md-block me-md-4">
              <small>Trip End</small>
              <p className="fw-500">{enddate.toLocaleString()}</p>
            </div>
            <hr className="my-2 d-md-none" />
            {/* trip start */}
            <div className="trip-details-item d-flex justify-content-between d-md-block me-md-4">
              <small>Delivery Location</small>
              <p className="fw-500 mx-3">{pickupAddress.address}</p>
            </div>
            <hr className="my-2 d-md-none" />
          </div>
        </div>
      </div>
      {/* end of scheduled bookings */}
    </>
  );
};

export default RenterBookingCardComponent;
