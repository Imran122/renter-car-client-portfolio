import { React, useState } from "react";
import CarImage from "../../../../../../assets/images/car1.png";
import ScanPay from "../../../../../../assets/images/scanpay.png";
import { Form, Modal, Button } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Link, useNavigate } from "react-router-dom";
import { BsCreditCard, BsPaypal } from "react-icons/bs";
import { SiCashapp } from "react-icons/si";
import useAuth from "../../../../../../hooks/useAuth";
import { getCookie } from "../../../../../../utilities/helper";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L5L5KJPPkc8MG0BYB5ofyV53pnOxyBfsodvNn6Wg7dvsqTeaNPJM9NSDIfPPbvtLVrqF32cxLwzonQ2ynR7GspN00VAHDdS4q"
);

const CarPayment = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user, isLoading, setIsLoading, sellCarData, setSellCarData } =
    useAuth();

  return (
    <>
      {/* step count and title */}
      <div className="d-flex align-items-center cc-border-bottom p-4">
        <div className="p-3 rounded-circle cc-step-border flex-justify-align-center me-3">
          <h6>
            <span className="cc-step-color">7</span>/7
          </h6>
        </div>
        <div className="mt-3">
          <h5>Listing fee For Sell</h5>
          <p>
            <span className="cc-input-label">Finished</span>
          </p>
        </div>
      </div>

      {/* inputs */}
      <div className="input-container p-4">
        <div className="row g-3">
          {/* input */}
          <div className="col col-12 col-md-8">
            <div className="row">
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
                        <SiCashapp style={{ color: "#00D632" }} /> Cashapp
                      </label>

                      <Button className="cashpay2" onClick={handleShow}>
                        (Click to pay)
                      </Button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Scan to pay</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src={ScanPay}
                            className="mx-auto d-block"
                            alt="scan pay"
                          />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleClose}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
          <div className="col col-12 col-md-4">
            <table className="table table-borderless cr-tbl">
              <thead>
                <tr>
                  <th scope="col">
                    {sellCarData.carImage1 ? (
                      <img
                        src={sellCarData.carImage1}
                        className="seller-pay-car"
                        alt="car"
                      />
                    ) : (
                      <img
                        src={CarImage}
                        className="seller-pay-car"
                        alt="car"
                      />
                    )}
                  </th>
                  <th scope="col"></th>
                  <th scope="col">{sellCarData.carMake}</th>
                </tr>
                <tr>
                  <th scope="col">sell cost</th>
                  <th scope="col"></th>

                  <th scope="col">$25</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarPayment;
