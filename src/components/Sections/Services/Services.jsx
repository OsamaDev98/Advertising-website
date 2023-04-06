import React from "react";
import { SiMinds } from "react-icons/si";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { FaConnectdevelop } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const serviceData = [
    {
      id: 0,
      icon: <SiMinds />,
      title: "تسويق",
      description:
        "إليك ما يجب معرفته حول كيفية بدء عمل استشاري: كيفية العثور على العملاء وأعمال الخدمات والاستشارات",
      delay: "150",
    },
    {
      id: 1,
      icon: <GiEarthAfricaEurope />,
      title: "الأعمال الرقمية",
      description:
        "إليك ما يجب معرفته حول كيفية بدء عمل استشاري: كيفية العثور على العملاء وأعمال الخدمات والاستشارات",
      delay: "300",
    },
    {
      id: 2,
      icon: <FaConnectdevelop />,
      title: "استشارات الأعمال",
      description:
        "إليك ما يجب معرفته حول كيفية بدء عمل استشاري: كيفية العثور على العملاء وأعمال الخدمات والاستشارات",
      delay: "450",
    },
    {
      id: 3,
      icon: <FaConnectdevelop />,
      title: "دعايا",
      description:
        "إليك ما يجب معرفته حول كيفية بدء عمل استشاري: كيفية العثور على العملاء وأعمال الخدمات والاستشارات",
      delay: "600",
    },
    {
      id: 4,
      icon: <SiMinds />,
      title: "اعلان",
      description:
        "إليك ما يجب معرفته حول كيفية بدء عمل استشاري: كيفية العثور على العملاء وأعمال الخدمات والاستشارات",
      delay: "750",
    },
    {
      id: 5,
      icon: <GiEarthAfricaEurope />,
      title: "ارشادات",
      description:
        "إليك ما يجب معرفته حول كيفية بدء عمل استشاري: كيفية العثور على العملاء وأعمال الخدمات والاستشارات",
      delay: "900",
    },
  ];
  return (
    <section className="section service-section" id="services">
      <div className="services-container container">
        <div className="main-title-section">
          <h1 className="section-title">
            نحن نقدم <span>افضل الخدمات الرقمية</span>
          </h1>
          <p className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
        <div className="services-cards">
          {serviceData?.map((item) => (
            <div className="service-card" key={item.id}>
              <div className="service-img-container">
                <span className="service-icon">{item.icon}</span>
              </div>
              <h3 className="card-service-title">{item.title}</h3>
              <p className="card-service-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
