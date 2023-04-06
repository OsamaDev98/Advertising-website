import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-container container">
        <div className="contact-form">
          <div className="main-title-section">
            <h1 className="section-title">
              <span>تواصل معنا</span>
            </h1>
            <p className="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <form>
            <input className="text-contact" type="text" placeholder="ايميل.." />
            <button className="contact-btn" type="submit">
              <BsFillSendFill className="contact-btn-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
