import axios from "axios";
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import Car from "../../../assets/images/SignInSignUpCar.png";
import useAuth from "../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";

const Signup = ({ props }) => {
  const [registerData, setRegisterData] = useState({});
  //to redirevt the previous pages
  //to redirevt the previous pages

  const navigate = useNavigate();

  const { user, setUser, isLoading, setIsLoading, setAuthError, authError } =
    useAuth();

  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;

    setRegisterData(newRegisterData);
  };
  //toast
  const showToastMessage = () => {
    toast.success("please check your email!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  //renter registration system
  const [errorMessage, setErrorMessage] = useState("");
  const handelRegisterRenterSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname, email, password, password2 } = registerData;

    if (password !== password2) {
      alert("password didn't match");
      return;
    }

    setIsLoading(true);
    // setValues({ ...values, buttonText: 'Submitting' });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/signup`,
      data: { firstname, lastname, role: "renter", email, password },
    })
      .then((response) => {
        if (response.data) {
          event.target.reset();
          showToastMessage();
          setRegisterData("");
          setErrorMessage("");
          setAuthError("");
        }
        //navigate("/login", { replace: true });
      })
      .catch((error) => {
        console.log("SIGNUP ERROR", error.response.data);
        setErrorMessage(error.response.data.error);
        // // setValues({ ...values, buttonText: 'Submit' });
        //setAuthError(error.response.data.error);
      });
  };

  //for host registration submit
  const handelRegisterHostSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname, email, password, password2 } = registerData;

    if (password !== password2) {
      alert("password didn't match");
      return;
    }
    setIsLoading(true);
    // setValues({ ...values, buttonText: 'Submitting' });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/signup`,
      data: { firstname, lastname, role: "host", email, password },
    })
      .then((response) => {
        if (response.data) {
          event.target.reset();
          showToastMessage();
          setRegisterData("");
          setErrorMessage("");
          setAuthError("");
        }
        //navigate("/login", { replace: true });
      })
      .catch((error) => {
        console.log("SIGNUP ERROR", error.response.data);
        // // setValues({ ...values, buttonText: 'Submit' });
        setAuthError(error.response.data.error);
      });
  };

  //for seller registration submit
  const handelRegisterSellerSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname, email, password, password2 } = registerData;

    if (password !== password2) {
      alert("password didn't match");
      return;
    }
    setIsLoading(true);
    // setValues({ ...values, buttonText: 'Submitting' });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/signup`,
      data: { firstname, lastname, role: "seller", email, password },
    })
      .then((response) => {
        if (response.data) {
          event.target.reset();
          showToastMessage();
          setRegisterData("");
          setErrorMessage("");
          setAuthError("");
        }
        //navigate("/signup", { replace: true });
      })
      .catch((error) => {
        console.log("SIGNUP ERROR", error.response.data);
        // // setValues({ ...values, buttonText: 'Submit' });
        setAuthError(error.response.data.error);
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
          <div className="col-md-8 col-lg-6 col-xl-5 offset-xl-1">
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
              <ToastContainer />
            </div>

            <div className="form-div">
              <Tabs
                defaultActiveKey="signup_renter"
                id="uncontrolled-tab-example"
                className="mb-3 signup-tab"
              >
                <Tab eventKey="signup_renter" title="Sign up Renter">
                  <div className="signup-renter">
                    <form
                      className="d-flex justify-content-center align-items-center "
                      onSubmit={handelRegisterRenterSubmit}
                    >
                      <div className="sign-in-info-card">
                        <div className="row">
                          <div className="col-6 col-md-6">
                            <div className="email-password-div">
                              <p className="label">First name</p>
                              <input
                                type="text"
                                className="text-input-field"
                                placeholder="Enter first name"
                                name="firstname"
                                onBlur={handelOnBlur}
                              />
                              <FaRegUser className="icon" size={20} />
                            </div>
                          </div>

                          <div className="col-6 col-md-6">
                            <div className="email-password-div">
                              <p className="label">Last name</p>
                              <input
                                type="text"
                                className="text-input-field"
                                placeholder="Enter last name"
                                name="lastname"
                                onBlur={handelOnBlur}
                              />
                              <FaRegUser className="icon" size={20} />
                            </div>
                          </div>
                        </div>

                        <div className="email-password-div">
                          <p className="label">Email</p>
                          <input
                            type="email"
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
                          <p className="alert-message">
                            Password must be minimum 8 characters
                          </p>
                        </div>
                        <div className="email-password-div">
                          <p className="label">Re-Type Password</p>
                          <input
                            type="password"
                            className="text-input-field"
                            placeholder="Enter password"
                            name="password2"
                            onBlur={handelOnBlur}
                          />
                          <RiLockPasswordLine className="icon" size={20} />
                          <p className="alert-message">
                            Password must be minimum 8 characters
                          </p>
                        </div>

                        <input
                          type="submit"
                          className="label login-button-text button login-button cr-button"
                          defaultValue="Sign up"
                        />

                        {/* <div className="button">
                          <div className="d-flex justify-content-center align-items-center">
                            <FcGoogle size={25} />
                            <p className="label login-google-text ms-2">
                              Sign up with Google
                            </p>
                          </div>
                        </div>

                        <div className="button">
                          <div className="d-flex justify-content-center align-items-center">
                            <SiFacebook size={25} color="#4676ED" />
                            <p className="label login-google-text ms-2">
                              Sign up with Facebook
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
                          Have an account?
                          <Link to={"/login"}>
                            <span className="primary-color"> Sign In</span>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </Tab>
                <Tab eventKey="signup_host" title="Sign up Host">
                  <div className="signup-host">
                    <form
                      onSubmit={handelRegisterHostSubmit}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <div className="sign-in-info-card">
                        <div className="row">
                          <div className="col-6 col-md-6">
                            <div className="email-password-div">
                              <p className="label">First name</p>
                              <input
                                type="text"
                                className="text-input-field"
                                placeholder="Enter first name"
                                name="firstname"
                                onBlur={handelOnBlur}
                              />
                              <FaRegUser className="icon" size={20} />
                            </div>
                          </div>

                          <div className="col-6 col-md-6">
                            <div className="email-password-div">
                              <p className="label">Last name</p>
                              <input
                                type="text"
                                className="text-input-field"
                                placeholder="Enter last name"
                                name="lastname"
                                onBlur={handelOnBlur}
                              />
                              <FaRegUser className="icon" size={20} />
                            </div>
                          </div>
                        </div>

                        <div className="email-password-div">
                          <p className="label">Email</p>
                          <input
                            type="email"
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
                          <p className="alert-message">
                            Password must be minimum 8 characters
                          </p>
                        </div>
                        <div className="email-password-div">
                          <p className="label">Re-Type Password</p>
                          <input
                            type="password"
                            className="text-input-field"
                            placeholder="Enter password"
                            name="password2"
                            onBlur={handelOnBlur}
                          />
                          <RiLockPasswordLine className="icon" size={20} />
                          <p className="alert-message">
                            Password must be minimum 8 characters
                          </p>
                        </div>

                        <input
                          type="submit"
                          className="label login-button-text button login-button cr-button"
                          defaultValue="Sign up"
                        />

                        {/* <div className="button">
                          <div className="d-flex justify-content-center align-items-center">
                            <FcGoogle size={25} />
                            <p className="label login-google-text ms-2">
                              Sign up with Google
                            </p>
                          </div>
                        </div>

                        <div className="button">
                          <div className="d-flex justify-content-center align-items-center">
                            <SiFacebook size={25} color="#4676ED" />
                            <p className="label login-google-text ms-2">
                              Sign up with Facebook
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
                          Have an account?
                          <Link to={"/login"}>
                            <span className="primary-color"> Sign In</span>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </Tab>
                <Tab eventKey="signup_seller" title="Sign up Seller">
                  <div className="signup-seller">
                    <form
                      onSubmit={handelRegisterSellerSubmit}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <div className="sign-in-info-card">
                        <div className="row">
                          <div className="col-6 col-md-6">
                            <div className="email-password-div">
                              <p className="label">First name</p>
                              <input
                                type="text"
                                className="text-input-field"
                                placeholder="Enter first name"
                                name="firstname"
                                onBlur={handelOnBlur}
                              />
                              <FaRegUser className="icon" size={20} />
                            </div>
                          </div>

                          <div className="col-6 col-md-6">
                            <div className="email-password-div">
                              <p className="label">Last name</p>
                              <input
                                type="text"
                                className="text-input-field"
                                placeholder="Enter last name"
                                name="lastname"
                                onBlur={handelOnBlur}
                              />
                              <FaRegUser className="icon" size={20} />
                            </div>
                          </div>
                        </div>

                        <div className="email-password-div">
                          <p className="label">Email</p>
                          <input
                            type="email"
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
                          <p className="alert-message">
                            Password must be minimum 8 characters
                          </p>
                        </div>
                        <div className="email-password-div">
                          <p className="label">Re-Type Password</p>
                          <input
                            type="password"
                            className="text-input-field"
                            placeholder="Enter password"
                            name="password2"
                            onBlur={handelOnBlur}
                          />
                          <RiLockPasswordLine className="icon" size={20} />
                          <p className="alert-message">
                            Password must be minimum 8 characters
                          </p>
                        </div>

                        <input
                          type="submit"
                          className="label login-button-text button login-button cr-button"
                          defaultValue="Sign up"
                        />
                        <div className="button homr-btn-mains">
                          <div className="d-flex justify-content-center align-items-center ">
                            <Link to="/" className=" home-btn-text ms-2">
                              Home
                            </Link>
                          </div>
                        </div>
                        {/*   <div className="button">
                          <div className="d-flex justify-content-center align-items-center">
                            <FcGoogle size={25} />
                            <p className="label login-google-text ms-2">
                              Sign up with Google
                            </p>
                          </div>
                        </div>

                        <div className="button">
                          <div className="d-flex justify-content-center align-items-center">
                            <SiFacebook size={25} color="#4676ED" />
                            <p className="label login-google-text ms-2">
                              Sign up with Facebook
                            </p>
                          </div>
                        </div> */}

                        <p className="label no-account-text">
                          Have an account?
                          <Link to={"/login"}>
                            <span className="primary-color"> Sign In</span>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
