import React from 'react';
import './WasteCollection.css';

const WasteCollection = () => {
  return (
    <div className="wc-page-wrapper">
      <header className="wc-main-header">
        <div className="wc-container">
          <h1 className="wc-title">Waste Collection Services</h1>
          <p className="wc-subtitle">Reliable, efficient, and eco-friendly waste management for our community.</p>
          <p className="wc-subtitle">Check your schedule and learn what goes in the bin.</p>
        </div>
      </header>

      <div className="wc-container wc-content-grid">
        
        <div className="wc-column-left">
          
          <div className="wc-card">
            <div className="wc-card-header">
              <h2 className="wc-card-title">Weekly Collection Schedule</h2>
              <div className="wc-icon-box wc-icon-green-bg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
            </div>
            <p className="wc-text-muted">Regular household waste is collected once a week. Please ensure your bins are placed curbside by 7:00 AM on your designated day.</p>
            
            <div className="wc-schedule-list">
              <div className="wc-schedule-row">
                <span>Zone A (North)</span>
                <span className="wc-day-highlight">Monday</span>
              </div>
              <div className="wc-schedule-row">
                <span>Zone B (East)</span>
                <span className="wc-day-highlight">Tuesday</span>
              </div>
              <div className="wc-schedule-row">
                <span>Zone C (South)</span>
                <span className="wc-day-highlight">Wednesday</span>
              </div>
              <div className="wc-schedule-row">
                <span>Zone D (West)</span>
                <span className="wc-day-highlight">Thursday</span>
              </div>
            </div>
            
            <div className="wc-footer-note">
              <svg className="wc-map-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Unsure of your zone? Use our interactive map tool (Coming soon)</span>
            </div>
          </div>

          <div className="wc-items-grid">
            
            <div className="wc-card">
              <div className="wc-card-header">
                <h3 className="wc-card-title">Accepted Items</h3>
                <div className="wc-icon-box wc-icon-check-bg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
              </div>
              <ul className="wc-list wc-list-accepted">
                <li>Household food waste</li>
                <li>Non-recyclable packaging</li>
                <li>Diapers and hygiene products</li>
                <li>Pet waste (bagged)</li>
                <li>Broken ceramics/glass</li>
              </ul>
            </div>

            <div className="wc-card">
              <div className="wc-card-header">
                <h3 className="wc-card-title">Prohibited Items</h3>
                <div className="wc-icon-box wc-icon-danger-bg">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
              </div>
              <ul className="wc-list wc-list-prohibited">
                <li>Hazardous chemicals</li>
                <li>Electronics (E-Waste)</li>
                <li>Construction debris</li>
                <li>Hot ashes</li>
                <li>Recyclable materials</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="wc-column-right">
          
          <div className="wc-card">
            <div className="wc-card-header">
              <h3 className="wc-card-title">Bin Placement Guidelines</h3>
              <div className="wc-icon-box wc-icon-blue-bg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              </div>
            </div>
            
            <div className="wc-guidelines-list">
              <div className="wc-guideline-item">
                <div className="wc-badge">1</div>
                <p>Place bins 3 feet apart and away from cars or mailboxes.</p>
              </div>
              <div className="wc-guideline-item">
                <div className="wc-badge">2</div>
                <p>Lids must be fully closed to prevent litter and pests.</p>
              </div>
              <div className="wc-guideline-item">
                <div className="wc-badge">3</div>
                <p>Handles should face your house, wheels toward the street.</p>
              </div>
            </div>
          </div>

          <div className="wc-card wc-card-holiday">
            <div className="wc-card-header">
              <h3 className="wc-card-title wc-holiday-title">
                <svg className="wc-clock-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Holiday Schedule
              </h3>
            </div>
            <p className="wc-holiday-desc">Collection is delayed by one day following these holidays:</p>
            <div className="wc-holiday-grid">
              <ul>
                <li>New Year's Day</li>
                <li>Independence Day</li>
                <li>Thanksgiving</li>
              </ul>
              <ul>
                <li>Memorial Day</li>
                <li>Labor Day</li>
                <li>Christmas Day</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WasteCollection;