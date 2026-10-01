import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import pmLogo from '../assets/pmlogo.png';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <img src={pmLogo} alt="Pathmakers Technologies" className="header-logo-img" />
            <div className="logo-text">
              <strong>PATHMAKERS</strong>
              <span>TECHNOLOGIES FREELANCERS</span>
            </div>
          </Link>
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="header-actions">
            <Link to="/build" className="btn-primary btn-sm desktop-btn">Let's Build &rarr;</Link>
            <button className="hamburger-menu" onClick={toggleMobileMenu} aria-label="Toggle menu">
              <div className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'visible' : ''}`} onClick={closeMobileMenu}></div>
      <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <img src={pmLogo} alt="Pathmakers" className="mobile-menu-logo" />
          <button className="close-menu-btn" onClick={closeMobileMenu}>&times;</button>
        </div>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`mobile-nav-link ${location.pathname === link.href ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/build" className="btn-primary mobile-nav-btn" onClick={closeMobileMenu}>
            Let's Build &rarr;
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
