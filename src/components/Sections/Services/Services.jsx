import React, { useEffect } from "react";
import { SiMinds } from "react-icons/si";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { FaConnectdevelop } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
  ];
  return (
    <section className="section service-section" id="services">
      <div className="services-container container">
        <div className="main-title-section">
          <h1 className="section-title">
            نحن نقدم <span>افضل الحلول</span>
          </h1>
          <p className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
        <div className="services-cards">
          {serviceData?.map((item) => (
            <div
              className="service-card"
              key={item.id}
              data-aos="fade-right"
              data-aos-delay={item.delay}
            >
              <div className="service-img-container">
                <span className="service-icon">{item.icon}</span>
                <div className="service-shape"></div>
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
