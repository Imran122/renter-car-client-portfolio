import axios from "axios";
import React, { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Car from "../../../assets/images/SignInSignUpCar.png";
import useAuth from "../../../hooks/useAuth";
import { authenticate, isAuth } from "../../../utilities/helper";
import "./Login.css";

const Login = ({ props }) => {
  const [loginData, setLoginData] = useState({});
  const { user, setUser, isLoading, setIsLoading, setAuthError, authError } =
    useAuth();
  const location = useLocation();
  console.log("lo", location);
  const navigate = useNavigate();

  //taking input
  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };

  //login system by form submit
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordAlert, setPasswordAllert] = useState("");

  const handelLoginSubmit = (event) => {
    event.preventDefault();

    const { email, password } = loginData;
    //password validation by condition
    if (password === undefined || email === undefined) {
      setErrorMessage("please fill the form");
    } else if (password.length < 6) {
      setPasswordAllert("Password must be minimum 6 characters");
    } else if (password.length > 6) {
      setPasswordAllert("");
    }

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/signin`,
      data: { email, password },
    })
      .then((response) => {
        console.log("SIGNIN SUCCESS", response);
        const destination = location?.state?.from || "/";
        navigate(location?.state?.from || "/", { replace: true });
        setErrorMessage("");
        authenticate(response.data, () => {
          setUser(isAuth());
          setIsLoading(false);
          console.log("cookie local save ", isAuth());
        });
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
        console.log("SIGN IN ERROR", error.response.data);
        // setValues({ ...values, buttonText: 'Submit' });
        //setAuthError(error.response.data.error);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 col-lg-6 col-xl-6 d-none d-md-block car-bg">
            <div className="car-logo">
              <img src={Car} className="img-fluid" alt="Car logo" />
            </div>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div className="error-msg">
              {/*  auth error message show */}
              {errorMessage && (
                <div
                  className="alert alert-danger justify-content-center "
                  role="alert"
                >
                  {errorMessage}
                </div>
              )}
              {/* end  auth error message show */}
            </div>
            <form
              className="d-flex justify-content-center align-items-center form-div"
              onSubmit={handelLoginSubmit}
            >
              <div className="sign-in-info-card">
                <div className="email-password-div">
                  <p className="label">Email</p>
                  <input
                    type="text"
                    className="text-input-field"
                    placeholder="Enter your email"
                    name="email"
                    onBlur={handelOnBlur}
                  />
                  <HiOutlineMail className="icon" size={20} />
                </div>

                <div className="email-password-div">
                  <p className="label">Password</p>
                  <input
                    type="password"
                    className="text-input-field"
                    placeholder="Enter password"
                    name="password"
                    onBlur={handelOnBlur}
                  />
                  <RiLockPasswordLine className="icon" size={20} />
                  {passwordAlert && (
                    <p className="alert-message alert alert-danger">
                      {passwordAlert}
                    </p>
                  )}
                </div>

                <div className="d-flex justify-content-between remember-forget-password-div">
                  <div className="d-flex align-items-center">
                    <input type="checkbox" />
                    <p className="label ms-2">Remember me</p>
                  </div>

                  <p className="label primary-color">Forget Passwords?</p>
                </div>

                <input
                  type="submit"
                  className="label login-button-text button login-button cr-button"
                  defaultValue="Sign In"
                />

                {/*   <div className="button">
                  <div className="d-flex justify-content-center align-items-center">
                    <FcGoogle size={25} />
                    <p className="label login-google-text ms-2">
                      Sign in with Google
                    </p>
                  </div>
                </div>

                <div className="button">
                  <div className="d-flex justify-content-center align-items-center">
                    <SiFacebook size={25} color="#4676ED" />
                    <p className="label login-google-text ms-2">
                      Sign in with Facebook
                    </p>
                  </div>
                </div> */}
                <div className="button homr-btn-mains">
                  <div className="d-flex justify-content-center align-items-center ">
                    <Link to="/" className=" home-btn-text ms-2">
                      Home
                    </Link>
                  </div>
                </div>
                <p className="label no-account-text">
                  Don't have an account?
                  <Link to={"/signup"}>
                    <span className="primary-color"> Sign Up</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
