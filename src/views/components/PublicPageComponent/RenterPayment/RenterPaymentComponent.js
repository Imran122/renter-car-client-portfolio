import React from "react";
import { Route, Routes } from "react-router-dom";
import RenterPayInsuranceComponent from "./RenterPayInsurance/RenterPayInsuranceComponent";
import DriverLicenseComponent from "./DriverLicense/DriverLicenseComponent";
import CheckoutComponent from "./CheckoutConfirm/CheckoutComponent";
import CheckoutScanComponent from "./CheckoutConfirm/CheckoutScanComponent";
import RenterPaySuccessComponent from "./SuccessComponent/RenterPaySuccessComponent";
import "./RenterPayment.css";

const RenterPaymentComponent = () => {
  return (
    <div className="container">
      <div className="row g-0">
        <div className="col col-12">
          <Routes>
            <Route
              path="insurance-info"
              element={<RenterPayInsuranceComponent />}
            />
            <Route
              path="driver-license-info"
              element={<DriverLicenseComponent />}
            />
            <Route path="checkout" element={<CheckoutComponent />} />
            <Route
              path="checkout/scanpay"
              element={<CheckoutScanComponent />}
            />
            <Route path="success" element={<RenterPaySuccessComponent />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default RenterPaymentComponent;
