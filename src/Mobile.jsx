import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Mobile = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
        padding: "120px 20px", 
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
          background: "url('https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
          opacity: 0.1,
          zIndex: 0
        }}></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ 
            margin: 0, 
            fontWeight: 800, 
            fontSize: "3.5rem",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
          }}>Mobile App Development</h1>
          <p style={{ 
            margin: "0 auto", 
            fontSize: "1.3rem", 
            maxWidth: "800px",
            lineHeight: 1.6,
            opacity: 0.9
          }}>
            Transform your business with custom mobile solutions that engage users and drive growth
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
              fontWeight: 600,
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(247, 148, 29, 0.3)",
              ":hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 25px rgba(247, 148, 29, 0.4)",
                background: "#ffa733"
              }
            }}>Get Free Consultation</Link>
            <Link to="/portfolio" style={{
              textDecoration: "none",
              background: "transparent",
              color: "#fff",
              padding: "15px 40px",
              borderRadius: "50px",
              border: "2px solid #fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              ":hover": {
                background: "rgba(255,255,255,0.1)",
                transform: "translateY(-5px)"
              }
            }}>View Our Work</Link>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{ 
        background: "#fff", 
        padding: "15px 40px", 
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
        <p style={{ margin: 0, fontSize: "14px" }}>
          <Link to="/" style={{ color: "#f7941d", fontWeight: "bold", textDecoration: "none" }}>HOME</Link> &gt; 
          <Link to="/services" style={{ color: "#f7941d", fontWeight: "bold", textDecoration: "none" }}> SERVICES</Link> &gt; 
          <span style={{ color: "#1a1a2e" }}> MOBILE APPS</span>
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
          {/* Mobile App Overview */}
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
              src="https://xaltam.com/blogs/wp-content/uploads/2024/11/mobile-app-development-trends-xaltam.png" 
              alt="Mobile Apps" 
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
              marginTop: 0, 
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
              Custom Mobile Solutions
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: 1.8, 
              fontSize: "1.1rem",
              marginBottom: "20px"
            }}>
              At GK Technologies, we specialize in crafting high-performance, scalable, and user-friendly mobile applications that drive innovation and business growth. Our expert developers leverage the latest technologies to deliver seamless, secure, and engaging mobile experiences tailored to your needs.
            </p>
            
            {/* Mobile Features Grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
              gap: "20px",
              margin: "30px 0"
            }}>
              {[
                {
                  icon: "📱",
                  title: "Native iOS Apps",
                  desc: "High-performance apps built with Swift for seamless Apple ecosystem integration"
                },
                {
                  icon: "🤖",
                  title: "Native Android Apps",
                  desc: "Kotlin-based applications optimized for all Android devices"
                },
                {
                  icon: "🌐",
                  title: "Cross-Platform Apps",
                  desc: "Flutter and React Native solutions for cost-effective development"
                },
                {
                  icon: "🔒",
                  title: "App Security",
                  desc: "Enterprise-grade security including encryption and secure authentication"
                },
                {
                  icon: "📊",
                  title: "App Analytics",
                  desc: "Comprehensive user behavior tracking and performance metrics"
                },
                {
                  icon: "🔄",
                  title: "Maintenance & Support",
                  desc: "Ongoing updates, bug fixes, and feature enhancements"
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
                    lineHeight: 1.6,
                    fontSize: "1rem"
                  }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "10px", 
            padding: "30px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            marginBottom: "30px"
          }}>
            <h2 style={{ 
              marginTop: 0, 
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
                  title: "Discovery & Planning",
                  desc: "We analyze your requirements and create a detailed project roadmap",
                  icon: "🔍"
                },
                {
                  title: "UI/UX Design",
                  desc: "Our designers create intuitive interfaces and seamless user flows",
                  icon: "🎨"
                },
                {
                  title: "Development",
                  desc: "Agile development with regular iterations and client feedback",
                  icon: "💻"
                },
                {
                  title: "Quality Assurance",
                  desc: "Rigorous testing across devices and operating systems",
                  icon: "🧪"
                },
                {
                  title: "Deployment",
                  desc: "App store submission and launch strategy implementation",
                  icon: "🚀"
                },
                {
                  title: "Maintenance",
                  desc: "Continuous updates and performance optimization",
                  icon: "🛠️"
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

          {/* Case Studies */}
          <div style={{ background: "#fff", borderRadius: "10px", padding: "30px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", marginBottom: "30px" }}>
            <h2 style={{ marginTop: 0, color: "#1a1a2e", fontSize: "2rem", position: "relative", paddingBottom: "15px" }}>
              <span style={{ position: "absolute", bottom: 0, left: 0, width: "80px", height: "4px", background: "#f7941d", borderRadius: "2px" }}></span>
              Mobile App Success Stories
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px", marginTop: "30px" }}>
              {[
                { title: "Beyond Border Auto Auctions", desc: "Developed a feature-rich mobile app for live and timed car auctions with real-time bidding.", image: "https://live.staticflickr.com/65535/48965481132_c9b90fb24f_b.jpg", stats: "20% more user engagement" },
                { title: "Gas Mart Gas", desc: "Built an online mobile store for groceries and essentials with real-time inventory updates.", image: "https://live.staticflickr.com/7286/8743049022_e0dd234e8e_b.jpg", stats: "2x order growth" }
              ].map((caseStudy, index) => (
                <div key={index} style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 5px 15px rgba(0,0,0,0.1)", transition: "all 0.3s ease" }}>
                  <div style={{ height: "200px", background: `url(${caseStudy.image}) center/cover`, position: "relative" }}></div>
                  <div style={{ padding: "25px" }}>
                    <h3 style={{ margin: "0 0 15px", color: "#1a1a2e", fontSize: "1.3rem" }}>{caseStudy.title}</h3>
                    <p style={{ margin: "0 0 20px", color: "#555", lineHeight: "1.6" }}>{caseStudy.desc}</p>
                    <div style={{ background: "#f7941d", color: "#fff", padding: "8px 15px", borderRadius: "50px", display: "inline-block", fontSize: "0.9rem", fontWeight: "600" }}>{caseStudy.stats}</div>
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
              background: "url('https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
              opacity: 0.1,
              zIndex: 0
            }}></div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ 
                margin: "0 0 20px",
                fontSize: "2.2rem"
              }}>Ready to Build Your Mobile App?</h2>
              <p style={{ 
                margin: "0 auto 30px",
                fontSize: "1.2rem",
                maxWidth: "700px",
                lineHeight: "1.6",
                opacity: 0.9
              }}>
                Let's discuss how we can create a mobile solution that meets your business objectives.
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
              }}>Start Your Project</Link>
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

          {/* Tech Stack */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "10px", 
            padding: "25px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            marginBottom: "30px"
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
              Our Tech Stack
            </h3>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px"
            }}>
              {[
                { name: "Swift", color: "#F05138" },
                { name: "Kotlin", color: "#7F52FF" },
                { name: "Flutter", color: "#02569B" },
                { name: "React Native", color: "#61DAFB" },
                { name: "Firebase", color: "#FFCA28" },
                { name: "GraphQL", color: "#E535AB" }
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
                    boxShadow: `0 4px 8px ${tech.color}80`
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

          {/* Contact Card */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "10px", 
            padding: "25px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
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
            }}>📱</div>
            <h3 style={{ 
              color: "#1a1a2e", 
              marginTop: "0",
              marginBottom: "15px",
              fontSize: "1.4rem"
            }}>Mobile Experts Available</h3>
            <p style={{ 
              margin: "0 0 25px",
              color: "#555",
              lineHeight: "1.6"
            }}>
              Have questions about mobile development? Our specialists are ready to help.
            </p>
            <div style={{ 
              display: "flex", 
              flexDirection: "column",
              gap: "15px"
            }}>
              <a href="tel:+13143540634" style={{
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
                <span>📞</span> +1-314-354-0634
              </a>
              <a href="mailto:hr@kgktechnologies.com" style={{
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
                <span>✉️</span> Email Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;