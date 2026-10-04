import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useSEO({
    title: 'Privacy Policy — PathMakers Technologies',
    description:
      'Read the Privacy Policy of PathMakers Technologies to understand how we collect, process, store and protect your personal information.',
    canonical: 'https://pathmakerstech.in/privacy',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Privacy Policy — PathMakers Technologies',
      url: 'https://pathmakerstech.in/privacy',
      description: 'Privacy Policy of PathMakers Technologies.',
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 'section-1',
      num: '1',
      title: 'Introduction',
      paragraphs: [
        'This Privacy Policy explains how PathMakers Technologies collects, uses, stores, protects and otherwise processes personal information when you visit our website, contact us, purchase or use our products, request our services, or otherwise interact with us.',
        'By using our website or providing information to us, you acknowledge that you have read and understood this Privacy Policy and the ways in which your information may be processed as described here.',
      ],
    },
    {
      id: 'section-2',
      num: '2',
      title: 'Information We May Collect',
      paragraphs: [
        'We may collect information such as your name, email address, phone number, company or organisation details, billing information, communication details, account information and other information that you voluntarily provide to us.',
        'When you use our products or services, we may process information necessary to provide, configure, maintain, secure and support those products or services.',
        'We may also collect technical information such as IP address, browser type, device information, operating system, pages visited, access times and general usage information.',
        'We may receive information through forms, emails, calls, meetings, product usage, support requests, payment providers and other interactions with PathMakers.',
      ],
    },
    {
      id: 'section-3',
      num: '3',
      title: 'How We Use Your Information',
      paragraphs: [
        'We may use your information to respond to enquiries, provide quotations, deliver products and services, process transactions, configure accounts, provide support, communicate with you and maintain our business relationship.',
        'We may use information to understand how our website and products are used, improve our services, prevent misuse, maintain security, troubleshoot issues and develop better products.',
        'We may use your contact information to send service-related communications and, where permitted and appropriately consented to, relevant business or promotional communications.',
      ],
    },
    {
      id: 'section-4',
      num: '4',
      title: 'How We Process and Share Information',
      paragraphs: [
        'We may share information with employees, authorised team members, contractors, service providers, hosting providers, payment processors, communication providers and other third parties where reasonably necessary to operate our business and provide the requested services.',
        'We do not sell or commercially trade your personal information as a product.',
        'We may disclose information where required by applicable law, legal process, government authority, court order, or where reasonably necessary to protect our rights, users, systems or property.',
      ],
    },
    {
      id: 'section-5',
      num: '5',
      title: 'Consent and Your Choices',
      paragraphs: [
        'Where consent is required for processing, we will seek consent in an appropriate manner and for specified purposes.',
        'Where applicable, you may withdraw consent for processing based on consent, subject to legal, contractual and operational requirements.',
        'Withdrawal of consent may affect our ability to provide certain products, services or features where that information is necessary for their operation.',
      ],
    },
    {
      id: 'section-6',
      num: '6',
      title: 'Cookies and Similar Technologies',
      paragraphs: [
        'Our website may use cookies and similar technologies to maintain functionality, understand website usage, improve performance, remember preferences and support relevant features.',
        'Third-party services integrated into our website may also use their own cookies or similar technologies according to their respective policies.',
        'You may control certain cookies through your browser or available website settings, although disabling some cookies may affect website functionality.',
      ],
    },
    {
      id: 'section-7',
      num: '7',
      title: 'Payments and Third-Party Services',
      paragraphs: [
        'Payments may be processed through third-party payment providers, and PathMakers may receive limited transaction-related information necessary to confirm and manage the transaction.',
        'We do not intend to store complete payment card details unless specifically required and lawfully handled through an appropriate payment system.',
        'Third-party services used by us may process information according to their own privacy policies and terms.',
      ],
    },
    {
      id: 'section-8',
      num: '8',
      title: 'Data Security',
      paragraphs: [
        'We take reasonable technical, organisational and administrative measures to protect personal information against unauthorised access, misuse, alteration, disclosure, loss or destruction.',
        'No method of transmission, storage or electronic processing can be guaranteed to be completely secure, and therefore we cannot guarantee absolute security of information.',
      ],
    },
    {
      id: 'section-9',
      num: '9',
      title: 'Data Retention',
      paragraphs: [
        'We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, to provide services, maintain business and financial records, resolve disputes, enforce agreements, comply with legal obligations and protect our legitimate interests.',
        'When information is no longer required, it may be deleted, anonymised or otherwise handled in accordance with applicable legal and operational requirements.',
      ],
    },
    {
      id: 'section-10',
      num: '10',
      title: 'Your Privacy Rights',
      paragraphs: [
        'Subject to applicable law, you may have rights relating to access to your personal information, correction of inaccurate information, withdrawal of consent where applicable, grievance redressal and other rights available under applicable data protection law.',
        'Requests relating to your personal information may be submitted through the contact details provided in this Privacy Policy, and we may require reasonable information to verify the identity of the requester.',
      ],
    },
    {
      id: 'section-11',
      num: '11',
      title: "Children's Privacy",
      paragraphs: [
        'Our website and general services are not intentionally designed to collect personal information directly from children without appropriate legal basis, consent or involvement of a parent or lawful guardian where required.',
        'If we become aware that personal information has been collected in circumstances where it should not have been, we will take appropriate steps in accordance with applicable law.',
      ],
    },
    {
      id: 'section-12',
      num: '12',
      title: 'External Websites and Services',
      paragraphs: [
        'Our website may contain links or integrations to third-party websites, applications, payment services, social platforms or other external services.',
        'PathMakers is not responsible for the privacy practices, security or content of third-party services, and users should review the applicable policies of those services before providing information to them.',
      ],
    },
    {
      id: 'section-13',
      num: '13',
      title: 'Business Transfers',
      paragraphs: [
        'If PathMakers undergoes a merger, restructuring, acquisition, sale of assets or similar business transaction, personal information may be transferred as part of that transaction subject to applicable law and appropriate protections.',
      ],
    },
    {
      id: 'section-14',
      num: '14',
      title: 'Changes to This Privacy Policy',
      paragraphs: [
        'PathMakers Technologies reserves the right to modify, update or replace this Privacy Policy at any time to reflect changes in our services, technology, business practices, legal requirements or applicable regulations.',
        'The updated version will be published on this page with a revised Last Updated date.',
        'Where a change is material and notification is required or reasonably appropriate, we will notify affected clients or users through email, account notifications, website notices or another reasonable communication method.',
        'Your continued use of our website or applicable services after an updated Privacy Policy becomes effective will be subject to the updated policy, to the extent permitted by applicable law.',
      ],
    },
    {
      id: 'section-15',
      num: '15',
      title: 'Contact and Privacy Enquiries',
      paragraphs: [
        'If you have questions, requests, complaints or concerns regarding this Privacy Policy or the processing of your personal information, you may contact PathMakers Technologies through the official contact details provided on our website.',
        'We will review and respond to privacy-related requests in accordance with applicable law and our reasonable verification and grievance-handling procedures.',
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
            <span>Privacy Policy</span>
          </div>
          <div className="legal-badge">Legal & Compliance</div>
          <h1>
            Privacy <span className="gold">Policy</span>
          </h1>
          <div className="legal-meta">
            <div className="legal-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
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

                {sec.id === 'section-15' && (
                  <div className="legal-highlight-box">
                    <div className="legal-highlight-header">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      Contact PathMakers Privacy Team
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

export default PrivacyPolicy;
