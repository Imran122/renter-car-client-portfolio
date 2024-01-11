import React from "react";
import { Link } from "react-router-dom";
import main_logo from "../../../../../assets/images/main-logo.png";
import SidebarLink from "../SidebarLink/SidebarLinkComponent";
import "./Sidebar.css";

const SidebarComponent = ({ sidebarLinks }) => {
  return (
    <div className="d-none d-md-block position-fixed top-0 left-0 bg-white">
      <div className="main-logo-container d-flex justify-content-center align-items-center border">
        <Link to="/">
          <img src={main_logo} className="img-fluid" alt="main-logo" />
        </Link>
      </div>
      <div className="sidebar-container border-end">
        {sidebarLinks.map((sidebarLink, linkIdx) => (
          <SidebarLink key={linkIdx} sidebarLink={sidebarLink} />
        ))}
      </div>
    </div>
  );
};

export default SidebarComponent;
