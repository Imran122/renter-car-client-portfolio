import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import useUsersDetails from "../../../../../hooks/useUsersDetails";
import "../RenterPayment.css";
const RenterPayInsuranceComponent = () => {
  //all car name
  const { user, isLoading, setIsLoading, rentCarData, setRentCarData } =
    useAuth();
  //get data from localstorage

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("paymentinfo"));
    if (items) {
      setRentCarData(items);
    }
  }, []);

  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRentData = { ...rentCarData };
    newRentData[field] = value;
    setRentCarData(newRentData);
  };

  const [userSingleData, setUserSingleData] = useUsersDetails();
  const navigate = useNavigate();

  const submitCarBookForRentData = (e) => {
    let profileImage = userSingleData.profileImage;
    let firstname = userSingleData.firstname;

    const newdata = {
      ...rentCarData,
      profileImage,
      firstname,
    };

    setRentCarData(newdata);
    navigate("/renter-pay/driver-license-info", { replace: true });
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
                <span className="cc-step-color">1</span>/3
              </h6>
            </div>
            <div className="mt-3">
              <h5>
                <strong>Insurance informations</strong>
              </h5>
              <p>
                <strong>Next:</strong>{" "}
                <span className="cc-input-label">
                  Driver license informations
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
                      <strong>Insurance name</strong>
                    </label>
                    <input
                      placeholder="Enter insurance name"
                      type="text"
                      className="cc-in form-control"
                      name="insuranceName"
                      onChange={handleOnType}
                    />
                  </div>
                </div>
                {/* input */}
                <div className="col col-12">
                  <div className="input-wrapper">
                    <label className="fw-600 mb-2 cc-input-label form-label">
                      <strong>Insurance policy number</strong>
                    </label>
                    <input
                      placeholder="Enter insurance policy number"
                      type="text"
                      className="cc-in form-control"
                      name="insurancePolicyNumber"
                      onChange={handleOnType}
                    />
                  </div>
                </div>
                {/* input */}
                <div className="col col-12">
                  <div className="input-wrapper">
                    <label className="fw-600 mb-2 cc-input-label form-label">
                      <strong>Select Expire Date</strong>
                    </label>
                    <input
                      type="date"
                      className="cc-in form-control"
                      name="insuranceExpDate"
                      onChange={handleOnType}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="row g-3 mt-3">
              <div className="col col-6 col-md-4">
                <button
                  onClick={submitCarBookForRentData}
                  type="submit"
                  className="button-style cr-rp-btn-continue mt-3"
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

export default RenterPayInsuranceComponent;
