import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../../../../hooks/useAuth";
import "./CarAvailability.css";

const CarAvailability = () => {
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
            <span className="cc-step-color">4</span>/7
          </h6>
        </div>
        <div className="mt-3">
          <h5>Car availablity</h5>
          <p>
            <strong>Next:</strong>{" "}
            <span className="cc-input-label">Rental charges</span>
          </p>
        </div>
      </div>

      {/* inputs */}
      <div className="input-container p-4">
        <Form onSubmit={submitCarData}>
          <div className="row g-3">
            <div className="col col-12 col-md-4">
              <div className="form-check radio-container p-0 m-0">
                <input
                  className="form-check-input radio-input"
                  type="radio"
                  id="exampleRadios1"
                  name="carAvailability"
                  defaultValue="alwaysAvailable"
                  onChange={handleOnType}
                />
                <label
                  className="form-check-label d-block p-4 cc-radio-label"
                  htmlFor="exampleRadios1"
                >
                  My car is always available
                </label>
              </div>
            </div>
            <div className="col col-12 col-md-4">
              <div className="form-check radio-container p-0 m-0">
                <input
                  className="form-check-input radio-input"
                  type="radio"
                  id="exampleRadios2"
                  name="carAvailability"
                  defaultValue="weeklyAvailable"
                  onChange={handleOnType}
                />
                <label
                  className="form-check-label d-block p-4 cc-radio-label"
                  htmlFor="exampleRadios2"
                >
                  My car is available on weekends only
                </label>
              </div>
            </div>
            <div className="col col-12 col-md-4">
              <div className="form-check radio-container p-0 m-0">
                <input
                  className="form-check-input radio-input"
                  type="radio"
                  id="exampleRadios3"
                  name="carAvailability"
                  defaultValue="ClanderAvailable"
                  onChange={handleOnType}
                />
                <label
                  className="form-check-label d-block p-4 cc-radio-label"
                  htmlFor="exampleRadios3"
                >
                  My car is available based on calendar
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="cc-a-title">My car is available for</h4>
            <div className="row g-3">
              {/* input */}
              <div className="col col-12 col-md-3">
                <Form.Group className="input-wrapper">
                  <Form.Label className="fw-600 mb-2 cc-input-label">
                    <strong>From</strong>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    className="cc-in"
                    name="carAvailabeDateStart"
                    onChange={handleOnType}
                  />
                </Form.Group>
              </div>
              {/* input */}
              <div className="col col-12 col-md-3">
                <Form.Group className="input-wrapper">
                  <Form.Label className="fw-600 mb-2 cc-input-label">
                    <strong>To</strong>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    className="cc-in"
                    name="carAvailabeDateEnd"
                    onChange={handleOnType}
                  />
                </Form.Group>
              </div>
              {/* input */}
              <div className="col col-12 col-md-3">
                <Form.Group className="input-wrapper">
                  <Form.Label className="fw-600 mb-2 cc-input-label">
                    <strong>Start time</strong>
                  </Form.Label>
                  <Form.Control
                    type="time"
                    className="cc-in"
                    name="carAvailabeTimeStart"
                    onChange={handleOnType}
                  />
                </Form.Group>
              </div>
              {/* input */}
              <div className="col col-12 col-md-3">
                <Form.Group className="input-wrapper">
                  <Form.Label className="fw-600 mb-2 cc-input-label">
                    <strong>End time</strong>
                  </Form.Label>
                  <Form.Control
                    type="time"
                    className="cc-in"
                    name="carAvailabeTimeEnd"
                    onChange={handleOnType}
                  />
                </Form.Group>
              </div>
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col col-6 col-md-3">
              <Link to="/dashboard/rent-car-upload/insurance">
                <button className="cc-back-btn">Back</button>
              </Link>
            </div>
            <div className="col col-6 col-md-3">
              <Link to="/dashboard/rent-car-upload/rents">
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
        </Form>
      </div>
    </>
  );
};

export default CarAvailability;
