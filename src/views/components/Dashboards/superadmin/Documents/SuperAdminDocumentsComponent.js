import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCookie } from "../../../../../utilities/helper";
import Documents from "./Documents";
import "./SuperAdminDocuments.css";

const SuperAdminDocumentsComponent = () => {
  const [adminDocumentListData, setAdminDocumentListData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/car-document-list-data-admin`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setAdminDocumentListData(data));
  }, []);

  return (
    <div className="row g-0">
      <div className="col col-12 col-xl-10">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          {adminDocumentListData.map((data) => (
            <Documents key={data._id} adminDocumentListData={data} />
          ))}

          {/*  <div className="section-title mt-3">
            <nav className="pagination-outer" aria-label="Page navigation">
              <ul className="pagination justify-content-end">
                <li className="page-item">
                  <Link to={"/"} className="page-link" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </Link>
                </li>
                <li className="page-item">
                  <Link to={"/"} className="page-link active">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link to={"/"} className="page-link">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link to={"/"} className="page-link">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link to={"/"} className="page-link">
                    4
                  </Link>
                </li>
                <li className="page-item">
                  <Link to={"/"} className="page-link">
                    5
                  </Link>
                </li>
                <li className="page-item">
                  <Link to={"/"} className="page-link" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDocumentsComponent;
