import React from "react";
import "../css/Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial">
          <p>"Bet Blocker has changed my life. I'm finally in control!"</p>
          <h4>- Sarah L.</h4>
        </div>
        <div className="testimonial">
          <p>
            "The daily unblocks help me strike a balance with my betting
            habits."
          </p>
          <h4>- James T.</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
