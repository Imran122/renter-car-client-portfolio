import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../../../hooks/useAuth";

const CarInsurance = () => {
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
            <span className="cc-step-color">3</span>/7
          </h6>
        </div>
        <div className="mt-3">
          <h5>Insurance</h5>
          <p>
            <strong>Next:</strong>{" "}
            <span className="cc-input-label">Car availability</span>
          </p>
        </div>
      </div>

      {/* inputs */}
      <div className="input-container p-4">
        <form onSubmit={submitCarData}>
          <div className="row g-3">
            {/*  name */}
            <div className="col col-12">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Insurance Name</strong>
                </label>
                <input
                  placeholder="Insurance Name"
                  name="carInsuranceName"
                  type="text"
                  className="cc-in form-control"
                  onChange={handleOnType}
                />
              </div>
            </div>
            {/*  name */}

            <div className="col col-12">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Policy Number</strong>
                </label>
                <input
                  placeholder="123-456-78910"
                  name="policyNumber"
                  type="text"
                  className="cc-in form-control"
                  onChange={handleOnType}
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Issue Date</strong>
                </label>
                <input
                  name="insuranceIssueDate"
                  type="date"
                  className="cc-in form-control"
                  onChange={handleOnType}
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="input-wrapper">
                <label className="fw-600 mb-2 cc-input-label form-label">
                  <strong>Expire Date</strong>
                </label>
                <input
                  name="insuranceExpireDate"
                  type="date"
                  className="cc-in form-control"
                  onChange={handleOnType}
                />
              </div>
            </div>
          </div>
        </form>

        <div className="row g-3 mt-3">
          <div className="col col-6 col-md-3">
            <Link to="/dashboard/rent-car-upload/feature">
              <button className="cc-back-btn">Back</button>
            </Link>
          </div>
          <div className="col col-6 col-md-3">
            <Link to="/dashboard/rent-car-upload/availability">
              <button
                type="submit"
                onClick={() => submitCarData()}
                className="button-style cc-continue-btn ms-4"
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarInsurance;
