import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./Connect.css";

const Connect = () => {
  return (
    <section className="section connect-section">
      <div className="main-title-section">
        <h1 className="section-title">
          من السهل <span>ان تصل الينا</span>
        </h1>
        <p className="section-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>
      <div className="connect-container container">
        <div className="right-part__connect">
          <form>
            <input type="text" placeholder="الاسم" required />
            <input type="email" placeholder="الايميل" required />
            <input type="text" placeholder="الموضوع" required />
            <textarea placeholder="الرسالة" required />
            <button type="submit" className="connect-submit-btn">
              <BsFillSendFill className="connect-icon" />
              <span>ارسال الرسالة</span>
            </button>
          </form>
        </div>
        <div className="left-part__connect">
          <div className="left-connect__content">
            <div className="connect-card connect-map">
              <div className="left-icon-container left-icon-container-4">
                <FaMapMarkerAlt className="left-connect-icon" />
              </div>
              <div className="connect-details connect-map__info">
                <h3>العنوان</h3>
                <p>شارع الرياض , حى الرياض , الرياض</p>
              </div>
            </div>
            <div className="connect-card connect-phone">
              <div className="left-icon-container left-icon-container-2">
                <AiFillPhone className="left-connect-icon" />
              </div>
              <div className="connect-details connect-phone__info">
                <h3>التليفون</h3>
                <p>+966123456</p>
              </div>
            </div>
            <div className="connect-card connect-mail">
              <div className="left-icon-container left-icon-container-3">
                <IoMdMail className="left-connect-icon" />
              </div>
              <div className="connect-details connect-mail__info">
                <h3>البريد الاليكتروني</h3>
                <p>info@media.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
