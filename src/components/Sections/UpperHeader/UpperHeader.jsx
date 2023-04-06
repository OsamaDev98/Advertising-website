import React from "react";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import "./UpperHeader.css";

const UpperHeader = () => {
  return (
    <div className="upper-header">
      <div className="upper-header-container header-container">
        <div className="right-upper-header">
          <div className="upper-mail">
            <MdEmail className="right-upper-header-icon" />
            <span>Sitename@gmail.com</span>
          </div>
          <div className="upper-address">
            <FaMapMarkerAlt className="right-upper-header-icon" />
            <span>211 شارع أوتارا نيويورك ، الولايات المتحدة الأمريكية</span>
          </div>
        </div>
        <div className="left-upper-header">
          <FaFacebookF className="upper-header-icon" />
          <FaLinkedinIn className="upper-header-icon" />
          <BsTwitter className="upper-header-icon" />
          <FaInstagram className="upper-header-icon" />
          <FaPinterestP className="upper-header-icon" />
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
