import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SuccessIcon from "../../../../../assets/images/success-icon.png";
import useAuth from "../../../../../hooks/useAuth";
import { removeLocalStorage } from "../../../../../utilities/helper";
import "../RenterPayment.css";
const RenterPaySuccessComponent = () => {
  const { user, isLoading, setIsLoading, rentCarData, setRentCarData } =
    useAuth();
  //all car name

  const navigate = useNavigate();
  const submitCarBookForRentData = (e) => {
    e.preventDefault();
    setRentCarData("");
    removeLocalStorage("paymentinfo");
    //removeLocalStorage("paymentinfo");
    // send data to the server by jwt token auth
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="renter-pay-container">
        <div className="d-flex justify-content-center p-4">
          <div className="row g-3">
            {/* input */}
            <div className="col col-12">
              <div className="cr-pay-success">
                <div className="mb-3">
                  <img
                    src={SuccessIcon}
                    className="mx-auto d-block"
                    alt="scan pay"
                  />
                </div>
                <h2>Successfully paid</h2>
                <p>
                  Your payment has been successfull. we’ll confirm your booking
                  by mail and call soon
                </p>
                <table className="table table-borderless cr-success-tbl">
                  <thead>
                    <tr>
                      <th scope="col">Trip Start</th>
                      <th scope="col">Trip End</th>
                      <th scope="col">Delivery Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{rentCarData.tripStartDateTime}</td>
                      <td>{rentCarData.tripEndDateTime}</td>
                      <td>{rentCarData.pickupAddress.address}</td>
                    </tr>
                  </tbody>
                </table>

                <table className="table table-borderless cr-success-tbl cr-success-fr">
                  <thead>
                    <tr>
                      <th scope="col">
                        ${rentCarData.rentCharges}/{rentCarData.chargePlanName}
                      </th>
                      {rentCarData.hoursTotal && (
                        <th scope="col">X{rentCarData.hoursTotal}</th>
                      )}
                      {rentCarData.daysTotal && (
                        <th scope="col">X{rentCarData.daysTotal}</th>
                      )}
                      {rentCarData.weeksTotal && (
                        <th scope="col">X{rentCarData.weeksTotal}</th>
                      )}
                      {rentCarData.monthsTotal && (
                        <th scope="col">X{rentCarData.monthsTotal}</th>
                      )}
                      <th scope="col">${rentCarData.totalAmountCost}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Delivery</td>
                      <td></td>
                      {rentCarData.deliveryCharges ? (
                        <td>${rentCarData.deliveryCharges}</td>
                      ) : (
                        <td>$0</td>
                      )}
                    </tr>
                    <tr>
                      <td>Subtotal</td>
                      <td></td>
                      <td>${rentCarData.totalCostAll}</td>
                    </tr>
                    {/*    <tr>
                                        <td>Vat (+8%)</td>
                                        <td></td>
                                        <td>$17.5</td>
                                    </tr> */}
                    <tr>
                      <td>Total</td>
                      <td></td>
                      <td>${rentCarData.totalCostAll}</td>
                    </tr>
                    <tr>
                      <td>Booking status</td>
                      <td></td>
                      <td>Pending</td>
                    </tr>
                    <tr>
                      <td>Payment status</td>
                      <td></td>
                      <td>Completed</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          onClick={submitCarBookForRentData}
                          type="submit"
                          className="button-style return-home-btn"
                        >
                          Return to home
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenterPaySuccessComponent;
