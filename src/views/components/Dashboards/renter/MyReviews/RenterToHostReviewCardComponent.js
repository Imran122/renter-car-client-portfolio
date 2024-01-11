import React from "react";
import { Link } from "react-router-dom";
import userImg from "../../../../../assets/images/user_image.png";
import { AiFillStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./MyReviews.css";

const RenterToHostReviewCardComponent = (props) => {
  const {
    rentCarId,
    carUploadPersonHostId,
    renterUserId,
    hostFirstName,
    hostLastName,
    reviewStarToCar,
    reviewStartToHost,
    reviewTextToCar,
    reviewTextToHost,
    carMake,
    carModel,
    hostProfileImage,
    rentCarImage,
  } = props.myReviewList;
  return (
    <div className="cr-review-card">
      <div className="p-4">
        {/* car details */}
        <div className="d-flex review-host-title-txt">
          <h4>Review to Host</h4>
        </div>
        <div className="d-flex">
          <div className="me-2">
            {hostProfileImage ? (
              <img
                src={hostProfileImage}
                className="car-book-request-thumb rounded-circle border img-fluid"
                style={{ marginLeft: "10px" }}
                alt="user profile"
              />
            ) : (
              <img
                src={userImg}
                className="car-book-request-thumb rounded-circle border img-fluid"
                style={{ marginLeft: "10px" }}
                alt="user profile"
              />
            )}
          </div>
          {/* car thumb and model */}
          <div className="flex-grow-1 d-md-flex justify-content-between">
            <div className="mb-2 mb-md-0">
              <div className="host-review-user-title">
                <h5 className="mb-2">
                  {hostFirstName} {hostLastName}
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
              <div>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label key={i}>
                      <input
                        type="radio"
                        className="rating-radio-btn"
                        name="reviewStarToCar"
                        value={ratingValue}
                      />
                      <FaStar
                        className="start-rating"
                        color={
                          ratingValue <= reviewStartToHost
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        size={20}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* review details */}
        <div className="d-md-flex mt-4 mt-md-0">
          {/* review start */}
          <div className="d-flex justify-content-between review-details-item">
            <p>{reviewTextToHost}</p>
          </div>
        </div>
        {/*     <div className="d-flex mt-4 justify-content-end">
            <div className="col col-6 col-xl-3">
              <Link to="/dashboard/my-reviews/edit">
                <button
                  type="submit"
                  className="button-style cc-reviw-btn"
                >
                  Edit Review
                </button>
              </Link>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default RenterToHostReviewCardComponent;
