import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import pmLogo from '../assets/pmlogo.png';
import monsterImg from '../assets/monster_404.png';
import './NotFound.css';

const NotFound = () => {
  useSEO({
    title: '404 - Page Not Found | PathMakers Technologies',
    description: "Oops, I think we're lost. Let's get you back to somewhere familiar.",
    canonical: 'https://pathmakerstech.in/404',
    noindex: true,
  });

  return (
    <div className="nf-standalone-page">
      {/* Top Header Bar */}
      <header className="nf-header">
        <div className="nf-header-container">
          <Link to="/" className="nf-logo-link">
            <img src={pmLogo} alt="Pathmakers Logo" className="nf-logo-img" />
            <div className="nf-logo-text">
              <strong>PATHMAKERS</strong>
              <span>TECHNOLOGIES PRIVATE LIMITED</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Main 404 Center Section */}
      <main className="nf-main-content">
        {/* Background Blueprint Grid Lines Overlay */}
        <div className="nf-blueprint-overlay" aria-hidden="true"></div>

        <div className="nf-center-box">
          {/* 404 Number & Monster Layout */}
          <div className="nf-display-row">
            <span className="nf-digit nf-digit-left">4</span>
            <div className="nf-monster-container">
              <span className="nf-digit nf-digit-zero">0</span>
              <img src={monsterImg} alt="Confused Blue Monster" className="nf-monster-image" />
              <div className="nf-monster-shadow" aria-hidden="true"></div>
            </div>
            <span className="nf-digit nf-digit-right">4</span>
          </div>

          {/* Heading & Action */}
          <h1 className="nf-oops-title">Oops, I think we're lost</h1>
          <p className="nf-oops-desc">Let's get you back to somewhere familiar...</p>

          <Link to="/" className="nf-back-home-btn">
            <span className="nf-chevron">&lt;</span> Back to home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
