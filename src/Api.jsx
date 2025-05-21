import React from "react";
import { Link } from "react-router-dom";

const Api = () => {
  return (
    <div style={{ 
      fontFamily: "'Poppins', Arial, sans-serif", 
      padding: 0, 
      background: "#f8f9fa",
      color: "#333",
      overflowX: "hidden"
    }}>
      {/* Hero Section */}
      <div style={{ 
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", 
        padding: "100px 20px", 
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
          background: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
          opacity: 0.1,
          zIndex: 0
        }}></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ 
            margin: "0", 
            fontWeight: "800", 
            fontSize: "3.5rem",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
          }}>API Development Services</h1>
          <p style={{ 
            margin: "0 auto", 
            fontSize: "1.3rem", 
            maxWidth: "800px",
            lineHeight: "1.6",
            opacity: 0.9
          }}>
            Powering seamless integrations with robust, scalable, and secure API solutions
          </p>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "20px", 
            marginTop: "40px",
            flexWrap: "wrap"
          }}>
            <Link to="/contact" style={{
              textDecoration: "none",
              background: "#f7941d",
              color: "#fff",
              padding: "15px 40px",
              borderRadius: "50px",
              fontWeight: "600",
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(247, 148, 29, 0.3)",
              ":hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 25px rgba(247, 148, 29, 0.4)",
                background: "#ffa733"
              }
            }}>Get Started</Link>
            <Link to="/portfolio" style={{
              textDecoration: "none",
              background: "transparent",
              color: "#fff",
              padding: "15px 40px",
              borderRadius: "50px",
              border: "2px solid #fff",
              fontWeight: "600",
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              ":hover": {
                background: "rgba(255,255,255,0.1)",
                transform: "translateY(-5px)"
              }
            }}>View API Portfolio</Link>
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
          <span style={{ color: "#1a1a2e" }}> API SERVICES</span>
        </p>
      </div>

      {/* Main Content */}
      <div style={{ 
        display: "flex", 
        padding: "40px", 
        gap: "30px", 
        maxWidth: "1400px", 
        margin: "0 auto",
        "@media (max-width: 768px)": {
          flexDirection: "column"
        }
      }}>
        {/* Left Content */}
        <div style={{ flex: 3 }}>
          {/* API Overview */}
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
              src="https://i0.wp.com/packetstream.io/wp-content/uploads/2020/07/4-1.jpg?fit=800%2C599&ssl=1" 
              alt="API Services" 
              style={{ 
                width: "100%", 
                borderRadius: "8px", 
                marginBottom: "25px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "transform 0.5s ease",
                ":hover": {
                  transform: "scale(1.02)"
                }
              }} 
            />
            <h2 style={{ 
              marginTop: "0", 
              color: "#1a1a2e", 
              fontSize: "2.2rem",
              position: "relative",
              paddingBottom: "15px"
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "80px",
                height: "4px",
                background: "#f7941d",
                borderRadius: "2px"
              }}></span>
              Professional API Services
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: "1.8", 
              fontSize: "1.1rem",
              marginBottom: "20px"
            }}>
              At GK Technology, we specialize in building robust, scalable, and secure APIs that power modern applications. 
              Our API solutions enable seamless data exchange, third-party integrations, and enhanced functionality 
              for your digital products.
            </p>
            
            {/* API Features Grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
              gap: "20px",
              margin: "30px 0"
            }}>
              {[
                {
                  icon: "🔌",
                  title: "Custom API Development",
                  desc: "Tailored API solutions designed specifically for your business requirements."
                },
                {
                  icon: "🔄",
                  title: "RESTful APIs",
                  desc: "Modern REST APIs following best practices for performance and scalability."
                },
                {
                  icon: "📊",
                  title: "GraphQL APIs",
                  desc: "Efficient data querying with flexible GraphQL endpoints."
                },
                {
                  icon: "🔒",
                  title: "API Security",
                  desc: "Enterprise-grade security with OAuth, JWT, and rate limiting."
                },
                {
                  icon: "📡",
                  title: "WebSocket APIs",
                  desc: "Real-time communication for interactive applications."
                },
                {
                  icon: "🧩",
                  title: "Third-Party Integrations",
                  desc: "Seamless connections with popular platforms and services."
                }
              ].map((feature, index) => (
                <div key={index} style={{ 
                  background: "#f9f9f9",
                  padding: "25px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  ":hover": {
                    background: "#1a1a2e",
                    color: "#fff",
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
                  }
                }}>
                  <div style={{ 
                    fontSize: "2.5rem",
                    marginBottom: "20px",
                    transition: "transform 0.3s ease",
                    ":hover": {
                      transform: "scale(1.2)"
                    }
                  }}>{feature.icon}</div>
                  <h3 style={{ 
                    margin: "0 0 15px",
                    fontSize: "1.3rem"
                  }}>{feature.title}</h3>
                  <p style={{ 
                    margin: 0,
                    lineHeight: "1.6",
                    fontSize: "1rem"
                  }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* API Technology Stack */}
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
              fontSize: "2rem",
              position: "relative",
              paddingBottom: "15px"
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "80px",
                height: "4px",
                background: "#f7941d",
                borderRadius: "2px"
              }}></span>
              Our API Technology Stack
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: "1.8", 
              fontSize: "1.1rem",
              marginBottom: "30px"
            }}>
              We work with the most advanced and reliable technologies to build high-performance APIs:
            </p>
            
            <div style={{ 
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              margin: "20px 0"
            }}>
              {[
                { name: "Node.js", color: "#68A063" },
                { name: "Express", color: "#000000" },
                { name: "NestJS", color: "#E0234E" },
                { name: "GraphQL", color: "#E535AB" },
                { name: "Apollo", color: "#311C87" },
                { name: "PostgreSQL", color: "#336791" },
                { name: "MongoDB", color: "#47A248" },
                { name: "Redis", color: "#D82C20" },
                { name: "Docker", color: "#2496ED" },
                { name: "Kubernetes", color: "#326CE5" },
                { name: "AWS API Gateway", color: "#FF9900" },
                { name: "Azure API Management", color: "#0089D6" }
              ].map((tech, index) => (
                <div key={index} style={{ 
                  background: "#f5f5f5",
                  padding: "10px 20px",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "all 0.3s ease",
                  ":hover": {
                    background: tech.color,
                    color: "#fff",
                    transform: "scale(1.1)",
                    boxShadow: `0 5px 15px ${tech.color}80`
                  }
                }}>
                  <div style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: tech.color,
                    boxShadow: `0 0 10px ${tech.color}`
                  }}></div>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* API Development Process */}
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
              fontSize: "2rem",
              position: "relative",
              paddingBottom: "15px"
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "80px",
                height: "4px",
                background: "#f7941d",
                borderRadius: "2px"
              }}></span>
              Our API Development Process
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
                left: "35px",
                top: "30px",
                bottom: "30px",
                width: "4px",
                background: "linear-gradient(to bottom, #f7941d, #1a1a2e)",
                borderRadius: "2px",
                zIndex: 1
              }}></div>
              
              {[
                {
                  title: "Requirement Analysis",
                  desc: "We analyze your integration needs and define API specifications.",
                  icon: "📋"
                },
                {
                  title: "API Design",
                  desc: "Our architects design RESTful endpoints or GraphQL schemas.",
                  icon: "✏️"
                },
                {
                  title: "Development",
                  desc: "Implementation of endpoints with proper authentication and documentation.",
                  icon: "💻"
                },
                {
                  title: "Testing",
                  desc: "Comprehensive testing including unit, integration, and load testing.",
                  icon: "🧪"
                },
                {
                  title: "Deployment",
                  desc: "CI/CD pipeline setup and deployment to production environment.",
                  icon: "🚀"
                },
                {
                  title: "Monitoring",
                  desc: "Ongoing performance monitoring and analytics.",
                  icon: "📊"
                }
              ].map((step, index) => (
                <div key={index} style={{ 
                  display: "flex",
                  gap: "20px",
                  position: "relative",
                  zIndex: 2,
                  transition: "all 0.3s ease",
                  ":hover": {
                    transform: "translateX(10px)"
                  }
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1a1a2e 0%, #f7941d 100%)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                    transition: "transform 0.3s ease",
                    ":hover": {
                      transform: "rotate(15deg) scale(1.1)"
                    }
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ 
                    background: "#f9f9f9",
                    padding: "25px",
                    borderRadius: "8px",
                    flex: 1,
                    transition: "all 0.3s ease",
                    ":hover": {
                      boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                    }
                  }}>
                    <h3 style={{ 
                      margin: "0 0 15px",
                      color: "#1a1a2e",
                      fontSize: "1.3rem"
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

          {/* API Case Studies */}
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
              fontSize: "2rem",
              position: "relative",
              paddingBottom: "15px"
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "80px",
                height: "4px",
                background: "#f7941d",
                borderRadius: "2px"
              }}></span>
              API Success Stories
            </h2>
            
            <div style={{ 
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px",
              marginTop: "30px"
            }}>
              {[
                {
                  title: "E-commerce Platform API",
                  desc: "Developed a high-performance API handling 10,000+ requests per minute for a major retailer.",
                  image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                  stats: "10K+ RPM"
                },
                {
                  title: "Financial Data Aggregation",
                  desc: "Built a secure API aggregating data from multiple banking institutions with OAuth 2.0.",
                  image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                  stats: "99.99% Uptime"
                },
                {
                  title: "IoT Device Management",
                  desc: "Created a WebSocket API for real-time communication with 50,000+ IoT devices.",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                  stats: "50K+ Devices"
                }
              ].map((caseStudy, index) => (
                <div key={index} style={{ 
                  background: "#fff",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  ":hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                  }
                }}>
                  <div style={{
                    height: "200px",
                    background: `url(${caseStudy.image}) center/cover`,
                    position: "relative",
                    "::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7))"
                    }
                  }}></div>
                  <div style={{ padding: "25px" }}>
                    <h3 style={{ 
                      margin: "0 0 15px",
                      color: "#1a1a2e",
                      fontSize: "1.3rem"
                    }}>{caseStudy.title}</h3>
                    <p style={{ 
                      margin: "0 0 20px",
                      color: "#555",
                      lineHeight: "1.6"
                    }}>{caseStudy.desc}</p>
                    <div style={{
                      background: "#f7941d",
                      color: "#fff",
                      padding: "8px 15px",
                      borderRadius: "50px",
                      display: "inline-block",
                      fontSize: "0.9rem",
                      fontWeight: "600"
                    }}>{caseStudy.stats}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ 
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", 
            borderRadius: "10px", 
            padding: "60px 40px", 
            textAlign: "center",
            color: "#fff",
            marginBottom: "30px",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
              opacity: 0.1,
              zIndex: 0
            }}></div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ 
                margin: "0 0 20px",
                fontSize: "2.2rem"
              }}>Ready to Build Your API?</h2>
              <p style={{ 
                margin: "0 auto 30px",
                fontSize: "1.2rem",
                maxWidth: "700px",
                lineHeight: "1.6",
                opacity: 0.9
              }}>
                Let's discuss how we can create powerful APIs to connect your systems and services.
              </p>
              <Link to="/contact" style={{
                textDecoration: "none",
                background: "#f7941d",
                color: "#fff",
                padding: "15px 50px",
                borderRadius: "50px",
                fontWeight: "600",
                fontSize: "1.1rem",
                display: "inline-block",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(247, 148, 29, 0.3)",
                ":hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 25px rgba(247, 148, 29, 0.4)",
                  background: "#ffa733"
                }
              }}>Get API Consultation</Link>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          {/* Services Navigation */}
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

          {/* API Documentation Card */}
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
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #1a1a2e 0%, #f7941d 100%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "2rem",
              color: "#fff",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
            }}>📚</div>
            <h3 style={{ 
              color: "#1a1a2e", 
              marginTop: "0",
              marginBottom: "15px",
              fontSize: "1.4rem"
            }}>API Documentation</h3>
            <p style={{ 
              margin: "0 0 25px",
              color: "#555",
              lineHeight: "1.6"
            }}>
              Explore our comprehensive API documentation and integration guides.
            </p>
            <div style={{ 
              display: "flex", 
              flexDirection: "column",
              gap: "15px"
            }}>
              <a href="/api-docs" style={{
                textDecoration: "none",
                background: "#1a1a2e",
                color: "#fff",
                padding: "15px",
                borderRadius: "8px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                ":hover": {
                  background: "#f7941d",
                  transform: "translateY(-3px)",
                  boxShadow: "0 5px 15px rgba(247, 148, 29, 0.3)"
                }
              }}>
                <span>📄</span> View Documentation
              </a>
              <a href="/api-playground" style={{
                textDecoration: "none",
                background: "#f7941d",
                color: "#fff",
                padding: "15px",
                borderRadius: "8px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                ":hover": {
                  background: "#1a1a2e",
                  transform: "translateY(-3px)",
                  boxShadow: "0 5px 15px rgba(26, 26, 46, 0.3)"
                }
              }}>
                <span>🛠️</span> Try API Playground
              </a>
            </div>
          </div>

          {/* API Resources */}
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
              API Resources
            </h3>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}>
              {[
                {
                  title: "API Design Guide",
                  type: "PDF",
                  size: "1.8 MB"
                },
                {
                  title: "REST vs GraphQL",
                  type: "Video",
                  size: "12 min"
                },
                {
                  title: "API Security Best Practices",
                  type: "PDF",
                  size: "2.1 MB"
                },
                {
                  title: "Webinar: API Performance",
                  type: "Video",
                  size: "38 min"
                }
              ].map((resource, index) => (
                <div key={index} style={{ 
                  background: "#f9f9f9",
                  padding: "15px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  transition: "all 0.3s ease",
                  ":hover": {
                    background: "#1a1a2e",
                    color: "#fff",
                    transform: "translateX(5px)"
                  }
                }}>
                  <div style={{
                    width: "50px",
                    height: "50px",
                    background: "#f7941d",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    color: "#fff",
                    flexShrink: 0
                  }}>
                    {resource.type === "PDF" ? "📄" : "🎥"}
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: "600",
                      marginBottom: "5px"
                    }}>{resource.title}</div>
                    <div style={{ 
                      fontSize: "0.8rem",
                      color: "#777"
                    }}>{resource.type} • {resource.size}</div>
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

export default Api;