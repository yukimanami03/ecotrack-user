import React from 'react';
import './About.css';
import { 
  IoRadioOutline, 
  IoHeartOutline, 
  IoLeafOutline, 
  IoPeopleOutline,
  IoShieldCheckmarkOutline,
  IoRibbonOutline,
  IoGlobeOutline,
  IoBulbOutline
} from 'react-icons/io5';

const About = () => {
  return (
    <div className="about-page-container">
      <div className="about-page-hero">
        <h1 className="about-page-hero-title">About EcoTrack</h1>
        <p className="about-page-hero-subtitle">
          Building cleaner, greener communities through smart waste management
        </p>
      </div>

      <div className="about-page-content-wrapper">
        <section className="about-page-mission-values">
          <div className="about-page-mv-card">
            <div className="about-page-icon-box">
              <IoRadioOutline size={28} />
            </div>
            <h2>Our Mission</h2>
            <p>
              To create a cleaner, more sustainable environment by empowering communities with modern tools for waste management. We believe that technology can bridge the gap between citizens and waste management services, making our cities cleaner and greener.
            </p>
          </div>

          <div className="about-page-mv-card">
            <div className="about-page-icon-box">
              <IoHeartOutline size={28} />
            </div>
            <h2>Our Values</h2>
            <p>
              We're committed to sustainability, transparency, and community engagement. Every report matters, every issue counts, and every user contributes to a cleaner environment. Together, we're building a better future for our planet.
            </p>
          </div>
        </section>

        <section className="about-page-principles">
          <div className="about-page-section-header">
            <h2>Our Core Principles</h2>
            <p>These principles guide everything we do and shape our approach to waste management</p>
          </div>

          <div className="about-page-grid">
            <PrincipleCard 
              icon={<IoLeafOutline size={22} />}
              title="Environmental Care" 
              desc="Committed to reducing waste and promoting sustainable practices in our communities."
            />
            <PrincipleCard 
              icon={<IoPeopleOutline size={22} />}
              title="Community First" 
              desc="Empowering residents to take an active role in maintaining clean neighborhoods."
            />
            <PrincipleCard 
              icon={<IoShieldCheckmarkOutline size={22} />}
              title="Transparency" 
              desc="We believe in open communication and provide real-time tracking and updates."
            />
            <PrincipleCard 
              icon={<IoRibbonOutline size={22} />}
              title="Reliability" 
              desc="Our commitment to consistent, dependable service ensures communities can count on us."
            />
            <PrincipleCard 
              icon={<IoGlobeOutline size={22} />}
              title="Sustainability" 
              desc="We focus on long-term environmental impact, promoting recycling and responsible practices."
            />
            <PrincipleCard 
              icon={<IoBulbOutline size={22} />}
              title="Innovation" 
              desc="We leverage cutting-edge technology to solve age-old waste management challenges."
            />
            <PrincipleCard 
              icon={<IoRadioOutline size={22} />}
              title="Efficiency" 
              desc="Streamlining waste management processes for faster response and resolution."
            />
            <PrincipleCard 
              icon={<IoHeartOutline size={22} />}
              title="Care & Quality" 
              desc="Dedicated to providing excellent service and maintaining high standards."
            />
          </div>
        </section>

        <section className="about-page-how-it-works">
          <div className="about-page-hiw-container">
            <h2>How It Works</h2>
            <div className="about-page-steps">
              <div className="about-page-step">
                <div className="about-page-step-num">1</div>
                <h3>Report Issues</h3>
                <p>Spot a waste management problem? Report it instantly with details and location.</p>
              </div>
              <div className="about-page-step">
                <div className="about-page-step-num">2</div>
                <h3>Track Progress</h3>
                <p>Monitor your reported issues in real-time as they move from pending to resolved.</p>
              </div>
              <div className="about-page-step">
                <div className="about-page-step-num">3</div>
                <h3>Stay Informed</h3>
                <p>Check pickup schedules and stay updated on waste collection in your area.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page-contact">
          <h2>Get In Touch</h2>
          <p>Have questions or feedback? We'd love to hear from you. Together, we can make our communities cleaner and greener.</p>
          <div className="about-page-contact-details">
            <span className="about-page-email">support@ecotrack.com</span>
            <span className="about-page-divider">|</span>
            <span className="about-page-phone">(+63) 9057583519</span>
          </div>
        </section>
      </div>
    </div>
  );
};

const PrincipleCard = ({ icon, title, desc }) => (
  <div className="about-page-principle-card">
    <div className="about-page-icon-box-small">
       {icon}
    </div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

export default About;
