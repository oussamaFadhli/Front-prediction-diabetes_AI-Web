import React from "react";
import {
  Navbar,
  Hero,
  Services,
  Features,
  Gallery,
  Testimonials,
  Footer,
} from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Features />
      <Testimonials />
      <Footer/>
    </>
  );
};

export default Home;
