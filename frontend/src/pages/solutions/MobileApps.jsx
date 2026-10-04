import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';
import './SolutionDetail.css';

const MobileApps = () => {
  useSEO({
    title: 'Mobile App Development | Custom Mobile Applications — PathMakers Technologies',
    description:
      'PathMakers Technologies offers custom mobile app development for Android and iOS. We build purpose-built mobile applications for businesses in Tamil Nadu and across India.',
    canonical: 'https://pathmakerstech.in/solutions/mobile-apps',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://pathmakerstech.in/solutions/mobile-apps#webpage',
      url: 'https://pathmakerstech.in/solutions/mobile-apps',
      name: 'Mobile App Development | PathMakers Technologies',
      description:
        'Custom mobile app development services for Android and iOS by PathMakers Technologies, Tamil Nadu.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathmakerstech.in/' },
          { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://pathmakerstech.in/solutions' },
          { '@type': 'ListItem', position: 3, name: 'Mobile Apps', item: 'https://pathmakerstech.in/solutions/mobile-apps' },
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
          <li aria-current="page">Mobile Apps</li>
        </ol>
      </nav>

      <section className="sd-hero">
        <div className="sd-hero-content">
          <div className="sd-eyebrow">MOBILE APP DEVELOPMENT</div>
          <h1 className="sd-title">
            Custom Mobile Apps<br />
            <span className="sd-highlight">Made for Your Users.</span>
          </h1>
          <p className="sd-desc">
            PathMakers Technologies builds custom mobile applications for Android and iOS that are
            designed around your users and your business. Whether it's a customer-facing app, a
            field operations tool, or an internal business app — our mobile app development is
            focused on what your users actually need to do.
          </p>
          <div className="sd-cta-row">
            <Link to="/lets-build" className="sd-btn-primary">Start Your Project →</Link>
            <Link to="/solutions" className="sd-btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>

      <section className="sd-section">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">Custom Mobile App Development</h2>
          <p className="sd-section-text">
            Custom mobile app development means building an app specifically for your business needs —
            not adapting a template or white-labelling an existing product. PathMakers Technologies
            designs and develops mobile applications that match your workflow, your users, and your
            growth plans.
          </p>
        </div>
      </section>

      <section className="sd-section sd-alt-bg">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">Mobile Apps We Build</h2>
          <div className="sd-grid">
            {[
              { title: 'Customer-Facing Apps', desc: 'Mobile apps that let your customers interact with your business — bookings, orders, support, and more.' },
              { title: 'Field Operations Apps', desc: 'Apps for teams on the ground — task management, check-ins, reporting, and real-time updates.' },
              { title: 'Internal Business Apps', desc: 'Apps that connect your internal teams with the data and workflows they need, on the go.' },
              { title: 'E-Commerce Mobile Apps', desc: 'Custom mobile shopping experiences tailored to your products and business model.' },
              { title: 'Service & Booking Apps', desc: 'Mobile apps for scheduling, appointments, and service delivery management.' },
              { title: 'Cross-Platform Mobile Apps', desc: 'Apps that run on both Android and iOS from a single codebase — efficient and consistent.' },
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
          <h2 className="sd-section-title">How We Approach Mobile App Development</h2>
          <ul className="sd-list">
            <li>User experience comes first — we design around how your users think, not how engineers think.</li>
            <li>Native performance on Android and iOS using React Native or platform-specific development.</li>
            <li>Offline support and data sync for apps used in low-connectivity environments.</li>
            <li>Secure data handling and backend API integration with your existing systems.</li>
            <li>Post-launch support, updates, and version management.</li>
          </ul>
        </div>
      </section>

      <section className="sd-cta-section">
        <h2 className="sd-cta-title">Let's Build Your Mobile App</h2>
        <p className="sd-cta-desc">
          Tell us what your users need to do and we'll figure out the right mobile approach for your business.
        </p>
        <Link to="/lets-build" className="sd-btn-primary">Let's Build →</Link>
      </section>
    </main>
  );
};

export default MobileApps;
