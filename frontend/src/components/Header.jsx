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
              <span>TECHNOLOGIES</span>
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
            <Link to="/lets-build" className="btn-primary btn-sm desktop-btn">Let's Build &rarr;</Link>
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
          <div className="mobile-menu-brand">
            <img src={pmLogo} alt="Pathmakers" className="mobile-menu-logo" />
            <strong className="mobile-menu-brand-name">PATHMAKERS TECHNOLOGIES</strong>
          </div>
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
          <Link to="/lets-build" className="btn-primary mobile-nav-btn" onClick={closeMobileMenu}>
            Let's Build &rarr;
          </Link>
        </nav>
        <a 
          href="https://wa.me/917200754566?text=Hello%20PathMakers%20and%20Team%2C%20I%20would%20like%20to%20Connect%20for%20a%20projects%20discussion."
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu-whatsapp"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>+91 7200754566</span>
        </a>
      </div>
    </>
  );
};

export default Header;
