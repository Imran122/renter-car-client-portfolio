import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useHostListUser from "../../../../../hooks/useHostListUser";
import { getCookie } from "../../../../../utilities/helper";
import HostDetatilsComponent from "./ManageHostRenterDetails/HostDetatilsComponent";

import "./MangeHostRenter.css";

const ManageHostComponent = () => {
  const [hostUserData, setHostUserData] = useHostListUser();

  return (
    <div className="row g-0">
      <div className="col col-12">
        <div className="not-dashboard-home-left-col">
          {/* booking request card */}
          <div className="vehicles-button">
            <Link to={"/dashboard/manage"}>Manage renters</Link>

            <Link to={"/dashboard/manage/hosts"} className="active">
              Manage hosts
            </Link>
          </div>
          {hostUserData.map((data) => (
            <HostDetatilsComponent key={data._id} hostUserData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageHostComponent;
