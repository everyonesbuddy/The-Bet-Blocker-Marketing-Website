import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <HeroSection />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
