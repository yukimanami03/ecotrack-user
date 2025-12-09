import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmergencyHotline.css';
import { Phone, Siren, Flame, Truck, Leaf, Droplet, AlertCircle } from 'lucide-react';

const EmergencyHotline = () => {
  const navigate = useNavigate();

  const hotlines = [
    {
      id: 1,
      title: "General Emergency",
      desc: "For immediate life-threatening situations.",
      phone: "911",
      icon: <Siren size={28} />,
      colorClass: "icon-red"
    },
    {
      id: 2,
      title: "Fire Department",
      desc: "Forest fires or structural fires.",
      phone: "101",
      icon: <Flame size={28} />,
      colorClass: "icon-orange"
    },
    {
      id: 3,
      title: "Illegal Dumping",
      desc: "Report active illegal dumping in progress.",
      phone: "1-800-NO-DUMP",
      icon: <Truck size={28} />,
      colorClass: "icon-dark"
    },
    {
      id: 4,
      title: "Wildlife Rescue",
      desc: "Injured or trapped wildlife assistance.",
      phone: "1-888-WILD-HELP",
      icon: <Leaf size={28} />,
      colorClass: "icon-green"
    },
    {
      id: 5,
      title: "Chemical Spill",
      desc: "Hazardous material leaks or chemical spills.",
      phone: "1-800-SPILL-99",
      icon: <Droplet size={28} />,
      colorClass: "icon-blue"
    },
    {
      id: 6,
      title: "Poison Control",
      desc: "Exposure to toxic substances.",
      phone: "1-800-222-1222",
      icon: <AlertCircle size={28} />,
      colorClass: "icon-purple"
    }
  ];

  return (
    <div className="emergency-wrapper">
      <div className="emergency-container">
        
        <div className="emergency-header">
          <span className="urgent-tag">URGENT ASSISTANCE</span>
          <h1>Emergency Hotlines</h1>
          <p className="subtitle">
            If you witness an immediate environmental catastrophe or a life-threatening situation, 
            please contact the appropriate authorities listed below immediately.
          </p>
        </div>

        <div className="hotline-grid">
          {hotlines.map((item) => (
            <div className="hotline-card" key={item.id}>
              <div className={`icon-container ${item.colorClass}`}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href={`tel:${item.phone}`} className="call-button">
                <Phone size={18} />
                <span>{item.phone}</span>
              </a>
            </div>
          ))}
        </div>

        <div className="footer-banner">
          <div className="footer-text">
            <h4>Not an emergency?</h4>
            <p>Use our standard reporting tool for non-urgent environmental issues.</p>
          </div>
          
          <button 
            className="report-btn" 
            onClick={() => navigate('/report')}
          >
            Report Issue
          </button>
          
        </div>

      </div>
    </div>
  );
};

export default EmergencyHotline;