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

const AboutCom = () => {
  return (
    <div>
      <Header />
      <Hero title="من نحن" />
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

export default AboutCom;
