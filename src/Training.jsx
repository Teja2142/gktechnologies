import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Training = () => {
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
          background: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
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
          }}>Professional Training Solutions</h1>
          <p style={{ 
            margin: "0 auto", 
            fontSize: "1.3rem", 
            maxWidth: "800px",
            lineHeight: 1.6,
            opacity: 0.9
          }}>
            Empower your workforce and accelerate your career with our customized training programs
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
            }}>Request Training Info</Link>
            <Link to="/training-catalog" style={{
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
            }}>View Training Catalog</Link>
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
          <span style={{ color: "#1a1a2e" }}> PROFESSIONAL TRAINING</span>
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
          {/* Training Overview */}
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
              src="https://upload.wikimedia.org/wikipedia/commons/e/ee/National_Data_Center_Capacity_Building_training_course_-_Flickr_-_The_Official_CTBTO_Photostream.jpg" 
              alt="Professional Training" 
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
              Comprehensive Training Programs
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: 1.8, 
              fontSize: "1.1rem",
              marginBottom: "20px"
            }}>
              At GK Technologies, we offer tailored training solutions for both organizations and individuals. Our programs combine industry expertise with practical skills to drive professional growth and organizational success.
            </p>
            
            {/* Training Types Section */}
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ 
                color: "#1a1a2e", 
                fontSize: "1.8rem",
                marginBottom: "20px",
                position: "relative",
                paddingBottom: "10px"
              }}>
                <span style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "60px",
                  height: "3px",
                  background: "#f7941d",
                  borderRadius: "2px"
                }}></span>
                Our Training Offerings
              </h3>
              
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
                gap: "20px",
                margin: "30px 0"
              }}>
                {/* Corporate Training */}
                <div style={{ 
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
                  }}>🏢</div>
                  <h4 style={{ 
                    margin: "0 0 15px",
                    fontSize: "1.4rem"
                  }}>Corporate Training</h4>
                  <p style={{ 
                    margin: 0,
                    lineHeight: 1.6,
                    fontSize: "1rem",
                    marginBottom: "15px"
                  }}>
                    Customized programs designed to upskill your workforce and drive business results:
                  </p>
                  <ul style={{ 
                    paddingLeft: "20px",
                    margin: "15px 0 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    {[
                      "Leadership development",
                      "Technical skills training",
                      "Team building workshops",
                      "Compliance and safety training",
                      "Software and tools certification"
                    ].map((item, index) => (
                      <li key={index} style={{ fontSize: "0.95rem" }}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Personal Training */}
                <div style={{ 
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
                  }}>👩‍💻</div>
                  <h4 style={{ 
                    margin: "0 0 15px",
                    fontSize: "1.4rem"
                  }}>Personal Training</h4>
                  <p style={{ 
                    margin: 0,
                    lineHeight: 1.6,
                    fontSize: "1rem",
                    marginBottom: "15px"
                  }}>
                    Individual programs to help professionals advance their careers:
                  </p>
                  <ul style={{ 
                    paddingLeft: "20px",
                    margin: "15px 0 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    {[
                      "Career coaching",
                      "Technical certification prep",
                      "Resume and interview skills",
                      "Soft skills development",
                      "Personal branding"
                    ].map((item, index) => (
                      <li key={index} style={{ fontSize: "0.95rem" }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Training Features Grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
              gap: "20px",
              margin: "30px 0"
            }}>
              {[
                {
                  icon: "🎯",
                  title: "Customized Curriculum",
                  desc: "Tailored content to meet specific organizational or individual needs"
                },
                {
                  icon: "🏆",
                  title: "Certified Instructors",
                  desc: "Industry experts with proven training experience"
                },
                {
                  icon: "🔄",
                  title: "Flexible Formats",
                  desc: "In-person, virtual, or hybrid delivery options"
                },
                {
                  icon: "📈",
                  title: "Measurable Results",
                  desc: "Pre- and post-training assessments to track progress"
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
                  <h4 style={{ 
                    margin: "0 0 15px",
                    fontSize: "1.2rem"
                  }}>{feature.title}</h4>
                  <p style={{ 
                    margin: 0,
                    lineHeight: 1.6,
                    fontSize: "0.95rem"
                  }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
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
              Our Training Platforms
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: 1.8, 
              fontSize: "1.1rem",
              marginBottom: "30px"
            }}>
              We utilize industry-leading platforms to deliver effective training experiences:
            </p>
            
            <div style={{ 
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px"
            }}>
              {[
                {
                  name: "Learning Management",
                  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJ21OqZhfZRLOc18ysXgVcNjiC7SmtHW4bA&s",
                  features: ["Course management", "Progress tracking", "Certification"]
                },
                {
                  name: "Virtual Classroom",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/2560px-Zoom_Communications_Logo.svg.png",
                  features: ["Live instruction", "Interactive sessions", "Recording"]
                },
                {
                  name: "Assessment Tools",
                  logo: "https://log-hub.com/wp-content/uploads/2024/01/Higher-digitalization-and-automation.webp",
                  features: ["Knowledge checks", "Skill evaluations", "Feedback"]
                },
                {
                  name: "Collaboration Suite",
                  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6rVI0EU0p_JjDYsf7YJqXrKucm2Ga7B37Q&s",
                  features: ["Team projects", "Document sharing", "Real-time editing"]
                }
              ].map((tech, index) => (
                <div key={index} style={{ 
                  background: "#f9f9f9",
                  borderRadius: "10px",
                  padding: "25px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  ":hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                  }
                }}>
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    style={{ 
                      height: "60px", 
                      marginBottom: "20px",
                      objectFit: "contain",
                      width: "80%",
                    }} 
                  />
                  <h3 style={{ 
                    margin: "0 0 15px",
                    color: "#1a1a2e",
                    fontSize: "1.3rem"
                  }}>{tech.name}</h3>
                  <ul style={{ 
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    {tech.features.map((feature, i) => (
                      <li key={i} style={{
                        color: "#555",
                        lineHeight: 1.5
                      }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Training Process */}
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
              Our Training Methodology
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
                  title: "Needs Assessment",
                  desc: "Identify skills gaps and learning objectives",
                  icon: "🔍"
                },
                {
                  title: "Program Design",
                  desc: "Develop customized curriculum and materials",
                  icon: "📝"
                },
                {
                  title: "Delivery",
                  desc: "Engaging instruction through chosen format",
                  icon: "👩‍🏫"
                },
                {
                  title: "Practice & Application",
                  desc: "Hands-on exercises and real-world scenarios",
                  icon: "🔄"
                },
                {
                  title: "Evaluation",
                  desc: "Measure learning outcomes and effectiveness",
                  icon: "📊"
                },
                {
                  title: "Follow-up Support",
                  desc: "Ongoing resources and coaching",
                  icon: "🤝"
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
              background: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
              opacity: 0.1,
              zIndex: 0
            }}></div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ 
                margin: "0 0 20px",
                fontSize: "2.2rem"
              }}>Ready to Invest in Professional Development?</h2>
              <p style={{ 
                margin: "0 auto 30px",
                fontSize: "1.2rem",
                maxWidth: "700px",
                lineHeight: "1.6",
                opacity: 0.9
              }}>
                Let's discuss how we can create a training program tailored to your needs.
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
              }}>Schedule Consultation</Link>
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

          {/* Training Resources */}
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
              Training Resources
            </h3>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}>
              {[
                {
                  title: "Corporate Training Guide",
                  type: "PDF",
                  size: "2.1 MB"
                },
                {
                  title: "Career Development Workbook",
                  type: "PDF",
                  size: "3.5 MB"
                },
                {
                  title: "Webinar: Effective Training Techniques",
                  type: "Video",
                  size: "52 min"
                },
                {
                  title: "Skills Assessment Template",
                  type: "Excel",
                  size: "1.2 MB"
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
                    {resource.type === "PDF" ? "📄" : resource.type === "Video" ? "🎥" : "📊"}
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
            }}>🎓</div>
            <h3 style={{ 
              color: "#1a1a2e", 
              marginTop: "0",
              marginBottom: "15px",
              fontSize: "1.4rem"
            }}>Training Specialists Available</h3>
            <p style={{ 
              margin: "0 0 25px",
              color: "#555",
              lineHeight: "1.6"
            }}>
              Have questions about our training programs? Our specialists are ready to help.
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
              <a href="mailto:training@techvyver.com" style={{
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

export default Training;