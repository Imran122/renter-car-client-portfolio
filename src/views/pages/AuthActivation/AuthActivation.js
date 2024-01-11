import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AuthActivation.css";
const AuthActivation = () => {
  const { id } = useParams();
  const [success, setSuccess] = useState(false);
  const activateAccount = () => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/account-activation`,
      data: { token: id },
    })
      .then(() => {
        setSuccess(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  //login after activate
  const navigate = useNavigate();
  const loginAccount = () => {
    navigate("/login", { replace: true });
  };
  return (
    <div>
      <div className="container text-center mt-4">
        <div className="text-center darken-grey-text mb-4">
          {success === true && (
            <div className="alert alert-success" role="alert">
              Congratulations! Successfully created account.
            </div>
          )}
          <h1 className="font-bold mt-4 mb-3 h5">
            Please activate your account before login.
          </h1>
          <div>
            {success === false ? (
              <button
                className="btn btn-danger btn-md"
                onClick={activateAccount}
              >
                Activate Account
              </button>
            ) : (
              <button className="btn btn-danger btn-md" onClick={loginAccount}>
                LogIn
              </button>
            )}
          </div>
        </div>
      </div>

      {/*  <button onClick={activateAccount}>Activate</button> */}
    </div>
  );
};

export default AuthActivation;
