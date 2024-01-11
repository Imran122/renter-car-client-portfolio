import React from "react";
import { Accordion } from "react-bootstrap";
import AllBookingDetails from "./AllBookingDetails";
import CarDefault from "../../../../../../assets/images/iris.png";
import DefaultUser from "../../../../../../assets/images/user_image.png";
import useSuperAdminBookingCarInfo from "../../../../../../hooks/useSuperAdminBookingCarInfo";
import "../AllBookings.css";

const BookingHeaderComponent = (props) => {
  const [adminDashboardBookingCarList, setAdminDashboardBookingCarList] =
    useSuperAdminBookingCarInfo();
  const {
    hostName,
    hostProfileImage,
    renterName,
    renterProfileImage,
    BookingList,
  } = props.adminDashboardBookingCarList;
  return (
    <>
      <div className="all-bookings-card" key={BookingList._id}>
        {/* title */}
        {/* details */}
        <div className="p-4">
          {/* car details */}
          <div className="d-flex">
            <div className="cr-border flex-justify-align-center me-2 ">
              <img
                className="img-fluid book-car-image"
                src={BookingList.carImage}
                alt="car thumbs"
              />
            </div>
            {/* car thumb and model */}
            <div className="flex-grow-1 d-md-flex justify-content-between">
              <div className="mb-2 mb-md-0">
                <h5 className="fw-500 mb-2">
                  {BookingList.carMake} {BookingList.carModel}
                </h5>
                <small className="car-book-status p-1 rounded fw-500">
                  {BookingList.booktStatus}
                </small>
              </div>
              {/* money limit */}
              <div className="d-flex d-md-block book-money-title">
                <h3>${BookingList.totalCostAll}</h3>
              </div>
            </div>
          </div>
          <hr className="d-none d-md-block my-4" />
          {/* trip details */}
          <div className="d-md-flex mt-4 mt-md-0">
            {/* trip start */}
            <div className="trip-details-item d-flex justify-content-between d-md-block me-md-4">
              <small>Trip Start</small>
              <p className="fw-500">{BookingList.tripStartDateTime}</p>
            </div>
            <hr className="my-2 d-md-none" />
            {/* trip end */}
            <div className="trip-details-item d-flex justify-content-between d-md-block me-md-4">
              <small>Trip End</small>
              <p className="fw-500">{BookingList.tripEndDateTime}</p>
            </div>
            <hr className="my-2 d-md-none" />
            {/* trip start */}
            <div className="trip-details-item trp-b-img d-flex justify-content-between d-md-block me-md-4">
              <small>Booked by</small>
              <p className="fw-500">
                {renterName}
                {renterProfileImage ? (
                  <img
                    src={renterProfileImage}
                    alt="booked user"
                    width="20px"
                  />
                ) : (
                  <img src={DefaultUser} alt="booked user" width="20px" />
                )}
              </p>
            </div>
            <hr className="my-2 d-md-none" />
            <div className="trip-details-item trp-b-img d-flex justify-content-between d-md-block me-md-4">
              <small>Hosted by</small>
              <p className="fw-500">
                {hostName}
                {hostProfileImage ? (
                  <img src={hostProfileImage} alt="hosted user" width="20px" />
                ) : (
                  <img src={DefaultUser} alt="hosted user" width="20px" />
                )}
              </p>
            </div>
            <hr className="my-2 d-md-none" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingHeaderComponent;
