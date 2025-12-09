import React from 'react';
import './BulkPickup.css';
import { FaCouch, FaCalendarCheck, FaQuestionCircle, FaTruck, FaArrowRight, FaCheckSquare, FaTimes, FaPhoneAlt } from 'react-icons/fa';

const BulkPickup = () => {
  return (
    <div className="bulk-pickup-page">
      
      <header className="bp-header">
        <div className="bp-container">
          <h1>Bulk Item Pickup</h1>
          <p>Too big for the bin? Schedule a special pickup for large furniture, appliances, and oversized household items.</p>
        </div>
      </header>

      <div className="bp-container main-content">

        <div className="bp-grid-row">
          <div className="bp-card pickup-list-card">
            <div className="card-header">
              <h3>What We Pick Up</h3>
              <div className="icon-badge green"><FaCouch /></div>
            </div>
            <div className="list-container">
              <div className="list-column">
                <h4 className="text-accepted">Accepted</h4>
                <ul>
                  <li><FaCheckSquare className="icon-check" /> Furniture (Sofas, Chairs)</li>
                  <li><FaCheckSquare className="icon-check" /> Mattresses (Bagged)</li>
                  <li><FaCheckSquare className="icon-check" /> Appliances (Non-Freon)</li>
                  <li><FaCheckSquare className="icon-check" /> Carpets (Rolled & Tied)</li>
                </ul>
              </div>
              <div className="list-column">
                <h4 className="text-rejected">Not Accepted</h4>
                <ul>
                  <li><FaTimes className="icon-cross" /> Construction Debris</li>
                  <li><FaTimes className="icon-cross" /> Hazardous Waste</li>
                  <li><FaTimes className="icon-cross" /> Car Parts / Tires</li>
                  <li><FaTimes className="icon-cross" /> Piano / Heavy Safes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bp-card reminders-card">
            <div className="card-header">
              <h3>Important Reminders</h3>
              <div className="icon-badge yellow"><FaCalendarCheck /></div>
            </div>
            <div className="reminders-list">
              <div className="reminder-item">
                <strong>Cancellation:</strong> Must cancel by 2 PM the day before pickup to avoid using your annual allowance.
              </div>
              <div className="reminder-item">
                <strong>Weight Limit:</strong> Items must be manageable by two people. Max 150 lbs per item.
              </div>
              <div className="reminder-item">
                <strong>Obstructions:</strong> Keep pile 5 feet away from hydrants, trees, and parked cars.
              </div>
            </div>
          </div>
        </div>

        <div className="bp-grid-row bottom-row">
          <div className="bp-section-prepare">
            <div className="section-title">
              <FaQuestionCircle className="title-icon" /> <h3>How to Prepare</h3>
            </div>
            <div className="steps-grid">
              <div className="step-box">
                <h4>1. Schedule</h4>
                <p>Book at least 48 hours in advance of your regular trash day.</p>
              </div>
              <div className="step-box">
                <h4>2. Organize</h4>
                <p>Group items together on the curb. Tape appliance doors shut.</p>
              </div>
              <div className="step-box">
                <h4>3. Set Out</h4>
                <p>Place items curbside by 6:00 AM on the confirmed date.</p>
              </div>
            </div>
          </div>

          <div className="bp-card commercial-card">
            <FaTruck className="commercial-icon" />
            <h3>Commercial Pickup?</h3>
            <p>Businesses and multi-family units over 4 dwellings require a special commercial request.</p>
            <a href="#" className="commercial-link">View Commercial Rates →</a>
          </div>
        </div>

        <div className="bp-final-cta">
          <FaCouch className="final-cta-icon1" />
          <h2>Ready to clear the clutter?</h2>
          <p>Residents are entitled to 2 free bulk pickups per year. Schedule yours online today or call our support line.</p>
          
          <div className="final-cta-buttons">
            <button className="bp-btn-primary large">Schedule Bulk Pickup</button>
            <button className="bp-btn-outline large">
              <FaPhoneAlt /> Call (555) 123-4567
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BulkPickup;
