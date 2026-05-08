// Footer.jsx

import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        {/* TOP SECTION */}

        <div className="footer-top">
          {/* BRAND */}

          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <img src={logo} alt="School Logo" />
              </div>

              <div className="footer-brand-text">
                <h3>
                  Bhagvati Prasad Ojha
                </h3>

                <span>
                  Inter College · Ramdaspur
                </span>
              </div>
            </div>

            <p className="footer-desc">
              Providing quality UP Board
              education from Class 1 to 12 in
              a peaceful and student-friendly
              environment. "message" - If you know someone from the school management kindly
              ask them to contact me at 9044095533 I will update the details according to them 

            </p>
          </div>

          {/* QUICK LINKS */}

          <div className="footer-links">
            <h4>Quick Links</h4>

            <ul>
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#curriculum">
                  Academics
                </a>
              </li>

              <li>
                <a href="#facilities">
                  Facilities
                </a>
              </li>

              <li>
                <a href="#faculty">Faculty</a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}

          <div className="footer-contact">
            <h4>Contact Us</h4>

            <ul>
              <li>
                📍 Ramdaspur, Prayagraj,
                Uttar Pradesh
              </li>

              <li>
                📞 +91 0000000000
              </li>

              <li>
                ✉️ temp@bpoicollege.in
              </li>

              <li>
                🕒 Mon – Sat · 8 AM to 4 PM
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">
          <p>
            © 2026 Bhagvati Prasad Ojha
            Inter College. All rights
            reserved.
          </p>

          <p className="footer-credit">
            Designed with ❤️ for quality
            education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;