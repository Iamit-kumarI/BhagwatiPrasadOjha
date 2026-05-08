// Academics.jsx

import React from "react";
import "./program.css";

const Academics = () => {
  return (
    <section
      className="curriculum-section"
      id="curriculum"
    >
      <div className="container">
        <div className="section-tag">
          Academics
        </div>

        <h2 className="section-title">
          Classes & Streams We Offer
        </h2>

        <p className="section-sub">
          Complete UP Board education from
          Class 1 through 12, with multiple
          streams at the secondary and senior
          secondary levels.
        </p>

        {/* CARDS */}

        <div className="class-cards">
          {/* CLASS 1-5 */}

          <div className="class-card">
            <div className="class-card-header">
              <div className="class-range">
                Class 1 – 5
              </div>

              <h3>Primary School</h3>

              <p>
                Foundation & core skills
              </p>
            </div>

            <div className="class-card-body">
              <p className="card-description">
                Building strong fundamentals in
                language, mathematics,
                environment science and general
                studies as per UP Board
                guidelines.
              </p>

              <div className="class-subjects">
                <span className="subject-tag">
                  Hindi
                </span>

                <span className="subject-tag">
                  Mathematics
                </span>

                <span className="subject-tag">
                  EVS
                </span>

                <span className="subject-tag">
                  English
                </span>

                <span className="subject-tag">
                  Drawing
                </span>
              </div>
            </div>
          </div>

          {/* CLASS 6-8 */}

          <div className="class-card">
            <div className="class-card-header">
              <div className="class-range">
                Class 6 – 8
              </div>

              <h3>Upper Primary</h3>

              <p>
                Expanding knowledge base
              </p>
            </div>

            <div className="class-card-body">
              <p className="card-description">
                Introducing students to
                Science, Social Studies, and
                developing critical thinking
                and analytical skills.
              </p>

              <div className="class-subjects">
                <span className="subject-tag">
                  Hindi
                </span>

                <span className="subject-tag">
                  English
                </span>

                <span className="subject-tag">
                  Mathematics
                </span>

                <span className="subject-tag">
                  Science
                </span>

                <span className="subject-tag">
                  Sanskrit
                </span>

                <span className="subject-tag">
                  Social Science
                </span>
              </div>
            </div>
          </div>

          {/* CLASS 9-10 */}

          <div className="class-card">
            <div className="class-card-header">
              <div className="class-range">
                Class 9 – 10
              </div>

              <h3>
                High School (Haiskool)
              </h3>

              <p>
                UP Board Secondary Level
              </p>
            </div>

            <div className="class-card-body">
              <p className="card-description">
                Two streams available at Class
                10 level, preparing students
                for the UP Board High School
                examination.
              </p>

              <ul className="stream-list">
                <li className="stream-item">
                  <div className="stream-dot dot-math"></div>

                  <div>
                    <strong>
                      Mathematics Stream
                    </strong>{" "}
                    — Science, Math, Hindi,
                    English, Social Science
                  </div>
                </li>

                <li className="stream-item">
                  <div className="stream-dot dot-arts"></div>

                  <div>
                    <strong>Arts Stream</strong>{" "}
                    — Hindi, English, Social
                    Science, Home Science,
                    Drawing
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CLASS 11-12 */}

          <div className="class-card">
            <div className="class-card-header">
              <div className="class-range">
                Class 11 – 12
              </div>

              <h3>
                Intermediate (Intermediate)
              </h3>

              <p>
                UP Board Senior Secondary
                Level
              </p>
            </div>

            <div className="class-card-body">
              <p className="card-description">
                Three specialized streams for
                Class 12, enabling students to
                pursue their chosen career
                path.
              </p>

              <ul className="stream-list">
                <li className="stream-item">
                  <div className="stream-dot dot-sci"></div>

                  <div>
                    <strong>
                      PCM (Science)
                    </strong>{" "}
                    — Physics, Chemistry,
                    Mathematics
                  </div>
                </li>

                <li className="stream-item">
                  <div className="stream-dot dot-bio"></div>

                  <div>
                    <strong>
                      PCB (Biology)
                    </strong>{" "}
                    — Physics, Chemistry,
                    Biology
                  </div>
                </li>

                <li className="stream-item">
                  <div className="stream-dot dot-arts"></div>

                  <div>
                    <strong>Arts Stream</strong>{" "}
                    — History, Geography,
                    Civics, Economics
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;