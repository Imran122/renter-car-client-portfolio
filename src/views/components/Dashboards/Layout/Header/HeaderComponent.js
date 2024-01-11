import React, { useState } from "react";
import { Container, Dropdown, Navbar, Offcanvas } from "react-bootstrap";
import { BsCaretDownFill, BsGlobe } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { HiLogout, HiOutlineUser } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import user_image from "../../../../../assets/images/user_image.png";
import useAuth from "../../../../../hooks/useAuth";
import useUsersDetails from "../../../../../hooks/useUsersDetails";
import { signout } from "../../../../../utilities/helper";
import SidebarLinkComponent from "../SidebarLink/SidebarLinkComponent";
import "./Header.css";

const HeaderComponent = ({ sidebarLinks, subtitle }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user, setUser, isLoading, setIsLoading } = useAuth();
  const [userSingleData, setUserSingleData] = useUsersDetails();
  const navigate = useNavigate();
  const logout = () => {
    // setIsLoading(true);
    signout(() => {
      setUser("");

      // setIsLoading(false);
      navigate("/login", { replace: true });
    });
  };

  return (
    <header className="position-sticky top-0" style={{ zIndex: "99" }}>
      {/* mobile navbar */}
      <div className="dashboard-header-mobile border d-flex align-items-center d-md-none">
        <button className="border-0 bg-transparent ms-4" onClick={handleShow}>
          <FaBars size={24} />
        </button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            {sidebarLinks.map((sidebarLink, linkIdx) => (
              <SidebarLinkComponent
                key={linkIdx}
                handleClose={handleClose}
                sidebarLink={sidebarLink}
              />
            ))}
          </Offcanvas.Body>
        </Offcanvas>

        {/* mobile navbar */}
        <Navbar
          className="d-md-none"
          bg="transparent"
          expand={false}
          style={{ position: "absolute", right: "0" }}
        >
          <Container>
            <div className="d-flex align-items-end">
              <Dropdown>
                <Dropdown.Toggle
                  className="bg-transparent border-0 p-0 m-0 shadow-none"
                  id="dropdown-autoclose-true"
                >
                  {userSingleData.profileImage ? (
                    <img
                      className="user_profile_image rounded-circle"
                      src={userSingleData.profileImage}
                      alt="user-profile"
                    />
                  ) : (
                    <img
                      className="user_profile_image rounded-circle"
                      src={user_image}
                      alt="user-profile"
                    />
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu className="slide-in-blurred-top slide-out-blurred-top onlyMobileNav">
                  <div className="user-profile-img-menu">
                    <div className="d-flex flex-column justify-content-between align-items-center">
                      {userSingleData.profileImage ? (
                        <img
                          className="user_profile_image rounded-circle"
                          src={userSingleData.profileImage}
                          alt="user-profile"
                        />
                      ) : (
                        <img
                          className="user_profile_image rounded-circle"
                          src={user_image}
                          alt="user-profile"
                        />
                      )}
                      <h5 className="fw-bold my-1">
                        {userSingleData.firstname}
                      </h5>
                    </div>
                    <hr />
                    <div className="user-profile-img-links d-flex flex-column">
                      <Link to="/settings">
                        <div className="user-profile-img-link d-flex align-items-center">
                          <HiOutlineUser className="mx-1 border-right" />
                          <span className="ms-1">My profile</span>
                        </div>
                      </Link>
                      <button onClick={logout}>
                        <div className="user-profile-img-link d-flex align-items-center">
                          <HiLogout className="mx-1 border-right" />
                          <span className="ms-1">Logout</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Container>
        </Navbar>
      </div>
      {/* desktop header */}
      <div className="d-none dashboard-header-desktop d-md-flex justify-content-between align-items-center border-bottom bg-white">
        {/* header title and subtitle */}
        <div className="header-title-subtitle-container">
          <h4>{userSingleData.firstname}</h4>
          <p>{subtitle}</p>
        </div>

        {/* user icons */}
        <div className="d-flex justify-content-between align-items-center">
          {/* notification button */}
          <button className="rounded-circle border-0 notification-icon">
            <IoMdNotificationsOutline size={19} />
          </button>
          {/* user image button */}
          <Dropdown>
            <Dropdown.Toggle
              className="bg-transparent border-0 p-0 m-0 shadow-none"
              id="dropdown-autoclose-true"
            >
              {userSingleData.profileImage ? (
                <img
                  className="user_profile_image rounded-circle"
                  src={userSingleData.profileImage}
                  alt="user-profile"
                />
              ) : (
                <img
                  className="user_profile_image rounded-circle"
                  src={user_image}
                  alt="user-profile"
                />
              )}
            </Dropdown.Toggle>

            <Dropdown.Menu className="slide-in-blurred-top slide-out-blurred-top">
              <div className="user-profile-img-menu">
                <div className="d-flex flex-column justify-content-between align-items-center">
                  {userSingleData.profileImage ? (
                    <img
                      className="user_profile_image rounded-circle"
                      src={userSingleData.profileImage}
                      alt="user-profile"
                    />
                  ) : (
                    <img
                      className="user_profile_image rounded-circle"
                      src={user_image}
                      alt="user-profile"
                    />
                  )}
                  <h5 className="fw-bold my-1">{userSingleData.firstname}</h5>
                </div>
                <hr />
                <div className="user-profile-img-links d-flex flex-column">
                  <Link to="/dashboard/settings">
                    <div className="user-profile-img-link d-flex align-items-center">
                      <HiOutlineUser className="mx-1 border-right" />
                      <span className="ms-1">My profile</span>
                    </div>
                  </Link>
                  <button onClick={logout}>
                    <div className="user-profile-img-link d-flex align-items-center">
                      <HiLogout className="mx-1 border-right" />
                      <span className="ms-1">Logout</span>
                    </div>
                  </button>
                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>
          {/* language select button */}
          <button className="flex justify-content-between align-items-center bg-transparent border-0 p-0">
            <span className="me-2">
              <BsGlobe size={20} />
            </span>
            <span className="language text-uppercase me-1">en</span>
            <span>
              <BsCaretDownFill className="language-down-icon" size={14} />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
