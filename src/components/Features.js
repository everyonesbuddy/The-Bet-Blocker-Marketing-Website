import React from "react";
import "../css/Features.css";

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature">
          <h3>Block Sports Betting Sites</h3>
          <p>
            Automatically block access to popular sports betting platforms to
            curb impulse betting.
          </p>
        </div>
        <div className="feature">
          <h3>3 Free Unblocks Daily</h3>
          <p>
            Use your 3 daily unblocks for quick bets. Stay in control with
            limited access.
          </p>
        </div>
        <div className="feature">
          <h3>Affordable Additional Access</h3>
          <p>
            Need more time? Unlock an extra 10 minutes for only $5 with an
            unblock code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
