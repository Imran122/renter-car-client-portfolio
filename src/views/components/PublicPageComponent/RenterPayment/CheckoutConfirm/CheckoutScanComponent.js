import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScanPay from "../../../../../assets/images/scanpay.png";
import "../RenterPayment.css";
const CheckoutScanComponent = () => {

  //all car name

  return (
    <>

      <div className="renter-pay-container">
        <div className="renter-pay-content-container cc-border">
          {/* inputs */}
          <div className="input-container p-4">
            <form>
              <div className="row g-3">
                {/* input */}
                <div className="col col-12">
                    <div className="mb-3">
                        <img src={ScanPay} className="mx-auto d-block" alt="scan pay" />
                    </div>
                </div>
              </div>
            </form>
            <div className="row g-3 mt-4">
              <div className="col col-6 col-md-4">
                <Link to="/renter-pay/checkout">
                  <button className="cr-rp-btn-back">Back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutScanComponent;
