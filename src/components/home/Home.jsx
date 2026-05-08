// Hero.jsx

import React from "react";
import "./Home.css";

import schoolImage from "../../assets/Faculty.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* BACKGROUND IMAGE */}
      <div
        className="hero-bg-school"
        style={{
          backgroundImage: `url(${schoolImage})`,
        }}
      ></div>

      {/* PATTERN */}
      <div className="hero-pattern"></div>

      {/* CONTENT */}
      <div className="hero-content">
        <div className="hero-tag">
          UP Board Recognised · Ramdaspur, Prayagraj
        </div>

        <h1 className="hero-title">
          भगवती प्रसाद ओझा
          <br />
          <span className="accent">
            इण्टर कालेज
          </span>
        </h1>

        <p className="hero-en">
          Bhagvati Prasad Ojha Intermediate
          College, Ramdaspur
        </p>

        <p className="hero-desc">
          Nurturing young minds with quality
          education from Class 1 to 12. We offer
          UP Board curriculum with dedicated
          streams in Science, Arts and Mathematics
          — in a safe, green, and inspiring campus
          environment.
        </p>

        {/* STATS */}

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="num">1–12</div>
            <div className="label">
              Classes Offered
            </div>
          </div>

          <div className="hero-divider"></div>

          <div className="hero-stat">
            <div className="num">3</div>
            <div className="label">
              Streams Available
            </div>
          </div>

          <div className="hero-divider"></div>

          <div className="hero-stat">
            <div className="num">UP</div>
            <div className="label">
              Board Affiliated
            </div>
          </div>

          <div className="hero-divider"></div>

          <div className="hero-stat">
            <div className="num">100%</div>
            <div className="label">
              Safe Campus
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}

      <div className="hero-scroll">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;