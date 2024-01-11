import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdSubject } from "react-icons/md";

import "./ContactUs.css";

const ContactUsDetailsComponent = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jk81pk2",
        "template_p0t8hcf",
        form.current,
        "FA8w51iwLg8qqRrvC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="container top-rated-cars-container py-5">
        <div className="section-title text-center">
          <h3>Contact Us</h3>
        </div>

        {/* content */}
        <div className="row">
          <div className="col col-12 col-lg-6 d-none d-xl-block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.6830728615655!2d-77.45625128431271!3d38.99972894851015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b638c405f169c7%3A0x887473f05f722f18!2s44715%20Prentice%20Dr%2C%20Sterling%2C%20VA%2020166%2C%20USA!5e0!3m2!1sen!2sbd!4v1659196924969!5m2!1sen!2sbd"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              title="This is Contact Map"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="col col-12 col-lg-6">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="sign-in-info-card">
                <div className="row">
                  <div className="col-6 col-md-6">
                    <div className="email-password-div">
                      <p className="label">Name</p>
                      <input
                        type="text"
                        className="text-input-field"
                        placeholder="Enter Name"
                        name="from_name"
                      />
                      <FaRegUser className="icon" size={20} />
                    </div>
                  </div>

                  <div className="col-6 col-md-6">
                    <div className="email-password-div">
                      <p className="label">Email</p>
                      <input
                        type="email"
                        className="text-input-field"
                        placeholder="Enter Email"
                        name="reply_from"
                      />
                      <HiOutlineMail className="icon" size={20} />
                    </div>
                  </div>
                </div>

                <div className="email-password-div">
                  <p className="label">Subject</p>
                  <input
                    type="text"
                    className="text-input-field"
                    placeholder="Enter Subject"
                    name="subject"
                  />
                  <MdSubject className="icon" size={20} />
                </div>

                <div className="email-password-div">
                  <p className="label">Message</p>
                  <textarea
                    type="text"
                    className="textarea-input-field"
                    placeholder="Enter your message"
                    name="message"
                  ></textarea>
                </div>

                <input
                  type="submit"
                  className="label login-button-text button login-button cr-button"
                  defaultValue="Sign up"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsDetailsComponent;
