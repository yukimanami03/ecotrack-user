import React, { useState, useEffect } from 'react';
import './TrackStatus.css';
import { useAuth } from '../AuthContext';
import { FiMapPin, FiCalendar, FiClock, FiTrendingUp } from 'react-icons/fi';

function TrackStatus() {
  const { user } = useAuth();
  const token = user?.token;

  const [activeFilter, setActiveFilter] = useState('All Issues'); 
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    if (!token) return;

    const fetchReports = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/reports', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await res.json();

        if (res.ok) {
          setIssues(data);
        } else {
          console.error('Failed to fetch reports:', data.message);
        }
      } catch (err) {
        console.error('Error fetching reports:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [token]);

  const filters = ['All Issues', 'Pending', 'In Progress', 'Resolved'];

  const filteredIssues = activeFilter === 'All Issues'
    ? issues
    : issues.filter(issue => issue.status === activeFilter);

  const getCount = (status) =>
    status === 'All Issues' ? issues.length : issues.filter(i => i.status === status).length;

  const getStatusText = (status) => {
    if (status === 'Resolved') return 'Completed';
    if (status === 'Pending') return 'Awaiting review';
    return 'Being processed';
  };

  if (!token) return <p className="loading-msg">Please log in to view reports.</p>;

  return (
    <div className="track-status-page">
      <div className="hero-section">
        <div className="hero-icon-container">
            <FiTrendingUp className="hero-icon" />
        </div>
        <h1 className="header-title">Track Issue Status</h1>
        <p className="header-subtitle">Monitor the progress of your reported issues</p>
      </div>

      <div className="content-container">
        <div className="filter-tabs">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              disabled={loading}
            >
              {filter} ({loading ? '...' : getCount(filter)})
            </button>
          ))}
        </div>

        {loading ? (
          <div className="loading-container" style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
            <p>Loading reports...</p>
          </div>
        ) : (
          <>
            {filteredIssues.length === 0 ? (
              <div className="no-reports">
                <p>No reports found</p>
              </div>
            ) : (
              <div className="issues-grid">
                {filteredIssues.map(issue => (
                  <div key={issue.id} className="issue-card">
                    
                    <div className="ts-card-top">
                      <h3 className="issue-title">{issue.issue_type || "Untitled Issue"}</h3>
                      <span className={`status-badge status-${issue.status?.toLowerCase().replace(/\s+/g, '-') || 'pending'}`}>
                        {issue.status || 'Pending'}
                      </span>
                    </div>

                    <p className="issue-description">
                        {issue.description 
                            ? (issue.description.length > 80 ? issue.description.substring(0, 80) + "..." : issue.description)
                            : "No description provided."}
                    </p>
                    
                    <hr className="card-divider" />

                    <div className="card-details">
                      <div className="detail-row">
                        <FiMapPin className="detail-icon" />
                        <span>{issue.location || "Location not specified"}</span>
                      </div>
                      
                      <div className="detail-row">
                        <FiCalendar className="detail-icon" />
                        <span>
                            {issue.created_at 
                                ? new Date(issue.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) 
                                : "Date unknown"}
                        </span>
                      </div>
                      
                      <div className="detail-row">
                        <FiClock className="detail-icon" />
                        <span>{getStatusText(issue.status)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default TrackStatus;