import React from "react";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerInfoData = [
    {
      id: 1,
      title: "وظائف",
    },
    {
      id: 2,
      title: "سياسة",
    },
    {
      id: 3,
      title: "معلومات عنا",
    },
    {
      id: 4,
      title: "اتصل بنا",
    },
    {
      id: 5,
      title: "التسعير والخطط",
    },
  ];
  const footerImportantData = [
    {
      id: 1,
      title: "الاتفاقية",
    },
    {
      id: 2,
      title: "اتفاقية الدعم",
    },
    {
      id: 3,
      title: "شروط وقواعد الاعلانات",
    },
    {
      id: 4,
      title: "المعلومات القانوينة",
    },
  ];
  const footerTermsData = [
    {
      id: 1,
      title: "سياسة ملفات",
    },
    {
      id: 2,
      title: "الارتباط",
    },
    {
      id: 3,
      title: "الخدمات الرقمية",
    },
  ];
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-logo">
            <h1 className="header-footer-section header-footer-logo">
              <Link to="/">
                {/* <img src={require("../../assets/img/logo.png")} alt="Logo" /> */}
                الخبراء
              </Link>
            </h1>
            <div className="footer-address">
              <h3 className="footer-address-title">
                الخبير للدعايا والاعلانات الرقمية
              </h3>
              <p className="footer-address-text">
                نعمل فى الوكالة جاهدين لإنتاج افضل الاعمال التى تليق بعملائنا
                لان عملائنا يستحقون ذلك .
              </p>
              <div className="footer-address-icons">
                <FaFacebookF className="footer-address-icon" />
                <FaLinkedinIn className="footer-address-icon" />
                <BsTwitter className="footer-address-icon" />
                <FaInstagram className="footer-address-icon" />
                <FaPinterestP className="footer-address-icon" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="header-footer-section">معلومات عنا</h1>
            <ul className="footer-info-list">
              {footerInfoData?.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="header-footer-section">روابط تهمك</h1>
            <ul className="footer-info-list">
              {footerImportantData?.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="header-footer-section">الخصوصية والشروط</h1>
            <ul className="footer-info-list">
              {footerTermsData?.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          جميع الحقوق محفوظة <span>&copy;الخبير</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
