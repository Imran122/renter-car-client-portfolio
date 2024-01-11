import React, { useState } from "react";
import userImg from "../../../../../../assets/images/user_image.png";
import { Modal } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "../HostReviews.css";

const HostReviewIProvideDetailsComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [star, setStar] = useState(false);
  const toggleStar = () => setStar((prev) => !prev);

  return (
    <div className="cr-review-card mt-3">
      <p>Coming Soon...</p>
      {/*       <div className="p-4">
          <div className="d-flex">
            <div className="me-2">
              <img
                  src={userImg}
                  className="car-book-request-thumb rounded-circle border img-fluid"
                  style={{ marginLeft: "10px" }}
                  alt="user profile"
                />
            </div>
        
            <div className="flex-grow-1 d-md-flex justify-content-between">
              <div className="mb-2 mb-md-0">
                <div className="host-review-user-title">
                  <h5 className="mb-2">
                    Alex Simmons 
                    <BsFillCheckCircleFill
                      size={16}
                      style={{ color: "var(--green)" }}
                    />
                  </h5>
                </div>
                <p className="car-review-date">Member since 2018</p>
              </div>
              
              <div className="d-flex d-md-block book-money-title">
                <div style={{ color: "#524EB7", fontSize: "22px" }}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>
    
          <div className="d-md-flex mt-4 mt-md-0">
         
            <div className="d-flex justify-content-between review-details-item">
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt </p>
            </div>
          </div>
          <div className="d-flex mt-4 justify-content-end">
            <div className="col col-6 col-xl-3">
              <button
                type="submit"
                className="button-style cc-reviw-btn"
                onClick={handleShow}
              >
                Edit Review
              </button>
              <Modal 
                        show={show} 
                        onHide={handleClose}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>

                        <Modal.Body>
                            <div className="col col-12">
                                <div className="d-flex">
                                    <div className="me-2">
                                        <img
                                            src={userImg}
                                            className="car-book-request-thumb rounded-circle border img-fluid"
                                            style={{ marginLeft: "10px" }}
                                            alt="user profile"
                                            />
                                    </div>
                            
                                    <div className="flex-grow-1 d-md-flex justify-content-between">
                                        <div className="mb-2 mb-md-0">
                                            <div className="sa-review-user-title">
                                                <h5 className="ms-2 mb-2">
                                                    <strong>Alex Simmons </strong> 
                                                    rated to 
                                                    <strong> Mercedez Benz GLA GJZ 56RX358 </strong>
                                                    of <strong>Guy Hawkins</strong>
                                                </h5>
                                            </div>
                                        
                                            <div className="d-flex d-md-block book-money-title">
                                                <div style={{ fontSize: "22px" }}>

                                                        <button onClick={toggleStar} 
                                                            className="star-rated-button"
                                                            >
                                                            {star ? (
                                                                <AiOutlineStar style={{ color: "#FFAD60" }} />
                                                            ) : (
                                                                <AiFillStar style={{ color: "#FFAD60" }} />
                                                            )}
                                                        </button>
                                                        <button onClick={toggleStar} 
                                                            className="star-rated-button"
                                                            >
                                                            {star ? (
                                                                <AiOutlineStar style={{ color: "#FFAD60" }} />
                                                            ) : (
                                                                <AiFillStar style={{ color: "#FFAD60" }} />
                                                            )}
                                                        </button>
                                                        <button onClick={toggleStar} 
                                                            className="star-rated-button"
                                                            >
                                                            {star ? (
                                                                <AiOutlineStar style={{ color: "#FFAD60" }} />
                                                            ) : (
                                                                <AiFillStar style={{ color: "#FFAD60" }} />
                                                            )}
                                                        </button>
                                                        <button onClick={toggleStar} 
                                                            className="star-rated-button"
                                                            >
                                                            {star ? (
                                                                <AiOutlineStar style={{ color: "#FFAD60" }} />
                                                            ) : (
                                                                <AiFillStar style={{ color: "#FFAD60" }} />
                                                            )}
                                                        </button>
                                                        <button onClick={toggleStar} 
                                                            className="star-rated-button"
                                                            >
                                                            {star ? (
                                                                <AiOutlineStar style={{ color: "#FFAD60" }} />
                                                            ) : (
                                                                <AiFillStar style={{ color: "#FFAD60" }} />
                                                            )}
                                                        </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             

                                <div className="d-md-flex mt-4 mt-md-0">
                                    <div className="col col-12 col-xl-10 offset-md-2 mt-4">
                                        <div className="form-group">
                                            <textarea 
                                            className="form-control cr-review-txtarea" 
                                            id="exampleFormControlTextarea1" 
                                            rows="3"
                                            placeholder="Write your review...">

                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button 
                                className="button-style cc-reviwlist-modal-btn" 
                                onClick={handleClose}>
                                Save Review
                            </button>
                        </Modal.Footer>

                    </Modal>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default HostReviewIProvideDetailsComponent;
