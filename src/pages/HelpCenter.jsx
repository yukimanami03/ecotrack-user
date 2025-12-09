import React, { useState } from 'react';
import './HelpCenter.css';

const HelpCenter = () => {
  const categories = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      ),
      title: "Getting Started",
      description: "New to EcoTrack? Start here."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      ),
      title: "Reporting Issues",
      description: "How to report environmental hazards."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      ),
      title: "Safety & Privacy",
      description: "Community guidelines and data safety."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      ),
      title: "Community",
      description: "Connect with other eco-trackers."
    }
  ];

  const faqs = [
    {
      question: "How do I report a waste-related issue?",
      answer: "You can go to the “Report Issue” section, choose a category (e.g., missed collection, hazardous waste, illegal dumping), fill in the details, and submit your report. You will receive confirmation once submitted."
    },
    {
      question: "How can I check my waste collection schedule?",
      answer: "Open the “Schedule” page to view daily, weekly, or monthly waste pickup schedules. EcoTrack provides reminders and highlights important updates from your barangay."
    },
    {
      question: "Is EcoTrack free to use?",
      answer: "Absolutely. EcoTrack is a non-profit initiative dedicated to environmental preservation. All features are free for individuals."
    },
    {
      question: "How quickly are reports responded to?",
      answer: "Reports are sent directly to your barangay or municipal waste management team. Response times vary based on urgency and volume, but high-priority cases (e.g., hazardous waste, road obstructions) are addressed first."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="help-center">
      <div className="help-header">
        <h1 className="main-title">How can we help you?</h1>
        <div className="search-bar-container">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" placeholder="Search for answers..." className="search-input" />
        </div>
      </div>

      <div className="categories-grid">
        {categories.map((item, index) => (
          <div key={index} className="category-card">
            <div className="icon-wrapper">
              {item.icon}
            </div>
            <h3 className="category-title">{item.title}</h3>
            <p className="category-desc">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-header">
                <span className="question-text">{item.question}</span>
                <svg 
                  className={`chevron-icon ${activeIndex === index ? 'rotate' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              
              {activeIndex === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;