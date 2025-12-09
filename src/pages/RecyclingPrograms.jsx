import React from 'react';
import './RecyclingPrograms.css';

const RecyclingPrograms = () => {

  const programs = [
     {
      id: 1, title: "Paper & Cardboard", desc: "Clean and dry paper products go in the BLUE bin.", theme: "blue", 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
      items: ["Newspapers", "Magazines", "Cardboard boxes", "Junk mail", "Office paper"]
    },
    {
      id: 2, title: "Plastics", desc: "Empty, rinse, and cap bottles. Use the BLUE bin.", theme: "blue",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>,
      items: ["Water bottles", "Milk jugs", "Detergent bottles", "Yogurt cups", "Shampoo bottles"]
    },
    {
      id: 3, title: "Glass", desc: "Remove lids. Do not break glass. Use the GREEN bin.", theme: "green",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22h8M12 2v20M17 2H7c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>,
      items: ["Beverage bottles", "Jars", "Condiment containers"]
    },
    {
      id: 4, title: "Metals", desc: "Rinse cans thoroughly. Labels are okay.", theme: "gray",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
      items: ["Aluminum cans", "Steel cans", "Tin foil (clean)", "Cookie tins"]
    },
    {
      id: 5, title: "Organic Waste", desc: "Compostable organic material for the GREEN bin.", theme: "green",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-9"/><path d="M9.5 7.5Q8 6 6 8Q4 10 9.5 13"/><path d="M14.5 7.5Q16 6 18 8Q20 10 14.5 13"/></svg>,
      items: ["Fruit scraps", "Vegetable peels", "Coffee grounds", "Yard trimmings", "Leaves"]
    }
  ];

  return (
    <div className="recycling-page">
      <header className="recycling-header">
        <div className="container">
          <h1>Recycling Programs</h1>
          <p>Sort smart. Reduce waste. Help the planet by participating in our recycling streams.</p>
        </div>
      </header>

      <div className="container">
        <div className="programs-grid">
          {programs.map((prog) => (
            <div key={prog.id} className="program-card">
              <div className={`card-top theme-${prog.theme}`}>
                <div className="card-icon-circle">
                  {prog.icon}
                </div>
                <h3>{prog.title}</h3>
                <p>{prog.desc}</p>
              </div>
              <div className="card-bottom">
                <span className="items-label">ACCEPTED ITEMS</span>
                <div className="tags-container">
                  {prog.items.map((item, index) => (
                    <span key={index} className="item-tag">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

          <div className="why-recycle-section">
          <div className="why-text">
            <h2>Why Recycle?</h2>
            <p>
              Recycling conserves natural resources, saves energy, and reduces greenhouse gas emissions. 
              Last year, EcoTrack communities diverted over <strong>5,000 tons</strong> of waste from landfills. 
              Your participation makes a direct impact on our local environment.
            </p>
          </div>
          <div className="why-icon-wrapper">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="48" 
    height="48" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >

    <path d="M5 6h14" />

    <path d="M16 6l-1 5" />
    <path d="M9 16l-2-10" />
    <path d="M10 16h4" />
    
    <path d="M14 16l2-2" />
    <path d="M9 16l2 2" />
    <path d="M15 11l2-1" />
  </svg>
</div>
        </div>

      </div>
    </div>
  );
};

export default RecyclingPrograms;