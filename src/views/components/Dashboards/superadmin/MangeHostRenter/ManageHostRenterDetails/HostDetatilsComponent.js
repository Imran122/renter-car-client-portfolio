import axios from "axios";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import defaultUser from "../../../../../../assets/images/user_image.png";
import useAuth from "../../../../../../hooks/useAuth";
import useHostListUser from "../../../../../../hooks/useHostListUser";
import { getCookie } from "../../../../../../utilities/helper";
import "../MangeHostRenter.css";

const HostDetatilsComponent = (props) => {
  const {
    firstname,
    createdAt,
    _id,
    accountType,
    averageRating,
    address,
    bankaccountnumber,
    bankname,
    contact_number,
    routingnumber,
  } = props.hostUserData;

  const [hostUserData, setHostUserData] = useHostListUser();
  let Dates = new Date(createdAt);

  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, setIsLoading } = useAuth();
  //delete
  const hostDeleteUser = (id) => {
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
          const remainingHost = hostUserData.filter(
            (restData) => restData._id !== id
          );
          setHostUserData(remainingHost);
          setIsLoading(false);
          navigate("/dashboard/manage/hosts", { replace: true });
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
        navigate("/dashboard/manage/hosts", { replace: true });
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
            <div className="col col-2 col-lg-1">
              <img src={defaultUser} alt="User" />
            </div>
            <div className="col col-10 col-lg-3">
              <h3 className="mx-2">
                {firstname}
                <p className="user-lists-rating d-inline-block p-1 fw-500 rounded my-3">
                  <AiFillStar />
                  <span className="mx-1">{averageRating}</span>
                  {/*  <span>(18 trips)</span> */}
                </p>
              </h3>
              {contact_number && <p>Contact No: {contact_number}</p>}

              <p>Member since {Dates.toLocaleString()}</p>
            </div>
            <div className="col col-12 col-lg-3">
              <div className="cr-bank-details">
                <h2>
                  <strong>Bank Name:</strong> {bankname}
                </h2>
                <h2>
                  <strong>Bank Acc No:</strong> {bankaccountnumber}
                </h2>
                <h2>
                  <strong>Bank Routing Number:</strong> {routingnumber}
                </h2>
              </div>
            </div>
            <div className="col col-4 col-lg-1 offset-lg-1">
              <button
                onClick={() => hostDeleteUser(_id)}
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

export default HostDetatilsComponent;
