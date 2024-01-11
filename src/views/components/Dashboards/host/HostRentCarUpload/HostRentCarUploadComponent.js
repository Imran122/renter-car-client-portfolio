import React from "react";
import { Route, Routes } from "react-router-dom";
import CarAvailability from "./CarAvailability/CarAvailability";
import CarDocuments from "./CarDocuments/CarDocuments";
import CarFeature from "./CarFeature/CarFeature";
import CarInsurance from "./CarInsurance/CarInsurance";
import CarIntro from "./CarIntro/CarIntro";
import CarPhotos from "./CarPhotos/CarPhotos";
import CarRents from "./CarRents/CarRents";
import "./HostRentCarUpload.css";

const HostRentCarUploadComponent = () => {
  return (
    <div className="car-upload-container">
      {/* car upload page title */}
      <h3 className="fw-bold">Add your rent car</h3>
      <p>Fill the form below step by step to list your car for bookings</p>

      <div className="car-upload-content-container cc-border">
        {/* contents */}
        <Routes>
          <Route index element={<CarIntro />} />
          <Route path="feature" element={<CarFeature />} />
          <Route path="insurance" element={<CarInsurance />} />
          <Route path="availability" element={<CarAvailability />} />
          <Route path="rents" element={<CarRents />} />
          <Route path="documents" element={<CarDocuments />} />
          <Route path="photos" element={<CarPhotos />} />
        </Routes>
      </div>
    </div>
  );
};

export default HostRentCarUploadComponent;
