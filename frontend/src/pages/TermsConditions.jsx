import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import './PrivacyPolicy.css'; // Shared styling with Privacy Policy for visual consistency

const TermsConditions = () => {
  useSEO({
    title: 'Terms & Conditions — PathMakers Technologies',
    description:
      'Read the Terms & Conditions governing your use of PathMakers Technologies website, products, software development services, and technology solutions.',
    canonical: 'https://pathmakerstech.in/terms',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Terms & Conditions — PathMakers Technologies',
      url: 'https://pathmakerstech.in/terms',
      description: 'Terms & Conditions of PathMakers Technologies.',
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 'section-1',
      num: '1',
      title: 'Acceptance of These Terms',
      paragraphs: [
        'These Terms & Conditions govern your access to and use of the PathMakers website, products, software, services and related offerings.',
        'By accessing our website, purchasing a product, requesting a service or entering into an agreement with PathMakers, you agree to comply with these Terms & Conditions and any additional terms applicable to the specific product or service.',
      ],
    },
    {
      id: 'section-2',
      num: '2',
      title: 'About PathMakers',
      paragraphs: [
        'PathMakers Technologies provides software products, custom software development, website development, automation, technology solutions, consulting and related digital services.',
        'The specific scope of any product or service will depend on the applicable product description, quotation, proposal, statement of work, order or separate agreement.',
      ],
    },
    {
      id: 'section-3',
      num: '3',
      title: 'Our Products',
      paragraphs: [
        'PathMakers may offer ready-to-use software products through subscription-based access, lifetime access or other licensing models specified for the relevant product.',
        'Product features, user limits, duration, configuration, support, updates and other inclusions may differ between products and packages.',
      ],
    },
    {
      id: 'section-4',
      num: '4',
      title: 'Product Licensing and Usage',
      paragraphs: [
        'Purchasing or subscribing to a PathMakers product provides you with the usage rights specifically granted for that product and selected configuration, and does not transfer ownership of the underlying software.',
        'Unless expressly agreed otherwise in a separate written agreement, the source code, architecture, design system, proprietary logic, underlying technology, intellectual property and developer rights remain with PathMakers Technologies.',
        'You may not copy, resell, redistribute, reverse engineer, reproduce, modify for unauthorised commercial redistribution or otherwise exploit PathMakers software beyond the rights granted to you.',
      ],
    },
    {
      id: 'section-5',
      num: '5',
      title: 'Custom Software and Development Services',
      paragraphs: [
        'Custom development projects will be delivered according to the agreed scope, requirements, timelines, features, integrations and commercial terms.',
        'Changes to the agreed scope may require additional development time, cost or a revised delivery schedule.',
        'Final deliverables, ownership rights, source-code rights, licences and maintenance responsibilities for custom projects will depend on the written agreement applicable to that project.',
      ],
    },
    {
      id: 'section-6',
      num: '6',
      title: 'Pricing and Payments',
      paragraphs: [
        'Product and service pricing may vary according to features, configuration, users, duration, design, integrations, development requirements, hosting requirements and other project-specific factors.',
        'Any quotation or proposal provided by PathMakers will specify the applicable commercial terms, payment schedule and included scope where applicable.',
        'Payments must be made through the payment methods and within the timelines communicated by PathMakers.',
        'Taxes, payment processing charges, hosting charges, domain charges, third-party service charges and other external costs may apply separately where stated.',
      ],
    },
    {
      id: 'section-7',
      num: '7',
      title: 'Refunds, Cancellation and Subscription',
      paragraphs: [
        'Refund, cancellation, renewal and subscription terms will depend on the specific product, service or agreement applicable to the transaction.',
        'Where a product or service is non-refundable, partially refundable or subject to specific cancellation conditions, those conditions will be communicated before or at the time of purchase where applicable.',
        'PathMakers may suspend or restrict access where payments remain unpaid, fraudulent activity is suspected, or the applicable terms are materially violated.',
      ],
    },
    {
      id: 'section-8',
      num: '8',
      title: 'Hosting, Domains and Third-Party Services',
      paragraphs: [
        'Hosting, domain registration, payment gateways, email services, cloud storage, APIs, communication services and other third-party services may be required depending on the project.',
        'Such services may be subject to separate fees, technical limitations, availability requirements and terms imposed by their respective providers.',
        'PathMakers will not be responsible for failures, outages, policy changes, pricing changes or limitations caused by independent third-party providers.',
      ],
    },
    {
      id: 'section-9',
      num: '9',
      title: 'Client Responsibilities',
      paragraphs: [
        'Clients are responsible for providing accurate information, required content, credentials, approvals, business rules, documents and other materials necessary for the agreed work.',
        'Clients are responsible for ensuring that the content, data, documents and materials supplied to PathMakers do not violate applicable law or third-party rights.',
        'Delays caused by missing information, delayed approvals, unavailable access or changes requested by the client may affect the agreed delivery timeline.',
      ],
    },
    {
      id: 'section-10',
      num: '10',
      title: 'Intellectual Property',
      paragraphs: [
        'PathMakers retains ownership of its pre-existing software, reusable components, frameworks, libraries, development methods, templates, tools, know-how, architecture and other intellectual property unless otherwise agreed in writing.',
        'Client-owned content, trademarks, logos and materials supplied by the client remain the property of the client or their respective owners.',
        'Ownership or licensing of project-specific deliverables will be determined by the applicable written agreement and payment terms.',
      ],
    },
    {
      id: 'section-11',
      num: '11',
      title: 'Acceptable Use',
      paragraphs: [
        'You must not use PathMakers products, services or systems for unlawful activities, fraud, abuse, unauthorised access, infringement of third-party rights, malicious activities or any activity prohibited by applicable law.',
        'You must not attempt to interfere with the security, availability, functionality or operation of PathMakers systems or products.',
      ],
    },
    {
      id: 'section-12',
      num: '12',
      title: 'Support, Maintenance and Updates',
      paragraphs: [
        'Support, bug fixes, maintenance, training, clarification and software updates will be provided only to the extent included in the applicable product package, quotation or agreement.',
        'PathMakers may improve, modify, update or discontinue features where reasonably necessary for security, technical improvement, compatibility, business requirements or product evolution.',
        'Additional maintenance, customisation or support outside the agreed scope may be charged separately.',
      ],
    },
    {
      id: 'section-13',
      num: '13',
      title: 'Third-Party Integrations',
      paragraphs: [
        'Products and custom software may depend on third-party APIs, payment gateways, hosting platforms, cloud services, communication systems or other external technologies.',
        'PathMakers will make reasonable efforts to integrate such services as agreed, but cannot guarantee the continued availability, pricing, functionality or policies of independent third-party providers.',
      ],
    },
    {
      id: 'section-14',
      num: '14',
      title: 'Service Availability and Disclaimers',
      paragraphs: [
        'PathMakers will make reasonable efforts to provide reliable products and services, but uninterrupted availability cannot be guaranteed because software and online services may be affected by maintenance, technical failures, third-party dependencies, network problems, security incidents or circumstances beyond our reasonable control.',
        'Information provided through our website is intended for general informational purposes and should not be treated as a guarantee that a particular product or service will produce a specific business result.',
      ],
    },
    {
      id: 'section-15',
      num: '15',
      title: 'Limitation of Liability',
      paragraphs: [
        'To the maximum extent permitted by applicable law, PathMakers will not be liable for indirect, incidental, consequential, special or business losses arising from the use or inability to use our website, products or services.',
        'Any liability of PathMakers arising from a specific service or transaction will be subject to the applicable agreement, payment made for the relevant service and limitations permitted by applicable law.',
      ],
    },
    {
      id: 'section-16',
      num: '16',
      title: 'Confidentiality',
      paragraphs: [
        'Information shared by a client with PathMakers for the purpose of providing services will be handled with reasonable confidentiality and will not be intentionally disclosed to unauthorised parties except where necessary to provide the service, required by law, authorised by the client or permitted under the applicable agreement.',
        'Where a project requires specific confidentiality obligations, the parties may enter into a separate confidentiality or non-disclosure agreement.',
      ],
    },
    {
      id: 'section-17',
      num: '17',
      title: 'Suspension and Termination',
      paragraphs: [
        'PathMakers may suspend or terminate access to a product or service where there is non-payment, misuse, unlawful activity, material violation of these Terms or another legitimate reason permitted by the applicable agreement or law.',
        'Termination will not automatically remove obligations that by their nature are intended to continue after termination, including payment obligations, intellectual property rights, confidentiality and applicable limitations of liability.',
      ],
    },
    {
      id: 'section-18',
      num: '18',
      title: 'Force Majeure',
      paragraphs: [
        'PathMakers will not be responsible for delays or failures caused by circumstances beyond our reasonable control, including natural disasters, government actions, infrastructure failures, internet or network outages, major security incidents, third-party service failures, war, civil disturbance or other similar events.',
      ],
    },
    {
      id: 'section-19',
      num: '19',
      title: 'Changes to These Terms',
      paragraphs: [
        'PathMakers Technologies reserves the right to modify, update or replace these Terms & Conditions at any time to reflect changes in our services, products, business practices, technology or legal requirements.',
        'The updated version will be published on this page with a revised Last Updated date.',
        'Where a change materially affects existing clients or users and notification is reasonably required, we will notify the affected parties through email, account notifications, website notices or another reasonable communication method.',
        'Continued use of the website or applicable services after the updated Terms become effective constitutes acceptance of the updated Terms to the extent permitted by applicable law.',
      ],
    },
    {
      id: 'section-20',
      num: '20',
      title: 'Governing Law and Jurisdiction',
      paragraphs: [
        'These Terms & Conditions shall be governed by and interpreted in accordance with the applicable laws of India.',
        'Any dispute arising from these Terms or the services provided by PathMakers shall be subject to the jurisdiction of the courts having appropriate jurisdiction as specified by the final legal version of these Terms.',
      ],
    },
    {
      id: 'section-21',
      num: '21',
      title: 'Contact',
      paragraphs: [
        'If you have questions regarding these Terms & Conditions, a product, service, payment, licence, support matter or any other contractual issue, you may contact PathMakers Technologies through the official contact details provided on our website.',
      ],
    },
  ];

  return (
    <div className="legal-page">
      {/* Hero Banner */}
      <section className="legal-hero">
        <div className="legal-hero-bg"></div>
        <div className="legal-hero-inner">
          <div className="legal-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Terms & Conditions</span>
          </div>
          <div className="legal-badge">Legal Terms</div>
          <h1>
            Terms & <span className="gold">Conditions</span>
          </h1>
          <div className="legal-meta">
            <div className="legal-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <strong>PathMakers Technologies</strong>
            </div>
            <div className="legal-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Last Updated: October 4, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="legal-container">
        {/* Content Body */}
        <main className="legal-content">
          {sections.map((sec) => (
            <div key={sec.id} id={sec.id} className="legal-card">
              <div className="legal-card-header">
                <div className="legal-card-num">{sec.num}</div>
                <h2>{sec.title}</h2>
              </div>
              <div className="legal-card-body">
                {sec.paragraphs.map((p, idx) => (
                  <p key={idx} className="legal-p">
                    {p}
                  </p>
                ))}

                {sec.id === 'section-21' && (
                  <div className="legal-highlight-box">
                    <div className="legal-highlight-header">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      Contact PathMakers Legal Team
                    </div>
                    <div className="legal-contact-grid">
                      <div className="legal-contact-item">
                        <div className="legal-contact-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <div className="legal-contact-info">
                          <strong>Address</strong>
                          <p>P.Velur, Namakkal District, Tamil Nadu, India</p>
                        </div>
                      </div>
                      <div className="legal-contact-item">
                        <div className="legal-contact-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </div>
                        <div className="legal-contact-info">
                          <strong>Email Us</strong>
                          <p>noreply.pathmakers@gmail.com</p>
                        </div>
                      </div>
                      <div className="legal-contact-item">
                        <div className="legal-contact-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <div className="legal-contact-info">
                          <strong>Call Us</strong>
                          <p>+91 7200754566</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default TermsConditions;
