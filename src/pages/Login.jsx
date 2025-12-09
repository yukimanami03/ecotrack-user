import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext"; // make sure you have this context
import { User, Mail, Lock } from 'lucide-react'; 
import './Login.css'; 

function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = "https://ecotrack-backend-n5pv.onrender.com";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(`${BACKEND_URL}/api/auth/login`, {
        email,
        password
      });

      const { token, fullName, email: userEmail } = res.data;

      // Save token and user info in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userEmail", userEmail);
      localStorage.setItem("userName", fullName);

      // Update auth context
      setUser({ fullName, email: userEmail, token });

      // Navigate to dashboard/home
      navigate("/");

    } catch (err) {
      console.error("Login failed:", err.response || err);
      setError(err.response?.data?.message || "Login failed. Check credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <div className="login-header">
          <div className="user-icon">
            <User color="white" strokeWidth={2.5} />
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to your EcoTrack account</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          {error && <div className="error-alert">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-with-icon">
              <Mail className="icon-style" size={20} />
              <input 
                type="email" 
                id="email" 
                placeholder="you@example.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <Lock className="icon-style" size={20} />
              <input 
                type="password" 
                id="password" 
                placeholder="••••••••" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>

      <div className="login-footer">
        © 2025 EcoTrack. All rights reserved.
      </div>
    </div>
  );
}

export default Login;
