import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import carImg from "../../../../../../assets/images/iris.png";
import useAuth from "../../../../../../hooks/useAuth";
import { getCookie } from "../../../../../../utilities/helper";
import "../SuperAdminApproval.css";

const ApprovalPosts = () => {
  const {
    user,
    rentRequestCarList,
    setRentRequestCarList,
    isLoading,
    setIsLoading,
  } = useAuth();
  const newNonAcceptedList = rentRequestCarList.filter(
    (obj) => obj.requestStatus === false
  );

  const navigate = useNavigate();
  //load data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/rentcarlist?email=${user.email}`, {
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
      .then((data) => setRentRequestCarList(data));
  }, []);

  //handle deny reject the request
  /*   const carDenyRequest = (id) => {
    const url = `${process.env.REACT_APP_API}/api/rentcardeny`;

    const article = { id: id };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    };

    axios.delete(url, article, { headers: headers }).then((response) => {
      if (response.status === 200) {
        navigate("/dashboard/approval-requests", { replace: true });
        return response.json();
      } else if (response.status === 401) {
        navigate("/dashboard", { replace: true });
      }
    });
  }; */

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
          {newNonAcceptedList.map((car) => (
            <article className="a-border p-4 approval-posts" key={car._id}>
              {/* booking user & car details */}

              <div className="d-md-flex justify-content-between align-items-center">
                {/* user & car */}
                <div className="d-flex">
                  <div className="me-2 d-flex">
                    {/* car thumbnail */}
                    <div className="car-book-request-thumb a-border flex-justify-align-center">
                      <img
                        src={carImg}
                        className="img-fluid"
                        alt="mercedes car"
                      />
                    </div>
                  </div>
                  {/* user name and verification status */}
                  <div className="car-approval-request">
                    <h5>{car.carMake}</h5>
                    <p>
                      <span>{car.carModel}</span> ·{" "}
                      <span className="car-a-id">{car.carLicenseNumber}</span>
                    </p>
                  </div>
                </div>

                {/* buttons */}
                <div>
                  <button
                    onClick={() => carDenyRequest(car._id)}
                    className="button-style danger-button me-2 me-xl-4"
                  >
                    Rejects
                  </button>
                  <button
                    onClick={() => {
                      navigate(
                        `/dashboard/approval-requests/details/${car._id}`,
                        {
                          replace: true,
                        }
                      );
                    }}
                    className="button-style primary-button"
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </>
      )}
    </>
  );
};

export default ApprovalPosts;
