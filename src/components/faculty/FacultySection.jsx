// Faculty.jsx

import React from "react";
import "./FacultySection.css";

const Faculty = () => {
  return (
    <section
      className="teachers-section"
      id="faculty"
    >
      <div className="container">
        {/* SECTION HEADER */}

        <div className="section-tag">
          Faculty
        </div>

        <h2 className="section-title">
          Expert Teachers, Dedicated to You
        </h2>

        <p className="section-sub">
          We are actively recruiting highly
          qualified and experienced teachers
          from Prayagraj to bring city-level
          education to Ramdaspur.
        </p>

        {/* MAIN BANNER */}

        <div className="teacher-banner">
          <div className="teacher-banner-icon">
            🎓
          </div>

          <div className="teacher-banner-content">
            <h3>
              Recruiting Top Teachers from
              Prayagraj
            </h3>

            <p>
              We understand that the quality
              of teaching defines the quality
              of education. That's why we are
              actively sourcing qualified and
              experienced teachers from the
              city of Prayagraj — one of UP's
              most academically vibrant cities
              — to serve our students in
              Ramdaspur.
            </p>

            <div className="prayagraj-badge">
              📍 Prayagraj · Uttar Pradesh ·
              India
            </div>
          </div>
        </div>

        {/* FACULTY CARDS */}

        <div className="faculty-grid">
          {/* CARD 1 */}

          <div className="faculty-card">
            <div className="faculty-icon">
              📐
            </div>

            <h4>
              Mathematics & Science
            </h4>

            <p>
              Expert faculty for PCM and
              Mathematics streams at Class 10
              & 12 level.
            </p>
          </div>

          {/* CARD 2 */}

          <div className="faculty-card">
            <div className="faculty-icon">
              🌿
            </div>

            <h4>
              Biology & Life Science
            </h4>

            <p>
              Qualified biology teachers for
              Class 11–12 PCB stream students.
            </p>
          </div>

          {/* CARD 3 */}

          <div className="faculty-card">
            <div className="faculty-icon">
              📜
            </div>

            <h4>
              Humanities & Arts
            </h4>

            <p>
              Experienced faculty for
              History, Geography, Hindi
              literature and Arts stream.
            </p>
          </div>

          {/* CARD 4 */}

          <div className="faculty-card">
            <div className="faculty-icon">
              🗣️
            </div>

            <h4>Languages</h4>

            <p>
              Dedicated teachers for Hindi,
              English and Sanskrit across all
              classes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;