import React, { useEffect, useRef } from 'react';
import './About.css';

// Image imports — upload these files to frontend/src/assets/
import aboutHeroBg from '../assets/about-hero-bg.png';
import storyImg1   from '../assets/about-story-1.png';
import storyImg2   from '../assets/about-story-2.png';
import founderImg  from '../assets/about-founder.png';
import beliefBg    from '../assets/about-belief-bg.jpg';
import aboutCtaBg  from '../assets/about-cta-bg.jpg';
import promiseBg   from '../assets/about-promise-bg.png';
import pmLogo      from '../assets/pmlogo.png';

const About = () => {
  const observerRef = useRef(null);
  useEffect(() => {
    document.documentElement.classList.add('ab-snap-html');
    
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('ab-visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.ab-animate').forEach(el => observerRef.current.observe(el));
    
    return () => {
      document.documentElement.classList.remove('ab-snap-html');
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="about-page">

      {/* 01 HERO */}
      <section className="ab-hero" style={{ backgroundImage: `url(${aboutHeroBg})` }}>
        <div className="ab-hero-overlay" />
        <div className="ab-hero-left ab-animate">
          <p className="ab-eyebrow-dark">ABOUT PATHMAKERS</p>
          <h1 className="ab-hero-title">
            WE STARTED WITH<br />
            <span className="ab-gold">CURIOSITY.</span><br />
            WE BUILT WITH<br />
            <span className="ab-gold">PURPOSE.</span>
          </h1>
          <p className="ab-hero-desc">
            PathMakers is a technology company built to solve real business problems
            with the right mix of product, custom software and practical solutions.
          </p>
          <button className="ab-btn-primary">Our Story &rarr;</button>
        </div>
      </section>

      {/* 02 STORY */}
      <section className="ab-story-section">
        <div className="ab-story-left ab-animate">
          <p className="ab-eyebrow-story">THE BEGINNING</p>
          <h2 className="ab-section-title">
            IT DIDN'T START WITH A<br />
            <span className="ab-gold">BUSINESS PLAN.</span>
          </h2>
          <p className="ab-story-bold">
            On January 1, 2026, it started with a simple thought —<br />
            "What if the things we build as students could solve<br />
            real problems in the world?"
          </p>
          <p className="ab-story-text">
            Instead of just doing academic projects, I wanted to understand how
            technology actually works in people's businesses — what they struggle
            with, what takes their time, and what could be improved.
          </p>
          <p className="ab-story-text">
            So I started exploring. Found real clients. Worked on small projects.
            Guided a few businesses. And with every problem we solved, I felt
            something new — a sense of purpose.
          </p>
          <p className="ab-story-italic">That's where PathMakers began.</p>
          <div className="ab-story-meta">
            <div className="ab-story-date">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>January 1, 2026</span>
            </div>
            <div className="ab-story-tag">
              <span className="ab-story-tag-title">A new journey.</span> <span className="ab-gold">›</span><br />
              The same curiosity.
            </div>
          </div>
        </div>

        <div className="ab-story-center ab-animate">
          <div className="ab-photo-stack">
            <div className="ab-photo ab-photo-top">
              <img src={storyImg1} alt="Student projects" />
              <p className="ab-photo-label">From student<br/>projects...</p>
            </div>
            <div className="ab-photo ab-photo-bottom">
              <img src={storyImg2} alt="Real clients" />
              <p className="ab-photo-label-right">...to real clients &amp;<br/>real problems.</p>
            </div>
          </div>
        </div>

        <div className="ab-story-right ab-animate">
          {[
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: 'Explored', sub: 'Real Clients' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.17V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-2.82-1.17l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>, title: 'Solved', sub: 'Actual Problems' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Guided', sub: 'Small Businesses' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: 'Gained', sub: 'Real Experience' },
          ].map((item, i) => (
            <div className="ab-milestone" key={i} style={{ '--mi': i }}>
              <div className="ab-milestone-icon">{item.icon}</div>
              <div>
                <p className="ab-milestone-title">{item.title}</p>
                <p className="ab-milestone-sub">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03 FOUNDER */}
      <section className="ab-founder-section">
        <div className="ab-founder-left ab-animate">
          <p className="ab-eyebrow-light ab-tracking-wide">THE PERSON BEHIND IT</p>
          <h2 className="ab-founder-title">
            THE BRAIN BEHIND<br />
            <span className="ab-gold">PATHMAKERS.</span>
          </h2>
          <div className="ab-founder-divider" />
          <p className="ab-founder-text">
            I started with curiosity, long conversations, small projects, and
            the excitement of creating something real.
          </p>
          <p className="ab-founder-text">
            With time, I learned from experienced people, took more responsibility,
            and gradually built a team of developers who shared the same belief —
            that technology can actually make a difference.
          </p>
          <p className="ab-founder-signature">Naresh</p>
          <p className="ab-founder-role">Founder &amp; Developer</p>
        </div>

        <div className="ab-founder-center ab-animate">
          <img src={founderImg} alt="Naresh" className="ab-founder-img" />
          <div className="ab-founder-img-fade" />
        </div>

        <div className="ab-founder-right ab-animate">
          {[
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>, title: 'Student → Real Clients', sub: 'From classroom projects to real business problems.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>, title: 'Learning & Growing', sub: 'With mentors, experience and the right people.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, title: 'Taking Responsibility', sub: 'Supporting family, building for the future.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Building a Team', sub: 'From one person to a team with one goal.' },
          ].map((item, i) => (
            <div className="ab-founder-stat" key={i} style={{ '--fi': i }}>
              <div className="ab-founder-stat-icon">{item.icon}</div>
              <div>
                <p className="ab-founder-stat-title">{item.title}</p>
                <p className="ab-founder-stat-sub">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 CTA */}
      <section className="ab-cta-section" style={{ backgroundImage: `url(${aboutCtaBg})` }}>
        <div className="ab-cta-overlay" />
        <div className="ab-cta-left ab-animate">
          <p className="ab-cta-italic">Good work doesn't need noise;</p>
          <h2 className="ab-cta-title">IT NEEDS INTENTION.</h2>
        </div>
        <div className="ab-cta-divider" />
        <div className="ab-cta-right ab-animate">
          <p className="ab-cta-text">
            Today, PathMakers is not just a place to build projects.<br />
            It's a team that listens first and builds next.
          </p>
        </div>
      </section>

      {/* 05 THE BELIEF */}
      <section className="ab-belief-section">
        <div className="ab-belief-bg" style={{ backgroundImage: `url(${beliefBg})` }}>
          <div className="ab-belief-overlay" />
        </div>

        <div className="ab-belief-content">
          <div className="ab-belief-left ab-animate">
            <p className="ab-eyebrow-story ab-tracking-wide">THE BELIEF</p>
            <h2 className="ab-belief-title">
              A HUNGRY PERSON DOESN'T<br />
              <span className="ab-gold">NEED A GOLDEN BISCUIT.</span>
            </h2>
            <p className="ab-belief-subtitle">
              We don’t start with what we can build.<br />
              We start with what you actually need.
            </p>
            <p className="ab-belief-text">
              A simpler solution that fits your workflow<br />
              can be more valuable than a sophisticated system<br />
              that forces you to change the way you work.
            </p>
            <div className="ab-belief-divider" />
            <div className="ab-belief-quote-block">
              <div className="ab-belief-quote-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
              </div>
              <p className="ab-belief-quote-text">
                The right solution isn't always<br />
                the biggest one. It's the one that<br />
                solves the right problem.
              </p>
            </div>
          </div>

          <div className="ab-belief-right ab-animate">
            <p className="ab-belief-floating-text">
              Not the biggest.<br />
              Just the right one.
            </p>
          </div>
        </div>
      </section>

      {/* 06 OUR PROMISE */}
      <section className="ab-promise-section">
        <div className="ab-promise-bg" style={{ backgroundImage: `url(${promiseBg})` }}>
          <div className="ab-promise-overlay" />
        </div>

        <div className="ab-promise-content">
          <div className="ab-promise-left ab-animate">
            <p className="ab-eyebrow-story ab-tracking-wide">OUR PROMISE</p>
            <h2 className="ab-promise-title">
              YOUR BUSINESS HAS A PATH.<br />
              <span className="ab-gold">TECHNOLOGY SHOULD HELP YOU<br />WALK IN IT.</span>
            </h2>
            <p className="ab-promise-text">
              We may build software. We may connect systems.<br />
              We may automate a process. We may recommend something<br />
              that already exists. Or we may tell you that you don't need what<br />
              you came looking for.
            </p>
            <div className="ab-promise-quote">
              <div className="ab-promise-quote-line" />
              <p>
                The goal isn't to sell you technology.<br />
                The goal is to help you <strong>move forward with the right one.</strong>
              </p>
            </div>
          </div>

          <div className="ab-promise-right ab-animate">
            <div className="ab-promise-right-divider" />
            <div className="ab-promise-right-inner">
              <h3 className="ab-promise-cursive">
                Because every business<br />
                has a path.
              </h3>
              <p className="ab-promise-right-text">
                We're still learning. Still building.<br />
                Still finding better ways forward.
              </p>
              <button className="ab-promise-btn">Let's Build &rarr;</button>
            </div>
          </div>
        </div>

        <div className="ab-promise-bottom ab-animate">
          <div className="ab-promise-tags">
            <span className="ab-promise-line" />
            <span>Vision</span> <span className="ab-plus">+</span> <span>Precision</span> <span className="ab-plus">+</span> <span>Power</span>
            <span className="ab-promise-line" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
