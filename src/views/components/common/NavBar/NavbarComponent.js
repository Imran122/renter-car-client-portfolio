import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { BsCaretDownFill, BsGlobe } from "react-icons/bs";
import { HiLogout, HiOutlineUser } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import mainLogo from "../../../../assets/images/main-logo.png";
import userImg from "../../../../assets/images/user_image.png";
import useAuth from "../../../../hooks/useAuth";
import useUsersDetails from "../../../../hooks/useUsersDetails";
import { signout } from "../../../../utilities/helper";
import "./Navbar.css";

const NavbarComponent = () => {
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
    <>
      {/* desktop navbar */}
      <div className="navbar-parent-container shadow-sm">
        <Navbar className="navbar-container d-none d-md-flex align-items-center">
          {/* <Container> */}
          <Navbar.Brand>
            <Link to="/">
              <img src={mainLogo} alt="main-logo" />
            </Link>
          </Navbar.Brand>
          {/* navbar left side links */}
          <Nav className="me-auto ms-2 desktop-nav-links">
            <Link to="/rent-car">Rent </Link>
            <Link to="/sell-car">Buy</Link>
            {user?.role === "host" ? (
              <Link to="/dashboard/sell-car-upload">Sell</Link>
            ) : user?.role === "seller" ? (
              <Link to="/dashboard/seller-sell-car-upload">Sell</Link>
            ) : (
              <Link to="/signup">Sell</Link>
            )}

            <Link to="/about-us">About us</Link>
            <Link to="/contact-us">Contact us</Link>
          </Nav>
          {/* navbar right side links  */}
          <div className="ms-auto d-flex align-items-center">
            {userSingleData.email ? (
              <>
                {/* list button */}
                {user.role === "host" && (
                  <Link to="/dashboard/rent-car-upload">
                    <button className="navbar-list-btn cr-button">
                      List your car
                    </button>
                  </Link>
                )}

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
                        src={userImg}
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
                            src={userImg}
                            alt="user-profile"
                          />
                        )}
                        <h5 className="fw-bold my-1">{user.firstname}</h5>
                        {/* <small>{user.firstname}</small> */}
                      </div>
                      <hr />
                      <div className="user-profile-img-links d-flex flex-column">
                        <Link to="/dashboard">
                          <div className="user-profile-img-link d-flex align-items-center">
                            <HiOutlineUser className="mx-1 border-right" />
                            <span className="ms-1">Dashboard</span>
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
              </>
            ) : (
              <>
                {/* login button */}
                <Link to="/login">
                  <button className="navbar-list-btn ">Login</button>
                </Link>
              </>
            )}
          </div>
          {/* </Container> */}
        </Navbar>
      </div>

      {/* mobile navbar */}
      <Navbar
        className="d-md-none py-3 navbar-container"
        bg="transparent"
        expand={false}
      >
        <Container>
          <Navbar.Toggle
            className="border-0 shadow-none"
            aria-controls="offcanvasNavbar"
          />
          <div className="d-flex align-items-center">
            {/* login button */}
            {userSingleData.email ? (
              <>
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
                        src={userImg}
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
                            src={userImg}
                            alt="user-profile"
                          />
                        )}

                        <h5 className="fw-bold my-1">{user.firstname}</h5>
                        {/* <small>{user.email}</small> */}
                      </div>
                      <hr />
                      <div className="user-profile-img-links d-flex flex-column">
                        <Link to="/dashboard">
                          <div className="user-profile-img-link d-flex align-items-center">
                            <HiOutlineUser className="mx-1 border-right" />
                            <span className="ms-1">Dashboard</span>
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
              </>
            ) : (
              <>
                {/* login button */}
                <Link to="/login">
                  <button className="navbar-list-btn ">Login</button>
                </Link>
              </>
            )}
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/rent-car" className="text-black nav-link">
                Rent Car
              </Link>
              <Link to="/sell-car" className="text-black nav-link">
                Sell Car
              </Link>

              <Link to="/about-us" className="text-black nav-link">
                About us
              </Link>
              <Link to="/contact-us" className="text-black nav-link">
                Contact us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
