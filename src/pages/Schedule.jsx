import React, { useState, useEffect } from "react";
import { FaRecycle, FaLeaf, FaTrash, FaCalendarAlt, FaInfo, FaCheckCircle } from "react-icons/fa"; 
import "./Schedule.css";

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/schedules`);
        const data = await res.json();
        setSchedules(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching schedules:", err);
        setLoading(false);
      }
    };
    fetchSchedules();
  }, []);

  const formatTime = (time) => (time && time.length > 5 ? time.slice(0, 5) : time || "-");
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getEventClass = (type) => {
    if (!type) return "event-general";
    const lower = type.toLowerCase();
    if (lower.includes("recyclable")) return "event-recycling";
    if (lower.includes("organic") || lower.includes("food")) return "event-organic";
    return "event-general";
  };

  const Icons = {
    General: <FaTrash size={15} />,
    Recycle: <FaRecycle size={15} />,
    Organic: <FaLeaf size={15} />,
    Calendar: <FaCalendarAlt size={30} />
  };

  const getIcon = (type) => {
    if (!type) return Icons.General;
    const lower = type.toLowerCase();
    if (lower.includes("recyclable") || lower.includes("recycling")) return Icons.Recycle;
    if (lower.includes("organic") || lower.includes("food")) return Icons.Organic;
    return Icons.General;
  };

  return (
    <div className="page-wrapper">
      <div className="main-header">
        <div className="header-icon-circle">{Icons.Calendar}</div>
        <h1 className="header-title">Pickup Schedule</h1>
        <p className="header-subtitle">Weekly waste collection schedule for your area</p>
      </div>

      <div className="schedule-container">
        <div className="guide-section">
          <h2 className="section-title">Waste Type Guide</h2>
          <div className="guide-grid">
            <div className="guide-card guide-general">
              <div className="guide-icon">{Icons.General}</div>
              <div className="guide-info"><h4>General Waste</h4><p>Non-recyclable items</p></div>
            </div>
            <div className="guide-card guide-recycling">
              <div className="guide-icon">{Icons.Recycle}</div>
              <div className="guide-info"><h4>Recyclables</h4><p>Paper, plastic, glass</p></div>
            </div>
            <div className="guide-card guide-organic">
              <div className="guide-icon">{Icons.Organic}</div>
              <div className="guide-info"><h4>Organic Waste</h4><p>Food scraps</p></div>
            </div>
          </div>
        </div>

        <h3>Weekly Overview</h3>
        {loading ? <p>Loading schedules...</p> : (
          <div className="calendar-grid">
            {daysOfWeek.map(day => {
              const daySchedules = schedules.filter(s => s.day === day);
              const dateDisplay = daySchedules.length > 0 ? formatDate(daySchedules[0].collection_date) : "";

              return (
                <div key={day} className="calendar-card">
                  <div className="calendar-header">
                    <span className="cal-day">{day}</span>
                    {dateDisplay && <span className="cal-date">{dateDisplay}</span>}
                  </div>
                  {daySchedules.length > 0 ? daySchedules.map(item => (
                    <div key={item.id} className={`event-block ${getEventClass(item.type)}`}>
                      <div className="event-icon">{getIcon(item.type)}</div>
                      <div className="event-details">
                        <span className="event-name">{item.type}</span>
                        <span className="event-time">{formatTime(item.start_time)} - {formatTime(item.end_time)}</span>
                      </div>
                    </div>
                  )) : (
                    <div className="no-collection">
                      <p style={{ margin: 0, fontWeight: 500 }}>No Collection</p>
                      <small style={{ marginTop: "5px" }}>Enjoy your day off!</small>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="reminders-section">
          <div className="reminders-header">
            <div className="info-icon-wrapper"><FaInfo className="info-icon" /></div>
            <h3 className="reminders-title">IMPORTANT REMINDERS</h3>
          </div>
          <div className="reminders-grid">
            <div className="reminder-item"><FaCheckCircle className="check-icon" /><p>Place waste outside <strong>before 6:00 AM</strong> on scheduled days.</p></div>
            <div className="reminder-item"><FaCheckCircle className="check-icon" /><p>Separate <strong>recyclables</strong> (paper, plastic, glass) from general waste.</p></div>
            <div className="reminder-item"><FaCheckCircle className="check-icon" /><p>Do <strong><span className="underline-text">NOT</span></strong> place batteries or electronics in general bins.</p></div>
            <div className="reminder-item"><FaCheckCircle className="check-icon" /><p>Ensure all bags are <strong>secured tightly</strong> to prevent spillage.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
