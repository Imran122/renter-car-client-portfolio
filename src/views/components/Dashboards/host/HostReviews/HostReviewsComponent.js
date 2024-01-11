import React from "react";
import { Route, Routes } from "react-router-dom";
import ReviewsToMeComponent from "./ReviewsToMeComponent";
import ReviewsIProvidedComponent from "./ReviewsIProvidedComponent";
import "./HostReviews.css";

const HostReviewsComponent = () => {
  return (
    <div className="row g-0">
      <div className="col col-12 col-xl-10">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          <Routes>
            <Route index element={<ReviewsToMeComponent />} />
            <Route path="my-review" element={<ReviewsIProvidedComponent />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default HostReviewsComponent;
