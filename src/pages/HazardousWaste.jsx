import React from 'react';
import './HazardousWaste.css';
import { AlertTriangle, FlaskConical, Zap, Syringe, Monitor, Skull } from 'lucide-react';

const HazardousWaste = () => {
  const wasteCategories = [
    {
      title: "Household Chemicals",
      icon: <FlaskConical size={24} color="#e11d48" />,
      desc: "Paints, solvents, pesticides, cleaners, and automotive fluids.",
      tag: "Drop-off Only",
      tagClass: "tag-red",
      iconBg: "bg-red"
    },
    {
      title: "Batteries",
      icon: <Zap size={24} color="#d97706" />,
      desc: "AA, AAA, Lithium-ion, car batteries, and rechargeable packs.",
      tag: "Tape Ends",
      tagClass: "tag-yellow",
      iconBg: "bg-yellow"
    },
    {
      title: "Medical Waste",
      icon: <Syringe size={24} color="#e11d48" />,
      desc: "Needles, sharps, and expired medication. Must be in FDA-approved containers.",
      tag: "Sealed Container",
      tagClass: "tag-red",
      iconBg: "bg-red"
    },
    {
      title: "Electronics",
      icon: <Monitor size={24} color="#2563eb" />,
      desc: "Computers, TVs, printers, and phones containing heavy metals.",
      tag: "E-Waste Events",
      tagClass: "tag-blue",
      iconBg: "bg-blue"
    }
  ];

  return (
    <div className="hw-page">
      <header className="hw-header">
        <div className="container">
          <div className="header-title-row">
            <AlertTriangle className="header-icon" size={28} />
            <h1>Hazardous Waste Disposal</h1>
          </div>
          <p>Handle with care. Hazardous materials must never be placed in regular trash or recycling bins.</p>
        </div>
      </header>

      <div className="container main-content">
        <div className="safety-banner">
          <div className="banner-icon">
            <AlertTriangle size={24} color="#d97706" />
          </div>
          <div className="banner-text">
            <h3>Safety First</h3>
            <p>Improper disposal of hazardous waste is illegal and dangerous. Chemicals can cause fires in waste trucks or contaminate local water supplies. Always use designated drop-off centers.</p>
          </div>
        </div>

        <div className="cards-grid">
          {wasteCategories.map((item, index) => (
            <div key={index} className="waste-card">
              <div className="card-header">
                <h3>{item.title}</h3>
                <div className={`icon-box ${item.iconBg}`}>
                  {item.icon}
                </div>
              </div>
              <p className="card-desc">{item.desc}</p>
              <span className={`tag ${item.tagClass}`}>{item.tag}</span>
            </div>
          ))}
        </div>

        <div className="bottom-section">
          
          <div className="facility-box">
            <div className="facility-header">
              <Skull size={40} className="skull-icon" />
              <h2>Central Disposal Facility</h2>
            </div>
            
            <div className="facility-details">
              <div className="detail-row">
                <span className="label">Address:</span>
                <span className="value">1200 Industrial Way, Eco City</span>
              </div>
              <div className="detail-row">
                <span className="label">Hours:</span>
                <span className="value">Sat & Sun, 9:00 AM - 3:00 PM</span>
              </div>
              <div className="detail-row">
                <span className="label">Phone:</span>
                <span className="value">(555) 019-2834</span>
              </div>
            </div>

            <button className="directions-btn">Get Directions</button>
          </div>

          <div className="guidelines-box">
            <h3>Drop-off Guidelines</h3>
            <ul className="guidelines-list">
              <li>
                <span className="step-number">01</span>
                <span className="step-text">Keep products in original containers if possible. Do not mix chemicals.</span>
              </li>

              <li>
                <span className="step-number">02</span>
                <span className="step-text">Transport in the trunk of your car, secured in a box to prevent tipping.</span>
              </li>

              <li>
                <span className="step-number">03</span>
                <span className="step-text">Stay in your vehicle. Staff will unload the materials for you.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HazardousWaste;