import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import "../HostSettings.css";
import useAuth from "../../../../../../hooks/useAuth";
import {
  getCookie,
  isAuth,
  signout,
  updateUser,
} from "../../../../../../utilities/helper";

const HostChangePasswordComponent = () => {
  const { user, setUser } = useAuth();
  let initialInfo = {};
  //load user data by user id
  const [error, setError] = useState("");
  const [errorsms, setErrorsms] = useState("");
  const [errorSamePass, setErrorSamePass] = useState("");

  const [updateData, setUpdateData] = useState([]);

  const navigate = useNavigate();
  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = { ...updateData };
    newUserData[field] = value;

    setUpdateData(newUserData);
  };

  const submitCardData = (e) => {
    e.preventDefault();
    if (updateData.currentpassword === updateData.password) {
      setErrorSamePass("old and current password can not be same");
      return;
    }
    if (updateData.password !== updateData.password2) {
      setErrorsms("password is not same");
      return;
    }
    //update data by call api
    fetch(`${process.env.REACT_APP_API}/api/user/changepassword`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify(updateData),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/", { replace: true });
        } else if (response.status === 400) {
          setError("old password doesnt matched");
          return;
        }
      })

      .then((response) => {
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        setError("old password doesnt matched");

        // setValues({ ...values, buttonText: 'Submit' });
        //setAuthError(error.response.data.error);
      });
  };
  return (
    <>
      <div className="d-md-flex cr-edit">
        <Link to={"/dashboard/settings"}>
          <p className="d-inline-block p-1 fw-600 my-3">
            <AiOutlineLeft />
            <span className="mx-1">Change password</span>
          </p>
        </Link>
      </div>
      <article className="cr-border p-4 mt-3">
        {/* booking user & car details */}

        <div className="d-md-flex justify-content-between align-items-center">
          <div className="input-container mt-3 w-100">
            {errorsms && <p className="alert-message">{errorsms}</p>}
            <form onSubmit={submitCardData}>
              <div className="row g-2">
                <div className="col col-12">
                  <div className="input-wrapper">
                    <div className="email-password-div">
                      <p className="label">Enter current password</p>
                      <input
                        type="password"
                        className="text-input-field"
                        placeholder="Enter password"
                        name="currentpassword"
                        onChange={handelOnChange}
                      />
                      <RiLockPasswordLine className="icon" size={20} />
                      {error && <p className="alert-message">{error}</p>}
                    </div>
                  </div>
                </div>

                <div className="col col-12">
                  <div className="input-wrapper">
                    <div className="email-password-div">
                      <p className="label">Enter new password</p>
                      <input
                        type="password"
                        className="text-input-field"
                        placeholder="Enter password"
                        name="password"
                        onChange={handelOnChange}
                      />
                      <RiLockPasswordLine className="icon" size={20} />
                      {errorSamePass && (
                        <p className="alert-message">{error}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col col-12">
                  <div className="input-wrapper">
                    <div className="email-password-div">
                      <p className="label">Confirm new password</p>
                      <input
                        type="password"
                        className="text-input-field"
                        placeholder="Enter password"
                        name="password2"
                        onChange={handelOnChange}
                      />
                      <RiLockPasswordLine className="icon" size={20} />
                      <p className="alert-message">
                        Password must be minimum 8 characters
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="row g-3 mt-3">
              <div className="col col-6 col-md-3">
                <button
                  onClick={submitCardData}
                  type="submit"
                  className="button-style primary-button me-2 me-xl-4 cr-button"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default HostChangePasswordComponent;
