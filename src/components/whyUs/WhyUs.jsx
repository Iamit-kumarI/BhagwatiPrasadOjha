// About.jsx

import React from "react";
import "./WhyUs.css";

import schoolImage from "../../assets/SchoolHomePage.png";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* IMAGE SECTION */}

          <div className="about-image-wrap">
            <img
              src={schoolImage}
              alt="Bhagvati Prasad Ojha Inter College Campus"
            />

            <div className="about-badge">
              <span className="years">★</span>

              <div className="years-label">
                UP Board Recognised
              </div>
            </div>
          </div>

          {/* CONTENT SECTION */}

          <div className="about-content">
            <div className="section-tag">
              Our Story
            </div>

            <h2 className="section-title">
              A Legacy of Learning in
              Ramdaspur
            </h2>

            <p className="about-text">
              Bhagvati Prasad Ojha Inter College
              stands as a beacon of quality
              education in the Ramdaspur region.
              Affiliated to the Uttar Pradesh
              Madhyamik Shiksha Parishad (UP
              Board), we provide comprehensive
              education from primary to
              intermediate level.
            </p>

            <p className="about-text second-text">
              Our campus offers a serene, green
              environment with well-maintained
              facilities, experienced faculty
              sourced from the city of Prayagraj,
              and a commitment to holistic student
              development.
            </p>

            {/* PILLARS */}

            <div className="about-pillar">
              <div className="pillar-icon">
                🌿
              </div>

              <div className="pillar-text">
                <strong>
                  Green & Peaceful Campus
                </strong>

                <span>
                  Lush, well-maintained grounds
                  that create the perfect
                  environment for focused study
                  and personal growth.
                </span>
              </div>
            </div>

            <div className="about-pillar">
              <div className="pillar-icon">
                🏛️
              </div>

              <div className="pillar-text">
                <strong>
                  UP Board Curriculum
                </strong>

                <span>
                  Complete UP Board syllabus from
                  Class 1 to 12 — preparing
                  students for board exams and
                  beyond.
                </span>
              </div>
            </div>

            <div className="about-pillar">
              <div className="pillar-icon">
                🎯
              </div>

              <div className="pillar-text">
                <strong>
                  Experienced Faculty
                </strong>

                <span>
                  Qualified teachers recruited
                  from Prayagraj, bringing
                  city-level expertise to our
                  students.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;