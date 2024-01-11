import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container mx-auto row row-cols-1 row-cols-xl-2">
        {/* left col */}
        <div className="d-none d-xl-block col">
          <div className="row row-cols-3">
            {/* first colmn */}
            <div className="col">
              <div className="footer-link-list-container">
                <h4>About</h4>
                <nav className="footer-link-list">
                  <Link to={"/"}>About us</Link>

                  <Link to={"/"}>Blog</Link>

                  <Link to={"/"}>Careers</Link>

                  <Link to={"/"}>Jobs</Link>

                  <Link to={"/"}>In Press</Link>

                  <Link to={"/"}>Gallery</Link>
                </nav>
              </div>
            </div>
            {/* first colmn */}
            <div className="col">
              <div className="footer-link-list-container">
                <h4>Support</h4>
                <nav className="footer-link-list">
                  <Link to={"/contact-us"}>Contact us</Link>

                  <Link to={"/"}>Support</Link>

                  <Link to={"/"}>Whatsapp</Link>

                  <Link to={"/"}>Telegram</Link>

                  <Link to={"/"}>Ticketing</Link>

                  <Link to={"/"}>Call Center</Link>
                </nav>
              </div>
            </div>
            {/* second colmn */}
            <div className="col">
              <div className="footer-link-list-container">
                <h4>FAQ</h4>
                <nav className="footer-link-list">
                  <Link to={"/"}>Account</Link>

                  <Link to={"/"}>Manage Orders</Link>

                  <Link to={"/"}>Orders</Link>

                  <Link to={"/"}>Payments</Link>

                  <Link to={"/"}>Returns</Link>

                  <Link to={"/privacy-policy"}>Privacy Policy</Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* right col */}
        <div className="col">
          <div className="footer-right-col">
            <h5>Newsletter</h5>
            <p>
              Be the first one to know about discounts, offers and events.
              Unsubscribe whenever you like.
            </p>
            {/* newsletter subscribe input */}
            <form className="footer-subscribe-container">
              <div className="footer-subscribe-input w-100 d-flex align-items-center">
                <IoMailOutline className="footer-subscribe-input-icon me-2" />
                <input type="email" placeholder="Enter your mail" />
              </div>
              <button type="submit" className="cr-button">
                Submit
              </button>
            </form>
            {/* social links */}
            <div className="d-flex justify-content-end align-items-center">
              <button className="footer-social-link-btn">
                <AiOutlineFacebook />
              </button>
              <button className="footer-social-link-btn">
                <AiOutlineYoutube />
              </button>
              <button className="footer-social-link-btn">
                <AiOutlineWhatsApp />
              </button>
            </div>
          </div>
        </div>
      </div>
      <small className="d-block text-center">
        &copy; 2000-{new Date().getFullYear()}, All Rights Reserved
      </small>
    </footer>
  );
};

export default Footer;
