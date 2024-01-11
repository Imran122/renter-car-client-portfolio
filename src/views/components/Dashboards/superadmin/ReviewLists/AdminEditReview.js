import { React, useState } from "react";
import userImg from "../../../../../assets/images/user_image.png";
import { Modal } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../../../../../utilities/helper";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import useAdminReviewList from "../../../../../hooks/useAdminReviewList";
import useAuth from "../../../../../hooks/useAuth";
const AdminEditReview = (props) => {
  let { _id } = props.adminReviewListData;
  const [adminReviewListData, setAdminReviewListData] = useAdminReviewList();

  const { isLoading, setIsLoading } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [star, setStar] = useState(false);
  const toggleStar = () => setStar((prev) => !prev);
  // const { id } = useParams();

  const navigate = useNavigate();
  const [getReviewData, setGetReviewData] = useState([]);
  //review
  const [hoverForCar, setHoverForCar] = useState(null);
  const [reviewStarToCar, setReviewStarToCar] = useState(null);

  const reviewDetails = (id) => {
    setShow(true);
    fetch(`${process.env.REACT_APP_API}/api/get-review-for-edit/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/dashboard/review-lists", { replace: true });
        }
      })
      .then((data) => {
        //localStorage.setItem("car", JSON.stringify(data));
        setGetReviewData(data);
        setReviewStarToCar(data?.reviewDetails?.reviewStarToCar);
      });
  };
  const [updateReview, setUpdateReview] = useState([]);
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...updateReview };
    newData[field] = value;
    setUpdateReview(newData);
  };

  const updateReviewData = (e) => {
    setShow(false);
    setIsLoading(true);

    e.preventDefault();
    const id = _id;
    let reviewTextToCar = updateReview?.reviewTextToCar;
    const datas = {
      id: id,
      reviewTextToCar: reviewTextToCar,
      reviewStarToCar: reviewStarToCar,
    };

    const url = `${process.env.REACT_APP_API}/api/update-review-by-admin`;
    //update data by call api
    axios
      .put(url, datas, {
        headers: {
          // "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${getCookie("token")}`,
        },
      })

      .then((response) => {
        if (response.status === 200) {
          setIsLoading(false);
          navigate("/dashboard/review-lists", { replace: true });
        } else if (response.status === 401) {
          navigate("/", { replace: true });
        }
      });
  };

  return (
    <>
      <div className="col col-12 col-xl-3 offset-xl-1">
        <div className="d-flex mt-4 justify-content-end">
          <button
            className="button-style cc-reviwlist-btn"
            onClick={() => reviewDetails(_id)}
          >
            Edit Review
          </button>
          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <form onSubmit={updateReviewData}>
              <Modal.Body>
                <div className="col col-12">
                  <div className="d-flex">
                    <div className="me-2">
                      {getReviewData.renterProfileImage ? (
                        <img
                          src={getReviewData.renterProfileImage}
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
                    {/* car thumb and model */}
                    <div className="flex-grow-1 d-md-flex justify-content-between">
                      <div className="mb-2 mb-md-0">
                        <div className="sa-review-user-title">
                          <h5 className="ms-2 mb-2">
                            <strong>
                              {getReviewData.renterFirstName}{" "}
                              {getReviewData.renterLastName}{" "}
                            </strong>
                            rated to
                            <strong>
                              {" "}
                              {getReviewData?.reviewDetails?.carMake}{" "}
                              {getReviewData?.reviewDetails?.carModel}
                            </strong>
                            of{" "}
                            <strong>
                              {getReviewData?.reviewDetails?.hostFirstName}{" "}
                              {getReviewData?.reviewDetails?.hostLastName}
                            </strong>
                          </h5>
                        </div>

                        <div className="d-flex d-md-block book-money-title">
                          <div style={{ fontSize: "22px" }}>
                            {[...Array(5)].map((star, i) => {
                              const ratingValue = i + 1;
                              return (
                                <label key={i}>
                                  <input
                                    type="radio"
                                    className="rating-radio-btn"
                                    name="reviewStarToCar"
                                    value={ratingValue}
                                    onClick={() =>
                                      setReviewStarToCar(ratingValue)
                                    }
                                  />
                                  <FaStar
                                    className="start-rating"
                                    color={
                                      ratingValue <=
                                      (hoverForCar || reviewStarToCar)
                                        ? "#ffc107"
                                        : "#e4e5e9"
                                    }
                                    size={20}
                                    onMouseEnter={() =>
                                      setHoverForCar(ratingValue)
                                    }
                                    onMouseLeave={() => setHoverForCar(null)}
                                  />
                                </label>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* review details */}

                  <div className="d-md-flex mt-4 mt-md-0">
                    <div className="col col-12 col-xl-10 offset-md-2 mt-4">
                      <div className="form-group">
                        <textarea
                          className="form-control cr-review-txtarea"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="reviewTextToCar"
                          defaultValue={
                            getReviewData?.reviewDetails?.reviewTextToCar
                          }
                          placeholder="Edit review..."
                          onChange={handleOnType}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="button-style cc-reviwlist-modal-btn"
                  onClick={() => updateReviewData}
                >
                  Save Review
                </button>
              </Modal.Footer>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AdminEditReview;
