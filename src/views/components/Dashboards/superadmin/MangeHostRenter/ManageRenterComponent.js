import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useRenterListUser from "../../../../../hooks/useRenterListUser";
import { getCookie } from "../../../../../utilities/helper";
import RenterDetailsComponent from "./ManageHostRenterDetails/RenterDetailsComponent";
import "./MangeHostRenter.css";

const ManageRenterComponent = () => {
  const [renterUserData, setRenterUserData] = useRenterListUser();
  return (
    <div className="row g-0">
      <div className="col col-12">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          <div className="vehicles-button">
            <Link to={"/dashboard/manage"} className="active">
              Manage renters
            </Link>

            <Link to={"/dashboard/manage/hosts"}>Manage hosts</Link>
          </div>
          {renterUserData.map((data) => (
            <RenterDetailsComponent key={data._id} renterUserData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageRenterComponent;
