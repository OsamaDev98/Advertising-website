import React from "react";
import { BiChevronsLeft } from "react-icons/bi";
import "./Video.css";

const Video = () => {
  const videoData = [
    {
      id: 1,
      title: "أرضاء العملاء",
      info: "نقدم لعملائنا افضل الحلول الممكنة للوصول لافضل النتائج",
    },
    {
      id: 2,
      title: "متابعة الاعلان",
      info: "نقدم لعملائنا افضل الحلول الممكنة للوصول لافضل النتائج",
    },
    {
      id: 3,
      title: "افضل دعايا",
      info: "نقدم لعملائنا افضل الحلول الممكنة للوصول لافضل النتائج",
    },
  ];
  return (
    <section className="section video-section">
      <div className="video-container container">
        <div className="main-title-section">
          <h1 className="section-title">
            نبذة عن <span>ما نقدمة لعملائنا</span>
          </h1>
          <p className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
        <div className="video-content">
          <div className="video-info">
            <h1 className="video-info-title">الخبير للدعايا والاعلان</h1>
            <h3 className="video-info-subtitle">
              شركة رائدة في مجال الدعايا والاعلان
            </h3>
            <p className="video-info-text">
              نعمل فى الخبير جاهدين لإنتاج افضل الاعمال التى تليق بعملائنا لان
              عملائنا يستحقون ذلك .
            </p>
            <ul className="video-address">
              {videoData?.map((item) => (
                <li key={item.id}>
                  <BiChevronsLeft className="video-address-icon" />
                  <div className="video-address-info">
                    <h2>{item.title}</h2>
                    <p>{item.info}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <iframe
            className="video-frame"
            // src="https://www.youtube-nocookie.com/embed/AT6oSIDbGkw"
            src="https://www.youtube-nocookie.com/embed/AT6oSIDbGkw?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
