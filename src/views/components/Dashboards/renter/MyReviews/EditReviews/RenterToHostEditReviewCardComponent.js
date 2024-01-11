import React from "react";
import { Link } from "react-router-dom";
import userImg from "../../../../../../assets/images/user_image.png";
import { AiFillStar } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "../MyReviews.css";

const RenterToHostEditReviewCardComponent = () => {
  return (
    <div className="cr-review-card">
        <div className="p-4">
          {/* car details */}
          <div className="d-flex review-host-title-txt">
            <h4>Review to Host</h4>
          </div>
          <div className="d-flex">
            <div className="me-2">
              <img
                  src={userImg}
                  className="car-book-request-thumb rounded-circle border img-fluid"
                  style={{ marginLeft: "10px" }}
                  alt="user profile"
                />
            </div>
            {/* car thumb and model */}
            <div className="flex-grow-1 d-md-flex justify-content-between">
              <div className="mb-2 mb-md-0">
                <div className="host-review-user-title">
                  <h5 className="mb-2">
                    Alex Simmons 
                    <BsFillCheckCircleFill
                      size={16}
                      style={{ color: "var(--green)" }}
                    />
                  </h5>
                </div>
                <p className="car-review-date">Member since 2018</p>
              </div>
              {/* money limit */}
              <div className="d-flex d-md-block book-money-title">
                <div style={{ color: "#524EB7", fontSize: "22px" }}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>
          {/* review details */}
          <div className="d-flex mt-4 justify-content-end">
            <div className="col col-12 col-xl-10 offset-md-2">
              <div className="form-group">
                <textarea 
                  className="form-control cr-review-txtarea" 
                  id="exampleFormControlTextarea1" 
                  rows="3"
                  placeholder="Write your comment...">

                </textarea>
              </div>
            </div>
          </div>
          <div className="d-flex mt-4 justify-content-end">
            <div className="col col-6 col-xl-3">
              <Link to="/dashboard/my-reviews">
                <button
                  type="submit"
                  className="button-style cc-reviw-btn"
                >
                  Post Now
                </button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default RenterToHostEditReviewCardComponent;
