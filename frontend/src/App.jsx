import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import LetsBuild from './pages/LetsBuild';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

// Solution Sub-Pages
import CustomSoftware from './pages/solutions/CustomSoftware';
import WebApplications from './pages/solutions/WebApplications';
import MobileApps from './pages/solutions/MobileApps';
import BusinessAutomation from './pages/solutions/BusinessAutomation';

// Product Sub-Pages
import VidhaierERP from './pages/products/VidhaierERP';

const validRoutes = [
  '/',
  '/about',
  '/solutions',
  '/products',
  '/lets-build',
  '/privacy',
  '/terms',
  '/terms-and-conditions',
  '/contact',
  '/build',
  '/solutions/custom-software',
  '/solutions/web-applications',
  '/solutions/mobile-apps',
  '/solutions/business-automation',
  '/products/vidhai-erp'
];

function AppContent() {
  const location = useLocation();
  const is404Page = !validRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {!is404Page && <Header />}
      <ErrorBoundary>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/lets-build" element={<LetsBuild />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/terms-and-conditions" element={<Navigate to="/terms" replace />} />
          <Route path="/contact" element={<Navigate to="/lets-build" replace />} />

          {/* Solution sub-routes */}
          <Route path="/solutions/custom-software" element={<CustomSoftware />} />
          <Route path="/solutions/web-applications" element={<WebApplications />} />
          <Route path="/solutions/mobile-apps" element={<MobileApps />} />
          <Route path="/solutions/business-automation" element={<BusinessAutomation />} />

          {/* Product sub-routes */}
          <Route path="/products/vidhai-erp" element={<VidhaierERP />} />

          {/* Legacy /build redirect support */}
          <Route path="/build" element={<Navigate to="/lets-build" replace />} />

          {/* Explicit 404 & catch-all routes */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
      {!is404Page && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
