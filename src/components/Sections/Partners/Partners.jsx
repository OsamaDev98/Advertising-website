import React from "react";
import partner1 from "../../assets/img/nasdaq-dark.svg";
import partner2 from "../../assets/img/volkswagen-dark.svg";
import partner3 from "../../assets/img/box-dark.svg";
import partner4 from "../../assets/img/netapp-dark.svg";
import partner5 from "../../assets/img/eventbrite-dark.svg";
import partner6 from "../../assets/img/tcs-dark.svg";
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
  ];
  return (
    <section className="section partners-section">
      <div className="partners-container container">
        <div className="main-title-section">
          <h1 className="section-title">
            موثوقون من <span>العديد من الشركات</span>
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
