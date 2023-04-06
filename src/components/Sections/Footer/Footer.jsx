import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import "./Footer.css";

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
              <a href="/">
                {/* <img src={require("../../assets/img/logo.png")} alt="Logo" /> */}
                الخبراء
              </a>
            </h1>
            <div className="footer-address">
              <div className="address">
                <FaMapMarkerAlt className="address-icon" />
                <p>
                  101 ميريت 5 ، البرج الشمالي 14851 نيويورك ، الولايات المتحدة
                  الأمريكية
                </p>
              </div>
              <div className="mobile">
                <AiFillPhone className="mobile-icon" />
                <div className="mobile-numbers">
                  <p>02 92921621</p>
                  <p>+088 11 22 00 77</p>
                </div>
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
            <h1 className="header-footer-section">الخصوصية والشروط</h1>
            <ul className="footer-info-list">
              {footerTermsData?.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
            جميع الحقوق محفوظة <span>&copy;osama</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
