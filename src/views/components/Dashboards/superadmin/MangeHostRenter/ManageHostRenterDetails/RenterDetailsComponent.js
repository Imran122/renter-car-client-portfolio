import axios from "axios";
import { React, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import defaultUser from "../../../../../../assets/images/user_image.png";
import useAuth from "../../../../../../hooks/useAuth";
import useRenterListUser from "../../../../../../hooks/useRenterListUser";
import { getCookie } from "../../../../../../utilities/helper";
import "../MangeHostRenter.css";

const RenterDetailsComponent = (props) => {
  const { firstname, createdAt, _id, accountType } = props.renterUserData;
  const [renterUserData, setRenterUserData] = useRenterListUser();
  let Dates = new Date(createdAt);
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, setIsLoading } = useAuth();
  //delete
  const renterDeleteUser = (id) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/renter-host-delete`, {
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
          const remainingRenter = renterUserData.filter(
            (restData) => restData._id !== id
          );
          setRenterUserData(remainingRenter);
          setIsLoading(false);
          navigate("/dashboard/manage", { replace: true });
        }
      });
  };
  //suspend user
  const suspendUser = (id) => {
    setIsLoading(true);
    const url = `${process.env.REACT_APP_API}/api/suspend-user`;

    const article = { id: id };

    const headers = {
      authorization: `Bearer ${getCookie("token")}`,
    };
    axios.put(url, article, { headers }).then((response) => {
      if (response.status === 200) {
        setIsLoading(false);
        navigate("/dashboard/manage", { replace: true });
      } else if (response.status === 401) {
        navigate("/dashboard", { replace: true });
      }
    });
  };
  return (
    <>
      <div className="p-4 mt-4">
        <div className="manage-hr">
          <div className="row cr-border mb-3 p-4">
            <div className="col col-3 col-lg-1">
              <img src={defaultUser} alt="User" />
            </div>
            <div className="col col-9 col-lg-3">
              <h3>{firstname}</h3>
              <p>Member since {Dates.toLocaleString()}</p>
            </div>
            <div className="col col-12 col-lg-3">
              <p className="user-lists-rating d-inline-block p-1 fw-500 rounded my-3">
                {/*   <AiFillStar />
                <span className="mx-1">5.0</span>
                <span>(18 trips)</span> */}
              </p>
            </div>
            <div className="col col-4 col-lg-1 offset-lg-1">
              <button
                onClick={() => renterDeleteUser(_id)}
                className="btn-delete"
              >
                <BsTrash />
              </button>
            </div>
            <div className="col col-8 col-lg-3">
              {accountType === "suspended" ? (
                <button className="btn-suspend" disabled>
                  Suspended
                </button>
              ) : (
                <button
                  onClick={() => suspendUser(_id)}
                  className="btn-suspend"
                >
                  Suspend renter
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenterDetailsComponent;
