import React from 'react';
import { FaUser } from "react-icons/fa";
import { PiSpiralBold } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa";
import "../pages/CSS/home.css";

const Features = () => {
  return (
    <section id="feature" className="feature-section">
      <div className="feature-container">
        <h3 className="feature-title">How SajiloLagani Works</h3>
        <p className="feature-subtitle">
          Simple steps to start your investment journey
        </p>
        <div className="feature-items">
          <div className="feature-box">
            <div className="feature-icon">
              <FaUser />
            </div>
            <h4>1. Create Profile</h4>
            <p>
              Set up your investor profile and complete accreditation verification
            </p>
          </div>


          <div className="feature-box">
            <div className="feature-icon">
              <PiSpiralBold />
            </div>
            <h4>2. Discover Startups</h4>
            <p>
              Browse curated startups that match your investment criteria
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <FaDollarSign />
            </div>
            <h4>3. Invest & Track</h4>
            <p>
              Make investments and track your portfolio performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
