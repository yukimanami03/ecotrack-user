import React, { useState } from 'react';
import {
  FaTrashAlt, FaExclamationTriangle, FaPhone, FaQuestionCircle, FaTruck,
  FaRegCalendarAlt, FaWrench, FaSkullCrossbones, FaCheck, FaFileUpload, FaFileAlt, 
  FaSpinner 
} from 'react-icons/fa';
import './ReportIssue.css';
import { useAuth } from '../AuthContext';

function ReportIssue() {
  const { user } = useAuth();
  const token = user?.token;

  const [selectedIssue, setSelectedIssue] = useState('');
  const [priority, setPriority] = useState(''); 
  const [location, setLocation] = useState(''); 
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [name, setName] = useState(user?.fullName || '');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const MAX_CHARS = 500;

  const issueTypes = [
    { name: 'Missed Collection', icon: <FaRegCalendarAlt /> },
    { name: 'Illegal Dumping', icon: <FaExclamationTriangle /> },
    { name: 'Overflowing Bin', icon: <FaTrashAlt /> },
    { name: 'Damaged Bin', icon: <FaWrench /> },
    { name: 'Hazardous Waste', icon: <FaSkullCrossbones /> },
    { name: 'Bulk Pickup Request', icon: <FaTruck /> },
    { name: 'Other Issue', icon: <FaQuestionCircle /> }
  ];

  const priorityLevels = ['Low', 'Medium', 'High', 'Critical'];

  const purokOptions = [
    "Purok Makiangayon", 
    "Purok Madasigon", 
    "Purok Malipayon", 
    "Purok Mahigalaon",
    "Purok Matinahuron",
    "Purok Mahigugmaon",
    "Purok Makugihon",
    "Purok Malamboon",
    "Purok Matinabangon",
    "Purok Matahum",
    "Purok Masidlakon",
    "Purok Mauswagon"
  ];

  const isFormValid =
    selectedIssue &&
    priority !== '' && 
    location !== '' && 
    description.trim() &&
    name.trim() &&
    email.trim() &&
    !isSubmitting;

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  };

  const removeFile = (fileName) => {
    setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) return;

    if (!token) {
      alert("You must be logged in to submit a report.");
      return;
    }

    setIsSubmitting(true); 
    setShowSuccessMessage(false);

    try {
      const formData = new FormData();
      
      formData.append("issue_type", selectedIssue);
      formData.append("priority", priority);
      formData.append("location", location);
      formData.append("description", description);
      formData.append("full_name", name);
      formData.append("phone", phone);
      formData.append("email", email);

      files.forEach(file => {
        formData.append("files", file); 
      });

      const res = await fetch("http://localhost:3000/api/reports", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData
      });

      const data = await res.json();

      if (res.ok) {
        setShowSuccessMessage(true);
        setSelectedIssue('');
        setPriority(''); 
        setLocation('');
        setDescription('');
        setFiles([]);
        setPhone('');
        setName(user?.fullName || '');
        setEmail(user?.email || '');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => setShowSuccessMessage(false), 10000);
      } else {
        alert(data.message || "Failed to submit report.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div className="page-container">
      <div className="hero-header">
        <div className="hero-icon-circle"><FaFileAlt /></div>
        <h1 className="hero-title">Report a Waste Management Issue</h1>
        <p className="hero-subtitle">Help us keep your community clean by reporting waste management issues</p>
      </div>

      <div className="report-issue-container">
        {showSuccessMessage && (
          <div className="success-message">
            <FaCheck className="success-icon" />
            Report submitted successfully! We'll investigate and respond within 24 hours.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          
          <section className="form-section">
            <h2 className="section-title">What type of issue are you reporting?</h2>
            <div className="issue-grid">
              {issueTypes.map(issue => (
                <button
                  key={issue.name}
                  type="button"
                  onClick={() => setSelectedIssue(issue.name)}
                  className={`issue-button ${selectedIssue === issue.name ? 'active' : ''}`}
                  disabled={isSubmitting}
                >
                  <span className="issue-icon">{issue.icon}</span>
                  {issue.name}
                </button>
              ))}
            </div>
          </section>

          <section className="form-section">
            <label className="form-label">Priority Level</label>
            <div className="priority-grid">
              {priorityLevels.map((level) => (
                <button
                  key={level}
                  type="button"
                  className={`priority-btn ${priority === level ? 'active' : ''} ${level.toLowerCase()}`}
                  onClick={() => setPriority(level)}
                  disabled={isSubmitting}
                >
                  {level}
                </button>
              ))}
            </div>
          </section>

          <section className="form-section">
            <div className="form-group">
              <label htmlFor="purok-select" className="form-label purok-label">Purok</label>
              <select
                id="purok-select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="form-input purok-select"
                required
                disabled={isSubmitting}
              >
                <option value="" disabled>Select Purok</option>
                {purokOptions.map((purokName) => (
                  <option key={purokName} value={purokName}>
                    {purokName}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <section className="form-section">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              placeholder="Please provide detailed information about the waste issue..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              maxLength={MAX_CHARS}
              className="form-input"
              rows={5}
              required
              disabled={isSubmitting}
            ></textarea>
            <p className="char-counter">{description.length}/{MAX_CHARS} characters</p>
          </section>

          <section className="form-section">
            <label htmlFor="file-upload" className="form-label">Attach Photos</label>
            <div className="file-upload-area">
              <FaFileUpload className="file-upload-icon" />
              <p>Drag and drop images here, or click to select files.</p>
              <input
                type="file"
                id="file-upload"
                className="file-upload-input"
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/gif"
                multiple
                disabled={isSubmitting}
              />
            </div>
            {files.length > 0 && (
              <div className="file-preview-list">
                {files.map((file, index) => (
                  <div key={index} className="file-preview-item">
                    <img src={URL.createObjectURL(file)} alt={file.name} className="file-preview-image" />
                    <span className="file-name">{file.name}</span>
                    <button
                      type="button"
                      className="remove-file-button"
                      onClick={() => removeFile(file.name)}
                      disabled={isSubmitting}
                    >&times;</button>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="form-section">
            <h2 className="section-title">Contact Information</h2>
            
            <div className="contact-row">
              <div className="form-group">
                <label htmlFor="full-name" className="form-label contact-label">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="form-input contact-input"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone-number" className="form-label contact-label">Phone Number</label>
                <input
                  id="phone-number"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="form-input contact-input"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email-address" className="form-label contact-label">Email Address</label>
              <input
                id="email-address"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-input contact-input"
                required
                disabled={isSubmitting}
              />
            </div>
          </section>

          <div className="submit-container">
            <button
              type="submit"
              className={`submit-button ${isFormValid ? 'enabled' : ''}`}
              disabled={!isFormValid}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  Submitting Report...
                </>
              ) : (
                'Submit Report'
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="emergency-box">
        <div className="emergency-header">
          <FaExclamationTriangle className="emergency-icon1" />
          <h3 className="emergency-title1">Emergency Situations</h3>
        </div>
        <p className="emergency-description">
          For immediate health hazards, chemical spills, or urgent waste emergencies, please call our 24/7 emergency hotline instead of using this form.
        </p>
        <a href="tel:911" className="emergency-button">
          <FaPhone className="button-icon" /> Call Emergency Hotline
        </a>
      </div>
    </div>
  );
}

export default ReportIssue;