import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsClock, BsFillCheckCircleFill } from "react-icons/bs";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";
import useAuth from "../../../../../../hooks/useAuth";
import "./CarTripBook.css";

const SellCarTripBook = () => {
  const { checkDetailsSellCar, setCheckDetailsSellCar } = useAuth();

  return (
    <div className="trip-book-container d-lg-flex flex-column">
      {/* trip cost */}
      <div className="trip-cost-container order-2">
        <div className="trip-cost-container-wrapper">
          {/* hour rate and delivery */}
          <div className="trip-cost">
            <div className="trip-cost trip-cost-item d-flex justify-content-between align-items-center">
              <p>Car Condition</p>
              <p>{checkDetailsSellCar?.carCondition}</p>
            </div>
            <div className="trip-cost trip-cost-item d-flex justify-content-between align-items-center">
              <p>
                <span
                  className="fw-500"
                  style={{
                    color: "#101828",
                  }}
                >
                  Car Model
                </span>
              </p>

              <p>{checkDetailsSellCar?.carModel}</p>
            </div>
            <div className=" trip-cost-item d-flex justify-content-between align-items-center">
              <p>Car Make Year</p>
              <p>{checkDetailsSellCar?.carMakeYear}</p>
            </div>
          </div>
          {/* subtotal and vat */}

          <div className="trip-cost trip-cost-item d-flex justify-content-between align-items-center">
            <p>Car Registration State</p>
            <p>{checkDetailsSellCar?.carRegistrationState}</p>
          </div>
          <div className="trip-cost trip-cost-item d-flex justify-content-between align-items-center">
            <p>Car Vin Number</p>
            <p>{checkDetailsSellCar?.carVinNumber}</p>
          </div>

          {/* total */}
          <div className="trip-cost trip-cost-item d-flex justify-content-between align-items-center">
            <p>Sell Price</p>
            <p className="trip-cost-total-value">
              ${checkDetailsSellCar?.sellPrice}
            </p>
          </div>
        </div>
      </div>

      {/* trip start end details */}

      {/* book button */}
      <div className="mx-4 mx-lg-0 order-3 mb-4">
        <button
          className="primary-button d-inline-block border-0 text-white py-2 fw-500 w-100 mx-lg-0"
          type="submit"
        >
          Contact now
        </button>
      </div>
    </div>
  );
};

export default SellCarTripBook;
