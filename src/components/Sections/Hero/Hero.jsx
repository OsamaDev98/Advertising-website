import React from "react";
import "./Hero.css";

const Hero = ({ title }) => {
  return (
    <section className="landing">
      <div className="slide-container">
        <div className="slider slide-one">
          <div className="circle-shape"></div>
          <div className="content container">
            <div className="hero-text">
              <h1>{title}</h1>
              <h1>في الدعايا والاعلان</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
                iste!
              </p>
            </div>
            <div className="services-btn">
              <a href="#" className="main-btn service-btn">
                الخدمات الرقمية
              </a>
              <a href="#contact" className="main-btn service-btn">
                الاتصال بنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
