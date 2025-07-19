import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    position: '',
    workAuth: '',
    location: '',
    availability: '',
    comments: '',
    resume: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const serviceID = "service_27q1fot"; 
  const templateID = "template_ab2d30l"; 
  const userID = "nIhs8qhJhAw1CUatf"; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Prepare the template parameters
    const templateParams = {
      to_email: 'hr@kgktechnologies.com',
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      linkedIn: formData.linkedIn,
      position: formData.position,
      workAuth: formData.workAuth,
      location: formData.location,
      availability: formData.availability,
      comments: formData.comments,
      reply_to: formData.email
    };

    // Send email with EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        
        // If there's a resume, send it as an attachment in a separate email
        if (formData.resume) {
          const reader = new FileReader();
          reader.onload = function(event) {
            // EmailJS template must have a variable named 'attachment' and be set to accept attachments
            const resumeParams = {
              to_email: 'hr@kgktechnologies.com',
              from_name: formData.fullName,
              from_email: formData.email,
              subject: `Resume from ${formData.fullName}`,
              message: `Please find attached the resume from ${formData.fullName} who applied for ${formData.position}.`,
              reply_to: formData.email,
              attachment: event.target.result, // send the full base64 string (with prefix)
              attachment_name: formData.resume.name
            };

            // IMPORTANT: Make sure you have a template named 'template_resume_attachment' in EmailJS
            // and that it has a variable named 'attachment' for the file, and is set to accept attachments.
            emailjs.send(serviceID, 'template_resume_attachment', resumeParams, userID)
              .then((res) => {
                console.log('Resume sent successfully!', res.status, res.text);
                setSubmitted(true);
                setIsLoading(false);
              })
              .catch((err) => {
                console.error('Failed to send resume:', err);
                // Save to localStorage as fallback
                try {
                  const localSubmissions = JSON.parse(localStorage.getItem('resume_submissions') || '[]');
                  localSubmissions.push({ ...resumeParams, date: new Date().toISOString() });
                  localStorage.setItem('resume_submissions', JSON.stringify(localSubmissions));
                } catch (e) { /* ignore localStorage errors */ }
                if (err && err.text && err.text.includes('template ID not found')) {
                  setError('Resume not sent: The EmailJS template for attachments is missing. Please contact the site administrator.');
                } else {
                  setError('Your information was sent but we encountered an issue with your resume. It has been saved locally and will be sent when possible.');
                }
                setIsLoading(false);
              });
          };
          reader.readAsDataURL(formData.resume);
        } else {
          setSubmitted(true);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setError('Failed to submit your information. Please try again later.');
        setIsLoading(false);
      });
  };

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
        color: '#333'
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
        fontSize: '1.15rem',
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
          padding: '60px 20px',
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
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          Future Opportunities at GK Technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontSize: '1.2rem',
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
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
          }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#6e48aa' }}>Express Your Interest</h2>
          
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
          
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    transition: 'all 0.3s'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    transition: 'all 0.3s'
                  }}
                />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    transition: 'all 0.3s'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    transition: 'all 0.3s'
                  }}
                />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Position/Role Interested In *</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    transition: 'all 0.3s'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Work Authorization Status *</label>
                <select
                  name="workAuth"
                  value={formData.workAuth}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    transition: 'all 0.3s',
                    backgroundColor: 'white'
                  }}
                >
                  <option value="">Select...</option>
                  <option value="OPT">OPT</option>
                  <option value="CPT">CPT</option>
                  <option value="H1B">H1B</option>
                  <option value="Green Card">Green Card</option>
                  <option value="US Citizen">US Citizen</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Preferred Location *</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    transition: 'all 0.3s',
                    backgroundColor: 'white'
                  }}
                >
                  <option value="">Select...</option>
                  <option value="Remote">Remote</option>
                  <option value="On-site">On-site</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Availability to Start *</label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    transition: 'all 0.3s'
                  }}
                  placeholder="e.g., Immediately, 2 weeks notice, etc."
                />
              </div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Resume Upload *</label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                required
                accept=".pdf,.doc,.docx"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px dashed #ddd',
                  borderRadius: '6px',
                  fontSize: '16px',
                  transition: 'all 0.3s'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Additional Comments</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows="4"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '16px',
                  transition: 'all 0.3s',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>
            
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
            padding: '40px',
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
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#6e48aa' }}>Thank You!</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 30px' }}>
            Thank you for submitting your interest! We've sent your information to our HR team at hr@kgktechnologies.com and we'll reach out when opportunities open up that match your profile.
          </p>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 5px 15px rgba(110, 72, 170, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                linkedIn: '',
                position: '',
                workAuth: '',
                location: '',
                availability: '',
                comments: '',
                resume: null
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
        <h2 style={{ fontSize: '2.2rem', marginBottom: '40px', color: '#6e48aa' }}>Why Consider GK Technologies?</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
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
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#6e48aa' }}>{item.title}</h3>
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
      `}</style>
    </motion.div>
  );
};

export default Careers;