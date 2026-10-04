import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';
import './SolutionDetail.css';

const CustomSoftware = () => {
  useSEO({
    title: 'Custom Software Development | Bespoke Business Software — PathMakers Technologies',
    description:
      'PathMakers Technologies builds bespoke custom business software tailored exactly to your workflow. From custom software development to ERP and CRM systems — we build around your process, not against it.',
    canonical: 'https://pathmakerstech.in/solutions/custom-software',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://pathmakerstech.in/solutions/custom-software#webpage',
      url: 'https://pathmakerstech.in/solutions/custom-software',
      name: 'Custom Software Development | PathMakers Technologies',
      description:
        'Bespoke custom software development and custom business software solutions in Tamil Nadu by PathMakers Technologies.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathmakerstech.in/' },
          { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://pathmakerstech.in/solutions' },
          { '@type': 'ListItem', position: 3, name: 'Custom Software', item: 'https://pathmakerstech.in/solutions/custom-software' },
        ],
      },
      isPartOf: { '@id': 'https://pathmakerstech.in/#website' },
    },
  });

  return (
    <main className="solution-detail-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          <li><Link to="/">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link to="/solutions">Solutions</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page">Custom Software</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="sd-hero">
        <div className="sd-hero-content">
          <div className="sd-eyebrow">CUSTOM SOFTWARE DEVELOPMENT</div>
          <h1 className="sd-title">
            Software Built Around<br />
            <span className="sd-highlight">Your Business.</span>
          </h1>
          <p className="sd-desc">
            Most software forces you to work the way it works. Custom business software is different —
            it's bespoke software development that adapts to your exact workflow, your team structure,
            and your operational needs. PathMakers Technologies builds custom software from the ground up
            around what your business actually does.
          </p>
          <div className="sd-cta-row">
            <Link to="/lets-build" className="sd-btn-primary">Start Your Project →</Link>
            <Link to="/solutions" className="sd-btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>

      {/* What is Custom Software */}
      <section className="sd-section">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">What Is Custom Software Development?</h2>
          <p className="sd-section-text">
            Custom software development is the process of designing, building and deploying software
            specifically for a particular set of users, functions or business processes. Unlike off-the-shelf
            solutions, bespoke software development means no unnecessary features, no workarounds, and no
            compromise on how you run your business.
          </p>
          <p className="sd-section-text">
            PathMakers Technologies specialises in custom business software for small and mid-sized businesses
            in Tamil Nadu and across India — from internal operational tools to complete ERP and CRM systems.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="sd-section sd-alt-bg">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">What We Build</h2>
          <div className="sd-grid">
            {[
              { title: 'Internal Business Tools', desc: 'Software that manages your internal operations — from inventory to HR to approval workflows.' },
              { title: 'ERP Systems', desc: 'Custom ERP software that connects your departments and gives you a real-time view of your business.' },
              { title: 'CRM Software', desc: 'Custom CRM development that manages your customer relationships the way you actually work.' },
              { title: 'Admin Dashboards', desc: 'Powerful, role-based dashboards for managing data, reports and business processes centrally.' },
              { title: 'Business Portals', desc: 'Customer, vendor or partner portals that connect your stakeholders to your business data.' },
              { title: 'Workflow Automation', desc: 'Automate multi-step business processes with rules, triggers and approvals built for your workflow.' },
            ].map((item, i) => (
              <div className="sd-card" key={i}>
                <h3 className="sd-card-title">{item.title}</h3>
                <p className="sd-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom */}
      <section className="sd-section">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">Why Choose Custom Software?</h2>
          <ul className="sd-list">
            <li>Your business process is the core of your competitive advantage — custom software protects it.</li>
            <li>No monthly SaaS fees for features you don't use.</li>
            <li>Ownership and control over your data and system architecture.</li>
            <li>Scales with your business without being constrained by a vendor's roadmap.</li>
            <li>Integrates with the tools and data you already have.</li>
          </ul>
          <p className="sd-section-text">
            PathMakers Technologies takes a problem-first approach to custom software development.
            We start by understanding your business before writing a single line of code.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="sd-cta-section">
        <h2 className="sd-cta-title">Ready to Build Your Custom Software?</h2>
        <p className="sd-cta-desc">
          Tell us about your business and the problem you're trying to solve.
          We'll help you find the right approach — custom or otherwise.
        </p>
        <Link to="/lets-build" className="sd-btn-primary">Let's Build →</Link>
      </section>
    </main>
  );
};

export default CustomSoftware;
