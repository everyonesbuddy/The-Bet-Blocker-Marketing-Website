import React from "react";
import "../css/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Take Control of Your Betting Habits</h1>
        <p>
          Bet Blocker helps you stay in control by blocking sports betting
          sites. Regain focus and control today!
        </p>
        <a href="#features" className="cta-button">
          Get the Extension
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
