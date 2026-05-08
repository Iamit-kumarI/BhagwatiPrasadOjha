// Facilities.jsx

import React from "react";
import "./Facilities.css";

const Facilities = () => {
  return (
    <section
      className="facilities-section"
      id="facilities"
    >
      <div className="container">
        {/* SECTION HEADER */}

        <div className="section-tag">
          Facilities
        </div>

        <h2 className="section-title">
          Modern Facilities for Better Learning
        </h2>

        <p className="section-sub">
          Our campus is equipped with essential
          academic and student-friendly
          facilities to support holistic growth
          and practical learning.
        </p>

        {/* FACILITY GRID */}

        <div className="facilities-grid">
          {/* LAB */}

          <div className="facility-card">
            <div className="facility-icon">
              🔬
            </div>

            <h3>Science Laboratories</h3>

            <p>
              Dedicated Physics, Chemistry and
              Biology laboratories with modern
              equipment for practical learning.
            </p>
          </div>

          {/* COMPUTER */}

          <div className="facility-card">
            <div className="facility-icon">
              💻
            </div>

            <h3>Computer Lab</h3>

            <p>
              Modern computer systems with
              updated software and digital
              learning support for students.
            </p>
          </div>

          {/* LIBRARY */}

          <div className="facility-card">
            <div className="facility-icon">
              📚
            </div>

            <h3>Library</h3>

            <p>
              A growing collection of academic
              books, references and study
              material for all classes.
            </p>
          </div>

          {/* CAMPUS */}

          <div className="facility-card">
            <div className="facility-icon">
              🌳
            </div>

            <h3>Green Campus</h3>

            <p>
              Peaceful and clean environment
              surrounded by greenery for better
              focus and learning.
            </p>
          </div>

          {/* CLASSROOM */}

          <div className="facility-card">
            <div className="facility-icon">
              🏫
            </div>

            <h3>Smart Classrooms</h3>

            <p>
              Spacious and ventilated classrooms
              designed for comfortable and
              effective teaching.
            </p>
          </div>

          {/* SPORTS */}

          <div className="facility-card">
            <div className="facility-icon">
              ⚽
            </div>

            <h3>Sports Activities</h3>

            <p>
              Encouraging physical fitness and
              teamwork through outdoor games and
              sports activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;