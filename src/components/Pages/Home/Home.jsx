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
} from "../../export";

const Home = () => {
  return (
    <div>
      {/* <UpperHeader /> */}
      <Header />
      <Hero />
      <About />
      <Services />
      <Video />
      <Works />
      <Partners />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
