import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Form, Check } from "react-bootstrap";
import userImg from "../../../../../../assets/images/user_image.png";
import driveStatus from "../../../../../../assets/images/drive_status.png";
import mails from "../../../../../../assets/images/mails.png";
import calls from "../../../../../../assets/images/calls.png";

import "../HostSettings.css";
import useAuth from "../../../../../../hooks/useAuth";
import useUsersDetails from "../../../../../../hooks/useUsersDetails";

const HostSettingsComponent = () => {
  const { user } = useAuth();
  const [userSingleData, setUserSingleData] = useUsersDetails();
  return (
    <>
      <article className="cr-border p-4">
        {/* booking user & car details */}
        <div className="d-md-flex justify-content-between align-items-center">
          {/* user & car */}
          <div className="d-flex">
            <div className="me-2 d-flex">
              {/* user thumbnail */}

              {userSingleData.profileImage ? (
                <img
                  src={userSingleData.profileImage}
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
              <h5>{user.firstname}</h5>
              <p>
                <span>Member since {user.createdAt}</span>
              </p>
            </div>
          </div>

          <div>
            <p className="settings-cars-rating d-inline-block p-1 fw-600 rounded my-3">
              <AiFillStar />
              <span className="mx-1">5.0</span>
              <span>(18 trips)</span>
            </p>
          </div>
        </div>
        <hr className="d-none d-md-block my-4" />
        <div className="d-md-flex justify-content-between align-items-center">
          <div className="content-wrapper w-100">
            <div className="row">
              <div className="col col-6 col-lg-4">
                <div className="d-flex">
                  <div className="me-2 d-flex">
                    {/* user thumbnail */}
                    <img
                      src={driveStatus}
                      className="car-book-request-thumb rounded-circle border img-fluid"
                      style={{ marginLeft: "10px" }}
                      alt="user profile"
                    />
                  </div>
                  {/* user name and verification status */}
                  <div className="settings-title">
                    <h4>Drive status</h4>
                    <p>
                      <span>Cleared to Drive</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col-6 col-lg-4">
                <div className="d-flex">
                  <div className="me-2 d-flex">
                    {/* user thumbnail */}
                    <img
                      src={mails}
                      className="car-book-request-thumb rounded-circle border img-fluid"
                      style={{ marginLeft: "10px" }}
                      alt="user profile"
                    />
                  </div>
                  {/* user name and verification status */}
                  <div className="settings-title">
                    <h4>Mail</h4>
                    <p>
                      <span>{userSingleData?.email}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col-6 col-lg-4">
                <div className="d-flex">
                  <div className="me-2 d-flex">
                    {/* user thumbnail */}
                    <img
                      src={calls}
                      className="car-book-request-thumb rounded-circle border img-fluid"
                      style={{ marginLeft: "10px" }}
                      alt="user profile"
                    />
                  </div>
                  {/* user name and verification status */}
                  <div className="settings-title">
                    <h4>Phone</h4>
                    <p>
                      <span>{userSingleData?.contact_number}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-flex justify-content-between align-items-center mt-2">
          <Link to={"/dashboard/settings/host-edit-profile"}>
            <button
              type="submit"
              className="button-style primary-button me-2 me-xl-4 cr-button"
            >
              Edit Profile
            </button>
          </Link>
        </div>
      </article>

      <article className="cr-border p-4 mt-4">
        {/* booking user & car details */}
        <div className="d-md-flex justify-content-between align-items-center">
          {/* user & car */}
          <div className="d-flex">
            {/* user name and verification status */}
            <div className="car-book-request-user">
              <h5>Password</h5>
              <p>
                <span>Change password </span>
              </p>
            </div>
          </div>

          <div>
            <Link to={"/dashboard/settings/host-change-password"}>
              <button
                type="submit"
                className="button-style me-2 me-xl-4 cr-default-btn"
              >
                Change
              </button>
            </Link>
          </div>
        </div>

        <div className="d-md-flex justify-content-between align-items-center mt-4">
          {/* user & car */}
          <div className="d-flex">
            {/* user name and verification status */}
            <div className="car-book-request-user">
              <h5>Two-step verification</h5>
              <p>
                <span>An extra layer of security is added to your account</span>
              </p>
            </div>
          </div>

          {/* rating */}

          <div>
            <Form.Check type="switch" id="custom-switch" />
          </div>
        </div>
      </article>

      {/*       <article className="cr-border p-4 mt-4">
        
        <div className="d-md-flex justify-content-between align-items-center">
       
          <div className="d-flex">
            
            <div className="car-book-request-user">
              <h5>Notification</h5>
              <p className="mt-4">
                <span>Notify me if host approves my booking request</span>
              </p>
            </div>
          </div>

          <div>
            <Form.Check type="switch" id="custom-switch" />
          </div>
        </div>

        <div className="d-md-flex justify-content-between align-items-center mt-2">
         
          <div className="d-flex">
           
            <div className="car-book-request-user">
              <p>
                <span>Notify me if host reject my booking request</span>
              </p>
            </div>
          </div>

   

          <div>
            <Form.Check type="switch" id="custom-switch" />
          </div>
        </div>

        <div className="d-md-flex justify-content-between align-items-center mt-2">
      
          <div className="d-flex">
           
            <div className="car-book-request-user">
              <p>
                <span>Remind</span>
              </p>
            </div>
          </div>

         

          <div>
            <Form.Check type="switch" id="custom-switch" />
          </div>
        </div>
      </article> */}
    </>
  );
};

export default HostSettingsComponent;
