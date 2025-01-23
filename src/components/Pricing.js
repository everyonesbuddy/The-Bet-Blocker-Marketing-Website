import React from "react";
import "../css/Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Simple Pricing</h2>
      <div className="pricing-card">
        <h3>Free</h3>
        <p>3 Unblocks Every 24 Hours</p>
      </div>
      <div className="pricing-card">
        <h3>$5</h3>
        <p>Get an additional unblock code for 10 minutes of access.</p>
      </div>
      <a href="https://sure-odds.com/" className="cta-button">
        Get the Extension
      </a>
    </section>
  );
};

export default Pricing;
