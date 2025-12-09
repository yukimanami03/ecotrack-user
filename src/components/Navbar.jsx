import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../AuthContext';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    closeMobileMenu();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <span className="logo-main">EcoTrack</span>
          <span className="logo-subtitle">Brgy. Bulatok, Pagadian City</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={isOpen ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-links-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu} end>
                Home
              </NavLink>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/report" className="nav-links" onClick={closeMobileMenu}>
                    Report Issue
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/track-status" className="nav-links" onClick={closeMobileMenu}>
                    Track Status
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/schedule" className="nav-links" onClick={closeMobileMenu}>
                    Schedule
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-links" onClick={closeMobileMenu}>
                    About
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink to="/about" className="nav-links" onClick={closeMobileMenu}>
                  About
                </NavLink>
              </li>
            )}
          </ul>

          <div className="nav-cta-container">
            {user ? (
              <button
                className="nav-links-btn btn-primary"
                onClick={handleLogout}
                style={{
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13px',
                  padding: '12px 28px',
                  fontWeight: 'bold'
                }}
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="nav-links-btn" onClick={closeMobileMenu}>
                  Login
                </Link>
                <Link to="/signup" className="nav-links-btn btn-primary" onClick={closeMobileMenu}>
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
