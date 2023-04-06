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

const Home = () => {
  return (
    <div>
      {/* <UpperHeader /> */}
      <Header />
      <Hero title="الخبراء" />
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

export default Home;
