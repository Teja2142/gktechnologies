import React from "react";

const Contact = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, #006c94 0%, #004d70 100%)",
        color: "white",
        padding: "80px 40px",
        borderRadius: "12px",
        marginBottom: "60px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Contact Us</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
          We'd love to hear from you! Reach out to our team for any inquiries or to discuss how we can help your business grow.
        </p>
      </div>
      
      {/* Contact Section */}
      <div style={{ 
        display: "flex", 
        gap: "30px", 
        marginBottom: "60px",
        flexDirection: { xs: "column", md: "row" } 
      }}>
        {/* Left Card - Address & Map */}
        <div style={{ 
          flex: 1, 
          padding: "30px", 
          background: "#f8f9fa", 
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
        }}>
          <h2 style={{ 
            color: "#006c94", 
            marginBottom: "20px",
            fontSize: "1.8rem"
          }}>Contact Information</h2>
          <div style={{ marginBottom: "25px" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
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
                height: "36px"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
              </span>
              <div>
                <p style={{ margin: "0", fontWeight: "600" }}>GK Technology</p>
                <p style={{ margin: "0", color: "#666" }}>Uppal, Hyderabad, Telangana</p>
              </div>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
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
                height: "36px"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
              </span>
              <div>
                <p style={{ margin: "0", fontWeight: "600" }}>04021422142</p>
                <p style={{ margin: "0", color: "#666" }}>04021422142</p>
              </div>
            </div>
            
            <div style={{ display: "flex", alignItems: "center" }}>
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
                height: "36px"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
              </span>
              <div>
                <p style={{ margin: "0", fontWeight: "600" }}>info@gktechnologies.com</p>
              </div>
            </div>
          </div>
          
          {/* Google Map Embed */}
          <div style={{ marginTop: "30px" }}>
            <iframe 
              title="Google Maps" 
              width="100%" 
              height="300" 
              frameBorder="0" 
              style={{ border: "0", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }} 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7613.076431793916!2d78.5604224!3d17.4057369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9952f710e9e1%3A0x945dd9ae55b1963b!2sUppal%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1711020300000" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Card - Contact Form */}
        <div style={{ 
          flex: 1, 
          padding: "30px", 
          background: "#ffffff", 
          borderRadius: "12px", 
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ 
            color: "#006c94", 
            marginBottom: "25px",
            fontSize: "1.8rem"
          }}>Get in Touch</h2>
          <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "600",
                color: "#444"
              }}>Full Name:</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                style={{ 
                  padding: "12px 15px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px",
                  width: "100%",
                  fontSize: "1rem",
                  transition: "border 0.3s",
                  boxSizing: "border-box"
                }} 
              />
            </div>
            
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "600",
                color: "#444"
              }}>Mobile Number:</label>
              <input 
                type="text" 
                placeholder="Enter your mobile number" 
                style={{ 
                  padding: "12px 15px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px",
                  width: "100%",
                  fontSize: "1rem",
                  transition: "border 0.3s",
                  boxSizing: "border-box"
                }} 
              />
            </div>

            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "600",
                color: "#444"
              }}>Email:</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{ 
                  padding: "12px 15px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px",
                  width: "100%",
                  fontSize: "1rem",
                  transition: "border 0.3s",
                  boxSizing: "border-box"
                }} 
              />
            </div>

            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "600",
                color: "#444"
              }}>Comment:</label>
              <textarea 
                placeholder="Enter your message" 
                style={{ 
                  padding: "12px 15px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px",
                  width: "100%",
                  height: "120px",
                  fontSize: "1rem",
                  transition: "border 0.3s",
                  boxSizing: "border-box",
                  resize: "vertical"
                }}
              ></textarea>
            </div>

            <button 
              type="submit" 
              style={{ 
                padding: "14px", 
                background: "#006c94", 
                color: "white", 
                border: "none", 
                borderRadius: "8px", 
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "600",
                transition: "background 0.3s",
                marginTop: "10px"
              }}
              onMouseOver={(e) => e.target.style.background = "#005a7c"}
              onMouseOut={(e) => e.target.style.background = "#006c94"}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div style={{ marginTop: "80px", marginBottom: "60px", textAlign: "center" }}>
  <h2 style={{ color: "#006c94", marginBottom: "40px", fontSize: "1.8rem" }}>Why Choose GK Technology?</h2>
  <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
    
    <div style={{ background: "white", borderRadius: "12px", padding: "25px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", maxWidth: "250px", transition: "transform 0.3s", cursor: "pointer" }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "#f0f0f0", margin: "0 auto 20px", overflow: "hidden" }}>
        <div style={{ width: "100%", height: "100%", background: "#006c94", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "2.5rem" }}>🚀</div>
      </div>
      <h3 style={{ margin: "0 0 5px", color: "#333" }}>Innovation Driven</h3>
      <p style={{ margin: "0 0 15px", color: "#006c94", fontWeight: "600" }}>Modern Tech Stack</p>
      <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: "1.5" }}>We thrive on innovation, always adapting with the latest technologies to build scalable digital solutions.</p>
    </div>

    <div style={{ background: "white", borderRadius: "12px", padding: "25px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", maxWidth: "250px", transition: "transform 0.3s", cursor: "pointer" }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "#f0f0f0", margin: "0 auto 20px", overflow: "hidden" }}>
        <div style={{ width: "100%", height: "100%", background: "#006c94", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "2.5rem" }}>🤝</div>
      </div>
      <h3 style={{ margin: "0 0 5px", color: "#333" }}>Client-Centric</h3>
      <p style={{ margin: "0 0 15px", color: "#006c94", fontWeight: "600" }}>You Come First</p>
      <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: "1.5" }}>Our clients are at the heart of everything we do — your goals are our priorities.</p>
    </div>

    <div style={{ background: "white", borderRadius: "12px", padding: "25px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", maxWidth: "250px", transition: "transform 0.3s", cursor: "pointer" }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "#f0f0f0", margin: "0 auto 20px", overflow: "hidden" }}>
        <div style={{ width: "100%", height: "100%", background: "#006c94", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "2.5rem" }}>🌐</div>
      </div>
      <h3 style={{ margin: "0 0 5px", color: "#333" }}>Global Vision</h3>
      <p style={{ margin: "0 0 15px", color: "#006c94", fontWeight: "600" }}>Think Big, Act Smart</p>
      <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: "1.5" }}>We are a startup with a global vision — building tech that solves real-world problems efficiently.</p>
    </div>

  </div>
</div>



      
      {/* Testimonials Section */}
      <div style={{ 
        background: "linear-gradient(135deg, #006c94 0%, #004d70 100%)",
        color: "white",
        padding: "60px 40px",
        borderRadius: "12px",
        marginBottom: "60px",
        textAlign: "center"
      }}>
        <h2 style={{ 
          fontSize: "1.8rem", 
          marginBottom: "40px"
        }}>What Our Clients Say</h2>
        <div style={{ 
          display: "flex", 
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <div style={{ 
            background: "rgba(255,255,255,0.1)", 
            padding: "30px", 
            borderRadius: "12px",
            maxWidth: "350px",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{ 
              fontSize: "1.5rem", 
              marginBottom: "20px",
              color: "#ffd700"
            }}>"</div>
            <p style={{ 
              fontStyle: "italic",
              lineHeight: "1.6",
              marginBottom: "20px"
            }}>GK Technology transformed our digital infrastructure. Their team delivered beyond our expectations with their technical expertise and attention to detail.</p>
            <p style={{ 
              fontWeight: "600",
              marginBottom: "5px"
            }}>Sarah Williams</p>
            <p style={{ 
              opacity: "0.8",
              fontSize: "0.9rem"
            }}>CEO, TechSolutions Inc.</p>
          </div>
          
          <div style={{ 
            background: "rgba(255,255,255,0.1)", 
            padding: "30px", 
            borderRadius: "12px",
            maxWidth: "350px",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{ 
              fontSize: "1.5rem", 
              marginBottom: "20px",
              color: "#ffd700"
            }}>"</div>
            <p style={{ 
              fontStyle: "italic",
              lineHeight: "1.6",
              marginBottom: "20px"
            }}>The API solutions provided by GK Technology helped us streamline our operations and improve efficiency by 40%. Highly recommended!</p>
            <p style={{ 
              fontWeight: "600",
              marginBottom: "5px"
            }}>Michael Chen</p>
            <p style={{ 
              opacity: "0.8",
              fontSize: "0.9rem"
            }}>CTO, DataSystems Ltd.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ 
        marginBottom: "60px",
        background: "#f8f9fa",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
      }}>
        <h2 style={{ 
          color: "#006c94", 
          marginBottom: "30px",
          fontSize: "1.8rem",
          textAlign: "center"
        }}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <details style={{ 
            marginBottom: "15px", 
            padding: "20px", 
            background: "white", 
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            transition: "all 0.3s"
          }}>
            <summary style={{ 
              fontWeight: "600", 
              fontSize: "1.1rem",
              color: "#333",
              cursor: "pointer",
              outline: "none"
            }}>What services do you offer?</summary>
            <p style={{ 
              marginTop: "15px", 
              color: "#555",
              lineHeight: "1.6"
            }}>We provide comprehensive web development, API services, cloud solutions, and data analytics to help businesses of all sizes achieve their digital transformation goals.</p>
          </details>

          <details style={{ 
            marginBottom: "15px", 
            padding: "20px", 
            background: "white", 
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            transition: "all 0.3s"
          }}>
            <summary style={{ 
              fontWeight: "600", 
              fontSize: "1.1rem",
              color: "#333",
              cursor: "pointer",
              outline: "none"
            }}>How can I contact support?</summary>
            <p style={{ 
              marginTop: "15px", 
              color: "#555",
              lineHeight: "1.6"
            }}>Our support team is available Monday through Friday from 9 AM to 6 PM. You can reach us via email at info@gktechnologies.com or call us at 04021422142. For urgent matters, please use our live chat feature on the website.</p>
          </details>

          <details style={{ 
            marginBottom: "15px", 
            padding: "20px", 
            background: "white", 
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            transition: "all 0.3s"
          }}>
            <summary style={{ 
              fontWeight: "600", 
              fontSize: "1.1rem",
              color: "#333",
              cursor: "pointer",
              outline: "none"
            }}>Where is your office located?</summary>
            <p style={{ 
              marginTop: "15px", 
              color: "#555",
              lineHeight: "1.6"
            }}>Our headquarters are located in Uppal, Hyderabad, Telangana. We also have satellite offices in Bangalore and Pune. Visitors are welcome by appointment.</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Contact;