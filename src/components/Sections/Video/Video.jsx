import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <section className="section video-section">
      <div className="video-container container">
        <div className="main-title-section">
          <h1 className="section-title">
            نحن نقدم <span>افضل الحلول</span>
          </h1>
          <p className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
        <video controls autoPlay muted>
          <source
            src={require("../../assets/img/video.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default Video;
