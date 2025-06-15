import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // <-- Import React Router
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AdminLogin from './components/AdminDashboard/AdminLogin';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/admin/login" element={<AdminLogin />} />
        
        {/* Protected route (authentication to be added later) */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        
        {/* You can add more routes here */}
        <Route path="*" element={<App />} /> {/* fallback to main app */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
