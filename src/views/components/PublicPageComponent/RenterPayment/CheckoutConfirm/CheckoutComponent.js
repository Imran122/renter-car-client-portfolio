import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Link, useNavigate } from "react-router-dom";
import { BsCreditCard, BsPaypal } from "react-icons/bs";
import { SiCashapp } from "react-icons/si";
import "../RenterPayment.css";
import useAuth from "../../../../../hooks/useAuth";
import { removeLocalStorage } from "../../../../../utilities/helper";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L5L5KJPPkc8MG0BYB5ofyV53pnOxyBfsodvNn6Wg7dvsqTeaNPJM9NSDIfPPbvtLVrqF32cxLwzonQ2ynR7GspN00VAHDdS4q"
);

const CheckoutComponent = () => {
  const { user, isLoading, setIsLoading, rentCarData, setRentCarData } =
    useAuth();

  //console.log("last", rentCarData);
  //all car name
  const navigate = useNavigate();
  const submitCarBookForRentData = (e) => {
    e.preventDefault();
    //removeLocalStorage("paymentinfo");
    // send data to the server by jwt token auth
  };
  return (
    <>
      <div className="renter-pay-checkout-container">
        {/* car upload page title */}
        <h3 className="fw-bold">Necessary informations for booking</h3>
        <p>
          Before you make a payment, we require necessary information such as
          your driver's license for the first trip.
        </p>

        <div className="container">
          <div className="row flex-lg-row-reverse">
            <div className="col col-12 col-lg-4">
              <table className="table table-borderless cr-tbl">
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
                  <tr className="cr-tbl-bb">
                    <th scope="row">Delivery</th>
                    <td></td>
                    {rentCarData.deliveryCharges ? (
                      <td>${rentCarData.deliveryCharges}</td>
                    ) : (
                      <td>$0</td>
                    )}
                  </tr>
                  <tr>
                    <th scope="row">Subtotal</th>
                    <td></td>
                    <td>${rentCarData.totalCostAll}</td>
                  </tr>
                  {/*   <tr className="cr-tbl-bb">
                    <th scope="row">Vat (+8%)</th>
                    <td></td>
                    <td>$17.5</td>
                  </tr> */}
                  <tr>
                    <th scope="row">Total</th>
                    <td></td>
                    <td>${rentCarData.totalCostAll}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col col-12 col-lg-8">
              <div className="renter-pay-checkout-content-container cc-border">
                {/* step count and title */}
                <div className="d-flex align-items-center cc-border-bottom p-4">
                  <div className="p-3 rounded-circle cc-step-border flex-justify-align-center me-3">
                    <h6>
                      <span className="cc-step-color">3</span>/3
                    </h6>
                  </div>
                  <div className="mt-3">
                    <h5>
                      <strong>Check out and confirm booking</strong>
                    </h5>
                  </div>
                </div>

                {/* inputs */}
                <div className="input-container p-4">
                  <form onSubmit={submitCarBookForRentData}>
                    <div className="row g-3">
                      {/* input */}
                      <div className="col col-12">
                        <div className="input-wrapper">
                          <div className="mb-3">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                defaultValue="credit"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                <BsCreditCard /> Credit/Debit Card
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                defaultValue="paypal"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio2"
                              >
                                <BsPaypal style={{ color: "#002C8A" }} /> Paypal
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio3"
                                defaultValue="cashapp"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio3"
                              >
                                <SiCashapp style={{ color: "#00D632" }} />{" "}
                                Cashapp
                              </label>
                              <Link
                                className="cashpay"
                                to={"/renter-pay/checkout/scanpay"}
                              >
                                (Click to pay)
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Elements stripe={stripePromise}>
                        <CheckoutForm />
                      </Elements>

                      {/*                    <div className="col col-12">
                        <div className="input-wrapper">
                          <label className="fw-600 mb-2 cc-input-label form-label">
                            <strong>Card number</strong>
                          </label>
                          <div className="mb-3 cc-in-g input-group">
                            <span className="col col-1 bg-transparent cc-in-border input-group-text">
                              <BsCreditCard />
                            </span>

                            <div className="input-wrapper col col-11 ">
                              <input
                                placeholder="Enter Card Number"
                                name="carNumber"
                                type="text"
                                className="cc-in form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
             
                      <div className="col col-12 col-md-6">
                        <div className="input-wrapper">
                          <label className="fw-600 mb-2 cc-input-label form-label">
                            <strong>Expiry date</strong>
                          </label>
                          <input
                            placeholder="MM/YY"
                            type="text"
                            className="cc-in form-control"
                            name="expiryDate"
                          />
                        </div>
                      </div>
                      <div className="col col-12 col-md-6">
                        <div className="input-wrapper">
                          <label className="fw-600 mb-2 cc-input-label form-label">
                            <strong>CVV</strong>
                          </label>
                          <input
                            placeholder="***"
                            type="text"
                            className="cc-in form-control"
                            name="cvv"
                          />
                        </div>
                      </div> */}
                      <div className="col col-12">
                        <div className="input-wrapper">
                          {/*  <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              <strong>
                                I agree to the terms and conditons of rental
                                car.
                              </strong>
                            </label>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutComponent;
