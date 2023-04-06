import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import "./Header.css";

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
    const items = document.querySelectorAll(".header .main-menu > li a");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        items.forEach((item) => {
          item.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
    // Fixed Header
    const head = document.querySelector(".header");
    var sticky = head.offsetTop;
    window.onscroll = () => {
      if (window.pageYOffset > sticky) {
        head.classList.add("active");
      } else {
        head.classList.remove("active");
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
            <div className="logo">
              <a href="/">
                {/* <img src={require("../../assets/img/logo.png")} alt="Logo" /> */}
                الخبراء
              </a>
            </div>
            <ul className={isActive ? "main-menu active" : "main-menu"}>
              <div className="mobile-mode-close" onClick={clickHeaderHandler}>
                <AiOutlineClose />
              </div>
              <li>
                <a onClick={clickHeaderHandler} className="active" href="#">
                  الرئيسية
                </a>
              </li>
              <li>
                <a onClick={clickHeaderHandler} href="#about">
                  من نحن
                </a>
              </li>
              <li>
                <a onClick={clickHeaderHandler} href="#services">
                  خدماتنا
                </a>
              </li>
              <li>
                <a onClick={clickHeaderHandler} href="#portfolios">
                  اعمالنا
                </a>
              </li>
              <li>
                <a onClick={clickHeaderHandler} href="#contact">
                  تواصل معنا
                </a>
              </li>
            </ul>
            <div className="mobile-mode" onClick={clickHeaderHandler}>
              <FaBars />
            </div>
          </div>
          <div className="main-menu__left">
            <button className="search-btn" onClick={clickPopHandler}>
              <AiOutlineSearch />
            </button>
            <button className="main-btn">استشارة سريعة</button>
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
