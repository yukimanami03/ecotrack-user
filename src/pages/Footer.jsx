import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react'; 
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="left-column">
          <div className="logo">
            <div className="logo-icon-background">
              <Leaf size={28} color="white" strokeWidth={2.5} />
            </div>
            <span className="logo-text">EcoTrack</span>
          </div>
          
          <p>
            Smart waste management solutions for a cleaner, more sustainable environment. 
            Efficient tracking, reporting, and collection services.
          </p>

          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-links-columns">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/report">Report Issue</Link></li>
              <li><Link to="/track-status">Track Status</Link></li>
              <li><Link to="/schedule">Collection Schedule</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><Link to="/waste-collection">Waste Collection</Link></li>
              <li><Link to="/recycling">Recycling Programs</Link></li>
              <li><Link to="/hazardous-waste">Hazardous Waste</Link></li>
              <li><Link to="/bulk-pickup">Bulk Pickup</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/emergency">Emergency Hotline</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="banner-wrapper">
        <div className="hotline-banner">
          <div className="hotline-content">
            <FaPhoneAlt className="phone-icon" />
            <div>
              <div className="hotline-title">Emergency Waste Hotline</div>
              <div className="hotline-number">24/7 Support: (555) 123-WASTE</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">&copy; 2025 WasteTrack. All rights reserved.</p>
        <div className="bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;