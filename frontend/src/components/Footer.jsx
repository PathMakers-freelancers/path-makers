import React from 'react';
import './Footer.css';
import pmLogoImg from '../assets/pmlogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Wave Divider */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="#f8f9fa">
          <path d="M0,0 C320,150 420,-30 720,30 C1020,90 1120,150 1440,30 L1440,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="container footer-content-wrapper">
        <div className="footer-top-action">
          <a href="https://wa.me/917200754566?text=Hello%20PathMakers%20and%20Team%2C%20I%20would%20like%20to%20Connect%20for%20a%20projects%20discussion." target="_blank" rel="noopener noreferrer" className="btn-book-call">Book a call</a>
        </div>

        <div className="footer-container">
          {/* Column 1: Brand & Contact */}
          <div className="footer-col brand-col">
            <div className="footer-logo-wrapper">
              <img src={pmLogoImg} alt="Pathmakers Logo" className="footer-logo-img" />
              <div className="footer-logo-text">
                <strong>PATHMAKERS</strong>
                <span>TECHNOLOGIES FREELANCERS</span>
              </div>
            </div>
            <p className="company-desc">
              Empowering businesses with modern technology, scalable architecture, and secure solutions.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="c-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D13B6B" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <p>Pathmakers Technologies FREELANCERS,<br/>P.Velur, Tamil Nadu, India</p>
              </div>
              <div className="contact-item">
                <span className="c-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D13B6B" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <p>noreply.pathmakers@gmail.com</p>
              </div>
              <div className="contact-item">
                <span className="c-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D13B6B" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <p>+91 7200754566</p>
              </div>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#solutions">Solutions</a>
              <a href="#tech-stack">Tech Stack</a>
            </nav>
          </div>

          {/* Column 3: Products */}
          <div className="footer-col links-col">
            <h4>Products</h4>
            <nav className="footer-nav">
              <a href="https://vidhaierp.pathmakerstech.in/" target="_blank" rel="noopener noreferrer">VidhaiERP</a>
            </nav>
          </div>

          {/* Column 4: Resources */}
          <div className="footer-col links-col">
            <h4>Resources</h4>
            <nav className="footer-nav">
              <a href="#case-studies">Case Studies</a>
              <a href="#how-we-work">How We Work</a>
              <a href="#why-us">Why Choose Us</a>
              <a href="#faq">FAQ</a>
              <a href="#support">Support</a>
            </nav>
          </div>

          {/* Column 5: Connect */}
          <div className="footer-col social-col">
            <h4>Connect With Us</h4>
            <div className="footer-social">
              <a href="#linkedin" className="social-icon">in</a>
              <a href="#twitter" className="social-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
              <a href="#youtube" className="social-icon">▶</a>
              <a href="#portfolio" className="social-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 16l-4-4 4-4v8zm8 0l-4-4 4-4v8z"/></svg>
              </a>
            </div>
            <div className="newsletter">
              <p>Subscribe to our newsletter</p>
              <div className="newsletter-input">
                <input type="email" placeholder="Email address" />
                <button>&rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Text Section - Moved outside container for true full width */}
      <div className="footer-massive-text">
        Pathmakers
      </div>
      
      <div className="container footer-bottom">
        <div className="copyright">
          &copy; 2026 Pathmakers Technologies Freelancers. All rights reserved.
        </div>
        <div className="footer-bottom-right">
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
          <div className="footer-location">P.Velur, Tamil Nadu, India</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
