import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    linkedin: '',
    role: '',
    work_auth_status: '',
    preferred_location: '',
    availability: '',
    comments: '',
    resume: null
  });

  const [formErrors, setFormErrors] = useState({
    full_name: '',
    email: '',
    phone: '',
    linkedin: '',
    role: '',
    work_auth_status: '',
    preferred_location: '',
    availability: '',
    resume: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Input filtering functions
  const filterNameInput = (value) => {
    // Only allow letters, spaces, hyphens, and apostrophes
    return value.replace(/[^a-zA-Z\s\-']/g, '');
  };

  const filterPhoneInput = (value) => {
    // Only allow numbers, +, -, (, ) and spaces
    return value.replace(/[^\d+\-()\s]/g, '');
  };

  const filterEmailInput = (value) => {
    // Allow alphanumeric and common email characters
    return value.replace(/[^a-zA-Z0-9@._-]/g, '');
  };

  const filterRoleInput = (value) => {
    // Allow letters, numbers, spaces, and common punctuation
    return value.replace(/[^a-zA-Z0-9\s\-_,.]/g, '');
  };

  const filterAvailabilityInput = (value) => {
    // Allow letters, numbers, spaces, and common punctuation
    return value.replace(/[^a-zA-Z0-9\s\-_,.]/g, '');
  };

  const filterCommentsInput = (value) => {
    // Allow most characters except potentially harmful ones
    return value.replace(/[<>]/g, '');
  };

  // Validation functions
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'full_name':
        if (!value.trim()) {
          error = 'Full Name is required';
        } else if (/^\s+$/.test(value)) {
          error = 'Full Name cannot contain only spaces';
        } else if (value.length < 2) {
          error = 'Full Name must be at least 2 characters long';
        } else if (value.length > 100) {
          error = 'Full Name must be less than 100 characters';
        } else if (!/^[a-zA-Z\s\-']+$/.test(value)) {
          error = 'Full Name can only contain letters, spaces, hyphens, and apostrophes';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          error = 'Please enter a valid email address (e.g., example@domain.com)';
        } else if (value.length > 100) {
          error = 'Email must be less than 100 characters';
        }
        break;

      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else {
          const digitsOnly = value.replace(/\D/g, '');
          if (digitsOnly.length < 10) {
            error = 'Phone number must be at least 10 digits';
          } else if (digitsOnly.length > 15) {
            error = 'Phone number must be less than 15 digits';
          } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(value)) {
            error = 'Please enter a valid phone number';
          }
        }
        break;

      case 'linkedin':
        if (value && !/^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-_]+\/?$/.test(value)) {
          error = 'Please enter a valid LinkedIn profile URL';
        }
        break;

      case 'role':
        if (!value.trim()) {
          error = 'Role is required';
        } else if (/^\s+$/.test(value)) {
          error = 'Role cannot contain only spaces';
        } else if (value.length < 2) {
          error = 'Role must be at least 2 characters long';
        } else if (value.length > 100) {
          error = 'Role must be less than 100 characters';
        }
        break;

      case 'work_auth_status':
        if (!value) {
          error = 'Work authorization status is required';
        }
        break;

      case 'preferred_location':
        if (!value) {
          error = 'Preferred location is required';
        }
        break;

      case 'availability':
        if (!value.trim()) {
          error = 'Availability is required';
        } else if (/^\s+$/.test(value)) {
          error = 'Availability cannot contain only spaces';
        } else if (value.length < 2) {
          error = 'Availability must be at least 2 characters long';
        } else if (value.length > 100) {
          error = 'Availability must be less than 100 characters';
        }
        break;

      case 'comments':
        if (value && /^\s+$/.test(value)) {
          error = 'Comments cannot contain only spaces';
        } else if (value && value.length > 500) {
          error = 'Comments must be less than 500 characters';
        }
        break;

      case 'resume':
        if (!value) {
          error = 'Resume is required';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    let filteredValue = value;

    // Apply input filtering based on field type
    switch (name) {
      case 'full_name':
        filteredValue = filterNameInput(value);
        break;
      case 'phone':
        filteredValue = filterPhoneInput(value);
        break;
      case 'email':
        filteredValue = filterEmailInput(value);
        break;
      case 'role':
        filteredValue = filterRoleInput(value);
        break;
      case 'availability':
        filteredValue = filterAvailabilityInput(value);
        break;
      case 'comments':
        filteredValue = filterCommentsInput(value);
        break;
      default:
        break;
    }

    setFormData(prev => ({ ...prev, [name]: filteredValue }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      const error = validateField(name, filteredValue);
      setFormErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, resume: file }));
    
    // Clear file error when file is selected
    if (formErrors.resume) {
      setFormErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        errors[key] = error;
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setError('Please fix the errors in the form before submitting.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      
      // Append all form fields to FormData
      Object.keys(formData).forEach(key => {
        if (key !== 'resume' && formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });
      
      // Append the resume file if it exists
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      // Send to backend API
      const response = await fetch('https://api.kgktechnologies.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit your information. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Input field component with proper error handling
  const InputField = ({ label, name, type = 'text', required = false, placeholder = '', options = [], ...props }) => (
    <div style={{ marginBottom: '25px' }}>
      <label style={{ 
        display: 'block', 
        marginBottom: '8px', 
        fontWeight: '600',
        color: formErrors[name] ? '#d32f2f' : '#333'
      }}>
        {label} {required && '*'}
      </label>
      
      {type === 'select' ? (
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
          style={{
            width: '100%',
            padding: '12px',
            border: `1px solid ${formErrors[name] ? '#d32f2f' : '#ddd'}`,
            borderRadius: '6px',
            fontSize: '16px',
            transition: 'all 0.3s',
            backgroundColor: 'white',
            boxSizing: 'border-box'
          }}
          {...props}
        >
          <option value="">Select...</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
          placeholder={placeholder}
          rows="4"
          style={{
            width: '100%',
            padding: '12px',
            border: `1px solid ${formErrors[name] ? '#d32f2f' : '#ddd'}`,
            borderRadius: '6px',
            fontSize: '16px',
            transition: 'all 0.3s',
            resize: 'vertical',
            boxSizing: 'border-box',
            fontFamily: 'inherit'
          }}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '12px',
            border: `1px solid ${formErrors[name] ? '#d32f2f' : '#ddd'}`,
            borderRadius: '6px',
            fontSize: '16px',
            transition: 'all 0.3s',
            boxSizing: 'border-box'
          }}
          {...props}
        />
      )}
      
      {formErrors[name] && (
        <div style={{
          color: '#d32f2f',
          fontSize: '14px',
          marginTop: '5px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {formErrors[name]}
        </div>
      )}
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        color: '#333',
        boxSizing: 'border-box'
      }}
    >
      {/* No Jobs Note */}
      <div style={{
        background: 'rgba(255, 230, 230, 0.95)',
        color: '#b71c1c',
        border: '1px solid #ffcdd2',
        borderRadius: '8px',
        padding: '18px 24px',
        marginBottom: '32px',
        fontSize: 'clamp(1rem, 2vw, 1.15rem)',
        fontWeight: 500,
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(183,28,28,0.05)'
      }}>
        <span role="img" aria-label="info" style={{marginRight: '8px'}}>⚠️</span>
        <span>
          <strong>Note:</strong> There are currently <u>no open job positions</u> at our office. However, you can still fill out the interest form below. We will keep your information and get back to you when suitable opportunities arise.
        </span>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          background: 'linear-gradient(135deg, #6e48aa 0%, #9d50bb 100%)',
          color: 'white',
          padding: 'clamp(40px, 8vw, 60px) 20px',
          borderRadius: '10px',
          textAlign: 'center',
          marginBottom: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}
      >
        <motion.h1 
          animate={{ scale: [0.9, 1.05, 1] }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: '700',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            lineHeight: '1.2'
          }}
        >
          Future Opportunities at GK Technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}
        >
          We're always looking for talented individuals to join our team. While we may not be hiring right now, submit your information and we'll reach out when opportunities arise.
        </motion.p>
      </motion.div>

      {/* Form Section */}
      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            background: 'white',
            padding: 'clamp(20px, 4vw, 40px)',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
          }}
        >
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
            marginBottom: '30px', 
            color: '#6e48aa', 
            textAlign: 'center' 
          }}>
            Express Your Interest
          </h2>
          
          {error && (
            <div style={{
              background: 'rgba(255, 230, 230, 0.95)',
              color: '#b71c1c',
              border: '1px solid #ffcdd2',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '25px',
              fontSize: '1rem',
              fontWeight: 500,
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} style={{ border: '1px solid #eee', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '10px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
              gap: '20px', 
              marginBottom: '20px' 
            }}>
              <InputField
                label="Full Name"
                name="full_name"
                type="text"
                required={true}
                placeholder="Enter your full name (letters only)"
              />
              
              <InputField
                label="Email Address"
                name="email"
                type="email"
                required={true}
                placeholder="example@domain.com"
              />
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
              gap: '20px', 
              marginBottom: '20px' 
            }}>
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                required={true}
                placeholder="Enter your phone number (digits only)"
                maxLength="15"
              />
              
              <InputField
                label="LinkedIn Profile"
                name="linkedin"
                type="url"
                required={false}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
              gap: '20px', 
              marginBottom: '20px' 
            }}>
              <InputField
                label="Role Interested In"
                name="role"
                type="text"
                required={true}
                placeholder="Enter the role you're interested in"
              />
              
              <InputField
                label="Work Authorization Status"
                name="work_auth_status"
                type="select"
                required={true}
                options={[
                  { value: 'OPT', label: 'OPT' },
                  { value: 'CPT', label: 'CPT' },
                  { value: 'H1B', label: 'H1B' },
                  { value: 'Green Card', label: 'Green Card' },
                  { value: 'Citizen', label: 'US Citizen' },
                  { value: 'Other', label: 'Other' }
                ]}
              />
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
              gap: '20px', 
              marginBottom: '20px' 
            }}>
              <InputField
                label="Preferred Location"
                name="preferred_location"
                type="select"
                required={true}
                options={[
                  { value: 'Remote', label: 'Remote' },
                  { value: 'On-site', label: 'On-site' },
                  { value: 'Hybrid', label: 'Hybrid' },
                  { value: 'Hyderabad', label: 'Hyderabad' },
                  { value: 'Flexible', label: 'Flexible' }
                ]}
              />
              
              <InputField
                label="Availability to Start"
                name="availability"
                type="text"
                required={true}
                placeholder="e.g., Immediate, 2 weeks notice, etc."
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600',
                color: formErrors.resume ? '#d32f2f' : '#333'
              }}>
                Resume Upload *
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                required
                accept=".pdf,.doc,.docx"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `1px dashed ${formErrors.resume ? '#d32f2f' : '#ddd'}`,
                  borderRadius: '6px',
                  fontSize: '16px',
                  transition: 'all 0.3s',
                  boxSizing: 'border-box'
                }}
              />
              {formErrors.resume && (
                <div style={{
                  color: '#d32f2f',
                  fontSize: '14px',
                  marginTop: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  {formErrors.resume}
                </div>
              )}
            </div>
            
            <InputField
              label="Additional Comments"
              name="comments"
              type="textarea"
              required={false}
              placeholder="Any additional comments or information you'd like to share"
            />
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, boxShadow: '0 5px 15px rgba(110, 72, 170, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              style={{
                background: isLoading ? '#ccc' : 'linear-gradient(135deg, #6e48aa 0%, #9d50bb 100%)',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                fontSize: '1rem',
                fontWeight: '600',
                borderRadius: '6px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto',
                display: 'block',
                position: 'relative'
              }}
            >
              {isLoading ? (
                <>
                  <span style={{ visibility: 'hidden' }}>Submit Your Interest</span>
                  <span style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ animation: 'spin 1s linear infinite' }}
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                  </span>
                </>
              ) : (
                'Submit Your Interest'
              )}
            </motion.button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'white',
            padding: 'clamp(20px, 4vw, 40px)',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.7 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6e48aa"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginBottom: '20px' }}
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </motion.div>
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
            marginBottom: '20px', 
            color: '#6e48aa' 
          }}>
            Thank You!
          </h2>
          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.1rem)', 
            lineHeight: '1.6', 
            maxWidth: '600px', 
            margin: '0 auto 30px' 
          }}>
            Thank you for submitting your interest! We've received your information and we'll reach out when opportunities open up that match your profile.
          </p>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 5px 15px rgba(110, 72, 170, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSubmitted(false);
              setFormData({
                full_name: '',
                email: '',
                phone: '',
                linkedin: '',
                role: '',
                work_auth_status: '',
                preferred_location: '',
                availability: '',
                comments: '',
                resume: null
              });
              setFormErrors({
                full_name: '',
                email: '',
                phone: '',
                linkedin: '',
                role: '',
                work_auth_status: '',
                preferred_location: '',
                availability: '',
                resume: ''
              });
            }}
            style={{
              background: 'linear-gradient(135deg, #6e48aa 0%, #9d50bb 100%)',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            Submit Another Response
          </motion.button>
        </motion.div>
      )}
      
      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          marginTop: '60px',
          textAlign: 'center'
        }}
      >
        <h2 style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', 
          marginBottom: '40px', 
          color: '#6e48aa' 
        }}>
          Why Consider GK Technologies?
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', 
          gap: '30px' 
        }}>
          {[
            {
              icon: '🚀',
              title: 'Innovative Projects',
              description: 'Work on cutting-edge technologies that shape the future.'
            },
            {
              icon: '🌍',
              title: 'Global Impact',
              description: 'Your work will reach users around the world.'
            },
            {
              icon: '👥',
              title: 'Collaborative Culture',
              description: 'Join a team that values teamwork and knowledge sharing.'
            },
            {
              icon: '📈',
              title: 'Growth Opportunities',
              description: 'Continuous learning and career advancement.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'white',
                padding: '30px 20px',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '20px' }}>{item.icon}</div>
              <h3 style={{ 
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', 
                marginBottom: '15px', 
                color: '#6e48aa' 
              }}>
                {item.title}
              </h3>
              <p style={{ lineHeight: '1.6', color: '#666' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Add some global styles for the spinner animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        * {
          box-sizing: border-box;
        }
        
        @media (max-width: 768px) {
          .form-container {
            padding: 20px !important;
          }
          
          .input-field {
            max-width: 100% !important;
          }
        }
        
        @media (max-width: 480px) {
          body {
            padding: 10px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Careers;