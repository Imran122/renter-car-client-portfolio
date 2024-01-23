import axios from "axios";
import React, { useState } from "react";

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Car from "../../../assets/images/SignInSignUpCar.png";
import useAuth from "../../../hooks/useAuth";
import { authenticate, isAuth } from "../../../utilities/helper";
import "./Login.css";

const Login = ({ props }) => {
  /* const [loginData, setLoginData] = useState({}); */
  const [loginData, setLoginData] = useState({
    email: "imransardar122@gmail.com",
    password: "imran122",
    role: "super-admin", // Default role
  });

  const { user, setUser, isLoading, setIsLoading, setAuthError, authError } =
    useAuth();
  const location = useLocation();

  const navigate = useNavigate();
  const handleRoleChange = (e) => {
    const role = e.target.value;
    // Set default credentials based on the selected role
    const defaultCredentials = {
      "super-admin": {
        email: "imransardar122@gmail.com",
        password: "imran122",
      },
      renter: { email: "itechverser22@gmail.com", password: "imran122" },
      host: { email: "mdimranhossain0066@gmail.com", password: "imran122" },
      seller: { email: "shadowvampire11@gmail.com", password: "imran122" },
    };

    setLoginData({
      ...loginData,
      role,
      ...defaultCredentials[role],
    });
  };
  console.log(loginData);
  //taking input
  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [field]: value });
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
        navigate(location?.state?.from || "/dashboard", { replace: true });
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
            <div className="role-selection w-100">
              <p className="label">Select Role For default Login:</p>
              <select
                className="role-selection w-100 p-2"
                onChange={handleRoleChange}
                value={loginData.role}
              >
                <option value="super-admin">Admin</option>

                <option value="renter">Renter</option>
                <option value="host">Host</option>
                <option value="seller">Seller</option>
              </select>
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
                    value={loginData.email || ""}
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
                    value={loginData.password || ""}
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
