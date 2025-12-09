import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; 
import { UserPlus, User, Mail, Lock } from 'lucide-react'; 
import './Signup.css'; 

export default function Signup() {
  const navigate = useNavigate();
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optional: client-side password confirmation check
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/auth/signup", {
        fullName,
        email,
        password
      });

      // Backend should return a token or message
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      alert(res.data.message || "Account created successfully!");
      navigate("/login"); 
      
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="su-page">
      <div className="su-container">
        
        <div className="su-header">
          <div className="su-logo-container">
            <UserPlus color="white" size={28} />
          </div>
          <h1 className="su-title">Create Account</h1>
          <p className="su-subtitle">Join EcoTrack and help keep your community clean</p>
        </div>

        <form onSubmit={handleSubmit} className="su-form">
          
          <div className="su-form-group">
            <label className="su-label">Full Name</label>
            <div className="su-input-wrapper">
              <div className="su-input-icon">
                <User size={18} color="#9ca3af" />
              </div>
              <input 
                className="su-input"
                type="text" 
                placeholder="Bea Baynosa" 
                value={fullName} 
                onChange={e => setFullName(e.target.value)} 
                required
              />
            </div>
          </div>

          <div className="su-form-group">
            <label className="su-label">Email</label>
            <div className="su-input-wrapper">
              <div className="su-input-icon">
                <Mail size={18} color="#9ca3af" />
              </div>
              <input 
                className="su-input"
                type="email" 
                placeholder="you@example.com" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required
              />
            </div>
          </div>

          <div className="su-form-group">
            <label className="su-label">Password</label>
            <div className="su-input-wrapper">
              <div className="su-input-icon">
                <Lock size={18} color="#9ca3af" />
              </div>
              <input 
                className="su-input"
                type="password" 
                placeholder="••••••••" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required
              />
            </div>
          </div>

          <div className="su-form-group">
            <label className="su-label">Confirm Password</label>
            <div className="su-input-wrapper">
              <div className="su-input-icon">
                <Lock size={18} color="#9ca3af" />
              </div>
              <input 
                className="su-input"
                type="password" 
                placeholder="••••••••" 
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)} 
                required
              />
            </div>
          </div>

          <div className="su-terms-text">
            By signing up, you agree to our <Link to="/terms-of-service">Terms of Service</Link> and <Link to="/privacy-policy">Privacy Policy</Link>
          </div>

          <button type="submit" className="su-create-account-btn">
            Create Account
          </button>

          <div className="su-login-prompt">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>

        </form>
      </div>
    </div>
  );
}
