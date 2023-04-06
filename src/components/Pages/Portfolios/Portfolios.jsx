import React from "react";
import {
  // UpperHeader,
  Header,
  Hero,
  About,
  Services,
  Video,
  Works,
  Partners,
  ContactUs,
  Footer,
  Connect,
} from "../../export";

const Portfolios = () => {
  return (
    <div>
      <Header />
      <Hero title="اعمالنا" />
      <About />
      <Services />
      <Video />
      <Works />
      <Partners />
      <Connect />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Portfolios;
