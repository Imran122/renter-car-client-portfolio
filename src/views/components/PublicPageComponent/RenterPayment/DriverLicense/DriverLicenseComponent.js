import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import useAuth from "../../../../../hooks/useAuth";
import "../RenterPayment.css";
const DriverLicenseComponent = () => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#eaecf0",
      height: "60px",

      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "#eaecf0",
      },
    }),
  };

  //...........car registration state...............
  const optionsState = [
    { value: "Alaska", label: "Alaska", name: "carRegistrationState" },
    { value: "Arizona", label: "Arizona", name: "carRegistrationState" },
    { value: "Arkansas", label: "Arkansas", name: "carRegistrationState" },
    { value: "California", label: "California", name: "carRegistrationState" },
    { value: "Colorado", label: "Colorado", name: "carRegistrationState" },
    {
      value: "Connecticut",
      label: "Connecticut",
      name: "carRegistrationState",
    },
    { value: "Delaware", label: "Delaware", name: "carRegistrationState" },
    { value: "Florida", label: "Florida", name: "carRegistrationState" },
    { value: "Georgia", label: "Georgia", name: "carRegistrationState" },
    { value: "Hawaii", label: "Hawaii", name: "carRegistrationState" },
    { value: "Idaho", label: "Idaho", name: "carRegistrationState" },
    { value: "Illinois", label: "Illinois", name: "carRegistrationState" },
    { value: "Indiana", label: "Indiana", name: "carRegistrationState" },
    { value: "Iowa", label: "Iowa", name: "carRegistrationState" },
    { value: "Kansas", label: "Kansas", name: "carRegistrationState" },
    {
      value: "Kentucky[D]",
      label: "Kentucky[D]",
      name: "carRegistrationState",
    },
    { value: "Louisiana", label: "Louisiana", name: "carRegistrationState" },
    { value: "Maine", label: "Maine", name: "carRegistrationState" },
    { value: "Maryland", label: "Maryland", name: "carRegistrationState" },
    {
      value: "Massachusetts[D]",
      label: "Massachusetts[D]",
      name: "carRegistrationState",
    },
    { value: "Michigan", label: "Michigan", name: "carRegistrationState" },
    { value: "Minnesota", label: "Minnesota", name: "carRegistrationState" },
    {
      value: "Mississippi",
      label: "Mississippi",
      name: "carRegistrationState",
    },
    { value: "Missouri", label: "Missouri", name: "carRegistrationState" },
    { value: "Montana", label: "Montana", name: "carRegistrationState" },
    { value: "Nebraska", label: "Nebraska", name: "carRegistrationState" },
    { value: "Nevada", label: "Nevada", name: "carRegistrationState" },
    {
      value: "New Hampshire",
      label: "New Hampshire",
      name: "carRegistrationState",
    },
    { value: "New Jersey", label: "New Jersey", name: "carRegistrationState" },
    { value: "New Mexico", label: "New Mexico", name: "carRegistrationState" },
    { value: "New York", label: "New York", name: "carRegistrationState" },
    {
      value: "North Carolina",
      label: "North Carolina",
      name: "carRegistrationState",
    },
    {
      value: "North Dakota",
      label: "North Dakota",
      name: "carRegistrationState",
    },
    { value: "Oklahoma", label: "Oklahoma", name: "carRegistrationState" },
    { value: "Oregon", label: "Oregon", name: "carRegistrationState" },
    {
      value: "Pennsylvania[D]",
      label: "Pennsylvania[D]",
      name: "carRegistrationState",
    },
    {
      value: "Rhode Island",
      label: "Rhode Island",
      name: "carRegistrationState",
    },
    {
      value: "South Carolina",
      label: "South Carolina",
      name: "carRegistrationState",
    },
    {
      value: "South Dakota",
      label: "South Dakota",
      name: "carRegistrationState",
    },
    { value: "Tennessee", label: "Tennessee", name: "carRegistrationState" },
    { value: "Texas", label: "Texas", name: "carRegistrationState" },
    { value: "Utah", label: "Utah", name: "carRegistrationState" },
    { value: "Vermont", label: "Vermont", name: "carRegistrationState" },
    {
      value: "Virginia[D]",
      label: "Virginia[D]",
      name: "carRegistrationState",
    },
    { value: "Washington", label: "Washington", name: "carRegistrationState" },
    {
      value: "West Virginia",
      label: "West Virginia",
      name: "carRegistrationState",
    },
    { value: "Wisconsin", label: "Wisconsin", name: "carRegistrationState" },
    { value: "Wyoming", label: "Wyoming", name: "carRegistrationState" },
    {
      value: "District of Columbia",
      label: "District of Columbia",
      name: "carRegistrationState",
    },
  ];
  const handleType = (e) => {
    const field = e.name;
    const value = e.value;
    const newRentData = { ...rentCarData };
    newRentData[field] = value;
    setRentCarData(newRentData);
    //setSelectedOption(value);
  };
  //all car name
  const navigate = useNavigate();
  const { user, isLoading, setIsLoading, rentCarData, setRentCarData } =
    useAuth();

  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRentData = { ...rentCarData };
    newRentData[field] = value;
    setRentCarData(newRentData);
  };
  const submitCarBookForRentData = (e) => {
    const newdata = {
      ...rentCarData,
    };

    setRentCarData(newdata);
    navigate("/renter-pay/checkout", { replace: true });
  };

  return (
    <>
      <div className="renter-pay-container">
        {/* car upload page title */}
        <h3 className="fw-bold">Necessary informations for booking</h3>
        <p>
          Before you make a payment, we require necessary information such as
          your driver's license for the first trip.
        </p>

        <div className="renter-pay-content-container cc-border">
          {/* step count and title */}
          <div className="d-flex align-items-center cc-border-bottom p-4">
            <div className="p-3 rounded-circle cc-step-border flex-justify-align-center me-3">
              <h6>
                <span className="cc-step-color">2</span>/3
              </h6>
            </div>
            <div className="mt-3">
              <h5>
                <strong>Driver license informations</strong>
              </h5>
              <p>
                <strong>Next:</strong>{" "}
                <span className="cc-input-label">
                  Checkout and confirm booking
                </span>
              </p>
            </div>
          </div>

          {/* inputs */}
          <div className="input-container p-4">
            <form onSubmit={submitCarBookForRentData}>
              <div className="row g-3">
                {/* input */}
                <div className="col col-12">
                  <div className="input-wrapper">
                    <label className="fw-600 mb-2 cc-input-label form-label">
                      <strong>Driver license number</strong>
                    </label>
                    <input
                      placeholder="Enter your driver license number"
                      type="text"
                      className="cc-in form-control"
                      name="driverLicenseNumber"
                      onChange={handleOnType}
                    />
                  </div>
                </div>
                {/* input */}
                <div className="col col-12">
                  <div className="input-wrapper">
                    <label className="fw-600 mb-2 cc-input-label form-label">
                      <strong>State of registration</strong>
                    </label>
                    <Select
                      styles={customStyles}
                      onChange={handleType}
                      options={optionsState}
                    />
                  </div>
                </div>
                {/* input */}
                <div className="col col-12 col-md-6">
                  <div className="input-wrapper">
                    <label className="fw-600 mb-2 cc-input-label form-label">
                      <strong>Issue Date</strong>
                    </label>
                    <input
                      name="driverLicenseIssueDate"
                      onChange={handleOnType}
                      type="date"
                      className="cc-in form-control"
                    />
                  </div>
                </div>
                <div className="col col-12 col-md-6">
                  <div className="input-wrapper">
                    <label className="fw-600 mb-2 cc-input-label form-label">
                      <strong>Expiration date</strong>
                    </label>
                    <input
                      name="driverLicenseExpireDate"
                      onChange={handleOnType}
                      type="date"
                      className="cc-in form-control"
                    />
                  </div>
                </div>
                {/* input */}
                <div className="col col-12">
                  <div className="input-wrapper">
                    <label className="fw-600 mb-2 cc-input-label form-label">
                      <strong>Name on the driver license</strong>
                    </label>
                    <input
                      placeholder="Enter your name as it appeared in the driver license"
                      type="text"
                      className="cc-in form-control"
                      name="nameOnDriverLicense"
                      onChange={handleOnType}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="row g-3 mt-3">
              <div className="col col-6 col-md-4">
                <Link to="/renter-pay/insurance-info">
                  <button className="cr-rp-btn-back">Back</button>
                </Link>
              </div>
              <div className="col col-6 col-md-4">
                <button
                  onClick={submitCarBookForRentData}
                  type="submit"
                  className="button-style cr-rp-btn-continue"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverLicenseComponent;
