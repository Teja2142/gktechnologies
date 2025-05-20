import React from "react";
import { Link } from "react-router-dom";

const Digital = () => {
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
          background: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
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
          }}>Digital Marketing Solutions</h1>
          <p style={{ 
            margin: "0 auto", 
            fontSize: "1.5rem", 
            maxWidth: "800px",
            lineHeight: 1.6,
            opacity: 0.9,
            marginBottom: "30px"
          }}>
            Boost Visibility. Build Trust. Drive Sales.
          </p>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "20px", 
            marginTop: "30px",
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
            }}>View Case Studies</Link>
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
          <span style={{ color: "#1a1a2e" }}> DIGITAL MARKETING</span>
        </p>
      </div>

      {/* Main Content */}
      <div style={{ 
        padding: "40px", 
        maxWidth: "1400px", 
        margin: "0 auto"
      }}>
        {/* Intro Section */}
        <div style={{ 
          background: "#fff", 
          borderRadius: "10px", 
          padding: "40px", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          marginBottom: "40px",
          textAlign: "center"
        }}>
          <h2 style={{ 
            marginTop: 0, 
            color: "#1a1a2e", 
            fontSize: "2.2rem",
            position: "relative",
            paddingBottom: "15px",
            marginBottom: "20px"
          }}>
            <span style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "#f7941d",
              borderRadius: "2px"
            }}></span>
            Digital Marketing That Delivers Results
          </h2>
          <p style={{ 
            color: "#555", 
            lineHeight: 1.8, 
            fontSize: "1.1rem",
            marginBottom: "20px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            Digital marketing is no longer optional — it's essential for any business looking to grow in today's competitive landscape. At GK Technologies, we combine strategy, creativity, and data to help you stand out online and attract the right customers.
          </p>
          <p style={{ 
            color: "#555", 
            lineHeight: 1.8, 
            fontSize: "1.1rem",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            Whether you're a local business trying to reach your neighborhood or a growing brand expanding nationally, our tailored digital campaigns deliver measurable results.
          </p>
        </div>

        {/* Services Section */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            color: "#1a1a2e", 
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "30px",
            position: "relative",
            paddingBottom: "15px"
          }}>
            <span style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "#f7941d",
              borderRadius: "2px"
            }}></span>
            Our Digital Marketing Services
          </h2>
          
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "25px"
          }}>
            {/* SEO Card */}
            <div style={{ 
              background: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              ":hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }
            }}>
              <div style={{
                height: "200px",
                background: "url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(26,26,46,0.8), transparent)",
                  padding: "20px",
                  color: "#fff"
                }}>
                  <h3 style={{ 
                    margin: 0,
                    fontSize: "1.5rem"
                  }}>Search Engine Optimization (SEO)</h3>
                </div>
              </div>
              <div style={{ padding: "25px" }}>
                <ul style={{ 
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}>
                  {[
                    "Keyword research & competitor analysis",
                    "On-page optimization",
                    "Technical SEO improvements",
                    "Local SEO for maps and listings",
                    "Monthly performance reports"
                  ].map((item, index) => (
                    <li key={index} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: "#555",
                      lineHeight: 1.5
                    }}>
                      <span style={{
                        color: "#f7941d",
                        fontWeight: "bold"
                      }}>•</span> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/seo" style={{
                  display: "inline-block",
                  marginTop: "20px",
                  textDecoration: "none",
                  color: "#f7941d",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  ":hover": {
                    color: "#1a1a2e",
                    transform: "translateX(5px)"
                  }
                }}>
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Social Media Card */}
            <div style={{ 
              background: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              ":hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }
            }}>
              <div style={{
                height: "200px",
                background: "url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(26,26,46,0.8), transparent)",
                  padding: "20px",
                  color: "#fff"
                }}>
                  <h3 style={{ 
                    margin: 0,
                    fontSize: "1.5rem"
                  }}>Social Media Marketing</h3>
                </div>
              </div>
              <div style={{ padding: "25px" }}>
                <ul style={{ 
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}>
                  {[
                    "Facebook, Instagram, LinkedIn, and YouTube campaigns",
                    "Content planning & scheduling",
                    "Audience targeting & engagement strategies",
                    "Paid ad campaign setup and optimization",
                    "Influencer outreach (if needed)"
                  ].map((item, index) => (
                    <li key={index} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: "#555",
                      lineHeight: 1.5
                    }}>
                      <span style={{
                        color: "#f7941d",
                        fontWeight: "bold"
                      }}>•</span> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/social-media" style={{
                  display: "inline-block",
                  marginTop: "20px",
                  textDecoration: "none",
                  color: "#f7941d",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  ":hover": {
                    color: "#1a1a2e",
                    transform: "translateX(5px)"
                  }
                }}>
                  Learn More →
                </Link>
              </div>
            </div>

            {/* PPC Card */}
            <div style={{ 
              background: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              ":hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }
            }}>
              <div style={{
                height: "200px",
                background: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(26,26,46,0.8), transparent)",
                  padding: "20px",
                  color: "#fff"
                }}>
                  <h3 style={{ 
                    margin: 0,
                    fontSize: "1.5rem"
                  }}>Paid Advertising (PPC & Google Ads)</h3>
                </div>
              </div>
              <div style={{ padding: "25px" }}>
                <ul style={{ 
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}>
                  {[
                    "Search, display, and video campaigns",
                    "Conversion tracking setup",
                    "A/B testing for ads and landing pages",
                    "Ad performance monitoring and reporting",
                    "Remarketing strategies"
                  ].map((item, index) => (
                    <li key={index} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: "#555",
                      lineHeight: 1.5
                    }}>
                      <span style={{
                        color: "#f7941d",
                        fontWeight: "bold"
                      }}>•</span> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/ppc" style={{
                  display: "inline-block",
                  marginTop: "20px",
                  textDecoration: "none",
                  color: "#f7941d",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  ":hover": {
                    color: "#1a1a2e",
                    transform: "translateX(5px)"
                  }
                }}>
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Email Marketing Card */}
            <div style={{ 
              background: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              ":hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }
            }}>
              <div style={{
                height: "200px",
                background: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(26,26,46,0.8), transparent)",
                  padding: "20px",
                  color: "#fff"
                }}>
                  <h3 style={{ 
                    margin: 0,
                    fontSize: "1.5rem"
                  }}>Email Marketing & Automation</h3>
                </div>
              </div>
              <div style={{ padding: "25px" }}>
                <ul style={{ 
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}>
                  {[
                    "Newsletter design and delivery",
                    "Lead nurturing sequences",
                    "Campaign performance analytics",
                    "Integration with CRMs and landing pages",
                    "Personalization and segmentation"
                  ].map((item, index) => (
                    <li key={index} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: "#555",
                      lineHeight: 1.5
                    }}>
                      <span style={{
                        color: "#f7941d",
                        fontWeight: "bold"
                      }}>•</span> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/email-marketing" style={{
                  display: "inline-block",
                  marginTop: "20px",
                  textDecoration: "none",
                  color: "#f7941d",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  ":hover": {
                    color: "#1a1a2e",
                    transform: "translateX(5px)"
                  }
                }}>
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Content Marketing Card */}
            <div style={{ 
              background: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              ":hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }
            }}>
              <div style={{
                height: "200px",
                background: "url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(26,26,46,0.8), transparent)",
                  padding: "20px",
                  color: "#fff"
                }}>
                  <h3 style={{ 
                    margin: 0,
                    fontSize: "1.5rem"
                  }}>Content Marketing</h3>
                </div>
              </div>
              <div style={{ padding: "25px" }}>
                <ul style={{ 
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}>
                  {[
                    "Blog strategy and writing",
                    "SEO-focused content creation",
                    "Case studies and landing page copy",
                    "Branded visuals and infographics",
                    "Content distribution strategy"
                  ].map((item, index) => (
                    <li key={index} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: "#555",
                      lineHeight: 1.5
                    }}>
                      <span style={{
                        color: "#f7941d",
                        fontWeight: "bold"
                      }}>•</span> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/content-marketing" style={{
                  display: "inline-block",
                  marginTop: "20px",
                  textDecoration: "none",
                  color: "#f7941d",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  ":hover": {
                    color: "#1a1a2e",
                    transform: "translateX(5px)"
                  }
                }}>
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div style={{ 
          background: "#fff", 
          borderRadius: "10px", 
          padding: "40px", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          marginBottom: "40px",
          textAlign: "center"
        }}>
          <h2 style={{ 
            marginTop: 0, 
            color: "#1a1a2e", 
            fontSize: "2.2rem",
            position: "relative",
            paddingBottom: "15px",
            marginBottom: "30px"
          }}>
            <span style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "#f7941d",
              borderRadius: "2px"
            }}></span>
            Why Work With GK Technologies?
          </h2>
          
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            maxWidth: "1000px",
            margin: "0 auto"
          }}>
            {[
              {
                icon: "💰",
                title: "Focus on ROI",
                desc: "Not just clicks, but conversions that grow your business"
              },
              {
                icon: "📊",
                title: "Clear Reporting",
                desc: "You'll always know what's working with transparent analytics"
              },
              {
                icon: "📍",
                title: "Local Expertise",
                desc: "We understand SMB challenges in St. Louis and beyond"
              },
              {
                icon: "🎯",
                title: "Tailored Strategies",
                desc: "Plans built around your goals, not generic templates"
              }
            ].map((feature, index) => (
              <div key={index} style={{ 
                background: "#f9f9f9",
                padding: "30px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                ":hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }
              }}>
                <div style={{ 
                  fontSize: "3rem",
                  marginBottom: "20px",
                  color: "#f7941d"
                }}>{feature.icon}</div>
                <h3 style={{ 
                  margin: "0 0 15px",
                  color: "#1a1a2e",
                  fontSize: "1.4rem"
                }}>{feature.title}</h3>
                <p style={{ 
                  margin: 0,
                  color: "#555",
                  lineHeight: 1.6
                }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div style={{ 
          background: "#fff", 
          borderRadius: "10px", 
          padding: "40px", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          marginBottom: "40px"
        }}>
          <h2 style={{ 
            marginTop: 0, 
            color: "#1a1a2e", 
            fontSize: "2.2rem",
            textAlign: "center",
            position: "relative",
            paddingBottom: "15px",
            marginBottom: "30px"
          }}>
            <span style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "#f7941d",
              borderRadius: "2px"
            }}></span>
            What Our Clients Say
          </h2>
          
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px"
          }}>
            {[
              {
                quote: "GK Technologies transformed our online presence. Our website traffic increased by 300% in just 6 months!",
                name: "Sarah Johnson",
                company: "Local Boutique",
                rating: "★★★★★"
              },
              {
                quote: "Their PPC campaigns have been game-changing for our lead generation. We're getting 5x more qualified leads now.",
                name: "Michael Chen",
                company: "Tech Startup",
                rating: "★★★★★"
              },
              {
                quote: "The content marketing strategy they developed has positioned us as industry thought leaders. Highly recommend!",
                name: "David Wilson",
                company: "Professional Services",
                rating: "★★★★★"
              }
            ].map((testimonial, index) => (
              <div key={index} style={{ 
                background: "#f9f9f9",
                padding: "30px",
                borderRadius: "10px",
                position: "relative",
                transition: "all 0.3s ease",
                ":hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                }
              }}>
                <div style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  fontSize: "3rem",
                  color: "rgba(247, 148, 29, 0.2)",
                  lineHeight: 1
                }}>"</div>
                <p style={{ 
                  margin: "20px 0 0",
                  fontStyle: "italic",
                  color: "#555",
                  lineHeight: 1.8,
                  fontSize: "1.1rem"
                }}>{testimonial.quote}</p>
                <div style={{ 
                  marginTop: "25px",
                  borderTop: "1px solid #eee",
                  paddingTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px"
                }}>
                  <div style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "#1a1a2e",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.2rem"
                  }}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: "600",
                      color: "#1a1a2e"
                    }}>{testimonial.name}</div>
                    <div style={{ 
                      fontSize: "0.9rem",
                      color: "#777"
                    }}>{testimonial.company}</div>
                    <div style={{ 
                      color: "#f7941d",
                      marginTop: "5px"
                    }}>{testimonial.rating}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div style={{ 
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", 
          borderRadius: "10px", 
          padding: "60px 40px", 
          textAlign: "center",
          color: "#fff",
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
            <h2 style={{ 
              margin: "0 0 20px",
              fontSize: "2.5rem"
            }}>Ready to Grow Your Business Online?</h2>
            <p style={{ 
              margin: "0 auto 30px",
              fontSize: "1.3rem",
              maxWidth: "700px",
              lineHeight: "1.6",
              opacity: 0.9
            }}>
              Let's discuss how we can help you attract more customers and increase your revenue through strategic digital marketing.
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
            }}>Book Your Free Consultation</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;