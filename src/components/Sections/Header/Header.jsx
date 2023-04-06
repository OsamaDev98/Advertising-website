import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const clickPopHandler = () => {
    setOpen(!isOpen);
  };
  const [isActive, setActive] = useState(false);
  const clickHeaderHandler = () => {
    setActive(!isActive);
  };
  useEffect(() => {
    // Active Header Items
    // const items = document.querySelectorAll(".header .main-menu > li a");
    // items.forEach((item) => {
    //   item.addEventListener("click", () => {
    //     items.forEach((item) => {
    //       item.classList.remove("active");
    //     });
    //     item.classList.add("active");
    //   });
    // });
    // Fixed Header
    const head = document.querySelector(".header");
    const mobileMode = document.querySelector(".header .mobile-mode");
    const mainBtn = document.querySelector(".header .main-btn");
    const activeItem = document.querySelectorAll(".header .main-menu a");
    const logoActive = document.querySelector(
      ".header .main-menu__right .logo a"
    );
    const searchBtn = document.querySelector(
      ".header .main-menu__left .search-btn"
    );
    var sticky = head.offsetTop;
    window.onscroll = () => {
      if (window.pageYOffset > sticky) {
        head.classList.add("active");
        mainBtn.classList.add("active");
        mobileMode.classList.add("active");
        searchBtn.classList.add("active");
        activeItem.forEach((item) => {
          item.classList.add("active");
        });
        logoActive.classList.add("active");
      } else {
        head.classList.remove("active");
        mobileMode.classList.remove("active");
        mainBtn.classList.remove("active");
        searchBtn.classList.remove("active");
        activeItem.forEach((item) => {
          item.classList.remove("active");
        });
        logoActive.classList.remove("active");
      }
    };
    // Scroll
    const body = document.querySelector("body");
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
      body.style.overflowX = "hidden";
    }
  }, [isOpen]);
  return (
    <header className="header">
      <div className="header-wrapper header-container">
        <div className="main-menu__wrapper-inner">
          <div className="main-menu__right">
            <div className="logo" data-aos="fade-left" data-aos-delay="150">
              <a href="/">
                {/* <img src={require("../../assets/img/logo.png")} alt="Logo" /> */}
                الخبراء
              </a>
            </div>
          </div>
          <ul className={isActive ? "main-menu active" : "main-menu"}>
            <div className="mobile-mode-close" onClick={clickHeaderHandler}>
              <AiOutlineClose />
            </div>
            <li>
              <Link
                onClick={clickHeaderHandler}
                to="/"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                onClick={clickHeaderHandler}
                to="/about"
                data-aos="fade-up"
                data-aos-delay="650"
              >
                من نحن
              </Link>
            </li>
            <li>
              <Link
                onClick={clickHeaderHandler}
                to="/services"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                خدماتنا
              </Link>
            </li>
            <li>
              <Link
                onClick={clickHeaderHandler}
                to="/portfolios"
                data-aos="fade-up"
                data-aos-delay="950"
              >
                اعمالنا
              </Link>
            </li>
            <li>
              <Link
                onClick={clickHeaderHandler}
                to="/contact"
                data-aos="fade-up"
                data-aos-delay="1050"
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
          <div className="main-menu__left">
            <div className="mobile-mode" onClick={clickHeaderHandler}>
              <FaBars />
            </div>
            <button
              className="search-btn"
              data-aos="fade-right"
              data-aos-delay="300"
              onClick={clickPopHandler}
            >
              <AiOutlineSearch />
            </button>
            <button
              className="main-btn"
              data-aos="fade-right"
              data-aos-delay="450"
            >
              استشارة سريعة
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          isActive ? "overlay-mobile-mode active" : "overlay-mobile-mode"
        }
        onClick={clickHeaderHandler}
      ></div>
      <div
        className={
          isOpen ? "search-popup__content active" : "search-popup__content"
        }
      >
        <div className="overlay-pop" onClick={clickPopHandler}></div>
        <form>
          <input className="text-input" type="text" placeholder="ابحث هنا.." />
          <button className="search-btn-pop" type="submit">
            <AiOutlineSearch className="search-btn-icon" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
