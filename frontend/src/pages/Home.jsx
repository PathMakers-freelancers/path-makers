import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import homeHeroImg from '../assets/homehero.png';
import beforeBuildImg from '../assets/beforebuild.png';
import bannerBgImg from '../assets/bannerbg.jpg';
import solutionsBgImg from '../assets/solutionsbg.jpg';
import productsBgImg from '../assets/productsbg.png';
import desktopImg from '../assets/desktop.png';
import mobileImg from '../assets/mobile.png';
import businessImg from '../assets/business.png';
import customImg from '../assets/custom.png';
import featherLmsImg from '../assets/featherlms.png';
import insuranceCrmImg from '../assets/Insurancecrm.png';
import schoolErpImg from '../assets/schoolerp.png';
import transparencyBgImg from '../assets/transparencybg.png';
import transparencyBoxImg from '../assets/transparency_box.png';
import realStoriesBgImg from '../assets/realstoriesbg.png';
import processBgImg from '../assets/processbg.png';
import whyUsBgImg from '../assets/why_us_bg.jpg';
import ourTrustBgImg from '../assets/our_trust_bg.jpg';
import faqBgImg from '../assets/faq_bg.jpg';
import ctaBgImg from '../assets/cta_bg.jpg';
import CountUp from 'react-countup'; // Keeping import just in case, but using custom Counter instead



const Counter = ({ end, duration = 2.5, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

const techCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>,
    desc: 'Build beautiful, fast and responsive user experiences.',
    techs: [
      { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', features: ['Fast Virtual DOM', 'Component-based UI', 'Thriving Ecosystem'] },
      { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', features: ['Server-Side Rendering', 'SEO Optimized', 'Full-stack Ready'] },
      { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', features: ['Semantic Structure', 'Accessible Web', 'Native Multimedia'] },
      { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', features: ['Responsive Design', 'Smooth Animations', 'Modern Layouts'] },
      { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', features: ['Dynamic Interactions', 'Universal Language', 'Event-driven'] },
      { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', features: ['Utility-first CSS', 'Rapid Prototyping', 'Highly Customizable'] },
      { name: 'Bootstrap', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', features: ['Grid System', 'Pre-built Components', 'Mobile-first'] },
      { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', features: ['Collaborative Design', 'Vector Networks', 'Interactive Prototypes'] }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 20 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
    desc: 'Robust, scalable and secure server-side solutions.',
    techs: [
      { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', features: ['Non-blocking I/O', 'V8 Engine Speed', 'Highly Scalable'] },
      { name: 'Express', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', features: ['Minimalist Framework', 'Fast Routing', 'Middleware Support'] },
      { name: 'NestJS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg', features: ['Scalable Architecture', 'TypeScript Ready', 'Enterprise-grade'] },
      { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', features: ['Readable Syntax', 'Versatile Use', 'Huge Library Ecosystem'] },
      { name: 'FastAPI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', features: ['High Performance', 'Auto Documentation', 'Type Checking'] },
      { name: 'Django', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', features: ['Batteries Included', 'Secure by Default', 'Rapid Development'] }
    ]
  },
  {
    id: 'database',
    name: 'Database',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
    desc: 'Secure and optimized data storage.',
    techs: [
      { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', features: ['Document-oriented', 'Flexible Schema', 'Horizontal Scaling'] },
      { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', features: ['ACID Compliant', 'Advanced Queries', 'Highly Extensible'] },
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', features: ['Reliable & Fast', 'Widespread Use', 'Relational Integrity'] },
      { name: 'Redis', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', features: ['In-memory Speed', 'Pub/Sub Messaging', 'Advanced Caching'] },
      { name: 'SQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg', features: ['Structured Queries', 'Data Integrity', 'Powerful Analytics'] }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>,
    desc: 'Scalable cloud infrastructure for modern applications.',
    techs: [
      { name: 'AWS', iconUrl: 'https://avatars.githubusercontent.com/u/2232217?s=200&v=4', features: ['Global Reach', 'Massive Scalability', 'Broad Services'] },
      { name: 'GCP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', features: ['Data Analytics', 'Machine Learning', 'Open Source Friendly'] },
      { name: 'Azure', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg', features: ['Enterprise Integration', 'Hybrid Cloud', 'Top Security'] },
      { name: 'Vercel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', features: ['Edge Network', 'Zero Config', 'Seamless CI/CD'] },
      { name: 'Heroku', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg', features: ['Easy Deployment', 'Fully Managed', 'App Centric Workflow'] }
    ]
  },
  {
    id: 'payments',
    name: 'Payments',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>,
    desc: 'Secure and seamless payment gateways integrations.',
    techs: [
      { name: 'Razorpay', iconUrl: 'https://avatars.githubusercontent.com/u/7713209?s=200&v=4', features: ['Seamless Checkout', 'India-focused', 'Fast Settlements'] },
      { name: 'Stripe', iconUrl: 'https://avatars.githubusercontent.com/u/856813?s=200&v=4', features: ['Global Payments', 'Developer Friendly', 'High Conversion'] },
      { name: 'PayPal', iconUrl: 'https://avatars.githubusercontent.com/u/476675?s=200&v=4', features: ['Trusted Brand', 'Buyer Protection', 'Global Reach'] },
      { name: 'PhonePe', iconUrl: 'https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png', features: ['UPI Integration', 'Bill Payments', 'Widespread Adoption'] },
      { name: 'Cashfree', iconUrl: 'https://avatars.githubusercontent.com/u/23206411?s=200&v=4', features: ['Payouts & Collections', 'High Success Rate', 'API Driven'] }
    ]
  },
  {
    id: 'communication',
    name: 'Communication',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
    desc: 'Reliable communication and notification services.',
    techs: [
      { name: 'Twilio', iconUrl: 'https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg', features: ['Programmable SMS', 'Global Connectivity', 'Scalable API'] },
      { name: 'SendGrid', iconUrl: 'https://www.vectorlogo.zone/logos/sendgrid/sendgrid-icon.svg', features: ['Reliable Delivery', 'Email Analytics', 'Marketing Tools'] },
      { name: 'FCM', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', features: ['Push Notifications', 'Cross-platform', 'Battery Efficient'] },
      { name: 'AWS SES', iconUrl: 'https://avatars.githubusercontent.com/u/2232217?s=200&v=4', features: ['High Deliverability', 'Cost-effective', 'Scalable Emails'] },
      { name: 'Exotel', iconUrl: 'https://avatars.githubusercontent.com/u/1047190?s=200&v=4', features: ['Cloud Telephony', 'Call Routing', 'India-focused'] }
    ]
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
    desc: 'Modern DevOps tools for seamless deployments.',
    techs: [
      { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', features: ['Containerization', 'Consistent Environments', 'Easy Portability'] },
      { name: 'Kubernetes', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg', features: ['Container Orchestration', 'Auto-scaling', 'Self-healing'] },
      { name: 'Nginx', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', features: ['High Performance', 'Load Balancing', 'Reverse Proxy'] },
      { name: 'CI/CD', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', features: ['Automated Testing', 'Continuous Delivery', 'Faster Releases'] },
      { name: 'GitHub Actions', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg', features: ['Integrated Workflows', 'Matrix Builds', 'Community Actions'] },
      { name: 'AWS EC2', iconUrl: 'https://avatars.githubusercontent.com/u/2232217?s=200&v=4', features: ['Resizable Compute', 'Secure Instances', 'Flexible Networking'] }
    ]
  }
];

const guidanceFaqData = [
  { icon: '📋', question: "Do I actually need software?", answer: "Not always. Sometimes redefining a manual process is enough. We'll honestly tell you if software is overkill for your current stage." },
  { icon: '💼', question: "Buy existing or build custom?", answer: "If an off-the-shelf SaaS solves 90% of your problem, use it. If your unique workflow is your competitive advantage, build custom." },
  { icon: '⚙️', question: "What should I automate?", answer: "Automate repetitive, low-value tasks that take up your team's time. Don't automate edge cases or complex human judgments." },
  { icon: '✋', question: "What should remain manual?", answer: "Anything requiring deep empathy, complex negotiations, or rare exceptions is usually better left in human hands." },
  { icon: '📄', question: "What information should I prepare?", answer: "Just a clear understanding of your business problem. We don't need technical specs—we need to know what you're trying to solve." },
  { icon: '❓', question: "What questions should I ask a software company?", answer: "Ask about their process, who owns the code, how they handle changes in scope, and what happens after launch." }
];

const faqData = [
  { question: "How much does a project cost?", answer: "Project costs vary depending on the scope, features, and complexity. We offer competitive pricing and provide transparent, detailed quotes after our initial technical consultation." },
  { question: "What is the typical timeline?", answer: "A standard web or mobile application takes between 4 to 12 weeks. We establish clear milestones during the planning phase to ensure timely and predictable delivery." },
  { question: "Do you provide hosting and domain?", answer: "Yes, we handle the entire deployment pipeline, including domain registration, SSL certificates, and scalable cloud hosting on AWS, GCP, or Vercel." },
  { question: "What about maintenance and support?", answer: "We provide comprehensive post-launch support and maintenance packages. This includes bug fixes, security patches, server monitoring, and feature upgrades." },
  { question: "Can I get a product subscription or lifetime access?", answer: "Depending on the software, we offer both flexible monthly/yearly SaaS subscriptions as well as one-time lifetime enterprise licensing." },
  { question: "Will I own the source code?", answer: "PathMakers products are proprietary software. Purchasing a subscription or lifetime access provides the agreed usage rights for the selected product and configuration. The underlying source code, architecture and developer rights remain with PathMakers Technologies." },
  { question: "How do you handle my data and security?", answer: "Security is our top priority. We implement industry-standard encryption, secure JWT authentication, and strictly adhere to data privacy laws." }
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeTech, setActiveTech] = useState('frontend');
  const [activeLanguage, setActiveLanguage] = useState('React');
  const [isProblemVisible, setIsProblemVisible] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [openGuidanceFaqIndex, setOpenGuidanceFaqIndex] = useState(null);
  const problemSectionRef = useRef(null);
  const caseSliderRef = useRef(null);

  const scrollCasePrev = () => {
    if (caseSliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = caseSliderRef.current;
      const scrollAmount = clientWidth;
      
      // If at start, scroll to end, else scroll previous
      if (scrollLeft <= 10) {
        caseSliderRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        caseSliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const scrollCaseNext = () => {
    if (caseSliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = caseSliderRef.current;
      const scrollAmount = clientWidth;
      
      // If we are at the end, scroll back to the start, else scroll to the next card
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        caseSliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        caseSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsProblemVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (problemSectionRef.current) {
      observer.observe(problemSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollSnapType = 'y mandatory';
    return () => {
      document.documentElement.style.scrollSnapType = '';
    };
  }, []);

  return (
    <main>
        {/* HERO SECTION */}
        <div className="hero-snap-wrapper">
          <section className="hero-section" id="home">
            <div className="hero-bg-image" style={{ backgroundImage: `url(${homeHeroImg})` }}></div>
            <div className="hero-bg-gradient"></div>
            <div className="container hero-container">
              <div className="hero-content">
                <div className="breadcrumb">
                  IDEAS / TECHNOLOGY / <span className="gold-text">REAL SOLUTIONS</span>
                </div>
                <h1 className="hero-title">
                  PATHMAKERS<br />
                  <span className="gold-text">TECHNOLOGIES</span><br />
                  <span className="light-text">FREELANCERS</span>
                </h1>
                <p className="hero-subtitle">
                  We don't just build <strong>software</strong>. We find the right path for your business — with technology, strategy and a deep understanding of what really matters.
                </p>
                <div className="hero-actions">
                  <a href="#build" className="btn-primary">Let's Build &rarr;</a>
                  <a href="#solutions" className="btn-outline">
                    Explore Solutions <span className="play-icon">▶</span>
                  </a>
                </div>
                <div className="hero-tags">
                  <span className="icon-tag">🌐</span> Your Vision &nbsp;+&nbsp; Our Technology &nbsp;=&nbsp; Real Growth
                </div>
              </div>
              <div className="hero-graphics">
                {/* This would be the complex interactive graphic, we will style a placeholder or use an image */}
                <div className="hero-graphic-placeholder">
                  <div className="glass-panel main-panel">
                     <div className="panel-item">🌐 Web Applications</div>
                     <div className="panel-item">📱 Mobile Applications</div>
                     <div className="panel-item">⚙️ Automation</div>
                     <div className="panel-item">{"</>"} Custom Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* IS THIS YOUR BUSINESS? */}
        <section className={`problem-section ${isProblemVisible ? 'is-visible' : ''}`} id="problem" ref={problemSectionRef}>
          <div className="container problem-container">
            <div className="problem-content">
              <div className="section-label">REAL BUSINESSES. REAL CHALLENGES.</div>
              <h2 className="section-title">
                IS THIS YOUR<br />
                <span className="gold">BUSINESS?</span>
              </h2>
              <p className="problem-desc">
                Every business has <strong>unique challenges</strong>. But the struggle often feels the same — too much manual work, scattered data, systems that don't fit, and technology that creates more problems than it solves.
                <br/><br/>
                Sound familiar? You're not alone.
              </p>
              <a href="#help" className="btn-dark">See How We Help &rarr;</a>
            </div>
            <div className="problem-cards">
              <div className="problem-card">
                <div className="card-icon gold">👤</div>
                <h3>Too much<br/>manual work</h3>
                <p>Your team spends more time on routine tasks than on what really matters.</p>
              </div>
              <div className="problem-card">
                <div className="card-icon gold">🗄️</div>
                <h3>Data in multiple<br/>places</h3>
                <p>Information is scattered across files, devices and different tools.</p>
              </div>
              <div className="problem-card">
                <div className="card-icon gold">⚙️</div>
                <h3>Existing software<br/>doesn't fit</h3>
                <p>You're forced to adapt your processes to match the software, not the other way.</p>
              </div>
              <div className="problem-card">
                <div className="card-icon gold">🔄</div>
                <h3>Repetitive tasks</h3>
                <p>Same work, again and again, burning time and energy.</p>
              </div>
              <div className="problem-card">
                <div className="card-icon gold">📈</div>
                <h3>Difficult reporting</h3>
                <p>Getting the right information takes too long.</p>
              </div>
              <div className="problem-card">
                <div className="card-icon gold">🔗</div>
                <h3>Systems don't<br/>communicate</h3>
                <p>Your tools work in isolation, not together.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GUIDANCE SECTION */}
        <section className="guidance-section" id="guidance">
          <div className="guidance-bg-image" style={{ backgroundImage: `url(${beforeBuildImg})` }}></div>
          <div className="guidance-bg-gradient"></div>
          <div className="container guidance-container">
            <div className="guidance-empty"></div>
            
            <div className="guidance-content">
              <div className="section-label">GUIDANCE FOR SMARTER DECISIONS</div>
              <h2 className="section-title">
                BEFORE WE BUILD,<br />
                <span className="gold">LET'S UNDERSTAND.</span>
              </h2>
              <p className="guidance-desc">
                We help you think clearly — not just build quickly. Get free guidance to make the right decisions for your business, your team and your future.
              </p>
              <a href="#guide" className="btn-primary" style={{marginTop: '20px'}}>Get Free Guidance &rarr;</a>
            </div>

            <div className="guidance-faq">
              <div className="faq-list">
                <div className="faq-header">Common Questions We Help You Answer</div>
                {guidanceFaqData.map((item, index) => {
                  const isOpen = openGuidanceFaqIndex === index;
                  return (
                    <div 
                      key={index} 
                      className={`faq-item ${isOpen ? 'active' : ''}`}
                      onClick={() => setOpenGuidanceFaqIndex(isOpen ? null : index)}
                    >
                      <div className="faq-item-top">
                        <div className="faq-icon-wrapper"><span className="faq-icon">{item.icon}</span></div>
                        <div className="faq-question">{item.question}</div>
                        <div className="faq-arrow">▼</div>
                      </div>
                      <div className="faq-item-answer-wrap">
                        <div className="faq-item-answer">{item.answer}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <div className="normal-scroll-wrapper">
          {/* BANNER SECTION */}
          <section className="banner-section" style={{ backgroundImage: `url(${bannerBgImg})` }}>
          <div className="banner-overlay"></div>
          <div className="container banner-container">
            <div className="banner-content">
              <div className="section-label" style={{color: 'rgba(255,255,255,0.6)'}}>BUILT FOR REAL BUSINESSES</div>
              <h2 className="banner-title">
                Technology isn't the goal.<br/>
                <span className="gold">It's the path.</span>
              </h2>
            </div>
            <div className="banner-right">
               <div className="banner-code">
                 {`Custom Solutions\n    for a Smarter Tomorrow`}
               </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS SECTION */}
        <section className="solutions-section" id="solutions" style={{ backgroundImage: `url(${solutionsBgImg})` }}>
          <div className="container solutions-container">
            <div className="solutions-header">
               <div className="solutions-header-left">
                 <div className="section-label">OUR SOLUTIONS</div>
                 <h2 className="section-title">
                   THERE ISN'T ONE<br/>
                   <span className="gold">RIGHT SOFTWARE.</span>
                 </h2>
                 <p className="solutions-desc">
                   Every business is different. That's why we offer multiple ways to solve your problems — whether it's through a web app, mobile app, automation or a fully custom solution.
                 </p>
                 <a href="#all-solutions" className="link-arrow">
                   <span className="link-icon">🎯</span> Explore All Solutions &rarr;
                 </a>
               </div>
            </div>
            <div className="solutions-grid">
               <div className="solution-card">
                 <div className="solution-content">
                   <div className="solution-card-header">
                     <div className="solution-icon-wrapper"><span className="solution-icon">🌐</span></div>
                     <h3>Web Applications</h3>
                   </div>
                   <p>Power your business online with secure, scalable and high-performance web applications.</p>
                   <a href="#learn" className="link-arrow-small">Learn More &rarr;</a>
                 </div>
                 <div className="solution-graphic">
                    <img src={desktopImg} alt="Web Applications" />
                 </div>
               </div>
               
               <div className="solution-card">
                 <div className="solution-content">
                   <div className="solution-card-header">
                     <div className="solution-icon-wrapper"><span className="solution-icon">📱</span></div>
                     <h3>Mobile Applications</h3>
                   </div>
                   <p>Connect with your users anywhere, anytime with intuitive mobile apps.</p>
                   <a href="#learn" className="link-arrow-small">Learn More &rarr;</a>
                 </div>
                 <div className="solution-graphic">
                    <img src={mobileImg} alt="Mobile Applications" />
                 </div>
               </div>

               <div className="solution-card">
                 <div className="solution-content">
                   <div className="solution-card-header">
                     <div className="solution-icon-wrapper"><span className="solution-icon">⚙️</span></div>
                     <h3>Business Automation</h3>
                   </div>
                   <p>Reduce manual work, eliminate repetitive tasks and improve productivity with smart automation.</p>
                   <a href="#learn" className="link-arrow-small">Learn More &rarr;</a>
                 </div>
                 <div className="solution-graphic">
                    <img src={businessImg} alt="Business Automation" />
                 </div>
               </div>

               <div className="solution-card">
                 <div className="solution-content">
                   <div className="solution-card-header">
                     <div className="solution-icon-wrapper"><span className="solution-icon">{'</>'}</span></div>
                     <h3>Custom Software</h3>
                   </div>
                   <p>Tailored solutions for your unique workflows, processes and goals.</p>
                   <a href="#learn" className="link-arrow-small">Learn More &rarr;</a>
                 </div>
                 <div className="solution-graphic">
                    <img src={customImg} alt="Custom Software" />
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section className="products-section" id="products" style={{ backgroundImage: `url(${productsBgImg})` }}>
          <div className="container products-container">
            
            {/* LEFT SIDE */}
            <div className="products-left">
              <div className="section-label">OUR PRODUCTS</div>
              <h2 className="section-title">
                OR MAYBE IT'S<br/>
                <span className="gold">ALREADY BUILT.</span>
              </h2>
              <p className="products-desc">
                Our ready-to-use products are built with <strong>real</strong> business needs in mind. Get started faster, with proven solutions that you can configure to fit your requirements.
              </p>
              <a href="#all-products" className="btn-primary products-explore-btn">Explore Products &rarr;</a>
            </div>
            
            {/* RIGHT SIDE */}
            <div className="products-right">
              <div className="products-filters">
                {['All', 'Education', 'Insurance', 'Business', 'Others'].map(filter => (
                  <button 
                    key={filter} 
                    className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              
              <div className="products-grid">
                
                {['All', 'Education'].includes(activeFilter) && (
                  <div className="product-card">
                    <div className="product-image">
                      <img src={featherLmsImg} alt="FeatherLMS" />
                    </div>
                    <div className="product-content">
                      <div className="product-title-row">
                        <span className="product-icon">🎓</span>
                        <h3>FeatherLMS</h3>
                      </div>
                      <p className="product-subtitle">Learning Management System (LMS)</p>
                      <p className="product-desc">Host courses, manage students, give certificates and more.</p>
                      <div className="product-tags">
                        <span className="tag">Live Classes</span>
                        <span className="tag">Payments</span>
                        <span className="tag">Certificates</span>
                      </div>
                      <a href="#product-1" className="link-arrow-small">View Details &rarr;</a>
                    </div>
                  </div>
                )}

                {['All', 'Insurance'].includes(activeFilter) && (
                  <div className="product-card">
                    <div className="product-image">
                      <img src={insuranceCrmImg} alt="Twinsure" />
                    </div>
                    <div className="product-content">
                      <div className="product-title-row">
                        <span className="product-icon">🛡️</span>
                        <h3>Insurance CRM</h3>
                      </div>
                      <p className="product-subtitle">Insurance Support Platform</p>
                      <p className="product-desc">Manage policies, clients and support requests with ease.</p>
                      <div className="product-tags">
                        <span className="tag">Client Portal</span>
                        <span className="tag">Claims</span>
                        <span className="tag">Reports</span>
                      </div>
                      <a href="#product-2" className="link-arrow-small">View Details &rarr;</a>
                    </div>
                  </div>
                )}

                {['All', 'Education'].includes(activeFilter) && (
                  <div className="product-card">
                    <div className="product-image">
                      <img src={schoolErpImg} alt="School ERP" />
                    </div>
                    <div className="product-content">
                      <div className="product-title-row">
                        <span className="product-icon">🏫</span>
                        <h3>Vidhai - School ERP</h3>
                      </div>
                      <p className="product-subtitle">Complete School Management</p>
                      <p className="product-desc">From admissions to results — all in one place.</p>
                      <div className="product-tags">
                        <span className="tag">Students</span>
                        <span className="tag">Staff</span>
                        <span className="tag">Reports</span>
                      </div>
                      <a href="#product-3" className="link-arrow-small">View Details &rarr;</a>
                    </div>
                  </div>
                )}

                {['Business', 'Others'].includes(activeFilter) && (
                  <div className="empty-products-msg">
                    <div className="empty-icon">💡</div>
                    <h3>Tell us your problem, we'll create a solution for you.</h3>
                    <p>We specialize in building custom, high-performance software tailored perfectly to your unique business requirements.</p>
                    <a href="#contact" className="btn-primary" style={{marginTop: '20px', padding: '10px 24px'}}>Let's Build It</a>
                  </div>
                )}

              </div>
            </div> {/* END RIGHT SIDE */}
          </div>
        </section>

        {/* TRANSPARENCY SECTION */}
        <section className="transparency-section" id="transparency" style={{ backgroundImage: `url(${transparencyBgImg})` }}>
          <div className="container transparency-container">
            
            {/* COLUMN 1: Text */}
            <div className="transparency-left">
              <div className="section-label">TRANSPARENCY</div>
              <h2 className="section-title">
                WE DON'T BUILD A<br/>
                <span className="gold" style={{ fontSize: '1.2em' }}>BLACK BOX.</span>
              </h2>
              <p className="transparency-desc">
                You deserve to know what you're paying for. We believe in complete transparency — from development to hosting, from third-party services to ongoing support.
              </p>
              <a href="#how-it-works" className="btn-outline-gold transparency-cta-btn">See How It Works &rarr;</a>
            </div>

            {/* COLUMN 2: Graphic and List */}
            <div className="transparency-middle">
              <div className="transparency-graphic">
                {/* User will replace this with their layered box image */}
                <img src={transparencyBoxImg} alt="Transparent Layers" />
              </div>
              <div className="transparency-list">
                
                <div className="t-list-item">
                  <div className="t-icon-box"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg></div>
                  <div className="t-text">
                    <h4>Development</h4>
                    <p>(Design + Coding + Testing)</p>
                  </div>
                </div>

                <div className="t-list-item">
                  <div className="t-icon-box"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
                  <div className="t-text">
                    <h4>Hosting</h4>
                    <p>(Servers + Infrastructure)</p>
                  </div>
                </div>

                <div className="t-list-item">
                  <div className="t-icon-box"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
                  <div className="t-text">
                    <h4>Domain</h4>
                    <p>(Registration + Renewal)</p>
                  </div>
                </div>

                <div className="t-list-item">
                  <div className="t-icon-box"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                  <div className="t-text">
                    <h4>Third-Party Services</h4>
                    <p>(Payments, SMS, etc.)</p>
                  </div>
                </div>

                <div className="t-list-item">
                  <div className="t-icon-box"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                  <div className="t-text">
                    <h4>Maintenance & Support</h4>
                    <p>(Bug fixes + Updates)</p>
                  </div>
                </div>

                <div className="t-list-item">
                  <div className="t-icon-box"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
                  <div className="t-text">
                    <h4>Data & Backups</h4>
                    <p>(Security + Recovery)</p>
                  </div>
                </div>

              </div>
            </div>

            {/* COLUMN 3: Security Card */}
            <div className="transparency-right">
              <div className="security-card">
                <div className="security-card-header">
                  <div className="security-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8964E" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
                  </div>
                  <h3>Your Data. Our Priority.</h3>
                </div>
                
                <ul className="security-checklist">
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b638b" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Secure cloud hosting</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b638b" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Regular backups</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b638b" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Controlled access</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b638b" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Data export on request</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b638b" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> You own your data</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b638b" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> No hidden costs</li>
                </ul>

                <div className="handwriting-text">
                  Transparency builds<br/>
                  long-term trust.
                  <svg className="handwriting-underline" viewBox="0 0 200 20" preserveAspectRatio="none"><path d="M5,15 Q100,5 195,12" stroke="#dfa957" strokeWidth="3" fill="none" strokeLinecap="round"/></svg>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CASE STUDIES SECTION */}
        <section className="case-studies-section" id="case-studies" style={{ backgroundImage: `url(${realStoriesBgImg})` }}>
          <div className="container case-studies-container">
            <div className="case-studies-left">
              <div className="section-label" style={{color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '12px'}}>
                REAL STORIES <div style={{height: '1px', width: '40px', background: 'rgba(255,255,255,0.4)'}}></div>
              </div>
              <h2 className="section-title" style={{color: 'white', marginBottom: '24px'}}>
                WHAT DOES THE<br/>
                RIGHT SOLUTION<br/>
                <span className="gold">LOOK LIKE?</span>
              </h2>
              <p className="case-studies-desc">
                Real businesses. Real challenges. Real solutions.<br/>
                Explore how we've helped different organizations<br/>
                solve their problems with the right technology.
              </p>
              <a href="#all-cases" className="btn-primary" style={{marginTop: '30px', background: 'var(--accent-gold)', borderColor: 'var(--accent-gold)'}}>View All Case Studies &rarr;</a>
            </div>
            
            <div className="case-studies-slider-wrapper" style={{position: 'relative', flex: 1, minWidth: 0}}>
              <div className="case-studies-slider" ref={caseSliderRef}>
                {/* Case Study 1 */}
                <div className="case-card">
                  <img src={insuranceCrmImg} alt="Insurance Agency" className="case-image" />
                  <div className="case-content">
                    <div className="case-category">Insurance</div>
                    <h3>Streamlining Operations for an Insurance Agency</h3>
                    <p>Organized client data, faster support and better visibility across the team.</p>
                    <div className="product-tags">
                      <span className="tag">React</span>
                      <span className="tag">Node.js</span>
                      <span className="tag">MongoDB</span>
                    </div>
                    <div className="case-result">Improved efficiency by 60%</div>
                  </div>
                </div>

                {/* Case Study 2 */}
                <div className="case-card">
                  <img src={schoolErpImg} alt="School ERP" className="case-image" />
                  <div className="case-content">
                    <div className="case-category">Education</div>
                    <h3>Complete School ERP for a Matric School</h3>
                    <p>Automated admissions, attendance, fees and exam management.</p>
                    <div className="product-tags">
                      <span className="tag">React</span>
                      <span className="tag">Node.js</span>
                      <span className="tag">MongoDB</span>
                    </div>
                    <div className="case-result">Handled 500+ students</div>
                  </div>
                </div>
              </div>
              
              <button className="slider-nav-left" onClick={scrollCasePrev}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button className="slider-nav-right" onClick={scrollCaseNext}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
        </section>


        {/* PROCESS SECTION */}
        <section className="process-section" id="how-we-work" style={{ backgroundImage: `url(${processBgImg})` }}>
          <div className="container process-container">
            <div className="process-header">
              <div className="section-label" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                OUR PROCESS <div style={{height: '1px', width: '40px', background: 'var(--accent-gold)'}}></div>
              </div>
              <h2 className="section-title" style={{color: 'var(--text-primary)', marginBottom: '24px'}}>
                BUILT AROUND<br/>
                <span className="gold">YOUR BUSINESS.</span>
              </h2>
              <p className="process-desc">
                We follow a clear and collaborative process,<br/>
                so you always know what's happening, what's next,<br/>
                and how your ideas are turning into real solutions.
              </p>
              <a href="#how-we-work" className="btn-primary" style={{marginTop: '30px', background: 'var(--accent-gold)', borderColor: 'var(--accent-gold)'}}>See How We Work &rarr;</a>
            </div>
            
            <div className="process-content-box">
              <div className="process-steps">
                <div className="process-track"></div>
                
                <div className="step-item">
                  <div className="step-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </div>
                  <div className="step-num">01</div>
                  <h4>Understand</h4>
                  <p>We learn about your business, goals and challenges.</p>
                </div>
                <div className="step-item">
                  <div className="step-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div className="step-num">02</div>
                  <h4>Plan</h4>
                  <p>We define the scope, features and roadmap.</p>
                </div>
                <div className="step-item">
                  <div className="step-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  </div>
                  <div className="step-num">03</div>
                  <h4>Design</h4>
                  <p>We create wireframes and user experiences that work.</p>
                </div>
                <div className="step-item">
                  <div className="step-icon" style={{fontWeight: 'bold', fontSize: '14px', fontFamily: 'monospace'}}>{'</>'}</div>
                  <div className="step-num">04</div>
                  <h4>Build</h4>
                  <p>We develop with clean, scalable and maintainable code.</p>
                </div>
                <div className="step-item">
                  <div className="step-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                  </div>
                  <div className="step-num">05</div>
                  <h4>Test</h4>
                  <p>We ensure quality, security and performance.</p>
                </div>
                <div className="step-item">
                  <div className="step-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 3.81-2.24c-1.05-1.04-1.99-2.09-2.82-3.14l-1.39-1.38c-1.63 2.18-1.5 5.56.5 7.55a5.53 5.53 0 0 0 7.55.5l-1.39-1.38c-1.05-.83-2.1-1.77-3.14-2.82A22 22 0 0 1 12 15z"></path><path d="m16 8 3-3a22 22 0 0 0-3.81 2.24c1.05 1.04 1.99 2.09 2.82 3.14l1.39 1.38c1.63-2.18 1.5-5.56-.5-7.55a5.53 5.53 0 0 0-7.55-.5l1.39 1.38c1.05.83 2.1 1.77 3.14 2.82A22 22 0 0 0 16 8z"></path></svg>
                  </div>
                  <div className="step-num">06</div>
                  <h4>Launch</h4>
                  <p>We deploy and get your solution live.</p>
                </div>
                <div className="step-item">
                  <div className="step-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                  </div>
                  <div className="step-num">07</div>
                  <h4>Support</h4>
                  <p>We stay with you for updates, fixes and improvements.</p>
                </div>
                <div className="step-item">
                  <div className="step-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                  </div>
                  <div className="step-num">08</div>
                  <h4>Grow</h4>
                  <p>We help you scale as your business grows.</p>
                </div>
              </div>
              
              <div className="process-roles-container">
                <div className="role-card your-role">
                  <div className="role-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <div>
                    <h4>Your Role</h4>
                    <p>Share your ideas, feedback and decisions.</p>
                  </div>
                </div>
                <div className="role-divider"></div>
                <div className="role-card our-role">
                  <div className="role-icon" style={{fontWeight: '900', fontStyle: 'italic', color: '#1e293b'}}>P</div>
                  <div>
                    <h4>Our Responsibility</h4>
                    <p>Planning, development, testing, deployment and ongoing support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section className="tech-section" id="tech-stack">
          <div className="container tech-container">
            <div className="tech-left">
              <div className="section-label" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                OUR TECHNOLOGY <div style={{height: '1px', width: '40px', background: 'var(--accent-gold)'}}></div>
              </div>
              <h2 className="section-title">
                THE TECHNOLOGY<br/>
                SHOULD SERVE THE<br/>
                <span className="gold">SOLUTION.</span>
              </h2>
              <p className="tech-desc">
                We choose the right tools for your project — not the<br/>
                latest trend. Our tech stack is flexible, scalable and<br/>
                built for performance, security and long-term growth.
              </p>
              <a href="#tech" className="btn-primary" style={{marginTop: '30px', background: 'var(--accent-gold)', borderColor: 'var(--accent-gold)'}}>Explore Our Stack &rarr;</a>
            </div>
            
            <div className="tech-right">
              <div className="tech-tabs">
                {techCategories.map((category) => (
                  <div 
                    key={category.id} 
                    className={`tech-tab ${activeTech === category.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTech(category.id);
                      setActiveLanguage(category.techs[0].name);
                    }}
                  >
                    <span className="tab-icon">{category.icon}</span> {category.name} 
                    {activeTech === category.id && <span className="arrow">&rarr;</span>}
                  </div>
                ))}
              </div>
              
              <div className="tech-content-area">
                {(() => {
                  const currentCategory = techCategories.find(c => c.id === activeTech);
                  const activeTechObj = currentCategory.techs.find(t => t.name === activeLanguage) || currentCategory.techs[0];
                  
                  return (
                    <>
                      <div className="tech-content-header">
                        <h3>{currentCategory.name}</h3>
                        <p>{currentCategory.desc}</p>
                      </div>
                      
                      <div className="tech-icons-grid">
                        {currentCategory.techs.map((tech, idx) => (
                          <div 
                            key={idx} 
                            className={`tech-icon-item ${activeLanguage === tech.name ? 'active-lang' : ''}`}
                            onClick={() => setActiveLanguage(tech.name)}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="t-icon" style={{
                              borderColor: activeLanguage === tech.name ? 'var(--accent-gold)' : '#f1f5f9',
                              backgroundColor: activeLanguage === tech.name ? '#fdf5ea' : 'white',
                              transform: activeLanguage === tech.name ? 'scale(1.05)' : 'scale(1)',
                              transition: 'all 0.2s'
                            }}>
                              <img src={tech.iconUrl} alt={tech.name} style={{width: '32px', height: '32px', objectFit: 'contain'}} />
                            </div>
                            <span style={{ 
                              color: activeLanguage === tech.name ? 'var(--accent-gold)' : '#1e293b',
                              transition: 'color 0.2s'
                            }}>{tech.name}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="tech-features">
                        {activeTechObj.features.map((feature, i) => (
                          <span key={i}>✓ {feature}</span>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </section>

        {/* WHY US SECTION */}
        <section className="why-us-section" id="why-us" style={{ backgroundImage: `url(${whyUsBgImg})` }}>
          <div className="container why-us-container">
            <div className="why-us-left">
              <div className="section-label" style={{display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.8)'}}>
                WHY PATHMAKERS <div style={{height: '1px', width: '40px', background: 'var(--accent-gold)'}}></div>
              </div>
              <h2 className="section-title" style={{color: 'white', marginBottom: '24px'}}>
                MORE THAN JUST<br/>
                DEVELOPERS.
              </h2>
              <p className="why-us-desc" style={{color: 'rgba(255,255,255,0.9)'}}>
                We're your <strong>technology</strong> partner — focused on<br/>
                understanding, building and growing with you.
              </p>
              <a href="#contact" className="btn-primary" style={{marginTop: '30px', color: 'white'}}>Why Choose Us &rarr;</a>
            </div>
            
            <div className="why-us-right">
              <div className="why-us-glass-container">
                <div className="why-us-grid">
                  <div className="why-card">
                    <div className="why-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5"><path d="M12 2a5 5 0 0 0-5 5c0 2 1 3 2 4v2c0 1 1 2 2 2h2c1 0 2-1 2-2v-2c1-1 2-2 2-4a5 5 0 0 0-5-5z"></path></svg>
                    </div>
                    <h4>Understand First</h4>
                    <p>We solve the right problem, not just build software.</p>
                  </div>
                  
                  <div className="why-card">
                    <div className="why-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line></svg>
                    </div>
                    <h4>Right-Sized Solutions</h4>
                    <p>No overbuilding. No underbuilding.</p>
                  </div>
                  
                  <div className="why-card">
                    <div className="why-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                    </div>
                    <h4>Transparent Costs</h4>
                    <p>No hidden charges. No surprises.</p>
                  </div>
                  
                  <div className="why-card">
                    <div className="why-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>
                    <h4>Product + Custom</h4>
                    <p>Ready products and fully custom solutions.</p>
                  </div>
                  
                  <div className="why-card">
                    <div className="why-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 10h.01"></path><path d="M12 10h.01"></path><path d="M16 10h.01"></path></svg>
                    </div>
                    <h4>Long-Term Support</h4>
                    <p>We're here beyond the launch.</p>
                  </div>
                  
                  <div className="why-card">
                    <div className="why-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                    <h4>Data-Conscious</h4>
                    <p>Your data is important. We handle it responsibly.</p>
                  </div>
                  
                  <div className="why-card">
                    <div className="why-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </div>
                    <h4>Growth Partnership</h4>
                    <p>Your success is our success.</p>
                  </div>
                  
                  <div className="why-quote">
                    <p>The right technology,<br/>built for your tomorrow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* TRUST SECTION */}
        <section className="trust-section" id="trust" style={{ backgroundImage: `url(${ourTrustBgImg})` }}>
          <div className="container trust-container">
            <div className="trust-left">
              <div className="section-label" style={{display: 'flex', alignItems: 'center', gap: '12px', color: '#64748b', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem'}}>
                OUR TRUST <div style={{height: '1px', width: '40px', background: 'var(--accent-gold)'}}></div>
              </div>
              <h2 className="section-title" style={{color: '#0f172a', marginBottom: '16px', fontFamily: "'Georgia', 'Playfair Display', serif"}}>
                REAL PEOPLE.<br/>
                <span style={{color: 'var(--accent-gold)'}}>REAL RESULTS.</span>
              </h2>
              <p className="trust-desc" style={{color: '#475569', marginBottom: '30px', fontSize: '0.95rem', lineHeight: '1.6'}}>
                We're proud to work with forward-thinking businesses
                across different industries. Here's what they say about us.
              </p>
              <a href="#clients" className="btn-primary" style={{ background: 'linear-gradient(90deg, #c4923e 0%, #996b20 100%)', borderColor: 'rgba(255, 255, 255, 0.2)', color: 'white', padding: '12px 28px', borderRadius: '30px', fontWeight: '500', display: 'inline-block' }}>View All Clients &rarr;</a>
            </div>
            
            <div className="trust-middle">
              <div className="stats-row">
                <div className="stat-item highlighted-stat">
                  <h3><Counter end={3} duration={2.5} suffix="+" /></h3>
                  <p>Projects Delivered</p>
                </div>
                <div className="stat-item">
                  <h3><Counter end={98} duration={2.5} suffix="%" /></h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className="stat-item">
                  <h3><Counter end={1} duration={2} suffix="+" /></h3>
                  <p>Years of Experience</p>
                </div>
              </div>
              
              <div className="client-types">
                <div className="c-type">
                  <div className="c-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div>
                  <span>SCHOOL ERP</span>
                </div>
                <div className="c-type">
                  <div className="c-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                  <span>INSURANCE</span>
                </div>
                <div className="c-type">
                  <div className="c-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg></div>
                  <span>BUSINESS</span>
                </div>
                <div className="c-type">
                  <div className="c-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path><path d="M12 8v8"></path><path d="M8 12h8"></path></svg></div>
                  <span>HEALTHCARE</span>
                </div>
                <div className="c-type">
                  <div className="c-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></div>
                  <span>AND MORE...</span>
                </div>
              </div>
            </div>
            
            <div className="trust-right">
              <div className="testimonial-card">
                <div className="quote-mark">“</div>
                <p className="testimonial-text">
                  "PathMakers understood our requirements better than we expected. The team was professional, responsive and delivered the solution on time."
                </p>
                <div className="testimonial-bottom">
                  <div className="testimonial-author">
                    <img className="author-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Aravind Kumar" />
                    <div className="author-info">
                      <h4>Aravind Kumar</h4>
                      <p>Founder, Sunrise Insurance</p>
                      <div className="stars">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-nav">
                    <button className="t-nav-btn prev"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                    <button className="t-nav-btn next"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ & CTA SECTION */}
        <section className="faq-cta-section" id="faq" style={{ backgroundImage: `url(${faqBgImg})` }}>
          <div className="container faq-cta-container">
            <div className="faq-left">
              <div className="section-label" style={{display: 'flex', alignItems: 'center', gap: '12px', color: '#64748b', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem'}}>
                GET ANSWERS <div style={{height: '1px', width: '40px', background: 'var(--accent-gold)'}}></div>
              </div>
              <h2 className="section-title" style={{color: '#0f172a', marginBottom: '16px', fontFamily: "'Georgia', 'Playfair Display', serif"}}>
                FREQUENTLY<br/>
                <span style={{color: 'var(--accent-gold)'}}>ASKED QUESTIONS</span>
              </h2>
              <p className="faq-desc">
                Everything you need to know before you start.<br/>
                If you don't find what you're looking for, just reach out —<br/>
                we're happy to help.
              </p>
              <a href="#all-faqs" className="btn-primary" style={{ background: 'linear-gradient(90deg, #c4923e 0%, #996b20 100%)', borderColor: 'rgba(255, 255, 255, 0.2)', color: 'white', padding: '12px 28px', borderRadius: '30px', fontWeight: '500', display: 'inline-block', border: 'none', marginTop: '10px' }}>View All FAQs &rarr;</a>
            </div>
            
            <div className="faq-middle">
              <div className="faq-list-clean">
                {faqData.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div 
                      key={index} 
                      className={`faq-clean-item ${isOpen ? 'active' : ''}`}
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    >
                      <div className="faq-question-wrap">
                        <div className="faq-question">{faq.question}</div>
                        <div className="faq-plus">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" className="vertical-line"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </div>
                      </div>
                      <div className="faq-answer-wrap">
                        <div className="faq-answer">{faq.answer}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="cta-right">
              <div className="cta-card" style={{ backgroundImage: `url(${ctaBgImg})` }}>
                <div className="section-label" style={{color: 'rgba(255,255,255,0.6)'}}>READY TO START?</div>
                <h3>Have a problem<br/>worth solving?</h3>
                <p>
                  Tell us how your business works.<br/>
                  We'll help you find the right path.
                </p>
                <a href="#build" className="btn-primary">Let's Build &rarr;</a>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
  );
};

export default Home;
