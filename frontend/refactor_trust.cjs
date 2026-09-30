const fs = require('fs');
const path = 'n:/Naresh/My projects/pathmakerstech/frontend/src/pages/Home.jsx';
let content = fs.readFileSync(path, 'utf8');

const replacement = `        {/* TRUST SECTION */}
        <section className="trust-section" id="trust" style={{ backgroundImage: \\\`url(\${ourTrustBgImg})\\\` }}>
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
                We're proud to work with forward-thinking businesses<br/>
                across different industries. Here's what they say about us.
              </p>
              <a href="#clients" className="btn-primary" style={{ background: 'linear-gradient(90deg, #c4923e 0%, #996b20 100%)', borderColor: 'rgba(255, 255, 255, 0.2)', color: 'white', padding: '12px 28px', borderRadius: '30px', fontWeight: '500', display: 'inline-block' }}>View All Clients &rarr;</a>
            </div>
            
            <div className="trust-middle">
              <div className="stats-row">
                <div className="stat-item highlighted-stat">
                  <h3>23+</h3>
                  <p>Projects Delivered</p>
                </div>
                <div className="stat-item">
                  <h3>98%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className="stat-item">
                  <h3>1+</h3>
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
        </section>`;

const startIndex = content.indexOf('{/* TRUST SECTION */}');
const endIndex = content.indexOf('{/* FAQ & CTA SECTION */}');
if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + replacement + '\n\n        ' + content.substring(endIndex);
  
  if (!content.includes('our_trust_bg.jpg')) {
    content = content.replace("import whyUsBgImg from '../assets/why_us_bg.jpg';", "import whyUsBgImg from '../assets/why_us_bg.jpg';\nimport ourTrustBgImg from '../assets/our_trust_bg.jpg';");
  }
  
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated Trust section.');
} else {
  console.log('Could not find Trust section markers.');
}
