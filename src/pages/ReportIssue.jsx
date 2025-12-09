import React, { useState } from 'react';
import {
  FaTrashAlt, FaExclamationTriangle, FaPhone, FaQuestionCircle, FaTruck,
  FaRegCalendarAlt, FaWrench, FaSkullCrossbones, FaCheck, FaFileUpload, FaFileAlt
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
    "Purok Makiangayon", "Purok Madasigon", "Purok Malipayon", "Purok Mahigalaon",
    "Purok Matinahuron", "Purok Mahigugmaon", "Purok Makugihon", "Purok Malamboon",
    "Purok Matinabangon", "Purok Matahum", "Purok Masidlakon", "Purok Mauswagon"
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

      const res = await fetch("https://your-backend-url.onrender.com/api/reports", {
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
      {/* ... same JSX as before with forms, buttons, previews, emergency box */}
    </div>
  );
}

export default ReportIssue;
