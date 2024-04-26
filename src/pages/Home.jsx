import React from "react";
import {
  Navbar,
  Header,
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
      <Header />
      <Services />
      <Gallery />
      <Features />
      <Testimonials />
      <Footer/>
    </>
  );
};

export default Home;
