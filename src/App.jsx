import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './pages/Footer'; 
import HelpCenter from './pages/HelpCenter'; 
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ReportIssue from './pages/ReportIssue';
import TrackStatus from './pages/TrackStatus';
import Schedule from './pages/Schedule'; 
import ContactUs from './pages/ContactUs'; 
import PrivateRoute from './components/PrivateRoute';
import EmergencyHotline from './pages/EmergencyHotline'; 
import Feedback from './pages/Feedback'; 
import WasteCollection from './pages/WasteCollection';
import RecyclingPrograms from './pages/RecyclingPrograms';
import HazardousWaste from './pages/HazardousWaste';
import BulkPickup from './pages/BulkPickup';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        
        <Navbar /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/emergency" element={<EmergencyHotline />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/waste-collection" element={<WasteCollection />} />
          <Route path="/recycling" element={<RecyclingPrograms />} />
          <Route path="/hazardous-waste" element={<HazardousWaste />} />
          <Route path="/bulk-pickup" element={<BulkPickup />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route 
            path="/report" 
            element={
              <PrivateRoute>
                <ReportIssue />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/track-status" 
            element={
              <PrivateRoute>
                <TrackStatus />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/schedule" 
            element={
              <PrivateRoute>
                <Schedule />
              </PrivateRoute>
            } 
          />
        </Routes>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;