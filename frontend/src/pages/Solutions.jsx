import React, { useState, useEffect, useRef } from 'react';
import useSEO from '../hooks/useSEO';
import './Solutions.css';
import heroBgImage from '../assets/solutions-hero-bg.png';
import exampleFlowImage from '../assets/solutions-example-flow.png';
import desktopImg from '../assets/desktop.png';
import customImg from '../assets/custom.png';
import schoolErpImg from '../assets/schoolerp.png';
import insuranceCrmImg from '../assets/Insurancecrm.png';
import businessImg from '../assets/business.png';
import ctaBgImg from '../assets/cta_bg.jpg';
import alreadyBuiltBgImg from '../assets/already-built-bg.png';
import archLayersImg from '../assets/arch-layers.png';
import processBgImg from '../assets/process-bg.png';
import solutionsBgImg from '../assets/investmentbg.png';
import productsBgImg from '../assets/our_trust_bg.jpg';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('Intro');
  const [heroWord, setHeroWord] = useState('SIMPLER');
  const [activeProblem, setActiveProblem] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useSEO({
    title: 'Solutions | Custom Software, Web Apps, Mobile Apps & Business Automation — PathMakers',
    description:
      'PathMakers Technologies delivers custom software development, web application development, mobile app development, and business process automation solutions for businesses in Tamil Nadu and across India.',
    canonical: 'https://pathmakerstech.in/solutions',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': 'https://pathmakerstech.in/solutions#webpage',
      url: 'https://pathmakerstech.in/solutions',
      name: 'Software Solutions by PathMakers Technologies',
      description:
        'Custom software development, web application development, mobile app development, business automation, ERP and CRM solutions by PathMakers Technologies.',
      isPartOf: { '@id': 'https://pathmakerstech.in/#website' },
    },
  });

  
  const [images, setImages] = useState({
    heroBg: heroBgImage,
    laptopImg: desktopImg,
    archStackImg: customImg,
    schoolImg: schoolErpImg,
    insuranceImg: insuranceCrmImg,
    businessImg: businessImg,
    softwareImg: customImg,
    ctaBg: ctaBgImg,
    exampleFlowImg: exampleFlowImage,
    alreadyBuiltBg: alreadyBuiltBgImg,
    archLayers: archLayersImg,
    processBg: processBgImg,
    productsBg: productsBgImg
  });

  const fourWaysRef = useRef(null);
  const heroWords = ['SIMPLER', 'FASTER', 'CLEARER', 'MORE CAPABLE'];
  
  const investmentScrollRef = useRef(null);
  const isAutoScrollingRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const [activeInvestmentWedge, setActiveInvestmentWedge] = useState(5);
  const [investmentScrollStep, setInvestmentScrollStep] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const problems = [
    { id: 1, icon: '🧑‍🔧', title: 'Too Much Manual Work', desc: 'Repeating the same tasks every day?', solution: 'Automation / Business Workflow', solutionDesc: 'Reduce repetitive work by allowing systems to handle predictable processes automatically.', tab: 'Automate' },
    { id: 2, icon: '🗄️', title: 'Information Is Everywhere', desc: 'Data scattered across spreadsheets, messages and different systems?', solution: 'Centralized Web Application', solutionDesc: 'Bring all your data into one secure, single source of truth.', tab: 'Experience' },
    { id: 3, icon: '</>', title: 'My Software Doesn\'t Fit', desc: 'Your existing software works — but your business has to work around it?', solution: 'Customization / Integration', solutionDesc: 'We adapt or replace systems so they match your exact workflow.', tab: 'Build' },
    { id: 4, icon: '🔗', title: 'My Systems Don\'t Talk', desc: 'Moving information manually between different software?', solution: 'API / Integration', solutionDesc: 'Let your existing tools communicate directly with each other automatically.', tab: 'Connect' },
    { id: 5, icon: '📊', title: 'I Can\'t See What\'s Happening', desc: 'Important business information is hidden or scattered?', solution: 'Dashboard / Reporting', solutionDesc: 'Get real-time visibility into the metrics that actually matter.', tab: 'Build' },
    { id: 6, icon: '📈', title: 'My Business Is Growing', desc: 'The process that worked before is now difficult to manage?', solution: 'Custom Business Platform', solutionDesc: 'Scale your operations with software built for your next stage of growth.', tab: 'Build' },
    { id: 7, icon: '👥', title: 'My Customers Need Better Access', desc: 'Your customers need an easier way to interact with your business?', solution: 'Customer Portal / App', solutionDesc: 'Give your clients a seamless, self-serve digital experience.', tab: 'Experience' },
    { id: 8, icon: '❓', title: 'I Don\'t Know What I Need', desc: 'You know the problem, but not the technology required to solve it?', solution: 'Tech Strategy & Consulting', solutionDesc: 'We audit your business and recommend the exact right path forward.', tab: 'Build' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setActiveProblem(problems[0]);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const [investmentPinState, setInvestmentPinState] = useState('top');

  useEffect(() => {
    const handleInvestmentScroll = () => {
      if (!investmentScrollRef.current) return;
      
      if (isMobile) {
        const rect = investmentScrollRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || 600;
        const totalDist = rect.height + windowHeight;
        const currentDist = windowHeight - rect.top;
        const rawProgress = Math.min(1, Math.max(0, currentDist / totalDist));
        
        const sequence = [5, 0, 1, 2, 3, 4];
        const step = Math.min(5, Math.floor(rawProgress * 6));
        setInvestmentScrollStep(step);
        setActiveInvestmentWedge(sequence[step]);
        return;
      }

      const rect = investmentScrollRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      if (rect.top > 0) {
        setInvestmentPinState('top');
        setInvestmentScrollStep(0);
        setActiveInvestmentWedge(5);
      } else if (-rect.top >= scrollableDistance) {
        setInvestmentPinState('bottom');
        setInvestmentScrollStep(5);
        setActiveInvestmentWedge(4);
      } else {
        setInvestmentPinState('fixed');
        const rawProgress = -rect.top / scrollableDistance;
        const progress = Math.min(1, Math.max(0, rawProgress));

        const sequence = [5, 0, 1, 2, 3, 4];
        // Scale progress so all 6 steps complete within 0.0 -> 0.85, holding final step 5 from 0.85 -> 1.0
        const stepProgress = Math.min(0.999, progress / 0.85);
        const step = Math.min(5, Math.floor(stepProgress * 6));
        setInvestmentScrollStep(step);
        setActiveInvestmentWedge(sequence[step]);
      }
    };

    window.addEventListener('scroll', handleInvestmentScroll, { passive: true });
    window.addEventListener('resize', handleInvestmentScroll, { passive: true });
    handleInvestmentScroll();
    return () => {
      window.removeEventListener('scroll', handleInvestmentScroll);
      window.removeEventListener('resize', handleInvestmentScroll);
    };
  }, [isMobile]);

  const getInvestmentStickyContainerStyle = () => {
    if (isMobile) {
      return {
        width: '100%',
        position: 'relative',
        padding: '30px 16px',
        backgroundColor: '#FDFBF7',
        backgroundImage: `url(${solutionsBgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      };
    }

    const baseStyle = {
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#FDFBF7',
      backgroundImage: `url(${solutionsBgImg})`,
      backgroundPosition: 'right center',
      backgroundSize: 'auto 100%',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '40px',
      boxShadow: 'inset 0 20px 30px -10px rgba(0,0,0,0.02)'
    };

    if (investmentPinState === 'fixed') {
      return { ...baseStyle, position: 'fixed', top: 0, left: 0, zIndex: 30 };
    }
    if (investmentPinState === 'bottom') {
      return { ...baseStyle, position: 'absolute', bottom: 0, left: 0, zIndex: 10 };
    }
    return { ...baseStyle, position: 'absolute', top: 0, left: 0, zIndex: 10 };
  };

  const [pinState, setPinState] = useState('top');

  const getTabScrollTop = (tabName) => {
    if (!fourWaysRef.current) return 0;
    const offsetTop = fourWaysRef.current.offsetTop;
    const pinnedDist = fourWaysRef.current.offsetHeight - window.innerHeight;
    const targetProgress = {
      Intro: 0,
      Build: 0.26,
      Connect: 0.49,
      Automate: 0.72,
      Experience: 0.95
    }[tabName] || 0;
    return offsetTop + (pinnedDist * targetProgress);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return;
      if (!fourWaysRef.current) return;
      const rect = fourWaysRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      if (rect.top > 0) {
        setPinState('top');
        setActiveTab('Intro');
      } else if (-rect.top >= scrollableDistance) {
        setPinState('bottom');
        setActiveTab('Experience');
      } else {
        setPinState('fixed');
        const rawProgress = -rect.top / scrollableDistance;
        const progress = Math.min(1, Math.max(0, rawProgress));

        if (progress < 0.15) {
          setActiveTab('Intro');
        } else if (progress < 0.38) {
          setActiveTab('Build');
        } else if (progress < 0.61) {
          setActiveTab('Connect');
        } else if (progress < 0.84) {
          setActiveTab('Automate');
        } else {
          setActiveTab('Experience');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isMobile]);

  const getStickyContainerStyle = () => {
    if (isMobile) {
      return {
        position: 'relative',
        height: 'auto',
        display: 'flex',
        alignItems: 'flex-start',
        overflow: 'visible',
        paddingTop: '40px'
      };
    }

    const baseStyle = {
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    };

    if (pinState === 'fixed') {
      return { ...baseStyle, position: 'fixed', top: 0, left: 0, zIndex: 30 };
    }
    if (pinState === 'bottom') {
      return { ...baseStyle, position: 'absolute', bottom: 0, left: 0, zIndex: 10 };
    }
    return { ...baseStyle, position: 'absolute', top: 0, left: 0, zIndex: 10 };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroWord(prev => {
        const currentIndex = heroWords.indexOf(prev);
        return heroWords[(currentIndex + 1) % heroWords.length];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="solutions-page">
      {/* 01 - Hero Section */}
      <div className="hero-snap-wrapper">
        <section className="hero-section s-hero" id="solutions-hero">
          <div className="hero-bg-image" style={{ backgroundImage: `url(${images.heroBg})`, WebkitMaskImage: 'none', maskImage: 'none' }}></div>
          <div className="hero-bg-gradient" style={{ background: 'linear-gradient(to right, rgba(10,12,16,1) 0%, rgba(10,12,16,0.85) 45%, transparent 100%)' }}></div>
          <div className="container hero-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
            
            <div className="hero-content" style={{ maxWidth: '650px', textAlign: 'left', margin: '0', paddingTop: '0' }}>
              <div className="breadcrumb" style={{ letterSpacing: '0.15em', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: '15px', fontWeight: 600 }}>
                IDEAS / TECHNOLOGY / <span style={{ color: '#D4AF37' }}>SOLUTIONS</span>
              </div>
              
              <h1 className="hero-title" style={{ textTransform: 'uppercase', fontSize: '4.2rem', lineHeight: '1.05', margin: '0 0 15px', color: '#fff', fontWeight: 800 }}>
                YOUR BUSINESS<br />
                HAS A PROBLEM.
              </h1>
              
              <h2 className="hero-subtitle" style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '2.1rem', fontWeight: 400, letterSpacing: '0', marginBottom: '30px', maxWidth: '100%', lineHeight: '1.2', textTransform: 'none' }}>
                The solution doesn't have to<br />
                become another one.
              </h2>
              
              <p style={{ maxWidth: '100%', fontSize: '1.1rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)', marginBottom: '15px', fontWeight: 400 }}>
                Technology is useful only when it makes your business <span className="gold-text animated-word" style={{ display: 'inline-block', fontWeight: 700 }} key={heroWord}>{heroWord}.</span>
              </p>
              
              <p style={{ maxWidth: '85%', fontSize: '0.95rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>
                We understand how your business works first, then determine<br/>what should be built, automated, connected or improved.
              </p>
              
              <div className="hero-actions" style={{ justifyContent: 'flex-start', marginTop: '0', gap: '20px' }}>
                <a href="#four-ways" className="btn-primary" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%)', color: '#000', fontWeight: 700, borderColor: 'transparent', padding: '14px 32px', borderRadius: '6px' }}>Get Started</a>
                <a href="https://wa.me/917200754566?text=Hello%20PathMakers%20and%20Team%2C%20I%20would%20like%20to%20Connect%20for%20a%20projects%20discussion." target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ color: '#fff', borderColor: 'rgba(212,175,55,0.5)', padding: '14px 32px', borderRadius: '6px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Book a call &rarr;
                </a>
              </div>
            </div>

          </div>
        </section>
      </div>
      
      {/* 02 - What are you trying to fix? */}
      <section className="s-problem" style={{ position: 'relative', zIndex: 2, background: '#FDFBF7', boxShadow: 'inset 0 0 100px rgba(212,175,55,0.05), 0 -20px 40px rgba(0,0,0,0.05)', scrollSnapAlign: 'start', paddingTop: '12vh', paddingBottom: '6vh', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
        {/* Background Animations */}
        <div className="s-problem-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', overflow: 'hidden', background: 'repeating-linear-gradient(45deg, rgba(212,175,55,0.08) 0px, rgba(212,175,55,0.08) 150px, transparent 150px, transparent 300px)' }}>
          {/* Central Glow to soften the lines in the middle */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '100%', background: 'radial-gradient(circle, #FDFBF7 20%, transparent 70%)' }}></div>
        </div>

        <div className="container" style={{ maxWidth: '1250px', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ letterSpacing: '0.15em', fontSize: '0.65rem', color: '#6B7280', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase' }}>START WITH YOUR PROBLEM</div>
          <h2 className="section-title" style={{ fontSize: '2.2rem', fontWeight: 800, color: '#111827', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
            WHAT ARE YOU TRYING TO <span style={{ color: '#D4AF37' }}>FIX?</span>
          </h2>
          <p style={{ color: '#4B5563', fontSize: '0.9rem', marginBottom: '30px', lineHeight: '1.4', maxWidth: '600px' }}>
            You don't need to know the technical name for your problem.<br/>Start with what isn't working.
          </p>

          <div className="s-problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '30px' }}>
            {problems.map((prob) => {
              const isActive = activeProblem?.id === prob.id;
              const flipDir = prob.id % 2 === 0 ? '180deg' : '-180deg';
              
              return (
              <div 
                key={prob.id} 
                onClick={() => {
                  setHasInteracted(true);
                  setActiveProblem(isActive ? null : prob);
                }}
                style={{ perspective: '1000px', height: '100%', cursor: 'pointer', zIndex: isActive ? 10 : 1 }}
                onMouseEnter={(e) => { 
                   if (!isActive) e.currentTarget.querySelector('.flip-card-front').style.transform = 'translateY(-3px)'; 
                   if (!isActive) e.currentTarget.querySelector('.flip-card-front').style.boxShadow = '0 8px 15px rgba(0,0,0,0.06)';
                }}
                onMouseLeave={(e) => { 
                   const front = e.currentTarget.querySelector('.flip-card-front');
                   if (front) {
                     front.style.transform = 'translateY(0)'; 
                     front.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
                   }
                }}
              >
                <div style={{
                  display: 'grid',
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformStyle: 'preserve-3d',
                  transform: isActive ? `rotateY(${flipDir})` : 'rotateY(0deg)'
                }}>
                  
                  {/* Front Face */}
                  <div className="flip-card-front" style={{
                    gridArea: '1 / 1',
                    backfaceVisibility: 'hidden',
                    background: '#fff', borderRadius: '12px', padding: '20px', 
                    display: 'flex', flexDirection: 'column', gap: '8px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)', border: '1px solid rgba(212,175,55,0.2)',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '8px' }}>
                      <div style={{ width: '35px', height: '35px', borderRadius: '50%', border: '1px solid rgba(212,175,55,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontSize: '1rem', background: 'rgba(212,175,55,0.05)', flexShrink: 0, boxShadow: 'inset 0 0 5px rgba(212,175,55,0.1)' }}>
                        {prob.icon}
                      </div>
                      <h4 style={{ color: '#1E293B', fontSize: '0.95rem', fontWeight: 700, lineHeight: '1.2' }}>{prob.title}</h4>
                    </div>
                    <p style={{ color: '#64748B', fontSize: '0.8rem', lineHeight: '1.5', paddingLeft: '0px', paddingBottom: '20px', marginTop: '5px' }}>{prob.desc}</p>
                    <div style={{ position: 'absolute', bottom: '15px', right: '20px', color: '#D4AF37', fontWeight: 800, fontSize: '1.1rem' }}>
                      &gt;
                    </div>
                  </div>

                  {/* Back Face */}
                  <div style={{
                    gridArea: '1 / 1',
                    backfaceVisibility: 'hidden',
                    transform: `rotateY(${flipDir})`,
                    background: '#fff', borderRadius: '12px', padding: '20px', 
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(212,175,55,0.3)', border: '2px solid #D4AF37'
                  }}>
                    <div style={{ fontSize: '0.7rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 700 }}>Possible Solution</div>
                    <h4 style={{ color: '#D4AF37', fontSize: '1rem', fontWeight: 800, marginBottom: '8px', lineHeight: '1.2' }}>{prob.solution}</h4>
                    <p style={{ color: '#4B5563', fontSize: '0.85rem', lineHeight: '1.4', marginBottom: '15px' }}>{prob.solutionDesc}</p>
                    <button 
                      style={{ color: '#111827', background: 'none', border: 'none', padding: 0, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', marginTop: 'auto' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (fourWaysRef.current) {
                          if (window.innerWidth > 768) {
                            window.scrollTo({ top: getTabScrollTop(prob.tab), behavior: 'smooth' });
                          } else {
                            fourWaysRef.current.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                    >
                      Explore {prob.tab} &rarr;
                    </button>
                    <div style={{ position: 'absolute', top: '15px', right: '15px', color: '#9CA3AF', fontSize: '1.2rem', lineHeight: '1', cursor: 'pointer' }}>&times;</div>
                  </div>

                </div>
              </div>
              )
            })}
          </div>
          
          {/* Example Card */}
          <div className="example-card" style={{ position: 'relative', overflow: 'hidden', background: '#fff', borderRadius: '12px', display: 'flex', border: '1px solid rgba(212,175,55,0.2)', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', minHeight: '180px' }}>
             
             {/* Text Content */}
             <div style={{ position: 'relative', zIndex: 2, padding: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '60%' }}>
               <div style={{ marginBottom: '10px', color: '#1F2937', fontSize: '0.85rem' }}>
                 <strong style={{ color: '#111827' }}>Example:</strong> I spend too much time doing things manually.
               </div>
               <div style={{ marginBottom: '12px', fontSize: '0.85rem' }}>
                 <strong style={{ color: '#111827' }}>Possible Solution:</strong> <span style={{ color: '#D4AF37', fontWeight: 600 }}>Automation / Business Workflow</span>
               </div>
               <p style={{ color: '#4B5563', lineHeight: '1.5', marginBottom: '15px', fontSize: '0.75rem', maxWidth: '90%' }}>
                 Reduce repetitive work by allowing systems to handle predictable processes automatically.
               </p>
               <div>
                 <button style={{ background: 'linear-gradient(135deg, #B98031 0%, #E8BC6E 50%, #B98031 100%)', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '30px', fontWeight: 600, cursor: 'pointer', fontSize: '0.75rem', boxShadow: '0 4px 15px rgba(185,128,49,0.3)' }}>Explore Solution &rarr;</button>
               </div>
             </div>
             
             {/* Visual Graphic Image */}
             <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
                {images.exampleFlowImg ? (
                  <img src={images.exampleFlowImg} alt="Automation Flow" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading graphic...</div>
                )}
             </div>
          </div>

        </div>
      </section>

      {/* 03 & 04 - Four Ways (Combined) */}
      <section className="s-four-ways" id="four-ways" ref={fourWaysRef} data-active-tab={activeTab} style={{ position: 'relative', height: isMobile ? 'auto' : '280vh', background: '#FDFBF7' }}>
        <div className="s-four-sticky" style={getStickyContainerStyle()}>
          
          {/* Background slanted bars */}
          <div className="s-problem-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', overflow: 'hidden', background: 'repeating-linear-gradient(-45deg, rgba(212,175,55,0.06) 0px, rgba(212,175,55,0.06) 150px, transparent 150px, transparent 300px)' }}></div>
          
          {/* Left side translucent overlay mimicking the reference */}
          <div style={{ position: 'absolute', left: '-15%', top: '-30%', width: '60%', height: '160%', transform: 'rotate(25deg)', background: 'linear-gradient(to right, #FDFBF7 40%, rgba(255,255,255,0.4) 100%)', boxShadow: '10px 0 30px rgba(212,175,55,0.05)', zIndex: 0, pointerEvents: 'none' }}></div>

          {/* Intro Screen Overlay */}
          <div className="s-four-ways-intro" style={{ position: isMobile ? 'relative' : 'absolute', top: 0, left: 0, width: '100%', height: isMobile ? 'auto' : '100%', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#FDFBF7', opacity: activeTab === 'Intro' ? 1 : 0, pointerEvents: activeTab === 'Intro' ? 'all' : 'none', transition: 'all 0.6s ease-in-out', transform: activeTab === 'Intro' ? 'scale(1)' : 'scale(1.05)', paddingTop: isMobile ? '40px' : '80px', paddingBottom: isMobile ? '40px' : 0 }}>
            <div style={{ letterSpacing: '0.15em', fontSize: '0.85rem', color: '#6B7280', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase' }}>THE RIGHT APPROACH. THE RIGHT SOLUTION.</div>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#111827', marginBottom: '40px', lineHeight: '1.2', textAlign: 'center' }}>
              THERE IS MORE THAN ONE WAY<br/>
              <span style={{ color: '#D4AF37' }}>TO SOLVE A PROBLEM.</span>
            </h2>
            <div className="s-four-ways-intro-cards" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Build', 'Connect', 'Automate', 'Experience'].map(tab => {
                const iconMap = {
                   Build: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
                   Connect: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>,
                   Automate: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>,
                   Experience: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                };
                return (
                 <div key={tab} onClick={() => { 
                   setActiveTab(tab); 
                   if (!isMobile) {
                     window.scrollTo({ top: getTabScrollTop(tab), behavior: 'smooth' }); 
                   } else {
                     fourWaysRef.current.scrollIntoView({ behavior: 'smooth' });
                   }
                 }} style={{ width: '220px', padding: '40px 20px', background: 'linear-gradient(to bottom, #ffffff, #f9fafb)', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05), inset 0 2px 0 rgba(255,255,255,1), inset 0 -4px 0 rgba(0,0,0,0.05)', border: '1px solid rgba(212,175,55,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 30px 60px rgba(212,175,55,0.15), 0 1px 3px rgba(0,0,0,0.05), inset 0 2px 0 rgba(255,255,255,1), inset 0 -4px 0 rgba(0,0,0,0.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05), inset 0 2px 0 rgba(255,255,255,1), inset 0 -4px 0 rgba(0,0,0,0.05)'; }}>
                   <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 10px 25px rgba(245,158,11,0.3)' }}>
                     {iconMap[tab]} 
                   </div>
                   <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111827', textTransform: 'uppercase' }}>{tab}</div>
                   <div style={{ fontSize: '0.9rem', color: '#6B7280', textAlign: 'center', fontWeight: 500 }}>
                     {tab === 'Build' ? 'Custom Software' : tab === 'Connect' ? 'Integrations' : tab === 'Automate' ? 'Workflows' : 'User Portals'}
                   </div>
                 </div>
              )})}
            </div>
          </div>

          <div className="container" style={{ position: isMobile ? 'relative' : 'absolute', top: isMobile ? 'auto' : '50%', left: isMobile ? 'auto' : '50%', transform: isMobile ? (activeTab !== 'Intro' ? 'scale(1)' : 'scale(0.95)') : (activeTab !== 'Intro' ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.95)'), zIndex: 1, width: '100%', maxWidth: '1400px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr', gap: '60px', alignItems: 'center', padding: '5vh 20px', opacity: activeTab !== 'Intro' ? 1 : 0, transition: 'all 0.6s ease-in-out', pointerEvents: activeTab !== 'Intro' ? 'all' : 'none' }}>
            
            {/* Left Column */}
            <div style={{ paddingRight: '20px' }}>
            <div style={{ letterSpacing: '0.15em', fontSize: '0.65rem', color: '#6B7280', fontWeight: 700, marginBottom: '15px', textTransform: 'uppercase' }}>THE RIGHT APPROACH. THE RIGHT SOLUTION.</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827', marginBottom: '25px', lineHeight: '1.2' }}>
              THERE IS MORE THAN ONE WAY<br/>
              <span style={{ color: '#D4AF37' }}>TO SOLVE A PROBLEM.</span>
            </h2>
            <p style={{ color: '#6B7280', fontSize: '1rem', lineHeight: '1.6', marginBottom: '50px' }}>
              Sometimes the answer is to build. Sometimes it is to connect. Sometimes it is to automate. And sometimes the right answer is simply to improve the experience.
            </p>
            
            {/* Bottom 4 Nav Circles */}
            <div className="s-four-ways-nav-circles" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {['Build', 'Connect', 'Automate', 'Experience'].map(tab => {
                 const isActive = activeTab === tab;
                 const iconMap = {
                   Build: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
                   Connect: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>,
                   Automate: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>,
                   Experience: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                 };
                 return (
                   <div key={tab} onClick={() => { 
                     setActiveTab(tab); 
                     if (window.innerWidth > 768) {
                       window.scrollTo({ top: getTabScrollTop(tab), behavior: 'smooth' }); 
                     } else {
                       fourWaysRef.current.scrollIntoView({ behavior: 'smooth' });
                     }
                   }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', cursor: 'pointer', flex: 1 }}>
                     <div style={{ width: '75px', height: '75px', borderRadius: '50%', background: isActive ? '#FDFBF7' : '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isActive ? '#111827' : '#9CA3AF', boxShadow: isActive ? '0 10px 25px rgba(212,175,55,0.2)' : 'none', border: isActive ? '2px solid rgba(212,175,55,0.4)' : '2px solid transparent', transition: 'all 0.3s' }}>
                       {iconMap[tab]}
                     </div>
                     <div style={{ fontSize: '1rem', fontWeight: isActive ? 800 : 600, color: isActive ? '#D4AF37' : '#6B7280', borderBottom: isActive ? '3px solid #D4AF37' : '3px solid transparent', paddingBottom: '8px', transition: 'all 0.3s' }}>{tab}</div>
                   </div>
                 )
              })}
            </div>
          </div>

          {/* Right Column */}
          <div style={{ position: 'relative' }}>
            {/* Top Tabs */}
            <div className="s-four-ways-nav-pill" style={{ display: 'flex', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderRadius: '40px', padding: '6px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', marginBottom: '20px', border: '1px solid rgba(212,175,55,0.15)' }}>
              {['Build', 'Connect', 'Automate', 'Experience'].map(tab => {
                 const isActive = activeTab === tab;
                 return (
                   <div key={tab} onClick={() => { 
                     setActiveTab(tab); 
                     if (window.innerWidth > 768) {
                       window.scrollTo({ top: getTabScrollTop(tab), behavior: 'smooth' }); 
                     } else {
                       fourWaysRef.current.scrollIntoView({ behavior: 'smooth' });
                     }
                   }} style={{ flex: 1, textAlign: 'center', padding: '15px 0', borderRadius: '35px', cursor: 'pointer', background: isActive ? 'linear-gradient(135deg, #B98031 0%, #E8BC6E 50%, #B98031 100%)' : 'transparent', color: isActive ? '#fff' : '#6B7280', fontWeight: isActive ? 700 : 600, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', boxShadow: isActive ? '0 4px 15px rgba(185,128,49,0.4)' : 'none', transition: 'all 0.3s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                     <span style={{ transform: 'scale(0.8)', opacity: isActive ? 1 : 0.7 }}>
                        {tab === 'Build' ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> : tab === 'Connect' ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg> : tab === 'Automate' ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>}
                     </span>
                     {tab}
                   </div>
                 )
              })}
            </div>
            
            {/* Big Content Card */}
            <div style={{ position: 'relative', background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)', borderRadius: '16px', border: '1px solid rgba(212,175,55,0.2)', boxShadow: '0 20px 50px rgba(0,0,0,0.05), inset 0 0 20px rgba(212,175,55,0.05)', minHeight: '340px', padding: '35px', overflow: 'hidden' }}>
              
              <div style={{ width: '55%', position: 'relative', zIndex: 2, height: '310px' }}>
                 
                 <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', opacity: activeTab === 'Build' ? 1 : 0, transform: activeTab === 'Build' ? 'translateY(0)' : 'translateY(15px)', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', pointerEvents: activeTab === 'Build' ? 'auto' : 'none' }}>
                   <h3 style={{ color: '#D4AF37', fontSize: '1.25rem', fontWeight: 800, marginBottom: '5px', textTransform: 'uppercase' }}>Build</h3>
                   <h4 style={{ color: '#1E3A8A', fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px', lineHeight: '1.4' }}>When your business needs something that doesn't exist yet.</h4>
                   <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.5' }}>We design and develop custom software around the way your business actually works.</p>
                   <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 15px 0' }}>
                     {['Business management systems', 'CRM & customer portals', 'Dashboards & reporting', 'Industry-specific solutions'].map((item, i) => (
                       <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: '#4B5563', fontSize: '0.9rem' }}>
                         <span style={{ color: '#D4AF37', fontWeight: 900 }}>✓</span> {item}
                       </li>
                     ))}
                   </ul>
                 </div>

                 <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', opacity: activeTab === 'Connect' ? 1 : 0, transform: activeTab === 'Connect' ? 'translateY(0)' : 'translateY(15px)', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', pointerEvents: activeTab === 'Connect' ? 'auto' : 'none' }}>
                   <h3 style={{ color: '#D4AF37', fontSize: '1.25rem', fontWeight: 800, marginBottom: '5px', textTransform: 'uppercase' }}>Connect</h3>
                   <h4 style={{ color: '#1E3A8A', fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px', lineHeight: '1.4' }}>Your business already has software. They just don't talk to each other.</h4>
                   <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.5' }}>Instead of making your staff move information from one system to another, we can make the systems communicate directly.</p>
                   <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 15px 0' }}>
                     {['Website ↔ CRM', 'ERP ↔ Payment gateway', 'Application ↔ WhatsApp/SMS'].map((item, i) => (
                       <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: '#4B5563', fontSize: '0.9rem' }}>
                         <span style={{ color: '#D4AF37', fontWeight: 900 }}>✓</span> {item}
                       </li>
                     ))}
                   </ul>
                 </div>

                 <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', opacity: activeTab === 'Automate' ? 1 : 0, transform: activeTab === 'Automate' ? 'translateY(0)' : 'translateY(15px)', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', pointerEvents: activeTab === 'Automate' ? 'auto' : 'none' }}>
                   <h3 style={{ color: '#D4AF37', fontSize: '1.25rem', fontWeight: 800, marginBottom: '5px', textTransform: 'uppercase' }}>Automate</h3>
                   <h4 style={{ color: '#1E3A8A', fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px', lineHeight: '1.4' }}>If a person keeps repeating the same digital task, the system should do it.</h4>
                   <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.5' }}>Reduce human error and free up your team's time by automating repetitive workflows.</p>
                   <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 15px 0' }}>
                     {['Data Entry & Gathering', 'Status Updates & Emails', 'Generating Reports'].map((item, i) => (
                       <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: '#4B5563', fontSize: '0.9rem' }}>
                         <span style={{ color: '#D4AF37', fontWeight: 900 }}>✓</span> {item}
                       </li>
                     ))}
                   </ul>
                 </div>

                 <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', opacity: activeTab === 'Experience' ? 1 : 0, transform: activeTab === 'Experience' ? 'translateY(0)' : 'translateY(15px)', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', pointerEvents: activeTab === 'Experience' ? 'auto' : 'none' }}>
                   <h3 style={{ color: '#D4AF37', fontSize: '1.25rem', fontWeight: 800, marginBottom: '5px', textTransform: 'uppercase' }}>Experience</h3>
                   <h4 style={{ color: '#1E3A8A', fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px', lineHeight: '1.4' }}>Sometimes the problem is how people interact with your business.</h4>
                   <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.5' }}>A website communicates information. A web application allows people to perform work.</p>
                   <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 15px 0' }}>
                     {['Customer portals', 'Booking systems', 'Mobile Applications'].map((item, i) => (
                       <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: '#4B5563', fontSize: '0.9rem' }}>
                         <span style={{ color: '#D4AF37', fontWeight: 900 }}>✓</span> {item}
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 <div style={{ position: 'absolute', bottom: 0, left: 0, opacity: activeTab !== 'Intro' ? 1 : 0, transition: 'opacity 0.5s ease' }}>
                   <button style={{ background: 'linear-gradient(135deg, #B98031 0%, #E8BC6E 50%, #B98031 100%)', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '30px', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(185,128,49,0.3)' }}>Explore This Solution &rarr;</button>
                 </div>
              </div>

              {/* Graphic container right */}
              <div style={{ position: 'absolute', top: '5%', right: '-10%', width: '65%', height: '90%', zIndex: 1, pointerEvents: 'none', opacity: activeTab === 'Build' ? 1 : 0, transition: 'opacity 0.4s', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%)', maskImage: 'linear-gradient(to right, transparent 0%, black 35%)' }}>
                <img src={images.laptopImg} alt="Build" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(-10px 15px 30px rgba(0,0,0,0.1))', transform: 'scale(1.1)' }} />
              </div>
              <div style={{ position: 'absolute', top: '5%', right: '-10%', width: '60%', height: '90%', zIndex: 1, pointerEvents: 'none', opacity: activeTab === 'Connect' ? 1 : 0, transition: 'opacity 0.4s', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%)', maskImage: 'linear-gradient(to right, transparent 0%, black 35%)' }}>
                <img src={images.businessImg} alt="Connect" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(-10px 15px 30px rgba(0,0,0,0.1))' }} />
              </div>
              <div style={{ position: 'absolute', top: '5%', right: '-10%', width: '60%', height: '90%', zIndex: 1, pointerEvents: 'none', opacity: activeTab === 'Automate' ? 1 : 0, transition: 'opacity 0.4s', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%)', maskImage: 'linear-gradient(to right, transparent 0%, black 35%)' }}>
                <img src={images.exampleFlowImg} alt="Automate" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(-10px 15px 30px rgba(0,0,0,0.1))' }} />
              </div>
              <div style={{ position: 'absolute', top: '5%', right: '-10%', width: '60%', height: '90%', zIndex: 1, pointerEvents: 'none', opacity: activeTab === 'Experience' ? 1 : 0, transition: 'opacity 0.4s', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%)', maskImage: 'linear-gradient(to right, transparent 0%, black 35%)' }}>
                <img src={images.archStackImg} alt="Experience" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(-10px 15px 30px rgba(0,0,0,0.1))', transform: 'scale(1.1)' }} />
              </div>

              {/* Right-Edge Mini Icons to mimic the UI elements in the reference */}
              <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 3 }}>
                 {[
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>,
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                 ].map((icon, i) => (
                   <div key={i} style={{ width: '45px', height: '45px', background: '#fff', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', border: '1px solid rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B98031' }}>
                     {icon}
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 08 - Or Maybe it's Already Built */}
      <section className="s-already-built-section" style={{ position: 'relative', zIndex: 5, width: '100%', minHeight: '500px', backgroundColor: '#FDFBF7', display: 'flex', borderTop: '1px solid rgba(212,175,55,0.1)', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
        
        {/* Background Image Container */}
        <div style={{ flex: '0 0 35%', minWidth: '350px', position: 'relative', WebkitMaskImage: 'linear-gradient(to right, black 0%, black 80%, transparent 100%)', maskImage: 'linear-gradient(to right, black 0%, black 80%, transparent 100%)' }}>
          <img src={images.alreadyBuiltBg} alt="Workspace Background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = images.laptopImg; }} />
        </div>

        {/* Content Container */}
        <div style={{ flex: 1, position: 'relative', zIndex: 2, display: 'flex', padding: '60px 40px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '50px', width: '100%', maxWidth: '1000px' }}>
            
            {/* Left Column: Text & List */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: '#6B7280', textTransform: 'uppercase', marginBottom: '8px' }}>
                Before you build, let's check.
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#1E3A8A', marginBottom: '15px', lineHeight: '1.2' }}>
                OR MAYBE IT'S <span style={{ color: '#D4AF37' }}>ALREADY BUILT.</span>
              </h2>
              <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1E3A8A', marginBottom: '15px' }}>
                You don't always need something new.
              </div>
              <p style={{ fontSize: '0.85rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '35px', maxWidth: '95%' }}>
                If an existing solution already solves your problem well, we don't need to<br/>replace it simply because you came to us. We can help with:
              </p>
              
              {/* 3 Column Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px 35px' }}>
                {[
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>, text: 'Existing software evaluation' },
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>, text: 'Configuration' },
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>, text: 'Performance improvements' },
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>, text: 'Integration' },
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>, text: 'Automation' },
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>, text: 'Data migration' },
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>, text: 'UI/UX improvements' },
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>, text: 'Workflow improvements' },
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 3v18"></path></svg>, text: 'Partial rebuilding' },
                  { icon: null, text: '' }, // empty space in column 1 row 4
                  { icon: null, text: '' }, // empty space in column 2 row 4
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>, text: 'Replacing only what\'s necessary' }
                ].map((item, i) => item.text ? (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '26px', height: '26px', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '6px', color: '#D4AF37', background: '#FDF8F0', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 500, lineHeight: '1.3' }}>{item.text}</span>
                  </div>
                ) : <div key={i}></div>)}
              </div>
            </div>

            {/* Right Column: Floating Card */}
            <div style={{ width: '350px', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
              <div style={{ background: '#fff', borderRadius: '16px', padding: '35px 30px', boxShadow: '0 15px 50px rgba(0,0,0,0.06)', border: '1px solid rgba(212,175,55,0.15)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ width: '55px', height: '55px', background: '#FDF8F0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.2)', flexShrink: 0, boxShadow: 'inset 0 0 10px rgba(212,175,55,0.05)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M10 18l-3 3-3-3"></path><path d="M7 21V10"></path><path d="M14 6l3-3 3 3"></path><path d="M17 3v11"></path></svg>
                  </div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#1E3A8A', lineHeight: '1.4' }}>
                    We won't build something <br/>just because we can.
                  </h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '30px' }}>
                  Sometimes the right solution is an <br/>existing product. Sometimes it is a small <br/>improvement. Sometimes it is an <br/>integration. And sometimes a new <br/>system really is necessary.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <button style={{ background: 'linear-gradient(135deg, #B98031 0%, #E8BC6E 50%, #B98031 100%)', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '30px', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 15px rgba(185,128,49,0.3)' }}>
                    Tell Us What You Already Have &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 09 - Architecture Layers */}
      {/* 09 - Architecture Layers */}
      <section className="s-architecture-section" style={{ position: 'relative', width: '100%', padding: '30px 0', backgroundColor: '#FDFBF7', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid rgba(212,175,55,0.1)', overflow: 'hidden' }}>
        
        {/* Background Centered Image with Radial Fade */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', maxWidth: '600px', height: '85%', zIndex: 1, pointerEvents: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={images.archLayers} alt="Architecture Stack" style={{ width: '100%', height: '100%', objectFit: 'contain', WebkitMaskImage: 'radial-gradient(circle at center, black 15%, transparent 60%)', maskImage: 'radial-gradient(circle at center, black 15%, transparent 60%)' }} />
        </div>
        
        {/* Extra linear gradient overlaps to ensure the text on the extreme left/right is perfectly clear against any wide images */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '30%', height: '100%', background: 'linear-gradient(to right, #FDFBF7 20%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '30%', height: '100%', background: 'linear-gradient(to left, #FDFBF7 20%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }}></div>

        {/* Content Container */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', width: '100%', maxWidth: '1350px', padding: '0 40px', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Left Column */}
          <div style={{ flex: '1', maxWidth: '420px' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '8px' }}>OUR APPROACH</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827', marginBottom: '0', lineHeight: '1.1' }}>WHAT WILL WE ACTUALLY</h2>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#B98031', marginBottom: '10px', lineHeight: '1.1' }}>GIVE YOU?</h2>
            <div style={{ width: '40px', height: '3px', background: '#B98031', marginBottom: '15px' }}></div>
            <p style={{ fontSize: '0.85rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '20px' }}>
              A software project is more than screens and code.<br/>
              The solution has to work for the people, process and<br/>
              business behind it.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>, text: 'Complete solution' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>, text: 'Transparent process' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>, text: 'Built for your business' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>, text: 'Long term support' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FDF8F0', border: '1px solid rgba(212,175,55,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B98031', boxShadow: 'inset 0 0 10px rgba(212,175,55,0.05)', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#4B5563' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div style={{ flex: '1', maxWidth: '320px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {[
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>, title: 'Business Layer', points: ['Requirements', 'Workflow mapping', 'User roles', 'Process definition'] },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>, title: 'Experience Layer', points: ['UI/UX', 'Responsive interfaces', 'Dashboards', 'Mobile experience'] },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>, title: 'Technology Layer', points: ['Frontend / Backend', 'Database', 'APIs & Integrations', 'Authentication'] },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>, title: 'Operational Layer', points: ['Hosting', 'Deployment', 'Backup & Monitoring', 'Maintenance'] },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>, title: 'Growth Layer', points: ['New features', 'Integrations', 'Scaling', 'Improvements'] }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FDF8F0', border: '1px solid rgba(212,175,55,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B98031', boxShadow: 'inset 0 0 10px rgba(212,175,55,0.05)', flexShrink: 0, marginTop: '2px' }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#111827', margin: '0 0 4px 0' }}>{item.title}</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {item.points.map((pt, j) => (
                      <li key={j} style={{ fontSize: '0.75rem', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#9CA3AF' }}></span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 - Process Timeline */}
      <section className="s-process-section" style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '650px', backgroundColor: '#FDFBF7', display: 'flex', overflow: 'hidden', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        
        {/* Right Side Background Image with fade mask */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
           {/* Fade edge */}
           <div style={{ position: 'absolute', top: 0, left: 0, width: '120px', height: '100%', background: 'linear-gradient(to right, #FDFBF7 0%, transparent 100%)', zIndex: 2 }}></div>
           <img src={images.processBg} alt="Process Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = images.laptopImg; }} />
           {/* Glassmorphism Card (Removed by request) */}
        </div>

        {/* Left Side Content Container */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', width: '100%', maxWidth: '1450px', padding: '0 40px', margin: '0 auto', alignItems: 'center' }}>
          
          <div style={{ width: '60%', paddingRight: '40px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '1vh' }}>OUR PROCESS</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 2vw, 2.5rem)', fontWeight: 800, color: '#111827', marginBottom: '1.5vh', lineHeight: '1.1' }}>WHAT SHOULD YOU <span style={{ color: '#B98031' }}>EXPECT FROM US?</span></h2>
            <div style={{ width: '40px', height: '3px', background: '#B98031', marginBottom: '2vh' }}></div>
            <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: '1.5', marginBottom: '4vh', fontWeight: 500, maxWidth: '90%' }}>
              You bring the business knowledge. We bring the technology expertise.<br/>The solution is built together.
            </p>

            {/* Timeline */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '850px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', rowGap: '45px', position: 'relative', zIndex: 1 }}>
                {[
                  { id: '01', title: 'YOU EXPLAIN', desc: 'Tell us how your business currently works.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="10" x2="15" y2="10"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg> },
                  { id: '02', title: 'WE UNDERSTAND', desc: 'We identify the actual problem, not just the requested feature.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.5.54 2.8 1.5 3.5.76.76 1.23 1.52 1.41 2.5"></path></svg> },
                  { id: '03', title: 'WE DEFINE', desc: 'We explain the possible approaches, scope and trade-offs.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
                  { id: '04', title: 'YOU DECIDE', desc: 'You choose what makes sense for your business.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
                  { id: '05', title: 'WE DESIGN', desc: 'We turn the agreed requirements into an experience and workflow.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> },
                  { id: '06', title: 'WE BUILD', desc: 'We develop, integrate and test the solution.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> },
                  { id: '07', title: 'YOU REVIEW', desc: 'You see and test the solution before launch.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> },
                  { id: '08', title: 'WE LAUNCH', desc: 'The system goes live.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 3.25-6.75l2.5-2.5a2.5 2.5 0 0 1 3.53 3.53l-2.5 2.5A22 22 0 0 1 15 12z"></path></svg> },
                  { id: '09', title: 'WE SUPPORT', desc: 'We help maintain and improve the solution according to the agreed support model.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg> },
                ].map((step, idx) => (
                   <div key={idx} style={{ display: 'flex', flexDirection: 'column', paddingRight: '10px', height: '145px' }}>
                     <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#fff', border: '1px solid rgba(212,175,55,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', marginBottom: '15px', position: 'relative', zIndex: 2 }}>
                       {step.icon}
                     </div>
                     <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#111827', marginBottom: '2px' }}>{step.id}</div>
                     <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#111827', marginBottom: '4px' }}>{step.title}</div>
                     <div style={{ fontSize: '0.75rem', color: '#6B7280', lineHeight: '1.4' }}>{step.desc}</div>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 - Decision Flow */}
      <section className="s-decision-section" style={{ backgroundColor: '#FDFBF7', padding: '20px 40px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', maxWidth: '1450px', margin: '0 auto', gap: '40px' }}>
          
          {/* Left Side: Text and Button */}
          <div style={{ flex: '1 1 350px', minWidth: '300px', maxWidth: '450px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '15px' }}>OUR APPROACH</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 1.8rem)', fontWeight: 800, color: '#111827', marginBottom: '8px', lineHeight: '1.2' }}>THE SOLUTION IS NOT WHAT TO BUILD?<br/><span style={{ color: '#B98031' }}>THE PROBLEM IS.</span></h2>
            <div style={{ width: '40px', height: '3px', background: '#B98031', marginBottom: '20px' }}></div>
            <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: '1.5', marginBottom: '30px' }}>
              Before deciding what technology to use, we look at how the business currently works.
            </p>
            <button style={{ background: 'linear-gradient(90deg, #B98031, #D4AF37)', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '30px', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: 'fit-content', boxShadow: '0 8px 15px rgba(212,175,55,0.2)' }}>
              See Our Decision Process <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>

          {/* Right Side: Flow Chart */}
          <div className="s-decision-flow-grid">
             {[
               { id: 1, title: 'Your\nProblem', icon: <span style={{ fontSize: '24px', fontWeight: 900, color: '#B98031' }}>?</span> },
               { id: 2, title: 'Current\nWorkflow', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> },
               { id: 3, title: 'Where is\nthe Friction?', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> },
               { id: 4, title: 'Can It Be\nSimplified?', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.5.54 2.8 1.5 3.5.76.76 1.23 1.52 1.41 2.5"></path></svg> },
               { id: 5, title: 'Existing\nSoftware?', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"></path></svg> },
               { id: 6, title: 'Can We\nIntegrate?', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> },
               { id: 7, title: 'Can We\nAutomate?', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> },
               { id: 8, title: 'Need to\nBuild?', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> },
             ].map((node, idx) => (
               <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                   <div style={{ width: '55px', height: '55px', borderRadius: '14px', background: '#fff', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 8px 20px rgba(0,0,0,0.06), inset 0 2px 4px rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     {node.icon}
                   </div>
                   <div style={{ fontSize: '0.7rem', color: '#6B7280', textAlign: 'center', fontWeight: 500, lineHeight: '1.2', width: '70px', whiteSpace: 'pre-line' }}>
                     {node.title}
                   </div>
                 </div>
                 <div className="flow-arrow" style={{ color: '#D4AF37', margin: '0 2px', paddingBottom: '35px' }}>
                   <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                 </div>
               </div>
             ))}
             
             {/* Final Pill Node */}
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#FDFBF7', border: '1px solid #D4AF37', borderRadius: '25px', padding: '10px 15px', boxShadow: '0 8px 15px rgba(212,175,55,0.1)', minWidth: '100px', height: '90px' }}>
               <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#B98031', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
               </div>
               <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#B98031', textAlign: 'center', lineHeight: '1.2' }}>The Right<br/>Solution</div>
             </div>
          </div>
        </div>
      </section>


      {/* 14 - Cost / Scope (Animated Sticky Section) */}
      <section className="s-cost-section" ref={investmentScrollRef} style={{ position: 'relative', width: '100%', height: isMobile ? '350vh' : '550vh', background: '#FDFBF7' }}>
        <div style={getInvestmentStickyContainerStyle()}>
          {/* Gradient Overlay for Left Side */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #FDFBF7 40%, rgba(253,251,247,0.95) 65%, transparent 100%)' }}></div>
          
          <div className="s-cost-inner" style={{ 
            position: 'relative', zIndex: 2, 
            display: 'flex', 
            flexWrap: isMobile ? 'nowrap' : 'wrap', 
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center', 
            justifyContent: isMobile ? 'center' : 'space-between',
            width: isMobile ? '95%' : '92%', 
            maxWidth: '1700px', 
            margin: '0 auto', 
            gap: isMobile ? '8px' : '40px',
            height: isMobile ? '100%' : 'auto'
          }}>
            
            {/* Left Side */}
            <div className="s-cost-left" style={{ 
              flex: isMobile ? '0 0 auto' : '1 1 45%', 
              minWidth: isMobile ? '0' : '450px', 
              maxWidth: isMobile ? '100%' : '500px',
              width: isMobile ? '100%' : undefined,
              textAlign: isMobile ? 'center' : 'left'
            }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: '#9CA3AF', textTransform: 'uppercase', marginBottom: isMobile ? '4px' : '15px' }}>OUR APPROACH</div>
              <h2 style={{ fontSize: isMobile ? '1.25rem' : 'clamp(1.75rem, 2.5vw, 2.25rem)', fontWeight: 800, color: '#111827', marginBottom: isMobile ? '6px' : '15px', lineHeight: '1.2' }}>
                THE RIGHT SOLUTION HAS<br/><span style={{ color: '#B98031' }}>THE RIGHT INVESTMENT.</span>
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '40px', display: isMobile ? 'none' : 'block' }}>
                There is no meaningful single price for software until we<br/>understand what needs to be built, connected or changed.
              </p>
              
              <div style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '16px', padding: '25px', boxShadow: '0 15px 30px rgba(0,0,0,0.02)', marginBottom: '40px', display: isMobile ? 'none' : 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ flex: '0 0 45px', height: '45px', border: '2px solid #D4AF37', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B98031', background: '#FDFBF7' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><circle cx="10" cy="13" r="2"></circle><line x1="11.5" y1="14.5" x2="14" y2="17"></line></svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem', marginBottom: '10px', lineHeight: '1.4' }}>
                    We don't hide the parts of the investment<br/>behind one number.
                  </div>
                  <div style={{ color: '#4B5563', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    During the discussion, we'll explain what is required,<br/>what is optional, what is recurring and what depends<br/>on your chosen solution.
                  </div>
                </div>
              </div>
              
              <button style={{ background: 'linear-gradient(90deg, #B98031, #D4AF37)', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '40px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 20px rgba(212,175,55,0.3)' }}>
                Discuss Your Requirement &rarr;
              </button>

              {isMobile && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', margin: '8px 0 10px', width: '100%', zIndex: 10 }}>
                  {[
                    { label: 'DEVELOPMENT', wedgeIdx: 5, stepIdx: 0 },
                    { label: 'HOSTING', wedgeIdx: 0, stepIdx: 1 },
                    { label: 'DOMAIN', wedgeIdx: 1, stepIdx: 2 },
                    { label: 'THIRD-PARTY', wedgeIdx: 2, stepIdx: 3 },
                    { label: 'MAINTENANCE', wedgeIdx: 3, stepIdx: 4 },
                    { label: 'FUTURE CHANGES', wedgeIdx: 4, stepIdx: 5 },
                  ].map((item) => {
                    const isActive = activeInvestmentWedge === item.wedgeIdx;
                    return (
                      <button
                        key={item.label}
                        onClick={() => {
                          setActiveInvestmentWedge(item.wedgeIdx);
                          setInvestmentScrollStep(item.stepIdx);
                        }}
                        style={{
                          padding: '5px 10px',
                          borderRadius: '20px',
                          fontSize: '0.62rem',
                          fontWeight: 700,
                          border: isActive ? '1px solid #B98031' : '1px solid rgba(0,0,0,0.12)',
                          background: isActive ? 'linear-gradient(135deg, #B98031 0%, #D4AF37 100%)' : '#ffffff',
                          color: isActive ? '#ffffff' : '#4B5563',
                          cursor: 'pointer',
                          boxShadow: isActive ? '0 3px 8px rgba(185,128,49,0.3)' : 'none',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
  
            {/* Right Side: The Wheel Infographic */}
            <div className="s-cost-right" style={{ 
              flex: isMobile ? '0 0 auto' : '1 1 50%', 
              minWidth: isMobile ? '0' : '400px', 
              maxWidth: isMobile ? '100%' : '480px', 
              width: isMobile ? '100%' : undefined,
              position: 'relative', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              overflow: 'visible'
            }}>
              <div className="s-cost-wheel" style={{ 
                position: 'relative', 
                width: isMobile ? '330px' : '100%', 
                maxWidth: isMobile ? '330px' : '480px', 
                aspectRatio: '1/1',
                transform: 'none',
                margin: '0 auto'
              }}>
                
                {/* 3D Wheel SVG */}
                <svg width="100%" height="100%" viewBox="0 0 700 700" style={{ 
                  position: 'absolute', top: 0, left: 0, 
                  transform: `rotate(${30 - investmentScrollStep * 60}deg)`, 
                  transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' 
                }}>
                  <defs>
                    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="40%" stopColor="#111827" />
                      <stop offset="100%" stopColor="#1E2A3A" />
                    </radialGradient>
                    <radialGradient id="activeWedgeGlow" cx="50%" cy="50%" r="80%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#FDFBF7" />
                    </radialGradient>
                    <linearGradient id="inactiveWedgeBg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
                    </linearGradient>
                    <filter id="shadow">
                      <feDropShadow dx="0" dy="15" stdDeviation="20" floodOpacity="0.1" />
                    </filter>
                    <filter id="activeShadow">
                      <feDropShadow dx="0" dy="20" stdDeviation="25" floodColor="#D4AF37" floodOpacity="0.2" />
                    </filter>
                    <filter id="centerShadow">
                      <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#D4AF37" floodOpacity="0.4" />
                    </filter>
                  </defs>
                  
                  {[
                    { label: "HOSTING" }, { label: "DOMAIN" }, { label: "THIRD-PARTY SERVICES" }, { label: "MAINTENANCE" }, { label: "FUTURE CHANGES" }, { label: "DEVELOPMENT" }
                  ].map((_, i) => {
                    const cx = 350, cy = 350;
                    const innerR = 120, outerR = 330;
                    
                    const ACTIVE_SPAN = 150;
                    const INACTIVE_SPAN = (360 - ACTIVE_SPAN) / 5;
                    const activeCenter = activeInvestmentWedge * 60 + 30;
                    const activeStart = activeCenter - (ACTIVE_SPAN / 2);
                    
                    let j = i;
                    if (j < activeInvestmentWedge) j += 6;
                    const stepsAfterActive = j - activeInvestmentWedge;
                    
                    let rawStart = activeStart;
                    if (stepsAfterActive > 0) {
                      rawStart = activeStart + ACTIVE_SPAN + (stepsAfterActive - 1) * INACTIVE_SPAN;
                    }
                    let span = (i === activeInvestmentWedge) ? ACTIVE_SPAN : INACTIVE_SPAN;
                    
                    // 2 degree gap
                    let startAngle = rawStart + 1.5;
                    let endAngle = rawStart + span - 1.5;
                    
                    const startRad = (startAngle - 90) * Math.PI / 180;
                    const endRad = (endAngle - 90) * Math.PI / 180;
                    
                    const x1 = cx + outerR * Math.cos(startRad);
                    const y1 = cy + outerR * Math.sin(startRad);
                    const x2 = cx + outerR * Math.cos(endRad);
                    const y2 = cy + outerR * Math.sin(endRad);
                    const x3 = cx + innerR * Math.cos(endRad);
                    const y3 = cy + innerR * Math.sin(endRad);
                    const x4 = cx + innerR * Math.cos(startRad);
                    const y4 = cy + innerR * Math.sin(startRad);
                    
                    const path = `M ${x1} ${y1} A ${outerR} ${outerR} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 0 0 ${x4} ${y4} Z`;
                    const isActive = i === activeInvestmentWedge;
                    
                    return (
                      <path key={i} d={path} 
                        fill={isActive ? "url(#activeWedgeGlow)" : "url(#inactiveWedgeBg)"} 
                        stroke={isActive ? "#B98031" : "rgba(212,175,55,0.4)"} 
                        strokeWidth={isActive ? "2" : "1"} 
                        filter={isActive ? "url(#activeShadow)" : "url(#shadow)"} 
                        style={{ 
                          cursor: 'pointer', 
                          transformOrigin: '350px 350px',
                          transform: isActive ? 'scale(1.03)' : 'scale(1)',
                          transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' 
                        }} 
                      />
                    );
                  })}
                  
                  {/* Center Circle */}
                  <circle cx="350" cy="350" r="110" fill="url(#centerGlow)" stroke="#D4AF37" strokeWidth="3" filter="url(#centerShadow)" style={{ transition: 'all 0.3s' }} />
                  <circle cx="350" cy="350" r="120" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="1" />
                </svg>
                
                {/* Center Text */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', lineHeight: '1.4' }}>
                  WHAT<br/>AFFECTS THE<br/>INVESTMENT?
                </div>
                
                {/* Text Overlays */}
                {[
                  { label: "HOSTING", text: "Reliable cloud infrastructure required to keep your application online, secure, and blazing fast for your users 24/7.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg> },
                  { label: "DOMAIN", text: "Annual registration and premium DNS management to secure your unique digital brand identity across the globe.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> },
                  { label: "THIRD-PARTY SERVICES", text: "Essential integrations like secure payment gateways, SMS notifications, and external APIs that power core features.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
                  { label: "MAINTENANCE", text: "Ongoing technical support, security patches, and performance optimizations to ensure long-term stability.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.4 0l-2.8-2.8a1 1 0 0 1 0-1.4l7.1-7.1a6 6 0 0 1 9.36-7.94z"></path></svg> },
                  { label: "FUTURE CHANGES", text: "Allocated resources for pivoting strategies, adding new features, and scaling operations beyond the initial launch.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg> },
                  { label: "DEVELOPMENT", text: "The core engineering phase including UI/UX design, frontend & backend architecture, and rigorous quality testing.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> },
                ].map((seg, i) => {
                  const cx = 50, cy = 50; 
                  
                  const ACTIVE_SPAN = 150;
                  const INACTIVE_SPAN = (360 - ACTIVE_SPAN) / 5;
                  const activeCenter = activeInvestmentWedge * 60 + 30;
                  const activeStart = activeCenter - (ACTIVE_SPAN / 2);
                  
                  let j = i;
                  if (j < activeInvestmentWedge) j += 6;
                  const stepsAfterActive = j - activeInvestmentWedge;
                  
                  let rawStart = activeStart;
                  if (stepsAfterActive > 0) {
                    rawStart = activeStart + ACTIVE_SPAN + (stepsAfterActive - 1) * INACTIVE_SPAN;
                  }
                  let span = (i === activeInvestmentWedge) ? ACTIVE_SPAN : INACTIVE_SPAN;
                  
                  // Offset the HTML overlay to perfectly match the rotating SVG!
                  const rotationOffset = 30 - investmentScrollStep * 60;
                  const midAngle = rawStart + span / 2 + rotationOffset;
                  
                  const midRad = (midAngle - 90) * Math.PI / 180;
                  const isActive = i === activeInvestmentWedge;
                  
                  // Push active text slightly further out to sit nicely
                  const radiusForText = isActive ? 34 : 31; 
                  
                  const tx = cx + radiusForText * Math.cos(midRad);
                  const ty = cy + radiusForText * Math.sin(midRad);
                  
                  return (
                    <div key={i} style={{
                      position: 'absolute',
                      left: `${tx}%`,
                      top: `${ty}%`,
                      transform: 'translate(-50%, -50%)',
                      width: isActive ? '230px' : '90px',
                      pointerEvents: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      textAlign: 'center',
                      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}>
                      <div style={{ color: '#B98031', flexShrink: 0, marginTop: '-2px', transform: 'scale(0.8)', transition: 'all 0.8s' }}>{seg.icon}</div>
                      <div>
                        <div style={{ fontSize: isActive ? '0.75rem' : '0.55rem', fontWeight: 800, color: '#111827', marginBottom: '2px', letterSpacing: '0.05em', transition: 'all 0.8s' }}>{seg.label}</div>
                        <div style={{ 
                          fontSize: '0.65rem', color: '#6B7280', lineHeight: '1.4', whiteSpace: 'pre-line',
                          maxHeight: isActive ? '100px' : '0px', opacity: isActive ? 1 : 0, overflow: 'hidden', transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}>
                          {seg.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
  
                {/* Handwriting Overlay */}
                <div className="handwriting-text" style={{ position: 'absolute', right: '-40%', top: '10%', transform: 'rotate(-5deg)', fontFamily: 'cursive, "Comic Sans MS"', fontSize: 'clamp(0.85rem, 1.1vw, 1rem)', color: '#111827', fontWeight: 600, lineHeight: '1.4', zIndex: 10 }}>
                  Clear scope.<br/>Transparent process.<br/>No surprises.
                  <svg style={{ position: 'absolute', left: '-10px', bottom: '-15px', width: '130px', height: '20px' }} viewBox="0 0 200 20" fill="none" stroke="#111827" strokeWidth="2"><path d="M5 15 Q 100 0 195 10"></path></svg>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>

      {/* 14 & 15 - CTA */}
      <section className="s-cta" style={{ position: 'relative', zIndex: 50, padding: '140px 0 60px 0', backgroundColor: '#FDFBF7', backgroundImage: `url(${images.productsBg})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', position: 'relative', zIndex: 2, width: '92%', maxWidth: '1400px', margin: '0 auto', flexWrap: 'wrap', gap: '8vw' }}>
          
          {/* Left Content */}
          <div style={{ maxWidth: '600px' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: '#6B7280', textTransform: 'uppercase', marginBottom: '10px' }}>LET'S BUILD TOGETHER</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)', fontWeight: 800, color: '#111827', marginBottom: '15px', lineHeight: '1.2' }}>
              YOU DON'T NEED MORE SOFTWARE.<br/>
              <span style={{ color: '#B98031' }}>YOU NEED THE RIGHT SOLUTION.</span>
            </h2>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '15px', fontWeight: 500 }}>
              Tell us what's happening in your business, what isn't working,<br/>and where you want to go.
            </p>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '30px', fontWeight: 500 }}>
              We'll help you understand what can be improved, what can be automated,<br/>what should be connected, what should be built — and what doesn't need<br/>to be built at all.
            </p>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <button style={{ background: 'linear-gradient(90deg, #B98031, #D4AF37)', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '40px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 10px 20px rgba(212,175,55,0.3)' }}>
                Let's Build &rarr;
              </button>
              <button style={{ background: '#FDFBF7', color: '#111827', border: '1px solid rgba(212,175,55,0.4)', padding: '12px 25px', borderRadius: '40px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 15px rgba(0,0,0,0.03)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                Get Free Guidance
              </button>
            </div>
          </div>

          {/* Right Glass Card */}
          <div style={{ width: '280px', background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.7)', borderRadius: '20px', padding: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.5)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '15px', right: '15px', color: '#6B7280' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {[
                { text: "Your Problem", icon: <g><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle></g> },
                { text: "Our Understanding", icon: <path d="M12 2a5 5 0 0 0-5 5c0 2 1.5 3 2 5v2h6v-2c.5-2 2-3 2-5a5 5 0 0 0-5-5z"></path> },
                { text: "The Right Solution", icon: <g><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></g> },
                { text: "Your Success", icon: <g><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></g> }
              ].map((item, idx) => (
                <React.Fragment key={idx}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                    <div style={{ flex: '0 0 28px', height: '28px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#111827' }}>
                      <svg style={{ position: 'absolute', top: 0, left: 0 }} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5"><polygon points="12 2 22 8 22 16 12 22 2 16 2 8"></polygon></svg>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{item.icon}</svg>
                    </div>
                    <div style={{ fontWeight: 600, color: '#374151', fontSize: '0.8rem' }}>{item.text}</div>
                  </div>
                  {idx < 3 && <div style={{ width: '85%', height: '1px', background: 'rgba(0,0,0,0.06)', marginLeft: '40px' }}></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Solutions;
