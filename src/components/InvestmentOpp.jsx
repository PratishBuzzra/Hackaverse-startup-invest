import React from "react";
import "../pages/CSS/home.css";
import { FaRegStar } from "react-icons/fa";
import "../pages/CSS/home.css";
const Opportunities = () => {
  const opportunities = [
    {
      id: 1,
      name: "TechFlow AI",
      sector: "AI/ML",
      description: "AI-powered workflow automation for enterprises",
      raised: 2.5,
      target: 5,
      investors: 45,
    },
    {
      id: 2,
      name: "GreenEnergy Solutions",
      sector: "Clean Tech",
      description: "Sustainable energy storage systems",
      raised: 1.8,
      target: 3,
      investors: 32,
    },
    {
      id: 3,
      name: "HealthTech Pro",
      sector: "HealthTech",
      description: "Telemedicine platform for rural healthcare",
      raised: 3.2,
      target: 7,
      investors: 67,
    },
  ];

  return (
    <section className="opportunities-section">
      <div className="container">
        <h2 className="section-title">Featured Investment Opportunities</h2>
        <p className="section-subtitle">
          Discover high-potential startups seeking funding
        </p>

        <div className="cards-container">
          {opportunities.map((op) => (
            <div className="card" key={op.id}>
              <div className="card-header">
                <span className="emoji">{op.emoji}</span>
                <div>
                  <h3 className="startup-name">{op.name}</h3>
                  <span className="tag">{op.sector}</span>
                </div>
                <span className="star">
                  <FaRegStar />
                </span>
              </div>

              <p className="description">{op.description}</p>

              <div className="details">
                <div className="details-row">
                  <span>Raised</span>
                  <strong>${op.raised}M</strong>
                </div>
                <div className="details-row">
                  <span>Target</span>
                  <strong>${op.target}M</strong>
                </div>
                <div className="details-row">
                  <span>Investors</span>
                  <strong>{op.investors}</strong>
                </div>
              </div>

              <button className="view-button">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
