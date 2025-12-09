import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      <div className="hero-text">
        <h1>Create a cleaner community</h1>
        <h2>With EcoTrack, you can easily report waste issues, stay informed,</h2>
        <h2>and help build a healthier environment.</h2>
      </div>

      <div className="image-strip">

        <div className="side-column">
          <div className="image-box up-1">
            <img src="/1.jpg" alt="gallery 1" />
          </div>
          <div className="image-box up-2">
            <img src="/2.jpg" alt="gallery 2" />
          </div>
        </div>

        <div className="image-box up-3">
          <img src="/3.jpg" alt="gallery 3" />
        </div>

        <div className="image-box up-4">
          <img src="/4.jpg" alt="gallery 4" />
        </div>

        <div className="image-box down-2">
          <img src="/5.jpg" alt="gallery 5" />
        </div>

        <div className="image-box up-4">
          <img src="/6.jpg" alt="gallery 6" />
        </div>

        <div className="image-box up-3">
          <img src="/7.jpg" alt="gallery 7" />
        </div>

        <div className="right-column">
          <div className="image-box up-1">
            <img src="/8.jpg" alt="gallery 8" />
          </div>
          <div className="image-box up-5">
            <img src="/9.jpg" alt="gallery 9" />
          </div>
        </div>
      </div>

      <div className="waste-categories-section">
        <div className="categories-header">
          <h1>Waste Categories We Handle</h1>
          <p>Our comprehensive waste management system handles various types of waste with specialized collection and processing methods.</p>
        </div>

        <div className="categories-grid">
          <div className="category-card">
            <div className="icon-box organic">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            </div>
            <h3>Organic Waste</h3>
            <p>Specialized collection and processing for organic waste materials.</p>
          </div>

          <div className="category-card">
            <div className="icon-box recyclable">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784l1.326-2.296 1.506-2.608 1.07-1.853.043-.074A2.5 2.5 0 0 1 9.535 8h4.93a2.5 2.5 0 0 1 2.342 1.504l.044.074.535.927"/><path d="M15 21v-6"/><path d="M18 21v-6"/><path d="M12 15h9"/><path d="M12 21h9"/></svg>
            </div>
            <h3>Recyclable</h3>
            <p>Specialized collection and processing for recyclable materials.</p>
          </div>

          <div className="category-card">
            <div className="icon-box hazardous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
            </div>
            <h3>Hazardous</h3>
            <p>Specialized collection and processing for hazardous materials.</p>
          </div>

          <div className="category-card">
            <div className="icon-box e-waste">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
            </div>
            <h3>E-Waste</h3>
            <p>Specialized collection and processing for e-waste materials.</p>
          </div>
        </div>
      </div>

      <div className="quick-report-section">
        <div className="report-header">
          <h2>Quick Waste Report</h2>
          <p>Report waste issues in your area quickly and easily</p>
        </div>

        <div className="report-form-card">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Report Type</label>
                <select defaultValue="">
                  <option value="" disabled>Select report type</option>
                  <option value="organic">Organic Waste</option>
                  <option value="recyclable">Recyclable</option>
                  <option value="hazardous">Hazardous</option>
                  <option value="ewaste">E-Waste</option>
                </select>
              </div>

              <div className="form-group">
                <label>Location</label>
                <input type="text" placeholder="Enter address or location" />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Description</label>
              <textarea placeholder="Describe the waste issue..." rows="4"></textarea>
            </div>

            <div className="form-submit">
              <button 
                type="button" 
                className="submit-btn"
                onClick={() => navigate('/report')} 
              >
                Submit Full Report
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="how-helps-section">
        <div className="helps-header">
          <h2>How EcoTrack Helps You</h2>
        </div>

        <div className="helps-grid">
          <div className="help-card">
            <div className="help-icon icon-report">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
            </div>
            <h3>Report Issues</h3>
            <p>Quickly report waste management issues with photos and location details.</p>
          </div>

          <div className="help-card">
            <div className="help-icon icon-track">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>Track Status</h3>
            <p>Monitor the status of your reported issues in real-time.</p>
          </div>

          <div className="help-card">
            <div className="help-icon icon-schedule">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <h3>View Schedule</h3>
            <p>Check weekly pickup schedules for different waste types.</p>
          </div>

          <div className="help-card">
            <div className="help-icon icon-impact">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </div>
            <h3>Make Impact</h3>
            <p>Contribute to a cleaner environment and sustainable future.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;