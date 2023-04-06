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

const ServicesCom = () => {
  return (
    <div>
      <Header />
      <Hero title="خدماتنا" />
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

export default ServicesCom;
