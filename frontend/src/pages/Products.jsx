import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import './Products.css';
import schoolErpImg from '../assets/schoolerp.png';
import crmImg from '../assets/Insurancecrm.png';
import customImg from '../assets/custom.png';
import productsHeroImg from '../assets/products-hero.png';
import ctaBg from '../assets/cta_bg.jpg';
import pricingHeroBg from '../assets/pricing-hero-bg.png';
import purchaseBg from '../assets/purchase-bg.png';
import softwareBg from '../assets/software-bg.png';

const productsData = [
  {
    id: 1,
    title: 'Vidhai',
    category: 'School Management Platform',
    description: 'Bring admissions, students, staff, attendance, fees, examinations and communication into one connected system.',
    features: ['Admissions & Student Management', 'Attendance & Exams', 'Fees & Transport'],
    availableAs: ['Subscription', 'Lifetime'],
    image: schoolErpImg,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    link: 'https://vidhaierp.pathmakerstech.in/'
  }
];

const comparisonMatrix = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
    name: "Access to selected features",
    sub: "check",
    life: "check"
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    name: "Configuration based on requirements",
    sub: "check",
    life: "check"
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
    name: "Duration-based usage",
    sub: "check",
    life: "dash"
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z"></path></svg>,
    name: "Lifetime usage rights",
    sub: "dash",
    life: "check"
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>,
    name: "Initial setup",
    sub: "dash",
    life: "dash"
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    name: "Training / clarification",
    sub: "check_star",
    life: "check_star"
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>,
    name: "Product updates",
    sub: "check_star",
    life: "check_star"
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    name: "Custom feature development",
    sub: "text",
    life: "text"
  }
];

const renderCellValue = (val) => {
  if (val === 'check') {
    return <div className="p-check-gold"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>;
  }
  if (val === 'check_star') {
    return (
      <div className="p-check-wrapper">
        <div className="p-check-gold"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
        <span className="p-asterisk">*</span>
      </div>
    );
  }
  if (val === 'dash') {
    return <div className="p-dash">—</div>;
  }
  if (val === 'text') {
    return <span className="p-pricing-text-val">Separate</span>;
  }
  return null;
};

const Products = () => {
  const [activeType, setActiveType] = useState('All');
  const [activeUsage, setActiveUsage] = useState('Any');

  useSEO({
    title: 'Products | Business Software Solutions — PathMakers Technologies',
    description:
      'Explore software products by PathMakers Technologies including Vidhai ERP — a school management software and school ERP designed for schools in Tamil Nadu.',
    canonical: 'https://pathmakerstech.in/products',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': 'https://pathmakerstech.in/products#webpage',
      url: 'https://pathmakerstech.in/products',
      name: 'Software Products by PathMakers Technologies',
      description:
        'Business software products by PathMakers Technologies including Vidhai ERP — school management software for Tamil Nadu schools.',
      isPartOf: { '@id': 'https://pathmakerstech.in/#website' },
    },
  });


  const filteredProducts = productsData.filter(product => {
    const matchType = activeType === 'All' || product.category.toLowerCase().includes(activeType.toLowerCase());
    const matchUsage = activeUsage === 'Any' || product.availableAs.includes(activeUsage);
    return matchType && matchUsage;
  });

  useEffect(() => {
    // Optionally implement scroll snap if needed, similar to Home
  }, []);

  return (
    <div className="products-page">
      
      {/* 01 - Hero Section */}
      <section className="p-hero-section">
        <div className="p-hero-bg-image" style={{ backgroundImage: `url(${productsHeroImg})` }}></div>
        <div className="p-hero-bg-gradient"></div>
        
        <div className="p-hero-container">
          <div className="p-hero-content-left">
          <div className="p-hero-subtitle">OUR PRODUCTS</div>
          <h1 className="p-hero-title">
            SOME SOLUTIONS DON'T<br />
            NEED TO BE <span className="p-hero-highlight">BUILT AGAIN.</span>
          </h1>
          <p className="p-hero-desc">
            Ready-to-use software for problems businesses<br />
            already know — configurable around what you<br />
            actually need.
          </p>
          <button className="p-btn-explore">Explore Products &rarr;</button>
          
          <div className="p-hero-features">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg> Proven Solutions</span>
            <div className="p-hero-divider"></div>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Configurable</span>
            <div className="p-hero-divider"></div>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg> Grow With You</span>
          </div>
          </div>
        </div>
      </section>

      {/* 02 - Products Grid with Compact Filters */}
      <section className="p-products-section">
        <div className="p-products-header-compact">
          <div className="p-products-header-left">
            <div className="p-products-subtitle">OUR PRODUCTS</div>
            <h2 className="p-products-title">READY-TO-USE SOFTWARE SOLUTIONS</h2>
            <p className="p-products-desc">
              Explore our products and find the one that fits your needs. Each product comes with<br />
              core features, flexible options and clear usage models.
            </p>
          </div>
          
          <div className="p-products-filters-right">
            <div className="p-compact-filter">
              <label>Filter by Type:</label>
              <select value={activeType} onChange={(e) => setActiveType(e.target.value)}>
                {['All', 'School', 'Business', 'Customer Management', 'Operations', 'Automation', 'Industry Specific', 'Other'].map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div className="p-compact-filter">
              <label>Usage Model:</label>
              <select value={activeUsage} onChange={(e) => setActiveUsage(e.target.value)}>
                {['Any', 'Subscription', 'Lifetime'].map(usage => (
                  <option key={usage} value={usage}>{usage}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="p-products-grid-wrapper">
          <div className="p-products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="p-product-card">
                <div className="p-card-img-wrapper">
                  <img src={product.image} alt={product.title} className="p-card-img" />
                  <div className="p-card-icon-floating">
                    {product.icon}
                  </div>
                </div>
                <div className="p-card-content">
                  <h3 className="p-card-title">{product.title}</h3>
                  <div className="p-card-category">{product.category}</div>
                  <p className="p-card-desc">{product.description}</p>
                  
                  <ul className="p-card-features">
                    {product.features.map((feature, i) => (
                      <li key={i}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#B98031" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="p-card-footer">
                    <div className="p-available-as">
                      <span>Available as</span>
                      {product.availableAs.map((tag, i) => (
                        <span key={i} className="p-available-tag">{tag}</span>
                      ))}
                    </div>
                    {product.link ? (
                      <a href={product.link} target="_blank" rel="noreferrer" className="p-btn-explore-card">
                        Explore Product &rarr;
                      </a>
                    ) : (
                      <button className="p-btn-explore-card">Explore Product &rarr;</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            <div className="p-product-card p-upcoming-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px 20px', textAlign: 'center', background: 'linear-gradient(135deg, #FAF9F6 0%, #F3F4F6 100%)', borderStyle: 'dashed', borderWidth: '2px', borderColor: '#D1D5DB' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', color: '#B98031' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#111827' }}>More Products Upcoming</h3>
              <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: '1.5', maxWidth: '200px', marginBottom: '20px' }}>Get ready to explore more solutions tailored for your business needs soon.</p>
              <div style={{ padding: '8px 16px', background: 'rgba(185, 128, 49, 0.1)', color: '#B98031', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600' }}>Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - Configurable Section */}
      <section className="p-config-section">
        <div className="p-config-left">
          <div className="p-config-subtitle">FLEXIBLE & CONFIGURABLE</div>
          <h2 className="p-config-title">YOU DON'T HAVE TO<br /><span className="p-highlight">BUY EVERYTHING.</span></h2>
          <h3 className="p-config-subhead">Choose what your business actually needs.</h3>
          <p className="p-config-desc">
            Our products are configurable. You can select the features<br />
            that are relevant to your business instead of paying for<br />
            everything simply because it exists.
          </p>
          <button className="p-btn-explore p-btn-explore-alt">Explore Available Products &rarr;</button>
        </div>

        <div className="p-config-right">
          <div className="p-config-graphic">
            {/* Checklist Box */}
            <div className="p-config-checklist-wrapper">
              <div className="p-config-checklist">
                <h4>Configure Your Product</h4>
                <ul>
                  <li className="active">
                    <div className="p-check-box"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    Students 
                    <div className="p-row-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
                  </li>
                  <li className="active">
                    <div className="p-check-box"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    Attendance 
                    <div className="p-row-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
                  </li>
                  <li className="active">
                    <div className="p-check-box"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    Fees 
                    <div className="p-row-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
                  </li>
                  <li>
                    <div className="p-empty-check"></div> 
                    Transport 
                    <div className="p-caret">v</div>
                  </li>
                  <li className="active">
                    <div className="p-check-box"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    Exams 
                    <div className="p-row-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
                  </li>
                  <li>
                    <div className="p-empty-check"></div> 
                    Communication 
                    <div className="p-caret">v</div>
                  </li>
                  <li className="active">
                    <div className="p-check-box"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    Reports 
                    <div className="p-row-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>
                  </li>
                  <li>
                    <div className="p-empty-check"></div> 
                    Advanced Analytics 
                    <div className="p-caret">v</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Middle connecting area */}
            <div className="p-config-connector">
              <div className="p-config-popup-combined">
                <div className="p-popup-icon-custom">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div className="p-popup-text-col">
                  <div className="p-popup-row1">Your selected features</div>
                  <div className="p-popup-row2"><span className="p-gold-arrow">&rarr;</span> Your product configuration</div>
                </div>
              </div>
              
              <svg className="p-connector-curve" viewBox="0 0 100 100">
                <path d="M0 80 Q 50 80 90 20" fill="none" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
                <polygon points="80,25 95,15 95,30" fill="#D4AF37" />
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* 05 - Pricing & Comparison Section */}
      <section className="p-pricing-section">
        <div className="p-pricing-hero" style={{ backgroundImage: `url(${pricingHeroBg})` }}>
          <div className="p-pricing-hero-overlay"></div>
          <div className="p-pricing-hero-left">
            <div className="p-pricing-subtitle">FLEXIBLE WAYS TO GET STARTED</div>
            <h2 className="p-pricing-title">HOW WOULD YOU LIKE TO<br/><span className="p-highlight">USE IT?</span></h2>
            <p className="p-pricing-subhead">Choose the model that fits your business goals.</p>
            <p className="p-pricing-desc">
              Both options give you the same product — with different<br/>ways to access it.
            </p>
            <div className="p-pricing-buttons">
              <button className="p-btn-subs">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> 
                Subscription
              </button>
              <button className="p-btn-life">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z"></path></svg> 
                Lifetime
              </button>
            </div>
          </div>
        </div>

        <div className="p-pricing-table-container">
          <div className="p-pricing-matrix-card">
            {/* Header Row */}
            <div className="p-matrix-header-row">
              <div className="p-matrix-col-features">
                <div className="p-matrix-header-title">
                  <div className="p-pricing-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <h3>FEATURES & INCLUSIONS</h3>
                    <p>Detailed breakdown of features available across different access models.</p>
                  </div>
                </div>
              </div>
              <div className="p-matrix-col-indicators-header">
                <div className="p-matrix-col-sub">
                  <div className="p-pricing-card-icon sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <span>SUBSCRIPTION</span>
                </div>
                <div className="p-matrix-col-life">
                  <div className="p-pricing-card-icon sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z"></path>
                    </svg>
                  </div>
                  <span>LIFETIME</span>
                </div>
              </div>
            </div>

            {/* Matrix Rows */}
            <div className="p-matrix-body">
              {comparisonMatrix.map((item, index) => (
                <div key={index} className="p-matrix-row" style={{ '--stagger': index + 1 }}>
                  <div className="p-matrix-col-features">
                    <span className="p-matrix-feature-icon">{item.icon}</span>
                    <span className="p-matrix-feature-name">{item.name}</span>
                  </div>
                  <div className="p-matrix-col-indicators">
                    <div className="p-matrix-cell p-matrix-cell-sub">
                      {renderCellValue(item.sub)}
                    </div>
                    <div className="p-matrix-cell p-matrix-cell-life">
                      {renderCellValue(item.life)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-pricing-disclaimer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> 
          <span>Availability of features, support, updates and other inclusions may differ by product and selected configuration.<br/>The exact terms will be explained <strong>before</strong> purchase.</span>
        </div>
      </section>

      {/* 06 - What Does Your Purchase Include */}
      <section className="p-include-section">
        <div className="p-include-left">
          <div className="p-include-subtitle">COMPLETE SUPPORT. FROM START TO GROWTH.</div>
          <h2 className="p-include-title">WHAT DOES YOUR PURCHASE <span className="p-highlight">INCLUDE?</span></h2>
          <p className="p-include-desc">What you receive depends on the product and configuration you choose.<br/>Here are the common inclusions.</p>

          <div className="p-include-grid">
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h6M9 11h6M9 15h4"/></svg>, title: 'Product Access', desc: 'Secure access to the selected product.' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: 'Selected Features', desc: 'Only what you need, not everything.' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.17V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-2.82-1.17l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>, title: 'Initial Configuration', desc: 'Setup based on your requirements.' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'User Setup', desc: 'Add your team and roles.' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>, title: 'Training', desc: 'Get your team up to speed with the basics.' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>, title: 'Clarification / Support', desc: 'Help when you need it.' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, title: 'Deployment', desc: 'Go live with confidence.' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>, title: 'Other Services', desc: 'As per the agreed scope and configuration.' },
            ].map((card, i) => (
              <div className="p-include-card" key={i} style={{ '--ci': i }}>
                <div className="p-include-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-include-right" style={{ backgroundImage: `url(${purchaseBg})` }}>
          <div className="p-include-right-overlay"></div>
          <div className="p-include-product-card">
            <div className="p-include-product-card-header">
              <span>Product Setup</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            <ul className="p-include-checklist">
              {['Students','Attendance','Fees','Transport','Exams','Communication','Reports'].map((item, i) => (
                <li key={i} style={{ '--i': i }}>
                  <div className="p-inc-check"><svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                  {item}
                </li>
              ))}
              <li className="p-inc-add">+ Add More</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 07 - Software Not Source Code */}
      <section className="p-software-section">
        {/* Left dark column: image at far left + title text over dark area */}
        <div className="p-sw-dark-col">
          <img src={softwareBg} alt="Software shield" className="p-sw-img" />
          <div className="p-sw-img-fade"></div>
          <div className="p-sw-title-col">
            <div className="p-software-subtitle">YOUR BUSINESS. OUR PRODUCT.</div>
            <h2 className="p-software-title">
              YOU'RE BUYING<br/>THE SOFTWARE.<br/>
              <span className="p-software-gold">NOT THE SOURCE CODE.</span>
            </h2>
          </div>
        </div>

        {/* Right light content panel */}
        <div className="p-software-right">
          <p className="p-sw-para">PathMakers products are proprietary software. Purchasing a subscription or lifetime access provides the agreed usage rights for the selected product and configuration.</p>
          <p className="p-sw-para">The underlying source code, architecture and developer rights remain with PathMakers Technologies Private Limited.</p>
          <div className="p-sw-callout">
            <div className="p-sw-callout-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <p>This allows us to maintain, improve and <span className="p-sw-highlight">evolve the product</span> while continuing to provide it as a product to its users.</p>
          </div>
        </div>
      </section>

      {/* 08 - Not Sure / Before You Buy */}
      <section className="p-notsure-section">
        <div className="p-notsure-left">
          <div className="p-notsure-subtitle">NOT SURE WHAT FITS?</div>
          <h2 className="p-notsure-title">NOT SURE WHICH PRODUCT<br/><span className="p-highlight">FITS YOUR BUSINESS?</span></h2>
          <p className="p-notsure-bold">That's exactly what we're here for.</p>
          <p className="p-notsure-desc">Tell us what you currently do, what isn't working, and what you need. We'll help you understand which available product — or configuration — makes sense for your business.</p>
          <div className="p-notsure-btns">
            <button className="p-btn-talk">Talk to PathMakers &rarr;</button>
            <button className="p-btn-guidance">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Get Free Guidance
            </button>
          </div>
        </div>
        <div className="p-notsure-right">
          <h3 className="p-notsure-q-title">BEFORE YOU BUY, ASK THESE QUESTIONS.</h3>
          <p className="p-notsure-q-desc">We don't expect you to make a decision based on a product page alone. We'll discuss the product, features, configuration, pricing, hosting, data handling, training, support and other relevant details with you before you proceed.</p>
          <div className="p-notsure-qgrid">
            {[
              'What exactly am I getting?',
              'How will my data be handled?',
              'What will it cost?',
              'What happens if I need changes?',
              'What is recurring?',
              'What support will I receive?',
            ].map((q, i) => (
              <div className="p-notsure-qitem" key={i}>
                <div className="p-notsure-qicon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 12h6M12 9v6"/></svg>
                </div>
                <span>{q}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button className="p-btn-discuss">Let's Discuss It &rarr;</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;
