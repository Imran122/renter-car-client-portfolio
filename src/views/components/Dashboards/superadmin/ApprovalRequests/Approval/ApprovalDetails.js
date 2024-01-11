import axios from "axios";
import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import carImg from "../../../../../../assets/images/SignInSignUpCar.png";
import useAuth from "../../../../../../hooks/useAuth";
import { getCookie } from "../../../../../../utilities/helper";
import "../SuperAdminApproval.css";
import ApprovalDetailsTab from "./ApprovalDetailsTab";
const ApprovalDetails = () => {
  const {
    singleRentCar,
    setSingleCarRent,
    rentRequestCarList,
    setRentRequestCarList,
    isLoading,
    setIsLoading,
  } = useAuth();
  const { id } = useParams();

  const navigate = useNavigate();
  //load data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/rentcardetails/${id}`, {
      headers: {
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/dashboard", { replace: true });
        }
      })
      .then((data) => setSingleCarRent(data));
  }, []);

  //approve request by button
  const carApproveRequest = (id) => {
    const url = `${process.env.REACT_APP_API}/api/rentcarapprove`;

    const article = { id: id };

    const headers = {
      authorization: `Bearer ${getCookie("token")}`,
    };
    axios.put(url, article, { headers }).then((response) => {
      if (response.status === 200) {
        navigate("/dashboard/approval-requests", { replace: true });
      } else if (response.status === 401) {
        navigate("/dashboard", { replace: true });
      }
    });
  };
  //delete request
  const carDenyRequest = (id) => {
    fetch(`${process.env.REACT_APP_API}/api/rentcardeny`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const remainingRentRequest = rentRequestCarList.filter(
            (restRequest) => restRequest._id !== id
          );
          setRentRequestCarList(remainingRentRequest);
          navigate("/dashboard/approval-requests", { replace: true });
        }
      });
  };
  return (
    <>
      {isLoading === true ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="a-border ">
            <article className="p-4">
              <div className="d-md-flex justify-content-between align-items-center">
                {/* user & car */}
                <div className="d-flex">
                  <div className="me-2 d-flex">
                    {/* car thumbnail */}
                    <div className="car-request-thumb flex-justify-align-center">
                      <img
                        src={carImg}
                        className="img-fluid"
                        alt="mercedes car"
                      />
                    </div>
                  </div>
                  {/* user name and verification status */}

                  {/* rating */}

                  <div className="car-book-request-user">
                    <p className="most-booked-cars-rating d-inline-block p-1 fw-500 rounded my-1">
                      <AiFillStar />
                      <span className="mx-1">5.0</span>
                      <span>(18 trips)</span>
                    </p>
                    <div className="car-approval-request">
                      <h5>{singleRentCar.carMake}</h5>
                      <p>
                        <span>{singleRentCar.carLicenseNumber}</span> ·{" "}
                        <span className="car-approval-id">
                          {singleRentCar.carVinNumber}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* buttons */}
                <div>
                  <button className="p-2 d-none d-md-block c-app-border bg-transparent d-flex justify-content-center align-items-center">
                    <RiArrowDownSLine />
                  </button>
                </div>
              </div>
            </article>

            <div className="p-4 row row-cols-1">
              <div className="col">
                <div className="content-wrapper">
                  <ApprovalDetailsTab />
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => carDenyRequest(id)}
                className="button-style danger-button me-2 me-xl-4"
              >
                Rejects
              </button>
              <button
                onClick={() => carApproveRequest(id)}
                className="button-style primary-button"
              >
                Approve for Rents
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ApprovalDetails;
