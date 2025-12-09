import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { User, Mail, Lock } from 'lucide-react'; 
import './Login.css'; 

function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password
      });

      const { token, fullName, email: userEmail } = res.data;

      localStorage.setItem("token", token);
      setUser({ fullName, email: userEmail, token });
      navigate("/"); 
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
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
          <p>Sign in to your WasteTrack account</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          
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

          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            
            <Link 
              to="/forgot-password" 
              style={{ color: '#28a745', textDecoration: 'none', fontWeight: 500 }}
            >
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>

          <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign up for free</Link>
          </div>
        </form>
      </div>

      <div className="login-footer">
        By signing in, you agree to our{' '}
        <Link to="/terms-of-service">Terms of Service</Link>
        {' '}and{' '}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </div>
  );
}

export default Login;