import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Link } from "react-router-dom";
import { FiArrowRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { 
  FaMobileAlt, 
  FaLaptopCode, 
  FaServer, 
  FaCloud, 
  FaMicrochip, 
  FaChartLine, 
  FaDigitalTachograph,
  FaChalkboardTeacher
} from "react-icons/fa";

const Home = () => {
    const [expanded, setExpanded] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [isVisible, setIsVisible] = useState({
        stats: false,
        services: false,
        testimonials: false,
        tech: false
    });
    
    const statsRef = useRef(null);
    const servicesRef = useRef(null);
    const testimonialsRef = useRef(null);
    const techRef = useRef(null);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 300);
        
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(prev => ({...prev, [entry.target.dataset.section]: true}));
                }
            });
        }, { threshold: 0.3 });
        
        if (statsRef.current) observer.observe(statsRef.current);
        if (servicesRef.current) observer.observe(servicesRef.current);
        if (testimonialsRef.current) observer.observe(testimonialsRef.current);
        if (techRef.current) observer.observe(techRef.current);
        
        return () => observer.disconnect();
    }, []);

    const toggleReadMore = () => {
        setExpanded(!expanded);
    };

    // Counter animation for stats
    const Counter = ({ end, duration }) => {
        const [count, setCount] = useState(0);
        const countRef = useRef(null);
        
        useEffect(() => {
            if (isVisible.stats) {
                let startTime;
                let animationFrame;
                
                const animateCount = (timestamp) => {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    
                    setCount(Math.floor(progress * end));
                    
                    if (progress < 1) {
                        animationFrame = requestAnimationFrame(animateCount);
                    }
                };
                
                animationFrame = requestAnimationFrame(animateCount);
                
                return () => cancelAnimationFrame(animationFrame);
            }
        }, [isVisible.stats, end, duration]);
        
        return <span ref={countRef}>{count}+</span>;
    };

    // Slides data
    const slides = [
        {
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
            title: "Innovative Digital Solutions",
            subtitle: "Transforming businesses with cutting-edge technologies"
        },
        {
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
            title: "Expert Development Team",
            subtitle: "World-class engineers ready to build your vision"
        },
        {
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
            title: "Cloud & AI Solutions",
            subtitle: "Scalable infrastructure powered by artificial intelligence"
        }
    ];

    // Services data
    const services = [
        { icon: <FaMobileAlt />, title: "Mobile Development", link: "/Mobile", desc: "Native and cross-platform mobile app development" },
        { icon: <FaLaptopCode />, title: "Web Applications", link: "/Web", desc: "Responsive and progressive web applications" },
        { icon: <FaServer />, title: "API Services", link: "/Api", desc: "RESTful APIs and microservices architecture" },
        { icon: <FaCloud />, title: "Cloud Infrastructure", link: "/Cloud", desc: "Scalable cloud solutions and migration" },
        { icon: <FaMicrochip />, title: "IoT Solutions", link: "/IoT", desc: "Internet of Things integration and development" },
        { icon: <FaChartLine />, title: "Data Analytics", link: "/Data", desc: "Big data processing and visualization" },
        { icon: <FaDigitalTachograph />, title: "Digital Marketing", link: "/digital", desc: "Data-driven digital marketing strategies" },
        { icon: <FaChalkboardTeacher />, title: "Corporate Training", link: "/training", desc: "Specialized IT training programs" },
    ];

    // Testimonials data
    const testimonials = [
        { 
            text: "GK Technologies transformed our business with their innovative solutions. Their team is professional and always delivers on time.", 
            name: "John Smith", 
            role: "CEO, TechCorp",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        { 
            text: "The mobile app developed by GK Technologies exceeded our expectations. User engagement has increased by 45% since launch.", 
            name: "Sarah Johnson", 
            role: "Product Manager, InnovateCo",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        { 
            text: "Their cloud infrastructure solutions helped us scale efficiently while reducing costs. Highly recommended!", 
            name: "Michael Brown", 
            role: "CTO, GrowthStartup",
            avatar: "https://randomuser.me/api/portraits/men/29.jpg"
        },
        { 
            text: "Working with GK Technologies has been a game-changer for our digital transformation journey.", 
            name: "Emily Davis", 
            role: "Digital Director, Enterprise Solutions",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg"
        }
    ];

    // Tech stack data
    const techStack = [
        { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
        { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
        { name: "AWS", icon: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
        { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
        { name: "Docker", icon: "https://cdn.worldvectorlogo.com/logos/docker-4.svg" },
        { name: "Kubernetes", icon: "https://cdn.worldvectorlogo.com/logos/kubernetes-1.svg" },
        { name: "TensorFlow", icon: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg" },
        { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter-logo.svg" },
        { name: "GraphQL", icon: "https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg" },
        { name: "Firebase", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
        { name: "Azure", icon: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg" }
    ];

    return (
        <div className="home-container">
            {/* Hero Section with Parallax Effect */}
            <section className="hero-section">
                <Swiper 
                    modules={[Navigation, Pagination, Autoplay, EffectFade]} 
                    spaceBetween={0} 
                    slidesPerView={1} 
                    navigation 
                    pagination={{ clickable: true }} 
                    autoplay={{ delay: 6000, disableOnInteraction: false }} 
                    loop={true}
                    effect="fade"
                    speed={1200}
                    className="hero-swiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-container">
                                <div 
                                    className="slide-image" 
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                ></div>
                                <div className="slide-overlay"></div>
                                <div className={`slide-content ${animate ? 'animate-in' : ''}`}>
                                    <h2>{slide.title}</h2>
                                    <p>{slide.subtitle}</p>
                                    <button className="cta-button">
                                        <Link to='/about'>Explore Our Solutions</Link>
                                        <FiArrowRight className="arrow-icon" />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* Scroll indicator */}
                <div className="scroll-indicator">
                    <div className="scroll-line"></div>
                    <span>Scroll Down</span>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-image">
                            <div className="image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="GK Technologies Mission"
                                    className="scale-on-hover"
                                />
                                <div className="image-overlay"></div>
                                <div className="floating-element elem-1"></div>
                                <div className="floating-element elem-2"></div>
                                <div className="floating-element elem-3"></div>
                            </div>
                        </div>

                        <div className="mission-content">
                            <div className="section-label">Our Mission</div>
                            <h2>Driving Digital <span className="brand-accent">Transformation</span></h2>
                            <p>
                                GK Technologies is a premier onsite/offshore software solutions and services company, headquartered in the U.S. 
                                We are recognized as the second-largest private IT company and ranked among the 50 fastest-growing private companies.
                                {expanded && (
                                    <>
                                        <br /><br />
                                        We deliver digital transformation through cutting-edge software and AI. Our goal is to enable startups and enterprises 
                                        to reach new heights with scalable, secure, and cost-effective solutions. Our team of experts is dedicated to 
                                        innovation and excellence in every project we undertake.
                                    </>
                                )}
                            </p>
                            <button
                                onClick={toggleReadMore}
                                className="read-more-btn"
                            >
                                {expanded ? "Read Less" : "Read More"}
                                <span className="btn-arrow">{expanded ? <FiChevronUp /> : <FiChevronDown />}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section 
                ref={statsRef} 
                className={`stats-section ${isVisible.stats ? 'visible' : ''}`}
                data-section="stats"
            >
                <div className="container">
                    <div className="section-label">By The Numbers</div>
                    <h2>Our <span className="brand-accent">Achievements</span></h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-icon">🚀</div>
                            <h3><Counter end={200} duration={2000} /></h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">🤝</div>
                            <h3><Counter end={50} duration={2000} /></h3>
                            <p>Happy Clients</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">📅</div>
                            <h3><Counter end={15} duration={2000} /></h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">👨‍💻</div>
                            <h3><Counter end={40} duration={2000} /></h3>
                            <p>Experts Team</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section 
                ref={servicesRef} 
                className={`services-section ${isVisible.services ? 'visible' : ''}`}
                data-section="services"
            >
                <div className="container">
                    <div className="section-label">What We Offer</div>
                    <h2>Our <span className="brand-accent">Services</span></h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <Link to={service.link} className="service-link">
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
                                    <div className="service-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                        <div className="service-arrow">
                                            <FiArrowRight />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section 
                ref={testimonialsRef} 
                className={`testimonials-section ${isVisible.testimonials ? 'visible' : ''}`}
                data-section="testimonials"
            >
                <div className="container">
                    <div className="section-label">Client Feedback</div>
                    <h2>What Our <span className="brand-accent">Clients Say</span></h2>
                    <div className="testimonials-container">
                        <div className="testimonials-grid">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="testimonial-card">
                                    <div className="testimonial-content">
                                        <div className="quote-icon">"</div>
                                        <p>{testimonial.text}</p>
                                    </div>
                                    <div className="testimonial-author">
                                        <img src={testimonial.avatar} alt={testimonial.name} />
                                        <div className="author-details">
                                            <h4>{testimonial.name}</h4>
                                            <p>{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Stack Section */}
            <section 
                ref={techRef} 
                className={`tech-section ${isVisible.tech ? 'visible' : ''}`}
                data-section="tech"
            >
                <div className="container">
                    <div className="section-label">Our Expertise</div>
                    <h2>Our <span className="brand-accent">Technologies Stack</span></h2>
                    <div className="tech-grid">
                        {techStack.map((tech, index) => (
                            <div key={index} className="tech-item">
                                <div className="tech-icon">
                                    <img src={tech.icon} alt={tech.name} />
                                </div>
                                <p>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>Let's discuss how our solutions can help you achieve your business goals efficiently and effectively.</p>
                        <button className="cta-button">
                            <Link to="/contact">Get Started Today</Link>
                            <FiArrowRight className="arrow-icon" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Banner */}
            <section className="contact-banner">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-text">
                            <h2>Sharing Expertise. Building Relationships.</h2>
                            <p>We're ready to discuss your next project and explore how we can help your business grow.</p>
                        </div>
                        <div className="contact-options">
                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 4h4l2 5l-3.5 3.5a10 10 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2"></path>
                                        </svg>
                                    </div>
                                    <div className="contact-info">
                                        <h4>Call Us</h4>
                                        {/* <p>+1-314-732-7749</p> */}
                                        <p>+1-314-354-0634</p>
                                    </div>
                                </div>
                                
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                    </div>
                                    <div className="contact-info">
                                        <h4>Email Us</h4>
                                        <p>hr@kgktechnologies.com</p>
                                        <p>support@kgktechnologies.com</p>
                                    </div>
                                </div>
                                
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                    </div>
                                    <div className="contact-info">
                                        <h4>Business Hours</h4>
                                        <p>Mon-Fri: 9am - 6pm EST</p>
                                        <p>Sat: 10am - 2pm EST</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="contact-actions">
                                <a href="https://wa.me/13147327749" target="_blank" rel="noopener noreferrer" className="action-btn whatsapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    WhatsApp Us
                                </a>
                                
                                <a href="mailto:hr@kgktechnologies.com" className="action-btn email">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    Send Email
                                </a>
                                
                                <Link to="/contact" className="action-btn primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    Contact Form
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <style jsx>{`
                    .contact-banner {
                        background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
                        color: white;
                        padding: 4rem 0;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .contact-banner::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                        z-index: 0;
                    }
                    
                    .contact-content {
                        position: relative;
                        z-index: 1;
                        display: grid;
                        grid-template-columns: 1fr 1.5fr;
                        gap: 3rem;
                        align-items: center;
                    }
                    
                    .contact-text h2 {
                        color: white;
                        text-align: left;
                        margin-bottom: 1rem;
                        font-size: 2.2rem;
                    }
                    
                    .contact-text p {
                        font-size: 1.1rem;
                        opacity: 0.9;
                        line-height: 1.6;
                    }
                    
                    .contact-options {
                        display: flex;
                        flex-direction: column;
                        gap: 2rem;
                    }
                    
                    .contact-details {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 1.5rem;
                    }
                    
                    .contact-item {
                        display: flex;
                        align-items: flex-start;
                        gap: 1rem;
                    }
                    
                    .contact-icon {
                        background: rgba(255, 255, 255, 0.1);
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                    }
                    
                    .contact-icon svg {
                        color: white;
                    }
                    
                    .contact-info h4 {
                        font-size: 1.1rem;
                        margin-bottom: 0.5rem;
                        font-weight: 600;
                    }
                    
                    .contact-info p {
                        margin: 0.2rem 0;
                        font-size: 0.9rem;
                        opacity: 0.9;
                    }
                    
                    .contact-actions {
                        display: flex;
                        gap: 1rem;
                        justify-content: flex-end;
                    }
                    
                    .action-btn {
                        display: inline-flex;
                        align-items: center;
                        gap: 0.5rem;
                        padding: 0.8rem 1.5rem;
                        border-radius: 50px;
                        font-weight: 600;
                        text-decoration: none;
                        transition: var(--transition);
                        font-size: 0.9rem;
                    }
                    
                    .action-btn.primary {
                        background: var(--accent);
                        color: white;
                    }
                    
                    .action-btn.primary:hover {
                        background: var(--accent-dark);
                        transform: translateY(-2px);
                        box-shadow: 0 5px 15px rgba(249, 115, 22, 0.4);
                    }
                    
                    .action-btn.whatsapp {
                        background: #25D366;
                        color: white;
                    }
                    
                    .action-btn.whatsapp:hover {
                        background: #128C7E;
                        transform: translateY(-2px);
                        box-shadow: 0 5px 15px rgba(18, 140, 126, 0.4);
                    }
                    
                    .action-btn.email {
                        background: white;
                        color: var(--primary);
                    }
                    
                    .action-btn.email:hover {
                        background: #f1f5f9;
                        transform: translateY(-2px);
                        box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
                    }
                    
                    @media (max-width: 1024px) {
                        .contact-details {
                            grid-template-columns: 1fr 1fr;
                        }
                    }
                    
                    @media (max-width: 768px) {
                        .contact-content {
                            grid-template-columns: 1fr;
                            gap: 2rem;
                        }
                        
                        .contact-text h2 {
                            text-align: center;
                        }
                        
                        .contact-text p {
                            text-align: center;
                        }
                        
                        .contact-details {
                            grid-template-columns: 1fr;
                            gap: 1.5rem;
                        }
                        
                        .contact-actions {
                            flex-direction: column;
                        }
                    }
                    
                    @media (max-width: 480px) {
                        .contact-banner {
                            padding: 3rem 0;
                        }
                        
                        .contact-text h2 {
                            font-size: 1.8rem;
                        }
                        
                        .contact-item {
                            flex-direction: column;
                            text-align: center;
                            align-items: center;
                        }
                        
                        .contact-info h4,
                        .contact-info p {
                            text-align: center;
                        }
                    }
                `}</style>
            </section>

            {/* Global Styles */}
            <style jsx>{`
                :root {
                    --primary: #2563eb;
                    --primary-dark: #1d4ed8;
                    --accent: #f97316;
                    --accent-dark: #ea580c;
                    --light: #f8fafc;
                    --dark: #0f172a;
                    --text: #334155;
                    --text-light: #64748b;
                    --transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    --shadow: 0 10px 30px rgba(0,0,0,0.08);
                    --shadow-hover: 0 15px 40px rgba(0,0,0,0.15);
                }
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Inter', 'Segoe UI', sans-serif;
                    color: var(--text);
                    line-height: 1.6;
                    overflow-x: hidden;
                }
                
                .home-container {
                    width: 100%;
                    overflow: hidden;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                
                section {
                    padding: 5rem 0;
                }
                
                h2 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    text-align: center;
                    color: var(--dark);
                }
                
                .brand-accent {
                    color: var(--accent);
                    position: relative;
                    display: inline-block;
                }
                
                .brand-accent::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 30%;
                    background: rgba(249, 115, 22, 0.2);
                    z-index: -1;
                    transform: rotate(-2deg);
                }
                
                .section-label {
                    text-transform: uppercase;
                    font-weight: 600;
                    font-size: 0.9rem;
                    letter-spacing: 2px;
                    color: var(--accent);
                    text-align: center;
                    margin-bottom: 1rem;
                    display: block;
                }
                
                /* Hero Section */
                .hero-section {
                    position: relative;
                    height: 100vh;
                    overflow: hidden;
                    padding: 0 !important;
                    margin-top: 0 !important;
                }
                
                .hero-swiper {
                    width: 100%;
                    height: 100%;
                }
                
                .slide-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                
                .slide-image {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    transform: scale(1.1);
                    transition: transform 10s ease-out;
                }
                
                .swiper-slide-active .slide-image {
                    transform: scale(1);
                }
                
                .slide-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
                }
                
                .slide-content {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    color: white;
                    z-index: 10;
                    opacity: 0;
                    transition: opacity 1s ease;
                    width: 80%;
                    max-width: 800px;
                }
                
                .slide-content.animate-in {
                    opacity: 1;
                }
                
                .slide-content h2 {
                    font-size: 3.5rem;
                    color: white;
                    margin-bottom: 1rem;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInUp 1s ease 0.5s forwards;
                }
                
                .slide-content p {
                    font-size: 1.2rem;
                    margin-bottom: 2rem;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInUp 1s ease 0.8s forwards;
                }
                
                .cta-button {
                    background: var(--accent);
                    color: white;
                    padding: 1rem 2rem;
                    border: none;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: var(--transition);
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInUp 1s ease 1.1s forwards;
                    box-shadow: 0 4px 14px rgba(249, 115, 22, 0.4);
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .cta-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 20px rgba(249, 115, 22, 0.6);
                    background: var(--accent-dark);
                }
                
                .cta-button a {
                    color: white;
                    text-decoration: none;
                }
                
                .arrow-icon {
                    transition: var(--transition);
                }
                
                .cta-button:hover .arrow-icon {
                    transform: translateX(5px);
                }
                
                .scroll-indicator {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: white;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    opacity: 0;
                    animation: fadeIn 1s ease 2s forwards;
                }
                
                .scroll-line {
                    width: 2px;
                    height: 50px;
                    background: rgba(255,255,255,0.5);
                    margin-bottom: 10px;
                    position: relative;
                    overflow: hidden;
                }
                
                .scroll-line:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 20px;
                    background: white;
                    animation: scrollLine 2s infinite;
                }
                
                /* Mission Section */
                .mission-section {
                    background: white;
                    position: relative;
                    overflow: hidden;
                }
                
                .mission-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }
                
                .mission-image {
                    position: relative;
                }
                
                .image-wrapper {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: var(--shadow);
                    transform: perspective(1000px) rotateY(-5deg);
                    transition: var(--transition);
                }
                
                .mission-image:hover .image-wrapper {
                    transform: perspective(1000px) rotateY(0deg);
                }
                
                .image-wrapper img {
                    width: 100%;
                    height: auto;
                    display: block;
                    transition: var(--transition);
                }
                
                .scale-on-hover:hover {
                    transform: scale(1.05);
                }
                
                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to bottom, transparent 0%, rgba(37, 99, 235, 0.2) 100%);
                    opacity: 0;
                    transition: var(--transition);
                }
                
                .image-wrapper:hover .image-overlay {
                    opacity: 1;
                }
                
                .floating-element {
                    position: absolute;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--primary), var(--accent));
                    opacity: 0.1;
                    z-index: -1;
                }
                
                .elem-1 {
                    width: 100px;
                    height: 100px;
                    top: -20px;
                    left: -20px;
                    animation: float 6s ease-in-out infinite;
                }
                
                .elem-2 {
                    width: 60px;
                    height: 60px;
                    bottom: 30px;
                    right: -30px;
                    animation: float 5s ease-in-out infinite 1s;
                }
                
                .elem-3 {
                    width: 80px;
                    height: 80px;
                    bottom: -40px;
                    left: 40%;
                    animation: float 7s ease-in-out infinite 0.5s;
                }
                
                .mission-content h2 {
                    text-align: left;
                    margin-bottom: 1.5rem;
                }
                
                .mission-content p {
                    margin-bottom: 2rem;
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: var(--text-light);
                }
                
                .read-more-btn {
                    background: var(--primary);
                    color: white;
                    padding: 0.8rem 1.5rem;
                    border: none;
                    border-radius: 50px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: var(--transition);
                }
                
                .read-more-btn:hover {
                    background: var(--primary-dark);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
                }
                
                /* Stats Section */
                .stats-section {
                    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
                    color: white;
                    opacity: 0;
                    transform: translateY(50px);
                    transition: opacity 1s ease, transform 1s ease;
                    position: relative;
                    overflow: hidden;
                }
                
                .stats-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                    z-index: 0;
                }
                
                .stats-section.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .stats-section h2 {
                    color: white;
                    position: relative;
                    z-index: 1;
                }
                
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                    position: relative;
                    z-index: 1;
                }
                
                .stat-item {
                    text-align: center;
                    padding: 2rem;
                    background: rgba(255,255,255,0.1);
                    border-radius: 15px;
                    backdrop-filter: blur(10px);
                    transition: var(--transition);
                    border: 1px solid rgba(255,255,255,0.1);
                }
                
                .stat-item:hover {
                    transform: translateY(-10px);
                    background: rgba(255,255,255,0.15);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                }
                
                .stat-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }
                
                .stat-item h3 {
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                    font-weight: 700;
                }
                
                /* Services Section */
                .services-section {
                    background: var(--light);
                    opacity: 0;
                    transform: translateY(50px);
                    transition: opacity 1s ease, transform 1s ease;
                }
                
                .services-section.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 2rem;
                }
                
                .service-card {
                    background: white;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: var(--shadow);
                    transition: var(--transition);
                    position: relative;
                    height: 250px;
                }
                
                .service-card:hover {
                    transform: translateY(-10px);
                    box-shadow: var(--shadow-hover);
                }
                
                .service-link {
                    display: block;
                    height: 100%;
                    text-decoration: none;
                    color: inherit;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                }
                
                .service-icon {
                    font-size: 2.5rem;
                    color: var(--primary);
                    margin-bottom: 1rem;
                }
                
                .service-content {
                    position: relative;
                    flex: 1;
                }
                
                .service-content h3 {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                    color: var(--dark);
                }
                
                .service-content p {
                    color: var(--text-light);
                    font-size: 0.9rem;
                    margin-bottom: 1rem;
                }
                
                .service-arrow {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    font-size: 1.5rem;
                    color: var(--accent);
                    transition: var(--transition);
                }
                
                .service-card:hover .service-arrow {
                    transform: translateX(5px);
                }
                
                /* Testimonials Section */
                .testimonials-section {
                    opacity: 0;
                    transform: translateY(50px);
                    transition: opacity 1s ease, transform 1s ease;
                }
                
                .testimonials-section.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .testimonials-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 2rem;
                }
                
                .testimonial-card {
                    background: white;
                    border-radius: 15px;
                    padding: 2rem;
                    box-shadow: var(--shadow);
                    transition: var(--transition);
                    position: relative;
                }
                
                .testimonial-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-hover);
                }
                
                .quote-icon {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    font-size: 4rem;
                    color: rgba(37, 99, 235, 0.1);
                    line-height: 1;
                }
                
                .testimonial-content {
                    margin-bottom: 1.5rem;
                }
                
                .testimonial-content p {
                    font-style: italic;
                    line-height: 1.7;
                    color: var(--text-light);
                }
                
                .testimonial-author {
                    display: flex;
                    align-items: center;
                }
                
                .testimonial-author img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-right: 1rem;
                }
                
                .author-details h4 {
                    font-weight: 600;
                    margin-bottom: 0.2rem;
                }
                
                .author-details p {
                    font-size: 0.9rem;
                    color: var(--text-light);
                }
                
                /* Tech Section */
                .tech-section {
                    background: var(--light);
                    opacity: 0;
                    transform: translateY(50px);
                    transition: opacity 1s ease, transform 1s ease;
                }
                
                .tech-section.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .tech-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                    gap: 2rem;
                }
                
                .tech-item {
                    background: white;
                    border-radius: 15px;
                    padding: 1.5rem 1rem;
                    text-align: center;
                    box-shadow: var(--shadow);
                    transition: var(--transition);
                }
                
                .tech-item:hover {
                    transform: translateY(-5px) scale(1.05);
                    box-shadow: var(--shadow-hover);
                }
                
                .tech-icon {
                    width: 60px;
                    height: 60px;
                    margin: 0 auto 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .tech-icon img {
                    max-width: 100%;
                    max-height: 100%;
                }
                
                .tech-item p {
                    font-weight: 600;
                    font-size: 0.9rem;
                }
                
                /* CTA Section */
                .cta-section {
                    background: grey;
                    color: white;
                    text-align: center;
                }
                
                .cta-content h2 {
                    color: white;
                    margin-bottom: 1rem;
                }
                
                .cta-content p {
                    font-size: 1.2rem;
                    margin-bottom: 2rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                /* Contact Banner */
                // .contact-banner {
                //     background: #006c94;
                //     color: white;
                //     padding: 3rem 0;
                // }
                
                // .contact-content {
                //     display: flex;
                //     justify-content: space-between;
                //     align-items: center;
                //     flex-wrap: wrap;
                //     gap: 2rem;
                // }
                
                // .contact-content h2 {
                //     text-align: left;
                //     color: white;
                //     margin: 0;
                //     flex: 1;
                // }
                
                // .contact-details {
                //     text-align: right;
                // }
                
                // .contact-details p {
                //     margin-bottom: 0.5rem;
                // }
                
                // .whatsapp-btn {
                //     background: #25D366;
                //     color: white;
                //     padding: 0.7rem 1.5rem;
                //     border: none;
                //     border-radius: 50px;
                //     font-weight: 600;
                //     cursor: pointer;
                //     transition: var(--transition);
                //     margin-top: 1rem;
                // }
                
                // .whatsapp-btn:hover {
                //     background: #128C7E;
                //     transform: translateY(-2px);
                //     box-shadow: 0 5px 15px rgba(18, 140, 126, 0.3);
                // }
                
                /* Animations */
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes scrollLine {
                    0% { top: -20px; }
                    100% { top: 100%; }
                }
                
                @keyframes float {
                    0% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-10px) rotate(5deg);
                    }
                    100% {
                        transform: translateY(0) rotate(0deg);
                    }
                }
                
                /* Responsive Design */
                @media (max-width: 1024px) {
                    h2 {
                        font-size: 2.2rem;
                    }
                    
                    .mission-grid {
                        gap: 3rem;
                    }
                    
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                
                @media (max-width: 768px) {
                    section {
                        padding: 4rem 0;
                    }
                    
                    h2 {
                        font-size: 2rem;
                        margin-bottom: 1.5rem;
                    }
                    
                    .slide-content h2 {
                        font-size: 2.5rem;
                    }
                    
                    .mission-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    
                    .mission-content h2 {
                        text-align: center;
                    }
                    
                    .stats-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    
                    .services-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .testimonials-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .tech-grid {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 1.5rem;
                    }
                    
                    .contact-content {
                        flex-direction: column;
                        text-align: center;
                    }
                    
                    .contact-content h2 {
                        text-align: center;
                    }
                    
                    .contact-details {
                        text-align: center;
                    }
                }
                
                @media (max-width: 480px) {
                    .slide-content h2 {
                        font-size: 2rem;
                    }
                    
                    .slide-content p {
                        font-size: 1rem;
                    padding: 0 1rem;
                        margin-bottom: 1.5rem;
                    }
                    
                    .cta-button {
                        padding: 0.8rem 1.5rem;
                        font-size: 0.9rem;
                    }
                    
                    .tech-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .service-card {
                        height: auto;
                        min-height: 250px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;