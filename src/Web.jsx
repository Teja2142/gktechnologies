import React from "react";
import { Link } from "react-router-dom";

const Web = () => {
  return (
    <div style={{ 
      fontFamily: "'Poppins', Arial, sans-serif", 
      padding: "0", 
      background: "#f8f9fa",
      color: "#333",
      maxWidth: "100vw",
      overflowX: "hidden"
    }}>
      {/* Hero Section */}
      <div style={{ 
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", 
        padding: "80px 20px", 
        color: "#fff", 
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
          opacity: 0.1,
          zIndex: 0
        }}></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ 
            margin: "0", 
            fontWeight: "800", 
            fontSize: "3rem",
            marginBottom: "15px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
          }}>Web Development Services</h1>
          <p style={{ 
            margin: "0 auto", 
            fontSize: "1.2rem", 
            maxWidth: "700px",
            lineHeight: "1.6",
            opacity: 0.9
          }}>
            Crafting exceptional digital experiences with cutting-edge web technologies
          </p>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "20px", 
            marginTop: "30px" 
          }}>
            <Link to="/contact" style={{
              textDecoration: "none",
              background: "#f7941d",
              color: "#fff",
              padding: "12px 30px",
              borderRadius: "50px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(247, 148, 29, 0.3)",
              ":hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 6px 20px rgba(247, 148, 29, 0.4)"
              }
            }}>Get Started</Link>
            <Link to="/" style={{
              textDecoration: "none",
              background: "transparent",
              color: "#fff",
              padding: "12px 30px",
              borderRadius: "50px",
              border: "2px solid #fff",
              fontWeight: "600",
              transition: "all 0.3s ease",
              ":hover": {
                background: "rgba(255,255,255,0.1)",
                transform: "translateY(-3px)"
              }
            }}>View Portfolio</Link>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{ 
        background: "#fff", 
        padding: "15px 40px", 
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
        <p style={{ margin: "0", fontSize: "14px" }}>
          <Link to="/" style={{ color: "#f7941d", fontWeight: "bold", textDecoration: "none" }}>HOME</Link> &gt; 
          <Link to="/services" style={{ color: "#f7941d", fontWeight: "bold", textDecoration: "none" }}> SERVICES</Link> &gt; 
          <span style={{ color: "#1a1a2e" }}> WEB DEVELOPMENT</span>
        </p>
      </div>

      {/* Main Content */}
      <div style={{ 
        display: "flex", 
        padding: "40px", 
        gap: "30px", 
        maxWidth: "1400px", 
        margin: "0 auto" 
      }}>
        {/* Left Content */}
        <div style={{ flex: "3" }}>
          {/* Service Overview */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "10px", 
            padding: "30px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            marginBottom: "30px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            ":hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }
          }}>
            <img 
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Web Development" 
              style={{ 
                width: "100%", 
                borderRadius: "8px", 
                marginBottom: "25px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }} 
            />
            <h2 style={{ 
              marginTop: "0", 
              color: "#1a1a2e", 
              fontSize: "2rem",
              position: "relative",
              paddingBottom: "15px"
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "60px",
                height: "4px",
                background: "#f7941d",
                borderRadius: "2px"
              }}></span>
              Web Development Services
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: "1.8", 
              fontSize: "1.1rem",
              marginBottom: "20px"
            }}>
              At GK Technology, we create powerful, scalable, and user-friendly web applications 
              tailored to your business needs. Our expert developers leverage the latest technologies 
              to ensure high performance, security, and exceptional user experiences.
            </p>
            
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
              gap: "20px",
              margin: "30px 0"
            }}>
              {[
                {
                  icon: "🚀",
                  title: "Custom Web Development",
                  desc: "Tailored solutions designed specifically for your business requirements."
                },
                {
                  icon: "📱",
                  title: "Responsive Design",
                  desc: "Flawless performance across all devices and screen sizes."
                },
                {
                  icon: "🔍",
                  title: "SEO Optimization",
                  desc: "Built with search engine visibility in mind from the ground up."
                },
                {
                  icon: "⚡",
                  title: "Performance Focused",
                  desc: "Lightning-fast load times and smooth interactions."
                },
                {
                  icon: "🛡️",
                  title: "Security First",
                  desc: "Enterprise-grade security measures to protect your data."
                },
                {
                  icon: "🔄",
                  title: "Continuous Support",
                  desc: "Ongoing maintenance and updates to keep your site current."
                }
              ].map((feature, index) => (
                <div key={index} style={{ 
                  background: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  ":hover": {
                    background: "#1a1a2e",
                    color: "#fff",
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                  }
                }}>
                  <div style={{ 
                    fontSize: "2rem",
                    marginBottom: "15px"
                  }}>{feature.icon}</div>
                  <h3 style={{ 
                    margin: "0 0 10px",
                    fontSize: "1.2rem"
                  }}>{feature.title}</h3>
                  <p style={{ 
                    margin: 0,
                    lineHeight: "1.6",
                    fontSize: "0.95rem"
                  }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "10px", 
            padding: "30px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            marginBottom: "30px"
          }}>
            <h2 style={{ 
              marginTop: "0", 
              color: "#1a1a2e", 
              fontSize: "1.8rem",
              position: "relative",
              paddingBottom: "15px"
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "60px",
                height: "4px",
                background: "#f7941d",
                borderRadius: "2px"
              }}></span>
              Our Technology Stack
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: "1.8", 
              fontSize: "1.1rem",
              marginBottom: "20px"
            }}>
              We work with the most advanced and reliable technologies to deliver 
              exceptional results for our clients.
            </p>
            
            <div style={{ 
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              margin: "20px 0"
            }}>
              {[
                { name: "React", color: "#61DAFB" },
                { name: "Node.js", color: "#68A063" },
                { name: "Express", color: "#000000" },
                { name: "MongoDB", color: "#47A248" },
                { name: "PostgreSQL", color: "#336791" },
                { name: "TypeScript", color: "#3178C6" },
                { name: "Tailwind CSS", color: "#38B2AC" },
                { name: "Docker", color: "#2496ED" },
                { name: "AWS", color: "#FF9900" }
              ].map((tech, index) => (
                <div key={index} style={{ 
                  background: "#f5f5f5",
                  padding: "8px 15px",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  ":hover": {
                    background: tech.color,
                    color: "#fff",
                    transform: "scale(1.05)",
                    boxShadow: `0 4px 8px ${tech.color}40`
                  }
                }}>
                  <div style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: tech.color
                  }}></div>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "10px", 
            padding: "30px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            marginBottom: "30px"
          }}>
            <h2 style={{ 
              marginTop: "0", 
              color: "#1a1a2e", 
              fontSize: "1.8rem",
              position: "relative",
              paddingBottom: "15px"
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "60px",
                height: "4px",
                background: "#f7941d",
                borderRadius: "2px"
              }}></span>
              Our Development Process
            </h2>
            
            <div style={{ 
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              marginTop: "30px",
              position: "relative"
            }}>
              {/* Timeline connector */}
              <div style={{
                position: "absolute",
                left: "30px",
                top: "20px",
                bottom: "20px",
                width: "4px",
                background: "#f7941d",
                borderRadius: "2px",
                zIndex: 1
              }}></div>
              
              {[
                {
                  title: "Discovery & Planning",
                  desc: "We start by understanding your business goals, target audience, and project requirements.",
                  icon: "🔍"
                },
                {
                  title: "UI/UX Design",
                  desc: "Our designers create wireframes and prototypes to visualize the user experience.",
                  icon: "🎨"
                },
                {
                  title: "Development",
                  desc: "Our developers build your application using agile methodologies for maximum efficiency.",
                  icon: "💻"
                },
                {
                  title: "Testing & QA",
                  desc: "Rigorous testing ensures your application performs flawlessly across all scenarios.",
                  icon: "🧪"
                },
                {
                  title: "Deployment",
                  desc: "We handle the deployment process and ensure everything runs smoothly in production.",
                  icon: "🚀"
                },
                {
                  title: "Maintenance",
                  desc: "Ongoing support and updates to keep your application current and secure.",
                  icon: "🛠️"
                }
              ].map((step, index) => (
                <div key={index} style={{ 
                  display: "flex",
                  gap: "20px",
                  position: "relative",
                  zIndex: 2
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#1a1a2e",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ 
                    background: "#f9f9f9",
                    padding: "20px",
                    borderRadius: "8px",
                    flex: 1,
                    transition: "all 0.3s ease",
                    ":hover": {
                      transform: "translateX(10px)",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                    }
                  }}>
                    <h3 style={{ 
                      margin: "0 0 10px",
                      color: "#1a1a2e",
                      fontSize: "1.2rem"
                    }}>{step.title}</h3>
                    <p style={{ 
                      margin: 0,
                      color: "#555",
                      lineHeight: "1.6"
                    }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ 
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", 
            borderRadius: "10px", 
            padding: "40px", 
            textAlign: "center",
            color: "#fff",
            marginBottom: "30px"
          }}>
            <h2 style={{ 
              margin: "0 0 20px",
              fontSize: "2rem"
            }}>Ready to Build Your Web Application?</h2>
            <p style={{ 
              margin: "0 auto 30px",
              fontSize: "1.1rem",
              maxWidth: "700px",
              lineHeight: "1.6",
              opacity: 0.9
            }}>
              Let's discuss how we can help you achieve your business goals with a custom web solution.
            </p>
            <Link to="/contact" style={{
              textDecoration: "none",
              background: "#f7941d",
              color: "#fff",
              padding: "15px 40px",
              borderRadius: "50px",
              fontWeight: "600",
              fontSize: "1.1rem",
              display: "inline-block",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(247, 148, 29, 0.3)",
              ":hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 6px 20px rgba(247, 148, 29, 0.4)",
                background: "#ffa733"
              }
            }}>Get a Free Consultation</Link>
          </div>
        </div>

        {/* Right Sidebar */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          {/* Categories Section */}
          <div style={{ background: "#fff", borderRadius: "10px", padding: "25px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", marginBottom: "30px" }}>
                      <h3 style={{ color: "#1a1a2e", marginTop: "0", marginBottom: "20px", fontSize: "1.3rem", position: "relative", paddingBottom: "10px" }}>
                        <span style={{ position: "absolute", bottom: 0, left: 0, width: "40px", height: "3px", background: "#f7941d", borderRadius: "2px" }}></span>
                        Our Services
                      </h3>
                      <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                          { name: "Web Development", path: "/web", icon: "🌐" },
                          { name: "Mobile App Development", path: "/mobile", icon: "📱" },
                          { name: "Cloud Solutions", path: "/cloud", icon: "☁️" },
                          { name: "IOT Services", path: "/IoT", icon: "🔄" },
                          { name: "Data Analytics", path: "/data", icon: "📊" },
                          { name: "API Development", path: "/api", icon: "🔌" },
                          { name: "Digital Marketing", path: "/digital", icon: "📢" },
                          { name: "Corporate Training", path: "/training", icon: "🎓" }
                        ].map((category, index) => (
                          <li key={index}>
                            <Link to={category.path} style={{ textDecoration: "none", color: "#555", display: "flex", alignItems: "center", gap: "10px", padding: "12px 15px", borderRadius: "8px", background: "#f9f9f9", transition: "all 0.3s ease" }}
                              onMouseEnter={e => { e.currentTarget.style.background = "#1a1a2e"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateX(5px)"; }}
                              onMouseLeave={e => { e.currentTarget.style.background = "#f9f9f9"; e.currentTarget.style.color = "#555"; e.currentTarget.style.transform = "translateX(0px)"; }}>
                              <span style={{ fontSize: "1.2rem" }}>{category.icon}</span>
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>


          {/* Help Section */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "10px", 
            padding: "25px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            marginBottom: "30px",
            border: "2px solid #f7941d",
            textAlign: "center"
          }}>
            <div style={{
              width: "70px",
              height: "70px",
              background: "#f7941d",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "1.8rem",
              color: "#fff"
            }}>💬</div>
            <h3 style={{ 
              color: "#1a1a2e", 
              marginTop: "0",
              marginBottom: "15px"
            }}>Need Help?</h3>
            <p style={{ 
              margin: "0 0 20px",
              color: "#555",
              lineHeight: "1.6"
            }}>
              Our team is ready to answer your questions and discuss your project requirements.
            </p>
            <div style={{ 
              display: "flex", 
              flexDirection: "column",
              gap: "15px"
            }}>
              <a href="tel:+13147327749" style={{
                textDecoration: "none",
                background: "#1a1a2e",
                color: "#fff",
                padding: "12px",
                borderRadius: "8px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                ":hover": {
                  background: "#f7941d",
                  transform: "translateY(-3px)"
                }
              }}>
                <span>📞</span> +1-314-732-7749
              </a>
              <a href="mailto:support@kgktechnologies.com" style={{
                textDecoration: "none",
                background: "#f9f9f9",
                color: "#1a1a2e",
                padding: "12px",
                borderRadius: "8px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                ":hover": {
                  background: "#1a1a2e",
                  color: "#fff",
                  transform: "translateY(-3px)"
                }
              }}>
                <span>✉️</span> Email Us
              </a>
              <a href="https://wa.me/13147327749" target="_blank" rel="noopener noreferrer" style={{
                textDecoration: "none",
                background: "#25D366",
                color: "#fff",
                padding: "12px",
                borderRadius: "8px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                ":hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 4px 8px rgba(37, 211, 102, 0.3)"
                }
              }}>
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>

          {/* Testimonials */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "10px", 
            padding: "25px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
          }}>
            <h3 style={{ 
              color: "#1a1a2e", 
              marginTop: "0",
              marginBottom: "20px",
              fontSize: "1.3rem",
              position: "relative",
              paddingBottom: "10px"
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "40px",
                height: "3px",
                background: "#f7941d",
                borderRadius: "2px"
              }}></span>
              Client Testimonials
            </h3>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}>
              {[
                {
                  quote: "GK Technology transformed our online presence with a stunning website that perfectly represents our brand.",
                  author: "Sarah Johnson",
                  role: "CEO, Bright Solutions"
                },
                {
                  quote: "The team delivered our e-commerce platform ahead of schedule with exceptional quality.",
                  author: "Michael Chen",
                  role: "Director, Urban Styles"
                },
                {
                  quote: "Their attention to detail and technical expertise exceeded our expectations.",
                  author: "David Wilson",
                  role: "CTO, TechNova"
                }
              ].map((testimonial, index) => (
                <div key={index} style={{ 
                  background: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "8px",
                  position: "relative",
                  transition: "all 0.3s ease",
                  ":hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                  }
                }}>
                  <div style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    fontSize: "2.5rem",
                    color: "rgba(247, 148, 29, 0.2)",
                    lineHeight: 1
                  }}>"</div>
                  <p style={{ 
                    margin: "15px 0 0",
                    fontStyle: "italic",
                    color: "#555",
                    lineHeight: "1.6"
                  }}>{testimonial.quote}</p>
                  <div style={{ 
                    marginTop: "15px",
                    borderTop: "1px solid #eee",
                    paddingTop: "15px"
                  }}>
                    <p style={{ 
                      margin: "0",
                      fontWeight: "600",
                      color: "#1a1a2e"
                    }}>{testimonial.author}</p>
                    <p style={{ 
                      margin: "5px 0 0",
                      fontSize: "0.9rem",
                      color: "#777"
                    }}>{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;