import React, { useEffect } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import "./About.css";

const About = () => {
  const aboutData = [
    {
      id: 0,
      text: "التحليل الفني",
    },
    {
      id: 1,
      text: "استشارات الأعمال",
    },
    {
      id: 2,
      text: "حلول التمويل للنهوض بعملك",
    },
    {
      id: 3,
      text: "تخطيط الأعمال ، الإستراتيجية",
    },
  ];
  return (
    <section className="section about-section" id="about">
      <div className="about-container container">
        <div className="about-left" data-aos="fade-right" data-aos-delay="150">
          <img
            className="about-user-img"
            src={require("../../assets/img/portfolio-1.jpg")}
            alt="About User"
          />
          <div className="about-shape"></div>
          <div className="about-experience">
            <div className="about-experience-content">
              <img
                className="about-experience-shape"
                src={require("../../assets/img/about-one-shape-2.png")}
                alt="About Shape"
              />
              <button className="main-btn about-btn">لنتحدث</button>
              <div className="about-experience-text">
                <h3>20 عاما من</h3>
                <h3>الخبرة العملية</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <h2 className="about-title">نحن نخلق لك وكالة كاملة مشرقة.</h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Distinctio, voluptas quas porro animi eaque magni minus corporis
            tempora labore sed.
          </p>
          <div className="about-user">
            <img
              className="about-user-img"
              src={require("../../assets/img/about-one-user-img-1.jpg")}
              alt="About User"
            />
            <p className="about-user-content">
              إليك ما يجب معرفته حول كيفية بدء عمل استشاري: كيفية العثور على
              العملاء وأعمال الخدمات والاستشارات
            </p>
          </div>
          <div className="about-clients">
            <ul className="about-points">
              {aboutData?.map((item) => (
                <li className="about-point" key={item.id}>
                  <BsCheck2Circle className="about-point-icon" />
                  <p className="about-point-text">{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="about-clients-numbers">
              <h3 className="clients-number">
                <span>
                  <img
                    className="about-user-img"
                    src={require("../../assets/img/about-one-happy-client-icon.png")}
                    alt="About Star"
                  />
                </span>
                <span>10K</span>
              </h3>
              <h3>عملاء سعداء</h3>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
