import React, { useState, useEffect } from "react";
import RenterCarReviewCardComponent from "./RenterCarReviewCardComponent";
import RenterToHostReviewCardComponent from "./RenterToHostReviewCardComponent";
import "./MyReviews.css";
import { getCookie } from "../../../../../utilities/helper";

const RenterMyReviewsComponent = () => {
  const [myReviewList, setMyReviewList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/renter-review-list`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setMyReviewList(data));
  }, []);
  return (
    <div className="row g-0 h-100">
      <div className="col col-12 col-xl-8 p-4">
        <div className="content-wrapper h-100">
          <div className="row">
            {myReviewList.map((data) => (
              <div className="cr-border cr-shadow mb-4" key={data._id}>
                <>
                  <RenterCarReviewCardComponent myReviewList={data} />
                  <RenterToHostReviewCardComponent myReviewList={data} />
                </>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenterMyReviewsComponent;
