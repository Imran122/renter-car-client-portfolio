import { React, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import userImg from "../../../../../assets/images/usericon.png";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "../SearchCar.css";
import axios from "axios";
import { getCookie } from "../../../../../utilities/helper";
import useAuth from "../../../../../hooks/useAuth";
const SearchCarCardComponent = (props) => {
  
  const {
    carMake,
    carModel,

    milesPerGallon,
    firstname,
    profileImage,
    rentCharges,
    carImage,
    chargePlanName,
    pickupAddress,
    favflag,
    _id
  } = props.searchCarData;
  const { setCar } = props;
  const { user } = useAuth();
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(favflag);
  const location = useLocation();
  const toggleFavorite = async () => {

    console.log('props.rentCarList');
    console.log('favorite ', favorite);
    console.log(props.rentCarList);
    if (!user?._id) {
      console.log('login korte hobe');
      return;
    }
    if (favorite === false) {

      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/favourite-update`,
        {
          userId: user?._id,
          rentCarDataId: _id
        },

        {
          headers: {
            authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response);
        // setIsLoading(false);
        // navigate("/renter-pay/success", { replace: true });
      }
    } else {
      const response = await axios.delete(
        `${process.env.REACT_APP_API}/api/favourite-delete`,
        {
          headers: {
            authorization: `Bearer ${getCookie("token")}`,
          },
          data: {
            userId: user?._id,
            rentCarDataId: _id
          }
        }
      );

      if (response.status === 200) {
        console.log(response);
        // setIsLoading(false);
        // navigate("/renter-pay/success", { replace: true });
      }
    }

    setFavorite((prev) => !prev)
  };
  // const [hoverSelectedCar, setHoverSelectedCar] = useState({});

  const handleClick = (e) => {
    setCar(pickupAddress);
  };
  return (
    <div
      className="col col-12 col-lg-6 cr-search-car-card"
      onClick={handleClick}
    >
      <article className="top-rated-car-card border-black8 rounded-0 h-100">
        <div className="top-rated-car-card-img w-100">
          <img className="img-fluid" src={carImage[0]} alt="car-thumb" />
          {/* like button */}
          <button
            onClick={toggleFavorite}
            className="top-rated-car-react-button"
          >
            {favorite ? (
              <MdFavorite style={{ color: "#F76631" }} />
            ) : (
              <MdFavoriteBorder style={{ color: "#F76631" }} />
            )}
          </button>
        </div>
        <div className="top-rated-car-content">
          <div className="top-rated-car-card-body">
            {/* rating and distance */}
            <div className="d-flex justify-content-between align-items-center">
              {/* rating */}
              <p className="most-booked-cars-rating d-inline-block p-1 fw-500 rounded">
                <AiFillStar />
                <span className="mx-1">5.0</span>
                <span>(18 trips)</span>
              </p>
              {/* distance */}
              <p className="top-rated-car-distance d-flex align-items-center">
                <HiOutlineLocationMarker size={18} />
                <span className="ms-1 fw-500">{milesPerGallon} MPG</span>
              </p>
            </div>
            {/* car title */}
            <h4 className="top-rated-car-title fw-bold">{carMake}</h4>
            <p>{carModel}</p>
            <p className="top-rated-car-location d-flex align-items-center">
              <HiOutlineLocationMarker size={18} />
              <span className="ms-1 fw-500">
                {pickupAddress.address.slice(0, 12)}...
              </span>
            </p>
            <div className="d-flex align-items-center">
              {profileImage ? (
                <img
                  className="img-fluid rounded-circle me-2"
                  src={profileImage}
                  alt="user"
                  width={30}
                  height={30}
                />
              ) : (
                <img
                  className="img-fluid rounded-circle me-2"
                  src={userImg}
                  alt="user"
                  width={30}
                  height={30}
                />
              )}
              <p className="fw-500 m-0">
                <span className="me-1">{firstname}</span>
                <BsFillCheckCircleFill
                  size={16}
                  style={{ color: "var(--green)" }}
                />
              </p>
            </div>
          </div>

          {/* rent/h and book now button */}
          <div className="top-rated-car-card-footer d-flex justify-content-between align-items-center">
            <p className="d-flex align-items-center m-0">
              <span className="fw-bold">${rentCharges}/</span>
              <small>{chargePlanName}</small>
            </p>

            <button
              onClick={() => {
                navigate(`/rent-car-details/${props.searchCarData._id}`, {
                  replace: true,
                });
              }}
              className="px-3 py-2 text-white primary-button border-0 d-inline-block cr-button"
            >
              Book now
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SearchCarCardComponent;
