import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="landing">
      <div className="slide-container">
        <div className="slider slide-one">
          {/* <div className="main-slider__big-text">كونليز</div> */}
          <div className="content container">
            <div className="hero-text">
              <h1>الخبراء</h1>
              <h1>في الدعايا والاعلان</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
                iste!
              </p>
            </div>
            <div className="services-btn">
              <button className="main-btn service-btn">الخدمات الرقمية</button>
              {/* <img
                className="hero-arrow"
                src={require("../../assets/img/main-slider-arrow-shape.png")}
                alt="Main Slider Arrow"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
