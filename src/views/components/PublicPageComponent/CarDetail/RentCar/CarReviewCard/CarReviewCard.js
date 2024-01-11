import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Accordion } from "react-bootstrap";
import "./CarReviewCard.css";
import { FaStar } from "react-icons/fa";
import useRentCarDetails from "../../../../../../hooks/useRentCarDetails";
import { useParams } from "react-router-dom";
import useCarReviewData from "../../../../../../hooks/useCarReviewData";
const CarReviewCard = () => {
  const [checkDetailsRentCar, setCheckDetailsRentCar] = useRentCarDetails();
  const [reviewListData, setreviewListData] = useCarReviewData();

  return (
    <>
      <div className="cr-review-accordion">
        {/* 	defaultActiveKey="0" */}
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <article className="p-4">
                <div className="d-md-flex justify-content-between align-items-center">
                  <strong>{reviewListData.length} Reviews</strong>
                  {/*  <AiFillStar style={{ color: "#FFAD60" }} /> 5 */}
                </div>
              </article>
            </Accordion.Header>
            <Accordion.Body>
              {reviewListData.map((data) => (
                <div
                  className="review-card gap-3 border-bottom"
                  key={data.reviewList._id}
                >
                  {/* review user details */}
                  <div className="d-flex align-items-center">
                    {/* user thumbnail */}
                    {data.renterProfileImage ? (
                      <img
                        src={data.renterProfileImage}
                        className="rounded-circle img-fluid rv-p"
                        alt="user profile"
                      />
                    ) : (
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTiGlASQN2aBayDa3IennhcpPOMJV8tyCcOw&usqp=CAU"
                        className="rounded-circle img-fluid rv-p"
                        alt="user profile"
                      />
                    )}

                    <div className="ms-2">
                      {/* host name and verification status */}
                      <h5 className="fw-bold ">
                        {data.renterFirstName} {data.renterLastName}
                      </h5>
                      <p style={{ color: "#475467" }} className="my-2">
                        {data?.reviewList?.updatedAt}
                      </p>
                    </div>
                  </div>
                  {/* rating */}
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
                              ratingValue <= data?.reviewList?.reviewStarToCar
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            size={20}
                          />
                        </label>
                      );
                    })}
                  </div>
                  {/* review body */}
                  <div className="review-body">
                    <p>{data?.reviewList?.reviewTextToCar}</p>
                  </div>
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default CarReviewCard;
