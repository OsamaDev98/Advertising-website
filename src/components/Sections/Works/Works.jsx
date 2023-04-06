import React from "react";
import img1 from "../../assets/img/thumb_1.jpg";
import img2 from "../../assets/img/thumb_2.jpg";
import img3 from "../../assets/img/thumb_3.jpg";
import img4 from "../../assets/img/thumb_4.jpg";
import img5 from "../../assets/img/thumb_5.jpg";
import img6 from "../../assets/img/thumb_6.jpg";
import "./Works.css";

const Works = () => {
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
      img: img5,
      title: "بحوث البرمجيات",
      subtitle: "هناك العديد من الاختلافات",
      delay: "750",
    },
    {
      id: 6,
      img: img6,
      title: "التحليل الفني",
      subtitle: "منتجات التحليل الفني",
      delay: "900",
    },
  ];
  return (
    <section className="section portfolios-section" id="portfolios">
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
            <div className="portfolio-card" key={item.id}>
              <div className="portfolio-img-container">
                <img src={item.img} alt="Portfolio" className="portfolio-img" />
              </div>
              <div className="portfolio-content">
                <h2 className="card-portfolio-title">{item.title}</h2>
                <p className="card-portfolio-text">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
