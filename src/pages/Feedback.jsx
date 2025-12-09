import React, { useState } from 'react';
import { Star } from 'lucide-react';
import './Feedback.css';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rating:", rating);
    console.log("Data:", formData);
    alert("Thank you for your feedback!");
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-header">
        <h1>We value your feedback</h1>
        <p>Help us improve EcoTrack. Your insights shape the future of our platform and our planet.</p>
      </div>

      <div className="feedback-card">
        
        <div className="rating-section">
          <span className="rating-label">RATE YOUR EXPERIENCE</span>
          <div className="stars-container">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <label key={index}>
                  <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue} 
                    onClick={() => setRating(ratingValue)}
                    style={{ display: 'none' }}
                  />
                  <Star 
                    className="star-icon" 
                    size={35} 
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#cbd5e1"} 
                    fill={ratingValue <= (hover || rating) ? "#ffc107" : "none"}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                </label>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label>Name <span className="optional">(Optional)</span></label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Email <span className="optional">(Optional)</span></label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Feedback</label>
            <textarea 
              placeholder="Tell us what you like or how we can improve..."
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit Feedback</button>
        </form>

      </div>
    </div>
  );
};

export default Feedback;