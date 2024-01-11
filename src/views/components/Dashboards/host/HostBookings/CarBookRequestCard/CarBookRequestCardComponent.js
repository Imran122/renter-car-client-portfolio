import axios from "axios";
import React from "react";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { BsFillCheckCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import carImg from "../../../../../../assets/images/iris.png";
import userImg from "../../../../../../assets/images/user_image.png";
import useAuth from "../../../../../../hooks/useAuth";
import useHostBookingCarList from "../../../../../../hooks/useHostBookingCarList";
import { getCookie } from "../../../../../../utilities/helper";
import "./CarBookRequestCard.css";

const CarBookRequestCardComponent = (props) => {
  const [hostBookingCarList, setHostBookingCarList] = useHostBookingCarList();
  const {
    _id,
    rentCarId,
    carUploadPersonHostId,
    booktStatus,
    firstname,
    carMake,
    carModel,
    carRegistrationState,
    chargePlanName,
    deliveryCharges,
    insuranceName,
    driverLicenseExpireDate,
    driverLicenseIssueDate,
    insuranceExpDate,
    tripStartDateTime,
    tripEndDateTime,
    driverLicenseNumber,
    insurancePolicyNumber,
    nameOnDriverLicense,
    pickupAddress,
    dropupAddress,
    hoursTotal,
    rentCharges,
    totalAmountCost,
    carImage,
    profileImage,
  } = props.filterCarList;
  const { isLoading, setIsLoading } = useAuth();
  const navigate = useNavigate();
  let startDate = new Date(tripStartDateTime);
  let enddate = new Date(tripEndDateTime);

  const submitData = (id) => {
    const url = `${process.env.REACT_APP_API}/api/accept-booked-car-for-rent/${id}`;
    const urlforChangeStatus = `${process.env.REACT_APP_API}/api/change-book-for-rent-status/${id}`;

    const article = { id: id };
    const rentCaarId = { id: rentCarId };
    setIsLoading(true);
    const headers = {
      authorization: `Bearer ${getCookie("token")}`,
    };
    axios.put(url, article, { headers }).then((response) => {
      if (response.status === 200) {
        axios
          .put(urlforChangeStatus, rentCaarId, { headers })
          .then((response) => {
            if (response.status === 200) {
              setIsLoading(false);
            }
          });
        setIsLoading(false);
      } else if (response.status === 401) {
        navigate("/dashboard", { replace: true });
      }
    });
  };
  const completeBookedCar = (id) => {
    const url = `${process.env.REACT_APP_API}/api/mark-complete-booked-car-forrent/${id}`;
    const urlChangeStatus = `${process.env.REACT_APP_API}/api/change-book-for-rent-status-false/${id}`;

    const article = { id: id };
    const CarId = { id: rentCarId };
    setIsLoading(true);
    const headers = {
      authorization: `Bearer ${getCookie("token")}`,
    };
    axios.put(url, article, { headers }).then((response) => {
      if (response.status === 200) {
        axios.put(urlChangeStatus, CarId, { headers }).then((response) => {
          if (response.status === 200) {
            setIsLoading(false);
          }
        });
        setIsLoading(false);
      } else if (response.status === 401) {
        navigate("/dashboard", { replace: true });
      }
    });
  };
  const bookCarDenyRequest = (id) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/book-car-reject/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const remainingRentRequest = hostBookingCarList.filter(
            (restRequest) => restRequest._id !== id
          );
          setHostBookingCarList(remainingRentRequest);
          setIsLoading(false);
        }
      });
  };
  return (
    <article className="cr-border p-4 mb-3">
      {isLoading === true && <div className="loader"></div>}

      {/* booking details */}
      <div className="d-flex justify-content-between align-items-center">
        <p className="w-75">
          <strong>{firstname}</strong> requested to book{" "}
          <strong>
            {carMake} {carModel}
          </strong>{" "}
          accept to rent it for the followings dates
        </p>
        <button className="p-2 border rounded-circle bg-transparent d-flex justify-content-center align-items-center">
          <BsThreeDotsVertical />
        </button>
      </div>

      {/* booking time */}
      <div className="d-flex align-items-center my-4">
        <p className="p-1 border mb-0">{startDate.toLocaleString()}</p>
        <AiOutlineArrowRight className="mx-2" />
        <p className="p-1 border mb-0">{enddate.toLocaleString()}</p>
      </div>

      {/* booking user & car details */}
      <div className="d-md-flex justify-content-between align-items-center">
        {/* user & car */}
        <div className="d-flex">
          <div className="me-2 d-flex">
            {/* car thumbnail */}
            <div className="car-book-request-thumb rounded-circle border flex-justify-align-center">
              <img src={carImage} className="img-fluid" alt="mercedes car" />
            </div>
            {/* user thumbnail */}
            {profileImage ? (
              <img
                src={profileImage}
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
          {/* user name and verification status */}
          <div className="car-book-request-user">
            <h5>
              {firstname}
              <p className="most-booked-cars-rating d-inline-block p-1 fw-500 rounded my-3">
                <AiFillStar />
                <span className="mx-1">5.0</span>
                <span>(18 trips)</span>
              </p>
            </h5>
            {/* rating */}

            <p className="car-book-request-status">
              <BsFillCheckCircleFill
                size={16}
                style={{ color: "var(--green)" }}
              />
              <span className="ms-2">{booktStatus}</span>
            </p>
          </div>
        </div>

        {/* buttons */}
        <div>
          {booktStatus === "complete" ? (
            <button
              onClick={() => submitData(_id)}
              className="button-style primary-button me-2 cr-button cr-btns"
              disabled
            >
              Accept
            </button>
          ) : (
            <button
              onClick={() => submitData(_id)}
              className="button-style primary-button me-2 cr-button cr-btns"
            >
              Accept
            </button>
          )}

          <button
            onClick={() => bookCarDenyRequest(_id)}
            className="button-style danger-button me-2  cr-button-de cr-btns"
          >
            Decline
          </button>
          <button
            onClick={() => completeBookedCar(_id)}
            className="button-style me-2 me-xl-4 cr-btn-success cr-btns mb-2 mt-2"
          >
            Complete
          </button>
        </div>
      </div>
    </article>
  );
};

export default CarBookRequestCardComponent;
