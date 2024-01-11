import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./MostBookedCarsCard.css";

const MostBookedCarsCardComponent = (props) => {
  const {
    rentCarId,
    carUploadPersonHostId,
    booktStatus,
    firstname,
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
  } = props.hostBookingCarList;
  return (
    <article className="most-booked-cars-card border d-flex align-items-center mb-3">
      {/* booked cars card thumb */}
      <div className="most-booked-cars-card-thumb rounded-circle border d-flex justify-content-center align-items-center">
        <img className="img-fluid" src={carImage} alt="mercedes benz" />
      </div>
      {/* booked cars card details */}
      <div>
        {/* rating */}
        <p className="most-booked-cars-rating d-inline-block p-1 fw-500 rounded">
          <AiFillStar />
          <span className="mx-1">3</span>
          <span>(54 trips)</span>
        </p>
        {/* car & model */}
        <h4 className="fw-500 most-booked-cars-title my-2">{carMake}</h4>
        <p className="most-booked-cars-model">{carModel}</p>
      </div>
    </article>
  );
};

export default MostBookedCarsCardComponent;
