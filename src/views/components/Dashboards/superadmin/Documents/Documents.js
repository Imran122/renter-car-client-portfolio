import React from "react";
import carImg from "../../../../../assets/images/iris.png";
import DocumentImg from "../../../../../assets/images/documents.png";
import "./SuperAdminDocuments.css";

const Documents = (props) => {
  const {
    _id,
    firstname,
    carDocumentPdf,
    carImage,
    carMake,
    carModel,
    carLicenseNumber,
  } = props.adminDocumentListData;
  return (
    <article className="a-border p-4 approval-posts">
      {/* booking user & car details */}
      <div className="d-md-flex justify-content-between align-items-center">
        {/* user & car */}
        <div className="d-flex">
          <div className="me-2 d-flex">
            {/* car thumbnail */}
            <div className="car-book-request-thumb a-border flex-justify-align-center mx-2">
              <iframe src={carDocumentPdf} height="10" width="50"></iframe>
            </div>
            <div className="car-book-request-thumb a-border flex-justify-align-center">
              <img src={carImage} className="img-fluid" alt="mercedes car" />
            </div>
          </div>
          {/* user name and verification status */}
          <div className="car-approval-request">
            <h5>
              {firstname}'s Car License for {carMake} {carModel}
            </h5>
            <p>
              <span>Car License Number:</span> ·{" "}
              <span className="car-a-id">{carLicenseNumber}</span>
            </p>
          </div>
        </div>

        {/* buttons */}
        <div>
          {/* <button className="button-style danger-button me-2 me-xl-4 cr-button-de mb-2">
            Reject Document
          </button> */}

          <a href={carDocumentPdf} target="_blank">
            {" "}
            <button className="button-style primary-button cr-button">
              Details Document
            </button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Documents;
