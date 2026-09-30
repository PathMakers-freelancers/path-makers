import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import pmLogo from '../assets/pmlogo.png';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src={pmLogo} alt="Pathmakers Technologies" className="header-logo-img" />
          <div className="logo-text">
            <strong>PATHMAKERS</strong>
            <span>TECHNOLOGIES PRIVATE LIMITED</span>
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
        <Link to="/build" className="btn-primary btn-sm">Let's Build &rarr;</Link>
      </div>
    </header>
  );
};

export default Header;
