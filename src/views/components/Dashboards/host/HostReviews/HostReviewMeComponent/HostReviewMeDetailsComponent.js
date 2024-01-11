import React, { useEffect, useState } from "react";
import userImg from "../../../../../../assets/images/user_image.png";
import carImg from "../../../../../../assets/images/iris.png";
import { AiFillStar } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import "../HostReviews.css";
import { getCookie } from "../../../../../../utilities/helper";

const HostReviewMeDetailsComponent = () => {
  const [reviewToHostData, setReviewToHostData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/review-to-host-list`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setReviewToHostData(data));
  }, []);
  return (
    <>
      {reviewToHostData.map((data) => (
        <div key={data._id} className="host-cc-review">
          <div className="cr-review-card mt-3">
            <div className="p-4">
              {/* car details */}
              <div className="d-flex">
                <div className="cr-border flex-justify-align-center me-2">
                  {data.rentCarImage ? (
                    <img
                      className="img-fluid"
                      src={data.rentCarImage}
                      alt="car thumbs"
                      width={'98px'} 
                      height={'51px'}
                    />
                  ) : (
                    <img 
                      className="img-fluid" 
                      src={carImg} 
                      alt="car thumbs" 
                      width={'98px'} 
                      height={'51px'}
                      />
                  )}
                </div>
                {/* car thumb and model */}
                <div className="flex-grow-1 d-md-flex justify-content-between">
                  <div className="mb-2 mb-md-0">
                    <h5 className="fw-500 mb-2">
                      {data.carMake} {data.carModel}
                    </h5>
                    <small className="car-book-status p-1 rounded fw-500">
                      Completed
                    </small>
                    <p className="car-review-date">{data.createdAt}</p>
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
                                ratingValue <= data.reviewStarToCar
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
                  <p>{data.reviewTextToCar}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cr-review-card">
            <div className="p-4">
              {/* car details */}
              <div className="d-flex review-host-title-txt">
                <h4>Review to Host</h4>
              </div>
              <div className="d-flex">
                <div className="me-2">
                  {data.hostProfileImage ? (
                    <img
                      src={data.hostProfileImage}
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
                        {data.firstname} {data.lastname}
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
                                ratingValue <= data.reviewStartToHost
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
                  <p>{data.reviewTextToHost}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HostReviewMeDetailsComponent;
