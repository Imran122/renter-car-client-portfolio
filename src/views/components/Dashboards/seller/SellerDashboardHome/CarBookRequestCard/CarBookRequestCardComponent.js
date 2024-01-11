import React from "react";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { BsFillCheckCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import carImg from "../../../../../../assets/images/iris.png";
import userImg from "../../../../../../assets/images/user_image.png";
import "./CarBookRequestCard.css";

const CarBookRequestCardComponent = () => {
  return (
    <article className="border p-4">
      {/* booking details */}
      <div className="d-flex justify-content-between align-items-center">
        <p className="w-75">
          <strong>Alex simmons</strong> requested to book{" "}
          <strong>Mercedeze Benz GLA GJZ 37AX358</strong> accept to rent it for
          the followings dates
        </p>
        <button className="p-2 border rounded-circle bg-transparent d-flex justify-content-center align-items-center">
          <BsThreeDotsVertical />
        </button>
      </div>

      {/* booking time */}
      <div className="d-flex align-items-center my-4">
        <p className="p-1 border mb-0">Mon 28 Mar, 03:30 PM</p>
        <AiOutlineArrowRight className="mx-2" />
        <p className="p-1 border mb-0">Thu 28 Mar, 05:00 PM</p>
      </div>

      {/* booking user & car details */}
      <div className="d-md-flex justify-content-between align-items-center">
        {/* user & car */}
        <div className="d-flex">
          <div className="me-2 d-flex">
            {/* car thumbnail */}
            <div className="car-book-request-thumb rounded-circle border flex-justify-align-center">
              <img src={carImg} className="img-fluid" alt="mercedes car" />
            </div>
            {/* user thumbnail */}
            <img
              src={userImg}
              className="car-book-request-thumb rounded-circle border img-fluid"
              style={{ marginLeft: "10px" }}
              alt="user profile"
            />
          </div>
          {/* user name and verification status */}
          <div className="car-book-request-user">
            <h5>Alex Simmons</h5>
            <p>
              <BsFillCheckCircleFill
                size={16}
                style={{ color: "var(--green)" }}
              />
              <span className="ms-2">Cleared to drive</span>
            </p>
          </div>
        </div>

        {/* rating */}
        <p className="most-booked-cars-rating d-inline-block p-1 fw-500 rounded my-3">
          <AiFillStar />
          <span className="mx-1">5.0</span>
          <span>(18 trips)</span>
        </p>

        {/* buttons */}
        <div>
          <button className="button-style primary-button me-2 me-xl-4 cr-button">
            Accept
          </button>
          <button className="button-style danger-button cr-button-de">Decline</button>
        </div>
      </div>
    </article>
  );
};

export default CarBookRequestCardComponent;
