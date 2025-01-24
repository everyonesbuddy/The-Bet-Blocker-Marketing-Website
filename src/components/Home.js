import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
