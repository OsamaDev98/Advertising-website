import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import img1 from "../../assets/img/portfolio-1.jpg";
import img2 from "../../assets/img/portfolio-2.jpg";
import img3 from "../../assets/img/portfolio-3.jpg";
import img4 from "../../assets/img/portfolio-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Works.css";

const Works = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const portfolioData = [
    {
      id: 1,
      img: img1,
      title: "بحوث البرمجيات",
      subtitle: "هناك العديد من الاختلافات",
      delay: "150",
    },
    {
      id: 2,
      img: img2,
      title: "التحليل الفني",
      subtitle: "منتجات التحليل الفني",
      delay: "300",
    },
    {
      id: 3,
      img: img3,
      title: "دراسة حالة",
      subtitle: "مشروع تصميم الويب",
      delay: "450",
    },
    {
      id: 4,
      img: img4,
      title: "المنتجات الرقمية",
      subtitle: "تحليل تسويق المنتج",
      delay: "600",
    },
    {
      id: 5,
      img: img3,
      title: "بحوث البرمجيات",
      subtitle: "هناك العديد من الاختلافات",
      delay: "750",
    },
    {
      id: 6,
      img: img1,
      title: "التحليل الفني",
      subtitle: "منتجات التحليل الفني",
      delay: "900",
    },
  ];
  return (
    <section className="section portfolios-section" id="portfolios">
      <img
        src={require("../../assets/img/portfolio-shape-1.png")}
        alt="Portfolio Shape"
        className="portfolio-shape-1"
      />
      <img
        src={require("../../assets/img/portfolio-shape-2.png")}
        alt="Portfolio Shape"
        className="portfolio-shape-2"
      />
      <div className="portfolios-container container">
        <div className="main-title-section">
          <h1 className="section-title">
            عرض الاعمال <span>المنجزة</span>
          </h1>
          <p className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
        <div className="portfolio-cards">
          {portfolioData?.map((item) => (
            <div
              className="portfolio-card"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="portfolio-img-container">
                <img
                  src={item.img}
                  alt="Portfolio"
                  className="portfolio-img"
                />
                <div className="portfolio-overlay"></div>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-text">
                  <h2 className="card-portfolio-title">{item.title}</h2>
                  <p className="card-portfolio-text">{item.subtitle}</p>
                </div>
                <div className="portfolio-icon">
                  <BsArrowRight className="portfolio-icon-arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
