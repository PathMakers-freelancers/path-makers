import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';
import './SolutionDetail.css';

const WebApplications = () => {
  useSEO({
    title: 'Web Application Development | Custom Web Apps — PathMakers Technologies',
    description:
      'PathMakers Technologies delivers custom web application development for businesses in Tamil Nadu. We build fast, scalable, and secure web applications that solve your specific business problem.',
    canonical: 'https://pathmakerstech.in/solutions/web-applications',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://pathmakerstech.in/solutions/web-applications#webpage',
      url: 'https://pathmakerstech.in/solutions/web-applications',
      name: 'Web Application Development | PathMakers Technologies',
      description:
        'Custom web application development services by PathMakers Technologies for businesses in Tamil Nadu and India.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathmakerstech.in/' },
          { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://pathmakerstech.in/solutions' },
          { '@type': 'ListItem', position: 3, name: 'Web Applications', item: 'https://pathmakerstech.in/solutions/web-applications' },
        ],
      },
      isPartOf: { '@id': 'https://pathmakerstech.in/#website' },
    },
  });

  return (
    <main className="solution-detail-page">
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          <li><Link to="/">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link to="/solutions">Solutions</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page">Web Applications</li>
        </ol>
      </nav>

      <section className="sd-hero">
        <div className="sd-hero-content">
          <div className="sd-eyebrow">WEB APPLICATION DEVELOPMENT</div>
          <h1 className="sd-title">
            Custom Web Applications<br />
            <span className="sd-highlight">Built for Business.</span>
          </h1>
          <p className="sd-desc">
            PathMakers Technologies builds custom web applications that are fast, responsive, and built
            around the way your business actually operates. From customer-facing portals to complex
            internal web systems — our web application development is focused on solving your real problem.
          </p>
          <div className="sd-cta-row">
            <Link to="/lets-build" className="sd-btn-primary">Start Your Project →</Link>
            <Link to="/solutions" className="sd-btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>

      <section className="sd-section">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">What Is Custom Web Application Development?</h2>
          <p className="sd-section-text">
            Custom web application development is the creation of web-based software tailored to your
            specific business requirements. Unlike website templates or generic SaaS tools, a custom
            web application is designed from the ground up to support your workflow, your users, and
            your data — accessible from any browser, on any device.
          </p>
        </div>
      </section>

      <section className="sd-section sd-alt-bg">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">Types of Web Applications We Build</h2>
          <div className="sd-grid">
            {[
              { title: 'Business Management Systems', desc: 'Web-based systems to manage operations, teams, inventory, or customer data from a central platform.' },
              { title: 'Customer & Partner Portals', desc: 'Secure, role-based portals where your customers, vendors, or partners can access relevant information.' },
              { title: 'Admin & Reporting Dashboards', desc: 'Real-time dashboards that give you operational visibility with the data that matters most.' },
              { title: 'Multi-Step Workflow Applications', desc: 'Web apps that automate and track complex business processes with approval flows and notifications.' },
              { title: 'SaaS-Style Platforms', desc: 'Multi-tenant web platforms that serve multiple users or businesses from a single system.' },
              { title: 'Progressive Web Apps (PWA)', desc: 'Web apps that work like native mobile apps — installable, fast, and offline-capable.' },
            ].map((item, i) => (
              <div className="sd-card" key={i}>
                <h3 className="sd-card-title">{item.title}</h3>
                <p className="sd-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sd-section">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">Our Web Application Development Approach</h2>
          <ul className="sd-list">
            <li>We start by understanding your business process before designing the application.</li>
            <li>Clean, semantic, accessible HTML and responsive design for all screen sizes.</li>
            <li>Fast load times and Core Web Vitals-friendly development.</li>
            <li>Secure architecture with proper authentication, authorisation and data handling.</li>
            <li>Scalable backend that grows as your business does.</li>
          </ul>
        </div>
      </section>

      <section className="sd-cta-section">
        <h2 className="sd-cta-title">Let's Build Your Web Application</h2>
        <p className="sd-cta-desc">
          Describe your business problem and we'll propose the right web application architecture for it.
        </p>
        <Link to="/lets-build" className="sd-btn-primary">Let's Build →</Link>
      </section>
    </main>
  );
};

export default WebApplications;
