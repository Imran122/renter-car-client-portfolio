import React from "react";
import { BsSpeedometer } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuth from "../../../../../../hooks/useAuth";

const CarRents = () => {
  const { user, isLoading, setIsLoading, rentCarData, setRentCarData } =
    useAuth();
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRentData = { ...rentCarData };
    newRentData[field] = value;
    setRentCarData(newRentData);
  };
  const submitCarData = (e) => {};

  return (
    <>
      {/* step count and title */}
      <div className="d-flex align-items-center cc-border-bottom p-4">
        <div className="p-3 rounded-circle cc-step-border flex-justify-align-center me-3">
          <h6>
            <span className="cc-step-color">5</span>/7
          </h6>
        </div>
        <div className="mt-3">
          <h5>Rental Charges</h5>
          <p>
            <strong>Next:</strong>{" "}
            <span className="cc-input-label">Upload Document</span>
          </p>
        </div>
      </div>

      {/* inputs */}
      <div className="input-container p-4">
        <form onSubmit={submitCarData}>
          <div className="row g-3">
            <div className="col col-12">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Plan name</strong>
                </label>
                <select
                  name="chargePlanName"
                  className="cc-form-select cc-form-select-h form-select"
                  onChange={handleOnType}
                >
                  <option defaultValue="">Select Plan</option>
                  <option defaultValue="Hourly">Hourly</option>
                  <option defaultValue="Daily">Daily</option>
                  <option defaultValue="Weekly">Weekly</option>
                  <option defaultValue="Monthly">Monthly</option>
                </select>
              </div>
            </div>
            <div className="col col-12">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Charges</strong>
                </label>
                <input
                  placeholder="$800"
                  name="rentCharges"
                  type="number"
                  className="cc-in form-control"
                  onChange={handleOnType}
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Mileage allowance</strong>
                </label>
                <div className="mb-3 cc-in-g input-group">
                  <span className="bg-transparent cc-g-in input-group-text">
                    <BsSpeedometer />
                  </span>
                  <input
                    placeholder="80"
                    name="milageAllowence"
                    type="number"
                    className="ps-0 border-start-0 cc-g-in form-control"
                    onChange={handleOnType}
                  />
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Delivery Charges</strong>
                </label>
                <div className="mb-3 cc-in-g input-group">
                  <span className="bg-transparent cc-g-in input-group-text">
                    $
                  </span>
                  <input
                    placeholder="60"
                    name="deliveryCharges"
                    type="number"
                    className="ps-0 border-start-0 cc-g-in form-control"
                    onChange={handleOnType}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col col-6 col-md-3">
              <Link to="/dashboard/rent-car-upload/availability">
                <button className="cc-back-btn">Back</button>
              </Link>
            </div>
            <div className="col col-6 col-md-3">
              <Link to="/dashboard/rent-car-upload/documents">
                <button
                  className="button-style cc-continue-btn ms-4"
                  type="submit"
                  onClick={() => submitCarData()}
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CarRents;
