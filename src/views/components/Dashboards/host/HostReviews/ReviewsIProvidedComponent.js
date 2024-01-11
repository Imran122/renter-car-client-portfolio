import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HostReviewIProvideDetailsComponent from "./HostReviewMyComponent/HostReviewIProvideDetailsComponent";

import "./HostReviews.css";

const ReviewsIProvidedComponent = () => {
  return (
    <div className="row g-0">
      <div className="col col-12">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          <div className="vehicles-button">
            <Link to={"/dashboard/reviews"}>Reviews to me</Link>

            <Link to={"/dashboard/reviews/my-review"} className="active">
              Reviews I provided
            </Link>
          </div>
          <HostReviewIProvideDetailsComponent />
        </div>
      </div>
    </div>
  );
};

export default ReviewsIProvidedComponent;
