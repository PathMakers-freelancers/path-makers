import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';
import './SolutionDetail.css';

const BusinessAutomation = () => {
  useSEO({
    title: 'Business Automation | Workflow Automation Software — PathMakers Technologies',
    description:
      'PathMakers Technologies builds business process automation and workflow automation software that reduces manual work, improves consistency, and frees your team to focus on what matters.',
    canonical: 'https://pathmakerstech.in/solutions/business-automation',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://pathmakerstech.in/solutions/business-automation#webpage',
      url: 'https://pathmakerstech.in/solutions/business-automation',
      name: 'Business Process Automation | PathMakers Technologies',
      description:
        'Business process automation and workflow automation software solutions by PathMakers Technologies in Tamil Nadu.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pathmakerstech.in/' },
          { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://pathmakerstech.in/solutions' },
          { '@type': 'ListItem', position: 3, name: 'Business Automation', item: 'https://pathmakerstech.in/solutions/business-automation' },
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
          <li aria-current="page">Business Automation</li>
        </ol>
      </nav>

      <section className="sd-hero">
        <div className="sd-hero-content">
          <div className="sd-eyebrow">BUSINESS PROCESS AUTOMATION</div>
          <h1 className="sd-title">
            Automate the Work<br />
            <span className="sd-highlight">That Repeats Itself.</span>
          </h1>
          <p className="sd-desc">
            Business process automation and workflow automation software help your team stop doing
            the same things over and over manually. PathMakers Technologies identifies the right
            processes to automate in your business and builds the software that handles them —
            reliably, consistently, and without human error.
          </p>
          <div className="sd-cta-row">
            <Link to="/lets-build" className="sd-btn-primary">Explore Automation →</Link>
            <Link to="/solutions" className="sd-btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>

      <section className="sd-section">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">What Is Business Process Automation?</h2>
          <p className="sd-section-text">
            Business process automation (BPA) is the use of software to execute recurring tasks or
            processes that would otherwise require manual effort. It replaces repeated manual steps
            with automated rules, triggers, and workflows — so your team spends time on work that
            actually requires human judgment.
          </p>
          <p className="sd-section-text">
            Workflow automation software takes this further — it connects the different steps,
            people, and systems in a process so that work flows from start to finish with minimal
            manual intervention.
          </p>
        </div>
      </section>

      <section className="sd-section sd-alt-bg">
        <div className="sd-section-inner">
          <h2 className="sd-section-title">Processes We Help Automate</h2>
          <div className="sd-grid">
            {[
              { title: 'Approval Workflows', desc: 'Automate request, review and approval chains across teams — purchase orders, leave requests, document sign-offs.' },
              { title: 'Data Entry & Reporting', desc: 'Replace manual data collection with automated capture and scheduled report generation.' },
              { title: 'Notifications & Alerts', desc: 'Trigger automatic notifications via email, SMS or in-app when specific business conditions occur.' },
              { title: 'Invoicing & Billing', desc: 'Automate the generation, sending and tracking of invoices, payments, and reminders.' },
              { title: 'Inventory Management', desc: 'Automatic stock tracking, low-stock alerts, and reorder triggers based on real business rules.' },
              { title: 'Customer Communication', desc: 'Automate follow-ups, confirmations, and status updates to customers at each stage of their journey.' },
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
          <h2 className="sd-section-title">What Should Not Be Automated</h2>
          <p className="sd-section-text">
            Not every process benefits from automation. We'll help you identify what should be automated
            and what should remain manual — because automating the wrong thing can create more problems
            than it solves.
          </p>
          <ul className="sd-list">
            <li>Processes requiring empathy, complex human judgment, or relationship management.</li>
            <li>Edge cases that happen too rarely to justify the cost of automation.</li>
            <li>Anything that changes too frequently to be reliably codified.</li>
          </ul>
        </div>
      </section>

      <section className="sd-cta-section">
        <h2 className="sd-cta-title">Ready to Automate Your Business?</h2>
        <p className="sd-cta-desc">
          Tell us what your team does manually every day. We'll identify what's worth automating and how.
        </p>
        <Link to="/lets-build" className="sd-btn-primary">Let's Build →</Link>
      </section>
    </main>
  );
};

export default BusinessAutomation;
