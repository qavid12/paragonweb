
import React from "react";
import "./App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Paragon Spa</h3>
          <p>Experience the ultimate in relaxation and rejuvenation at our premium spa in Tây Hồ, Hanoi.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 123 Tây Hồ, Hà Nội</p>
          <p>📞 <a href="tel:+84901234567">+84 90 123 4567</a></p>
          <p>📧 <a href="mailto:contact@paragonspa.vn">contact@paragonspa.vn</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Paragon Spa. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
