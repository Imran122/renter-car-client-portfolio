import React from "react";
import { Route, Routes } from "react-router-dom";
import CarDocuments from "./CarDocuments/CarDocuments";
import CarFeature from "./CarFeature/CarFeature";

import CarIntro from "./CarIntro/CarIntro";
import CarPayment from "./CarPayment/CarPayment";
import CarPhotos from "./CarPhotos/CarPhotos";
import CarSellPrice from "./CarSellPrice/CarSellPrice";

import "./HostSellCarUpload.css";

const HostSellCarUploadComponent = () => {
  return (
    <div className="car-upload-container">
      {/* car upload page title */}
      <h3 className="fw-bold">Add your sell car</h3>
      <p>Fill the form below step by step to list your car for bookings</p>

      <div className="car-upload-content-container cc-border">
        {/* contents */}
        <Routes>
          <Route index element={<CarIntro />} />
          <Route path="feature" element={<CarFeature />} />

          <Route path="carsellprice" element={<CarSellPrice />} />
          <Route path="documents" element={<CarDocuments />} />
          <Route path="photos" element={<CarPhotos />} />
          <Route path="payment" element={<CarPayment />} />
        </Routes>
      </div>
    </div>
  );
};

export default HostSellCarUploadComponent;
