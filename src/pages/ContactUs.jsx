import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="header-section">
        <h2>Contact Us</h2>
        <p>
          Have a question, suggestion, or just want to say hello? We'd love to hear from you. Fill
          out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          
          <div className="info-item">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div className="details">
              <span>Email</span>
              <p>support@ecotrack.org</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div className="details">
              <span>Phone</span>
              <p>(+63) 905-7583-519</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div className="details">
              <span>Office</span>
              <p>100 Green Way, Suite 400<br />San Francisco, CA 94105</p>
            </div>
          </div>

          <div className="info-footer">
            <p>Our support team is available Monday through Friday, 9am to 6pm PST.</p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Bea Baynosa" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="bea@example.com" />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <select defaultValue="Partnership">
                <option value="General">General Inquiry</option>
                <option value="Support">Technical Support</option>
                <option value="Partnership">Partnership</option>
                <option value="Billing">Billing</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="How can we help you?" rows="5"></textarea>
            </div>

            <button type="button" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;