import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    comment: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResponse, setSubmitResponse] = useState("");

  // Clear submit response after 10 seconds
  useEffect(() => {
    if (submitResponse) {
      const timer = setTimeout(() => {
        setSubmitResponse("");
      }, 10000); 
      return () => clearTimeout(timer);
    }
  }, [submitResponse]);

  // Scroll to top on page load and handle hash navigation
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Validation functions
  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Comment validation
    if (!formData.comment.trim()) {
      newErrors.comment = "Message is required";
    } else if (formData.comment.trim().length < 10) {
      newErrors.comment = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitResponse("");

    try {
      // Simulate email sending to HR
      const emailData = {
        to: "hr@kgktechnologies.com",
        subject: `New Contact Form Submission from ${formData.fullName}`,
        body: `
          New contact form submission:
          
          Name: ${formData.fullName}
          Mobile: ${formData.mobile}
          Email: ${formData.email}
          Message: ${formData.comment}
          
          Submitted on: ${new Date().toLocaleString()}
        `
      };

      // In a real application, you would send this data to your backend
      // For now, we'll simulate the API call
      await simulateEmailSending(emailData);

      setSubmitResponse("success");
      
      // Reset form
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        comment: ""
      });
      
      // Scroll to response message
      setTimeout(() => {
        const responseElement = document.getElementById("submitResponse");
        if (responseElement) {
          responseElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

    } catch (error) {
      setSubmitResponse("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simulate email sending function
  const simulateEmailSending = (emailData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 90% success rate
        if (Math.random() > 0.1) {
          console.log("Email would be sent to:", emailData.to);
          console.log("Email content:", emailData);
          resolve();
        } else {
          reject(new Error("Failed to send email"));
        }
      }, 1500);
    });
  };

  return (
    <div style={{ 
      maxWidth: "1200px", 
      margin: "0 auto", 
      padding: "0 15px",
      width: "100%",
      boxSizing: "border-box"
    }}>
      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, #006c94 0%, #004d70 100%)",
        color: "white",
        padding: "40px 20px",
        borderRadius: "12px",
        marginBottom: "40px",
        textAlign: "center",
        width: "100%"
      }}>
        <h1 style={{ 
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)", 
          marginBottom: "15px",
          lineHeight: "1.2"
        }}>Contact Us</h1>
        <p style={{ 
          fontSize: "clamp(0.9rem, 2vw, 1.1rem)", 
          maxWidth: "700px", 
          margin: "0 auto",
          lineHeight: "1.5"
        }}>
          We'd love to hear from you! Reach out to our team for any inquiries or to discuss how we can help your business grow.
        </p>
      </div>
      
      {/* Contact Section */}
      <div style={{ 
        display: "flex", 
        flexDirection: "row", 
        gap: "30px", 
        marginBottom: "40px",
        width: "100%",
        flexWrap: "wrap"
      }}>
        {/* Contact Information */}
        <div style={{ 
          flex: "1 1 400px", 
          minWidth: "300px",
          padding: "25px 20px", 
          background: "#f8f9fa", 
          borderRadius: "12px", 
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
          boxSizing: "border-box"
        }}>
          <h2 style={{ 
            color: "#006c94", 
            marginBottom: "20px", 
            fontSize: "clamp(1.3rem, 3vw, 1.5rem)",
            textAlign: "center"
          }}>Contact Information</h2>
          <div style={{ marginBottom: "25px" }}>
            <div style={{ 
              display: "flex", 
              alignItems: "flex-start", 
              marginBottom: "20px",
              flexDirection: "row"
            }}>
              <span style={{ 
                background: "#006c94", 
                color: "white", 
                padding: "8px", 
                borderRadius: "50%", 
                marginRight: "15px", 
                display: "inline-flex", 
                alignItems: "center", 
                justifyContent: "center", 
                width: "36px", 
                height: "36px",
                flexShrink: 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>
              </span>
              <div>
                <p style={{ margin: "0 0 5px 0", fontWeight: "600", fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>GK Technologies</p>
                <p style={{ margin: "0", color: "#666", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>Saint Louis, MO, United States.</p>
              </div>
            </div>
            <div style={{ 
              display: "flex", 
              alignItems: "flex-start", 
              marginBottom: "20px",
              flexDirection: "row"
            }}>
              <span style={{ 
                background: "#006c94", 
                color: "white", 
                padding: "8px", 
                borderRadius: "50%", 
                marginRight: "15px", 
                display: "inline-flex", 
                alignItems: "center", 
                justifyContent: "center", 
                width: "36px", 
                height: "36px",
                flexShrink: 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/></svg>
              </span>
              <div>
                <p style={{ margin: "0", color: "#666", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>+1-314-354-0634</p>
              </div>
            </div>
            <div style={{ 
              display: "flex", 
              alignItems: "flex-start",
              flexDirection: "row"
            }}>
              <span style={{ 
                background: "#006c94", 
                color: "white", 
                padding: "8px", 
                borderRadius: "50%", 
                marginRight: "15px", 
                display: "inline-flex", 
                alignItems: "center", 
                justifyContent: "center", 
                width: "36px", 
                height: "36px",
                flexShrink: 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
              </span>
              <div>
                <p style={{ margin: "0", fontWeight: "600", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>hr@kgktechnologies.com</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "25px" }}>
            <iframe 
              title="Google Maps - Saint Louis" 
              width="100%" 
              height="250" 
              frameBorder="0" 
              style={{ 
                border: 0, 
                borderRadius: "8px", 
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                minHeight: "200px"
              }} 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.023997671989!2d-90.19940408464783!3d38.627002579607865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b31a3f5262ff%3A0x1d389abecf4a5a6d!2sSaint%20Louis%2C%20MO%2C%20USA!5e0!3m2!1sen!2sus!4v1715600000000" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ 
          flex: "1 1 400px", 
          minWidth: "300px",
          padding: "25px 20px", 
          background: "#ffffff", 
          borderRadius: "12px", 
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          boxSizing: "border-box"
        }}>
          <h2 id="contactForm" style={{ 
            color: "#006c94", 
            marginBottom: "20px", 
            fontSize: "clamp(1.3rem, 3vw, 1.5rem)",
            textAlign: "center"
          }}>Get in Touch</h2>
          
          {/* Submit Response Message */}
          {submitResponse && (
            <div 
              id="submitResponse"
              style={{
                padding: "12px 15px",
                marginBottom: "20px",
                borderRadius: "8px",
                backgroundColor: submitResponse === "success" ? "#d4edda" : "#f8d7da",
                color: submitResponse === "success" ? "#155724" : "#721c24",
                border: `1px solid ${submitResponse === "success" ? "#c3e6cb" : "#f5c6cb"}`,
                fontWeight: "500",
                fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                textAlign: "center"
              }}
            >
              {submitResponse === "success" 
                ? "✅ Thank you for your message! We have received your inquiry and will get back to you soon. An email has been sent to our HR team." 
                : "❌ There was an error submitting your form. Please try again or contact us directly."}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "15px",
            width: "100%"
          }}>
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "6px", 
                fontWeight: "600", 
                color: "#444",
                fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
              }}>Full Name:</label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name" 
                style={{ 
                  padding: "12px 15px", 
                  border: `1px solid ${errors.fullName ? "#dc3545" : "#ddd"}`, 
                  borderRadius: "8px", 
                  width: "100%", 
                  fontSize: "clamp(0.9rem, 2vw, 1rem)", 
                  transition: "border 0.3s", 
                  boxSizing: "border-box" 
                }} 
              />
              {errors.fullName && <p style={{ color: "#dc3545", margin: "5px 0 0", fontSize: "0.8rem" }}>{errors.fullName}</p>}
            </div>
            
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "6px", 
                fontWeight: "600", 
                color: "#444",
                fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
              }}>Mobile Number:</label>
              <input 
                type="text" 
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter your mobile number" 
                style={{ 
                  padding: "12px 15px", 
                  border: `1px solid ${errors.mobile ? "#dc3545" : "#ddd"}`, 
                  borderRadius: "8px", 
                  width: "100%", 
                  fontSize: "clamp(0.9rem, 2vw, 1rem)", 
                  transition: "border 0.3s", 
                  boxSizing: "border-box" 
                }} 
              />
              {errors.mobile && <p style={{ color: "#dc3545", margin: "5px 0 0", fontSize: "0.8rem" }}>{errors.mobile}</p>}
            </div>
            
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "6px", 
                fontWeight: "600", 
                color: "#444",
                fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
              }}>Email:</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email" 
                style={{ 
                  padding: "12px 15px", 
                  border: `1px solid ${errors.email ? "#dc3545" : "#ddd"}`, 
                  borderRadius: "8px", 
                  width: "100%", 
                  fontSize: "clamp(0.9rem, 2vw, 1rem)", 
                  transition: "border 0.3s", 
                  boxSizing: "border-box" 
                }} 
              />
              {errors.email && <p style={{ color: "#dc3545", margin: "5px 0 0", fontSize: "0.8rem" }}>{errors.email}</p>}
            </div>
            
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "6px", 
                fontWeight: "600", 
                color: "#444",
                fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
              }}>Comment:</label>
              <textarea 
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                placeholder="Enter your message" 
                style={{ 
                  padding: "12px 15px", 
                  border: `1px solid ${errors.comment ? "#dc3545" : "#ddd"}`, 
                  borderRadius: "8px", 
                  width: "100%", 
                  height: "120px", 
                  fontSize: "clamp(0.9rem, 2vw, 1rem)", 
                  transition: "border 0.3s", 
                  boxSizing: "border-box", 
                  resize: "vertical" 
                }}
              ></textarea>
              {errors.comment && <p style={{ color: "#dc3545", margin: "5px 0 0", fontSize: "0.8rem" }}>{errors.comment}</p>}
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{ 
                padding: "14px", 
                background: isSubmitting ? "#6c757d" : "#006c94", 
                color: "white", 
                border: "none", 
                borderRadius: "8px", 
                cursor: isSubmitting ? "not-allowed" : "pointer", 
                fontSize: "clamp(0.9rem, 2vw, 1rem)", 
                fontWeight: "600", 
                transition: "background 0.3s", 
                marginTop: "10px",
                opacity: isSubmitting ? 0.7 : 1,
                width: "100%"
              }}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* Why Choose Section */}
      <div style={{ 
        marginTop: "40px", 
        marginBottom: "40px", 
        textAlign: "center",
        width: "100%"
      }}>
        <h2 style={{ 
          color: "#006c94", 
          marginBottom: "30px", 
          fontSize: "clamp(1.3rem, 3vw, 1.5rem)"
        }}>Why Choose GK Technologies?</h2>
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "20px", 
          flexWrap: "wrap",
          width: "100%"
        }}>
          
          <div style={{ 
            background: "white", 
            borderRadius: "12px", 
            padding: "20px 15px", 
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)", 
            width: "100%",
            maxWidth: "350px",
            minWidth: "280px",
            transition: "transform 0.3s", 
            cursor: "pointer",
            boxSizing: "border-box"
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ 
              width: "70px", 
              height: "70px", 
              borderRadius: "50%", 
              background: "#f0f0f0", 
              margin: "0 auto 15px", 
              overflow: "hidden" 
            }}>
              <div style={{ 
                width: "100%", 
                height: "100%", 
                background: "#006c94", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: "white", 
                fontSize: "1.5rem" 
              }}>🚀</div>
            </div>
            <h3 style={{ 
              margin: "0 0 5px", 
              color: "#333",
              fontSize: "clamp(1rem, 2vw, 1.1rem)"
            }}>Innovation Driven</h3>
            <p style={{ 
              margin: "0 0 10px", 
              color: "#006c94", 
              fontWeight: "600",
              fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
            }}>Modern Tech Stack</p>
            <p style={{ 
              color: "#666", 
              fontSize: "clamp(0.8rem, 2vw, 0.85rem)", 
              lineHeight: "1.5" 
            }}>We thrive on innovation, always adapting with the latest technologies to build scalable digital solutions.</p>
          </div>

          <div style={{ 
            background: "white", 
            borderRadius: "12px", 
            padding: "20px 15px", 
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)", 
            width: "100%",
            maxWidth: "350px",
            minWidth: "280px",
            transition: "transform 0.3s", 
            cursor: "pointer",
            boxSizing: "border-box"
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ 
              width: "70px", 
              height: "70px", 
              borderRadius: "50%", 
              background: "#f0f0f0", 
              margin: "0 auto 15px", 
              overflow: "hidden" 
            }}>
              <div style={{ 
                width: "100%", 
                height: "100%", 
                background: "#006c94", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: "white", 
                fontSize: "1.5rem" 
              }}>🤝</div>
            </div>
            <h3 style={{ 
              margin: "0 0 5px", 
              color: "#333",
              fontSize: "clamp(1rem, 2vw, 1.1rem)"
            }}>Client-Centric</h3>
            <p style={{ 
              margin: "0 0 10px", 
              color: "#006c94", 
              fontWeight: "600",
              fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
            }}>You Come First</p>
            <p style={{ 
              color: "#666", 
              fontSize: "clamp(0.8rem, 2vw, 0.85rem)", 
              lineHeight: "1.5" 
            }}>Our clients are at the heart of everything we do — your goals are our priorities.</p>
          </div>

          <div style={{ 
            background: "white", 
            borderRadius: "12px", 
            padding: "20px 15px", 
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)", 
            width: "100%",
            maxWidth: "350px",
            minWidth: "280px",
            transition: "transform 0.3s", 
            cursor: "pointer",
            boxSizing: "border-box"
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div style={{ 
              width: "70px", 
              height: "70px", 
              borderRadius: "50%", 
              background: "#f0f0f0", 
              margin: "0 auto 15px", 
              overflow: "hidden" 
            }}>
              <div style={{ 
                width: "100%", 
                height: "100%", 
                background: "#006c94", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: "white", 
                fontSize: "1.5rem" 
              }}>🌐</div>
            </div>
            <h3 style={{ 
              margin: "0 0 5px", 
              color: "#333",
              fontSize: "clamp(1rem, 2vw, 1.1rem)"
            }}>Global Vision</h3>
            <p style={{ 
              margin: "0 0 10px", 
              color: "#006c94", 
              fontWeight: "600",
              fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
            }}>Think Big, Act Smart</p>
            <p style={{ 
              color: "#666", 
              fontSize: "clamp(0.8rem, 2vw, 0.85rem)", 
              lineHeight: "1.5" 
            }}>We are a startup with a global vision — building tech that solves real-world problems efficiently.</p>
          </div>

        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{ 
        background: "linear-gradient(135deg, #006c94 0%, #004d70 100%)",
        color: "white",
        padding: "40px 20px",
        borderRadius: "12px",
        marginBottom: "40px",
        textAlign: "center",
        width: "100%"
      }}>
        <h2 style={{ 
          fontSize: "clamp(1.3rem, 3vw, 1.5rem)", 
          marginBottom: "30px"
        }}>What Our Clients Say</h2>
        <div style={{ 
          display: "flex", 
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%"
        }}>
          <div style={{ 
            background: "rgba(255,255,255,0.1)", 
            padding: "25px 20px", 
            borderRadius: "12px",
            width: "100%",
            maxWidth: "400px",
            minWidth: "280px",
            backdropFilter: "blur(10px)",
            boxSizing: "border-box"
          }}>
            <div style={{ 
              fontSize: "1.5rem", 
              marginBottom: "15px",
              color: "#ffd700"
            }}>"</div>
            <p style={{ 
              fontStyle: "italic",
              lineHeight: "1.6",
              marginBottom: "15px",
              fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
            }}>GK Technologies transformed our digital infrastructure. Their team delivered beyond our expectations with their technical expertise and attention to detail.</p>
            <p style={{ 
              fontWeight: "600",
              marginBottom: "5px",
              fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
            }}>Sarah Williams</p>
            <p style={{ 
              opacity: "0.8",
              fontSize: "clamp(0.75rem, 2vw, 0.8rem)"
            }}>CEO, TechSolutions Inc.</p>
          </div>
          
          <div style={{ 
            background: "rgba(255,255,255,0.1)", 
            padding: "25px 20px", 
            borderRadius: "12px",
            width: "100%",
            maxWidth: "400px",
            minWidth: "280px",
            backdropFilter: "blur(10px)",
            boxSizing: "border-box"
          }}>
            <div style={{ 
              fontSize: "1.5rem", 
              marginBottom: "15px",
              color: "#ffd700"
            }}>"</div>
            <p style={{ 
              fontStyle: "italic",
              lineHeight: "1.6",
              marginBottom: "15px",
              fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
            }}>The API solutions provided by GK Technologies helped us streamline our operations and improve efficiency by 40%. Highly recommended!</p>
            <p style={{ 
              fontWeight: "600",
              marginBottom: "5px",
              fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
            }}>Michael Chen</p>
            <p style={{ 
              opacity: "0.8",
              fontSize: "clamp(0.75rem, 2vw, 0.8rem)"
            }}>CTO, DataSystems Ltd.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ 
        marginBottom: "40px",
        background: "#f8f9fa",
        padding: "30px 20px",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <h2 style={{ 
          color: "#006c94", 
          marginBottom: "25px",
          fontSize: "clamp(1.3rem, 3vw, 1.5rem)",
          textAlign: "center"
        }}>Frequently Asked Questions</h2>
        <div style={{ 
          maxWidth: "800px", 
          margin: "0 auto",
          width: "100%"
        }}>
          <details style={{ 
            marginBottom: "15px", 
            padding: "15px", 
            background: "white", 
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            transition: "all 0.3s",
            width: "100%",
            boxSizing: "border-box"
          }}>
            <summary style={{ 
              fontWeight: "600", 
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              color: "#333",
              cursor: "pointer",
              outline: "none"
            }}>What services do you offer?</summary>
            <p style={{ 
              marginTop: "12px", 
              color: "#555",
              lineHeight: "1.6",
              fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
            }}>We provide comprehensive web development, API services, cloud solutions, and data analytics to help businesses of all sizes achieve their digital transformation goals.</p>
          </details>

          <details style={{ 
            marginBottom: "15px", 
            padding: "15px", 
            background: "white", 
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            transition: "all 0.3s",
            width: "100%",
            boxSizing: "border-box"
          }}>
            <summary style={{ 
              fontWeight: "600", 
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              color: "#333",
              cursor: "pointer",
              outline: "none"
            }}>How can I contact support?</summary>
            <p style={{ 
              marginTop: "12px", 
              color: "#555",
              lineHeight: "1.6",
              fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
            }}>Our support team is available Monday through Friday from 9 AM to 6 PM. You can reach us via email at hr@kgktechnologies.com or call us at +1-314-354-0634. For urgent matters, please use our contact form above.</p>
          </details>

          <details style={{ 
            marginBottom: "15px", 
            padding: "15px", 
            background: "white", 
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            transition: "all 0.3s",
            width: "100%",
            boxSizing: "border-box"
          }}>
            <summary style={{ 
              fontWeight: "600", 
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              color: "#333",
              cursor: "pointer",
              outline: "none"
            }}>Do you provide ongoing maintenance?</summary>
            <p style={{ 
              marginTop: "12px", 
              color: "#555",
              lineHeight: "1.6",
              fontSize: "clamp(0.85rem, 2vw, 0.9rem)"
            }}>Yes, we offer comprehensive maintenance packages to ensure your digital solutions remain up-to-date, secure, and performing optimally. Contact us to discuss maintenance options tailored to your needs.</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Contact;