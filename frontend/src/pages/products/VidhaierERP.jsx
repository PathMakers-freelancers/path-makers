import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';
import '../solutions/SolutionDetail.css';

const VidhaierERP = () => {
  useSEO({
    title: 'Vidhai ERP | School Management Software & School ERP in Tamil Nadu — PathMakers',
    description:
      'Vidhai ERP is a school ERP software by PathMakers Technologies designed for schools in Tamil Nadu. Manage admissions, students, attendance, fees, examinations, and communication in one connected school management system.',
    canonical: 'https://pathmakerstech.in/products/vidhai-erp',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://pathmakerstech.in/products/vidhai-erp#webpage',
          url: 'https://pathmakerstech.in/products/vidhai-erp',
          name: 'Vidhai ERP | School Management Software by PathMakers Technologies',
          description:
            'Vidhai ERP is a school ERP software and school management system built for schools in Tamil Nadu by PathMakers Technologies.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathmakerstech.in/' },
              { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://pathmakerstech.in/products' },
              { '@type': 'ListItem', position: 3, name: 'Vidhai ERP', item: 'https://pathmakerstech.in/products/vidhai-erp' },
            ],
          },
          isPartOf: { '@id': 'https://pathmakerstech.in/#website' },
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Vidhai ERP',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: 'https://vidhaierp.pathmakerstech.in/',
          description:
            'Vidhai ERP is a school management software and school ERP system for schools in Tamil Nadu, covering admissions, students, attendance, fees, examinations, transport, and communication.',
          offers: {
            '@type': 'Offer',
            seller: { '@id': 'https://pathmakerstech.in/#organization' },
          },
          author: { '@id': 'https://pathmakerstech.in/#organization' },
          keywords: 'school ERP software, school management software, school ERP Tamil Nadu, school ERP Namakkal',
        },
      ],
    },
  });

  const features = [
    { title: 'Admissions & Student Management', desc: 'Manage the complete admission process and maintain detailed student records from enrolment to graduation.' },
    { title: 'Attendance Tracking', desc: 'Daily attendance recording for students and staff with automated alerts and reports.' },
    { title: 'Fees & Payments', desc: 'Configure fee structures, track collections, send payment reminders, and generate fee receipts.' },
    { title: 'Examinations & Results', desc: 'Set up exam schedules, record marks, and generate report cards automatically.' },
    { title: 'Transport Management', desc: 'Manage school bus routes, assign students, and track transport fees.' },
    { title: 'Communication', desc: 'Communicate with parents and staff through the platform via notifications and announcements.' },
    { title: 'Reports & Analytics', desc: 'Generate standard and custom reports for attendance, fees, academics, and operations.' },
    { title: 'Staff Management', desc: 'Manage staff records, designations, and operational assignments in one place.' },
  ];

  return (
    <main className="solution-detail-page">
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          <li><Link to="/">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link to="/products">Products</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page">Vidhai ERP</li>
        </ol>
      </nav>

      <section className="sd-hero">
        <div className="sd-hero-content">
          <div className="sd-eyebrow">SCHOOL ERP SOFTWARE</div>
          <h1 className="sd-title">
            Vidhai ERP —<br />
            <span className="sd-highlight">School Management Made Simple.</span>
          </h1>
          <p className="sd-desc">
            Vidhai ERP is a school management software built specifically for schools in Tamil Nadu.
            It brings admissions, students, staff, attendance, fees, examinations, and communication
            into one connected school ERP system — so school administrators can focus on education,
            not paperwork.
          </p>
          <div className="sd-cta-row">
            <a
              href="https://vidhaierp.pathmakerstech.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="sd-btn-primary"
            >
              Explore Vidhai ERP →
            </a>
            <Link to="/lets-build" className="sd-btn-secondary">Talk to Us</Link>
          </div>
        </div>
      </section>

      <section className="sd-section">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">What Is Vidhai ERP?</h2>
          <p className="sd-section-text">
            Vidhai ERP is a school ERP software product developed by PathMakers Technologies,
            designed for schools in Tamil Nadu. As a complete school management system, it addresses
            the daily operational challenges schools face — from managing student records to tracking
            fees to coordinating staff — all from a single platform accessible from any device.
          </p>
          <p className="sd-section-text">
            Unlike generic ERP systems, Vidhai ERP is built around how schools in Tamil Nadu
            actually operate. It is configurable — you choose the modules that match your school's
            size and needs.
          </p>
        </div>
      </section>

      <section className="sd-section sd-alt-bg">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">What Vidhai ERP Covers</h2>
          <div className="sd-grid">
            {features.map((f, i) => (
              <div className="sd-card" key={i}>
                <h3 className="sd-card-title">{f.title}</h3>
                <p className="sd-card-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sd-section">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">Who Is Vidhai ERP For?</h2>
          <p className="sd-section-text">
            Vidhai ERP is designed for schools of all sizes in Tamil Nadu — from small private schools
            to larger institutions — that want to move away from manual records and spreadsheets
            toward a proper school management system.
          </p>
          <ul className="sd-list">
            <li>Private and government-aided schools in Tamil Nadu.</li>
            <li>Schools in Namakkal, Salem, Erode, Coimbatore, and surrounding districts.</li>
            <li>Schools looking to digitise their administrative operations.</li>
            <li>Institutions that want a school ERP without unnecessary complexity.</li>
          </ul>
        </div>
      </section>

      <section className="sd-section sd-alt-bg">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">Flexible Access Models</h2>
          <p className="sd-section-text">
            Vidhai ERP is available through two access models:
          </p>
          <div className="sd-grid sd-grid-2">
            <div className="sd-card sd-card-highlight">
              <h3 className="sd-card-title">Subscription</h3>
              <p className="sd-card-desc">
                Annual access to Vidhai ERP with the modules your school needs. Ideal for schools
                that want to start with a lower upfront cost and scale over time.
              </p>
            </div>
            <div className="sd-card sd-card-highlight">
              <h3 className="sd-card-title">Lifetime Access</h3>
              <p className="sd-card-desc">
                One-time purchase for permanent usage rights to the selected configuration of Vidhai ERP.
                Ideal for schools making a long-term investment.
              </p>
            </div>
          </div>
          <p className="sd-section-text" style={{ marginTop: '1.5rem' }}>
            Both models include setup, configuration, and initial training. Full details will be
            discussed before you proceed.
          </p>
        </div>
      </section>

      <section className="sd-cta-section">
        <h2 className="sd-cta-title">Interested in Vidhai ERP for Your School?</h2>
        <p className="sd-cta-desc">
          Tell us about your school and we'll walk you through what Vidhai ERP can do for you —
          no pressure, just a clear conversation.
        </p>
        <div className="sd-cta-row">
          <a
            href="https://vidhaierp.pathmakerstech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="sd-btn-primary"
          >
            Visit Vidhai ERP →
          </a>
          <Link to="/lets-build" className="sd-btn-secondary">Contact Us</Link>
        </div>
      </section>
    </main>
  );
};

export default VidhaierERP;
