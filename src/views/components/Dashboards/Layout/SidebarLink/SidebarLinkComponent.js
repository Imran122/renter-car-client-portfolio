import React from "react";
import { NavLink } from "react-router-dom";
import "./SidebarLink.css";

const SidebarLinkComponent = ({ sidebarLink, handleClose }) => {
  const { to, icon, text } = sidebarLink;
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          `sidebar-link d-flex align-items-center ${
            isActive && "sidebar-link-active"
          }`
        }
        to={to}
        onClick={handleClose}
      >
        {icon}
        <span className="ms-2">{text}</span>
      </NavLink>
    </>
  );
};

export default SidebarLinkComponent;
