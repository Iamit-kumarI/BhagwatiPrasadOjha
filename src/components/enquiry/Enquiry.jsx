// PopupModal.jsx

import React, { useState } from "react";
import "./Enquiry.css";

const PopupModal = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const closePopup = () => {
    setIsClosing(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 350);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      closePopup();
    }
  };

  const handleAdmissionClick = () => {
    closePopup();

    setTimeout(() => {
      const section = document.getElementById("contact");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 300);
  };

  if (!showPopup) return null;

  return (
    <div
      className={`popup-overlay ${isClosing ? "hiding" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="popup-card">
        {/* HEADER */}

        <div className="popup-header">
          <button
            className="popup-close"
            onClick={closePopup}
            aria-label="Close"
          >
            &times;
          </button>

          <div className="popup-badge">
            🎉 Admissions Open 2025–26
          </div>

          <h2>
            भगवती प्रसाद ओझा
            <br />
            इण्टर कालेज, रामदासपुर
          </h2>

          <p>Recognised by UP Board · Classes I–XII</p>
        </div>

        {/* BODY */}

        <div className="popup-body">
          <div className="popup-notice">
            <div className="popup-notice-icon">📢</div>

            <div>
              <strong>
                New Session Registrations Now Open!
              </strong>

              <span>
                We are currently enrolling students for
                classes 1 through 12. Limited seats
                available for Science (PCM & Bio) and Arts
                streams in Class 12.
              </span>
            </div>
          </div>

          {/* FEATURES */}

          <div className="popup-grid">
            <div className="popup-feature">
              <div className="popup-feature-icon">🔬</div>

              <div>
                <strong>Science Labs</strong>

                <span>
                  Fully equipped Physics, Chemistry &
                  Biology labs
                </span>
              </div>
            </div>

            <div className="popup-feature">
              <div className="popup-feature-icon">💻</div>

              <div>
                <strong>Computer Lab</strong>

                <span>
                  Modern computer lab with latest software
                </span>
              </div>
            </div>

            <div className="popup-feature">
              <div className="popup-feature-icon">🎓</div>

              <div>
                <strong>UP Board Affiliated</strong>

                <span>
                  Official UP Board curriculum from Class
                  1–12
                </span>
              </div>
            </div>

            <div className="popup-feature">
              <div className="popup-feature-icon">🌿</div>

              <div>
                <strong>Green Campus</strong>

                <span>
                  Peaceful, green environment for focused
                  learning
                </span>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}

          <div className="popup-actions">
            <button
              className="btn-primary"
              onClick={handleAdmissionClick}
            >
              Apply for Admission
            </button>

            <button
              className="btn-secondary"
              onClick={closePopup}
            >
              Explore First
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;