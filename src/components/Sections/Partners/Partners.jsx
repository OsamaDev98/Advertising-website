import React from "react";
import partner1 from "../../assets/img/partners/1.jpg";
import partner2 from "../../assets/img/partners/2.jpg";
import partner3 from "../../assets/img/partners/3.jpg";
import partner4 from "../../assets/img/partners/4.jpg";
import partner5 from "../../assets/img/partners/5.jpg";
import partner6 from "../../assets/img/partners/6.jpg";
import partner7 from "../../assets/img/partners/7.jpg";
import partner8 from "../../assets/img/partners/8.jpg";
import partner9 from "../../assets/img/partners/9.jpg";
import partner10 from "../../assets/img/partners/10.jpg";
import "./Partners.css";

const Partners = () => {
  const partnersData = [
    {
      id: 1,
      img: partner1,
    },
    {
      id: 2,
      img: partner2,
    },
    {
      id: 3,
      img: partner3,
    },
    {
      id: 4,
      img: partner4,
    },
    {
      id: 5,
      img: partner5,
    },
    {
      id: 6,
      img: partner6,
    },
    {
      id: 7,
      img: partner7,
    },
    {
      id: 8,
      img: partner8,
    },
    {
      id: 9,
      img: partner9,
    },
    {
      id: 10,
      img: partner10,
    },
  ];
  return (
    <section className="section partners-section">
      <div className="partners-container container">
        <div className="main-title-section">
          <h1 className="section-title">
            شركاء سعدوا <span>بالتعامل معنا</span>
          </h1>
          <p className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
        <div className="partners-icons-container">
          <ul className="partners-icons">
            {partnersData?.map((item) => (
              <li key={item.id}>
                <img src={item.img} alt="Partner Icon" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partners;
