import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import './LetsBuild.css';

const LetsBuild = () => {
  useSEO({
    title: "Let's Build & Contact Us | Custom Software & Tech Consultation — PathMakers Technologies",
    description:
      "Connect with PathMakers Technologies — custom software development company in Namakkal, Tamil Nadu. Submit your project inquiry or reach us via WhatsApp, email, or direct contact.",
    canonical: 'https://pathmakerstech.in/lets-build',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          '@id': 'https://pathmakerstech.in/lets-build#webpage',
          url: 'https://pathmakerstech.in/lets-build',
          name: "Let's Build & Contact PathMakers Technologies",
          description:
            'Start a custom software development conversation with PathMakers Technologies. Describe your business problem or contact us directly.',
          isPartOf: { '@id': 'https://pathmakerstech.in/#website' },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathmakerstech.in/' },
              { '@type': 'ListItem', position: 2, name: "Let's Build", item: 'https://pathmakerstech.in/lets-build' },
            ],
          },
        },
        {
          '@type': ['Organization', 'LocalBusiness'],
          '@id': 'https://pathmakerstech.in/#organization',
          name: 'PathMakers Technologies',
          url: 'https://pathmakerstech.in/',
          logo: 'https://pathmakerstech.in/pmlogo.png',
          email: 'noreply.pathmakers@gmail.com',
          telephone: '+917200754566',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'P.Velur',
            addressLocality: 'Namakkal',
            addressRegion: 'Tamil Nadu',
            addressCountry: 'IN',
          },
          areaServed: ['Tamil Nadu', 'India'],
          founder: {
            '@type': 'Person',
            name: 'Naresh Dharmaraj',
          },
        },
      ],
    },
  });

  const [form, setForm] = useState({ name: '', email: '', business: '', problem: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const waMessage = encodeURIComponent(
    `Hello PathMakers Team,\n\nMy name is ${form.name || '[Your Name]'}.\nBusiness/Organisation: ${form.business || '[Not specified]'}\nEmail: ${form.email || '[Not specified]'}\n\nWhat I'm trying to solve:\n${form.problem || '[Not specified]'}\n\nI'd like to discuss this further.`
  );
  const waLink = `https://wa.me/917200754566?text=${waMessage}`;

  return (
    <main className="lets-build-page">
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          <li><Link to="/">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page">Let's Build & Contact</li>
        </ol>
      </nav>

      <section className="lb-hero">
        <div className="lb-hero-inner">
          <div className="lb-eyebrow">LET'S BUILD & GET IN TOUCH</div>
          <h1 className="lb-title">
            Tell Us About<br />
            <span className="lb-highlight">Your Business.</span>
          </h1>
          <p className="lb-desc">
            You don't need a technical spec sheet or complex brief. Describe your business problem,
            ask a question, or reach out directly to PathMakers Technologies. We'll discuss the right
            approach together — custom software development, web applications, mobile apps, business automation, or ERP systems.
          </p>
        </div>
      </section>

      <section className="lb-form-section">
        <div className="lb-form-wrapper">

          {/* Left Column: Form */}
          <div className="lb-form-left">
            <h2 className="lb-form-title">Start the Conversation</h2>
            <p className="lb-form-desc">
              Fill in your details below to send an inquiry directly via WhatsApp — no obligation, no sales pressure. Just a real conversation.
            </p>

            <form onSubmit={(e) => e.preventDefault()} aria-label="Project Inquiry Form">
              <div className="lb-field-group">
                <label htmlFor="lb-name" className="lb-label">Your Name</label>
                <input
                  id="lb-name"
                  name="name"
                  type="text"
                  className="lb-input"
                  placeholder="e.g. Naresh, Sarah, etc."
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="lb-field-group">
                <label htmlFor="lb-email" className="lb-label">Email Address</label>
                <input
                  id="lb-email"
                  name="email"
                  type="email"
                  className="lb-input"
                  placeholder="you@yourbusiness.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="lb-field-group">
                <label htmlFor="lb-business" className="lb-label">Business or Organisation</label>
                <input
                  id="lb-business"
                  name="business"
                  type="text"
                  className="lb-input"
                  placeholder="What does your business do?"
                  value={form.business}
                  onChange={handleChange}
                />
              </div>

              <div className="lb-field-group">
                <label htmlFor="lb-problem" className="lb-label">What are you trying to solve?</label>
                <textarea
                  id="lb-problem"
                  name="problem"
                  className="lb-textarea"
                  placeholder="Describe your business problem or software requirement. No technical jargon needed."
                  rows={5}
                  value={form.problem}
                  onChange={handleChange}
                />
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="lb-btn-submit"
              >
                Send Inquiry via WhatsApp →
              </a>

              <p className="lb-disclaimer">
                Or email us directly at{' '}
                <a href="mailto:noreply.pathmakers@gmail.com">noreply.pathmakers@gmail.com</a>
              </p>
            </form>
          </div>

          {/* Right Column: Contact Details & Next Steps */}
          <div className="lb-form-right">

            {/* Direct Contact Cards */}
            <div className="lb-contact-card">
              <h3 className="lb-contact-title">Direct Contact Info</h3>
              <ul className="lb-contact-list">
                <li className="lb-contact-item">
                  <div className="lb-contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <strong>WhatsApp (Fastest Response)</strong>
                    <a href="https://wa.me/917200754566?text=Hello%20PathMakers%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">
                      +91 72007 54566
                    </a>
                  </div>
                </li>

                <li className="lb-contact-item">
                  <div className="lb-contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:noreply.pathmakers@gmail.com">noreply.pathmakers@gmail.com</a>
                  </div>
                </li>

                <li className="lb-contact-item">
                  <div className="lb-contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Location</strong>
                    <address className="lb-address">
                      PathMakers Technologies<br />
                      P.Velur, Namakkal District<br />
                      Tamil Nadu, India
                    </address>
                  </div>
                </li>
              </ul>
            </div>

            {/* Process Steps Card */}
            <div className="lb-info-card">
              <h3 className="lb-info-title">What Happens Next?</h3>
              <ol className="lb-steps">
                <li>
                  <span className="lb-step-num">01</span>
                  <div>
                    <strong>We review your message</strong>
                    <p>We'll read about your business and understand the problem you've described.</p>
                  </div>
                </li>
                <li>
                  <span className="lb-step-num">02</span>
                  <div>
                    <strong>We reach out to connect</strong>
                    <p>We'll ask clarifying questions to get a complete view of your requirements.</p>
                  </div>
                </li>
                <li>
                  <span className="lb-step-num">03</span>
                  <div>
                    <strong>We discuss the right solution</strong>
                    <p>We'll tell you honestly what approach makes sense — custom software, web app, mobile app, or automation.</p>
                  </div>
                </li>
                <li>
                  <span className="lb-step-num">04</span>
                  <div>
                    <strong>You decide</strong>
                    <p>No pressure. Take as much time as you need before making any decision.</p>
                  </div>
                </li>
              </ol>
            </div>

          </div>
        </div>
      </section>

      {/* Explore What We Build */}
      <section className="lb-explore-section">
        <h2 className="lb-explore-title">Explore What PathMakers Builds</h2>
        <p className="lb-explore-desc">Find the solution area that aligns with your business goals.</p>
        <div className="lb-explore-links">
          <Link to="/solutions/custom-software" className="lb-explore-card">
            <strong>Custom Software Development</strong>
            <span>Tailored software built for your exact operational workflow →</span>
          </Link>
          <Link to="/solutions/web-applications" className="lb-explore-card">
            <strong>Web Applications</strong>
            <span>Secure, high-performance browser-based tools and portals →</span>
          </Link>
          <Link to="/solutions/mobile-apps" className="lb-explore-card">
            <strong>Mobile Apps</strong>
            <span>Native and cross-platform mobile apps for Android and iOS →</span>
          </Link>
          <Link to="/solutions/business-automation" className="lb-explore-card">
            <strong>Business Automation</strong>
            <span>Automate repetitive business processes and eliminate manual data entry →</span>
          </Link>
          <Link to="/products/vidhai-erp" className="lb-explore-card">
            <strong>Vidhai ERP (School Software)</strong>
            <span>Complete school ERP and management software for institutions in Tamil Nadu →</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LetsBuild;
