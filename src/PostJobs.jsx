import { useState } from 'react';

const PostJobs = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    description: '',
    requirements: '',
    responsibilities: '',
    is_active: true,
    skills: ['']
  });

  const [errors, setErrors] = useState({
    title: false,
    department: false,
    location: false,
    description: false,
    requirements: false,
    responsibilities: false
  });

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto 60px auto',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    //   background: 'linear-gradient(135deg, #f5f7fa 0%, #dbdde1ff 100%)',
      minHeight: '90vh',
      color: '#333',
      lineHeight: '1.4'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      padding: '20px'
    },
    h1: {
      fontSize: '2.5rem',
      background: 'linear-gradient(90deg, #3498db, #2c3e50)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '10px'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#555',
      maxWidth: '600px',
      margin: '0 auto'
    },
    content: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      '@media (max-width: 768px)': {
        flexDirection: 'column'
      }
    },
    formContainer: {
      flex: 1,
      minWidth: '300px'
    },
    previewContainer: {
      flex: 1,
      minWidth: '300px'
    },
    formCard: {
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      padding: '30px',
      height: '100%'
    },
    previewCard: {
      background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      padding: '30px',
      height: '100%'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '600',
      color: '#2c3e50'
    },
    input: {
      width: '90%',
      padding: '12px 15px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'border-color 0.3s'
    },
    textarea: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'border-color 0.3s',
      minHeight: '100px',
      resize: 'vertical',
      fontFamily: 'inherit'
    },
    inputFocus: {
      borderColor: '#3498db',
      outline: 'none'
    },
    error: {
      color: '#e74c3c',
      fontSize: '14px',
      marginTop: '5px'
    },
    btn: {
      background: 'linear-gradient(90deg, #3498db, #2c3e50)',
      color: 'white',
      border: 'none',
      padding: '15px 25px',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'transform 0.3s, box-shadow 0.3s',
      width: '100%'
    },
    btnHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
    },
    skillInputGroup: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px'
    },
    skillInput: {
      flex: 1
    },
    addSkill: {
      padding: '12px',
      background: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      marginLeft: '5px'
    },
    removeSkill: {
      padding: '12px',
      background: '#e74c3c',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      marginLeft: '5px'
    },
    statusIndicator: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.2)',
      padding: '5px 10px',
      borderRadius: '20px',
      fontSize: '14px',
      zIndex: 1
    },
    statusDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      marginRight: '5px'
    },
    active: {
      background: '#2ecc71'
    },
    inactive: {
      background: '#e74c3c'
    },
    previewHeader: {
      textAlign: 'center',
      marginBottom: '25px',
      position: 'relative',
      zIndex: 1
    },
    companyLogo: {
      width: '80px',
      height: '80px',
      background: 'white',
      borderRadius: '50%',
      margin: '0 auto 15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '30px',
      color: '#3498db'
    },
    jobTitle: {
      fontSize: '24px',
      marginBottom: '10px'
    },
    jobMeta: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '20px',
      flexWrap: 'wrap'
    },
    jobTag: {
      background: 'rgba(255, 255, 255, 0.2)',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '14px'
    },
    previewSection: {
      marginBottom: '20px',
      position: 'relative',
      zIndex: 1
    },
    previewSectionTitle: {
      fontSize: '18px',
      marginBottom: '10px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
      paddingBottom: '5px'
    },
    previewContent: {
      fontSize: '15px',
      lineHeight: '1.5',
      whiteSpace: 'pre-line'
    },
    skillsPreview: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    },
    skillPill: {
      background: 'rgba(255, 255, 255, 0.2)',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '14px'
    },
    emptyText: {
      fontStyle: 'italic',
      opacity: '0.7'
    },
    previewCardBefore: {
      content: '""',
      position: 'absolute',
      top: '-50px',
      right: '-50px',
      width: '150px',
      height: '150px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%'
    },
    previewCardAfter: {
      content: '""',
      position: 'absolute',
      bottom: '-80px',
      left: '-80px',
      width: '200px',
      height: '200px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%'
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData(prev => ({
      ...prev,
      skills: newSkills
    }));
  };

  const addSkill = () => {
    setFormData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const removeSkill = (index) => {
    if (formData.skills.length <= 1) return;
    
    const newSkills = [...formData.skills];
    newSkills.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      skills: newSkills
    }));
  };

  const validateForm = () => {
    const newErrors = {
      title: !formData.title,
      department: !formData.department,
      location: !formData.location,
      description: !formData.description,
      requirements: !formData.requirements,
      responsibilities: !formData.responsibilities
    };
    
    setErrors(newErrors);
    
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      alert('Job posted successfully!');
      // Reset form
      setFormData({
        title: '',
        department: '',
        location: '',
        description: '',
        requirements: '',
        responsibilities: '',
        is_active: true,
        skills: ['']
      });
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.h1}>Post a New Job Opening</h1>
        <p style={styles.subtitle}>
          Attract top talent by creating an engaging job posting that highlights your company's opportunities.
        </p>
      </header>
      
      <div style={styles.content}>
        <div style={styles.formContainer}>
          <div style={styles.formCard}>
            <form id="jobForm" onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="title">Job Title *</label>
                <input 
                  type="text" 
                  id="title" 
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Senior Frontend Developer"
                    style={{
                    ...styles.input,
                    ...(errors.title && { borderColor: '#e74c3c' }),
                    ...(focusedField === "title" && styles.inputFocus)
                }}
                onFocus={() => setFocusedField("title")}
                onBlur={() => setFocusedField(null)}
                />
                {errors.title && <div style={styles.error}>Job title is required</div>}
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="department">Department *</label>
                <input 
                  type="text" 
                  id="department" 
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  placeholder="e.g., Engineering"
                    style={{
                            ...styles.input,
                            ...(errors.title && { borderColor: '#e74c3c' }),
                            ...(focusedField === "title" && styles.inputFocus)
                        }}
                        onFocus={() => setFocusedField("title")}
                        onBlur={() => setFocusedField(null)}
                        />
                {errors.department && <div style={styles.error}>Department is required</div>}
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="location">Location *</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g., Remote, New York, etc."
                    style={{
                            ...styles.input,
                            ...(errors.title && { borderColor: '#e74c3c' }),
                            ...(focusedField === "title" && styles.inputFocus)
                        }}
                        onFocus={() => setFocusedField("title")}
                        onBlur={() => setFocusedField(null)}
                        />
                {errors.location && <div style={styles.error}>Location is required</div>}
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="description">Job Description *</label>
                <textarea 
                  id="description" 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Detailed description of the job..."
                        style={{
                            ...styles.input,
                            ...(errors.title && { borderColor: '#e74c3c' }),
                            ...(focusedField === "title" && styles.inputFocus)
                        }}
                        onFocus={() => setFocusedField("title")}
                        onBlur={() => setFocusedField(null)}
                        />
                {errors.description && <div style={styles.error}>Description is required</div>}
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="requirements">Requirements *</label>
                <textarea 
                  id="requirements" 
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="List the required skills, experience, and qualifications..."
                        style={{
                            ...styles.input,
                            ...(errors.title && { borderColor: '#e74c3c' }),
                            ...(focusedField === "title" && styles.inputFocus)
                        }}
                        onFocus={() => setFocusedField("title")}
                        onBlur={() => setFocusedField(null)}
                        />
                {errors.requirements && <div style={styles.error}>Requirements are required</div>}
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="responsibilities">Responsibilities *</label>
                <textarea 
                  id="responsibilities" 
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleInputChange}
                  placeholder="List the key responsibilities for this position..."
                        style={{
                            ...styles.input,
                            ...(errors.title && { borderColor: '#e74c3c' }),
                            ...(focusedField === "title" && styles.inputFocus)
                        }}
                        onFocus={() => setFocusedField("title")}
                        onBlur={() => setFocusedField(null)}
                        />
                {errors.responsibilities && <div style={styles.error}>Responsibilities are required</div>}
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Skills</label>
                <div id="skills-container">
                  {formData.skills.map((skill, index) => (
                    <div key={index} style={styles.skillInputGroup}>
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                        placeholder="e.g., React, JavaScript"
                            style={{
                                ...styles.input,
                                ...(errors.title && { borderColor: '#e74c3c' }),
                                ...(focusedField === "title" && styles.inputFocus)
                            }}
                            onFocus={() => setFocusedField("title")}
                            onBlur={() => setFocusedField(null)}
                            />
                      {formData.skills.length > 1 && (
                        <button 
                          type="button" 
                          style={styles.removeSkill}
                          onClick={() => removeSkill(index)}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                      )}
                      {index === formData.skills.length - 1 && (
                        <button 
                          type="button" 
                          style={styles.addSkill}
                          onClick={addSkill}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="is_active">
                  <input 
                    type="checkbox" 
                    id="is_active" 
                    name="is_active"
                    checked={formData.is_active}
                    onChange={handleInputChange}
                  />
                  This job posting is active and visible to applicants
                </label>
              </div>
              
              <button 
                type="submit" 
                style={styles.btn}
                onMouseOver={(e) => e.target.style = {...styles.btn, ...styles.btnHover}}
                onMouseOut={(e) => e.target.style = styles.btn}
              >
                Post Job Opening
              </button>
            </form>
          </div>
        </div>
        
        <div style={styles.previewContainer}>
          <PreviewCard formData={formData} styles={styles} />
        </div>
      </div>
    </div>
  );
};

const PreviewCard = ({ formData, styles }) => {
  return (
    <div style={styles.previewCard}>
      <div style={styles.statusIndicator}>
        <span style={{...styles.statusDot, ...(formData.is_active ? styles.active : styles.inactive)}}></span>
        <span className="status-text">{formData.is_active ? 'Active' : 'Inactive'}</span>
      </div>
      
      <div style={styles.previewHeader}>
        <div style={styles.companyLogo}>
          <i className="fas fa-briefcase"></i>
        </div>
        <h2 style={styles.jobTitle}>{formData.title || 'Job Title'}</h2>
        <div style={styles.jobMeta}>
          <span style={styles.jobTag}>{formData.department || 'Department'}</span>
          <span style={styles.jobTag}>{formData.location || 'Location'}</span>
        </div>
      </div>
      
      <div style={styles.previewSection}>
        <h3 style={styles.previewSectionTitle}>Description</h3>
        <div style={styles.previewContent}>
          {formData.description || (
            <span style={styles.emptyText}>Job description will appear here</span>
          )}
        </div>
      </div>
      
      <div style={styles.previewSection}>
        <h3 style={styles.previewSectionTitle}>Requirements</h3>
        <div style={styles.previewContent}>
          {formData.requirements || (
            <span style={styles.emptyText}>Job requirements will appear here</span>
          )}
        </div>
      </div>
      
      <div style={styles.previewSection}>
        <h3 style={styles.previewSectionTitle}>Responsibilities</h3>
        <div style={styles.previewContent}>
          {formData.responsibilities || (
            <span style={styles.emptyText}>Job responsibilities will appear here</span>
          )}
        </div>
      </div>
      
      <div style={styles.previewSection}>
        <h3 style={styles.previewSectionTitle}>Skills</h3>
        <div style={styles.skillsPreview}>
          {formData.skills.filter(skill => skill.trim()).length > 0 ? (
            formData.skills.filter(skill => skill.trim()).map((skill, index) => (
              <span key={index} style={styles.skillPill}>{skill}</span>
            ))
          ) : (
            <span style={styles.emptyText}>Skills will appear here</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostJobs;