import { React, useEffect } from "react";
import {
  AboutPage,
  ContactPage,
  Home,
  PortfoliosPage,
  ServicesPage,
} from "./components/export";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <div className="App">
      {/* <Home /> */}
      <Router basename="/Advertising-website">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolios" element={<PortfoliosPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
