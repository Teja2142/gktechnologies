import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import slide1 from "./images/slide1.png"; 
import slide2 from "./images/slide2.png";
import slide3 from "./images/slide3.png";
import { Link } from "react-router-dom";

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
                    autoplay={{ delay: 5000, disableOnInteraction: false }} 
                    loop={true}
                    effect="fade"
                    speed={1200}
                    className="hero-swiper"
                >
                    {[slide1, slide2, slide3].map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-container">
                                <div 
                                    className="slide-image" 
                                    style={{ backgroundImage: `url(${slide})` }}
                                ></div>
                                <div className="slide-overlay"></div>
                                <div className={`slide-content ${animate ? 'animate-in' : ''}`}>
                                    <h2>Welcome To <span className="brand-accent">GK Technology</span></h2>
                                    <p>Transforming businesses with cutting-edge technology solutions</p>
                                    <button className="cta-button">
                                        <Link to='/about'>Explore Our Solutions</Link>
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
                                    src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="GK Technology Mission"
                                    className="scale-on-hover"
                                />
                                <div className="image-overlay"></div>
                            </div>
                        </div>

                        <div className="mission-content">
                            <h2>Mission Of <span className="brand-accent">GK Technology</span></h2>
                            <p>
                                GK Technology is a premier onsite/offshore software solutions and services company, headquartered in the U.S. 
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
                                <span className="btn-arrow">{expanded ? "↑" : "↓"}</span>
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
                    <h2>Our <span className="brand-accent">Services</span></h2>
                    <div className="services-grid">
                        {[
                            { img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Mobile Development", link: "/Mobile", desc: "Native and cross-platform mobile app development" },
                            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Web Applications", link: "/Web", desc: "Responsive and progressive web applications" },
                            { img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "API Services", link: "/Api", desc: "RESTful APIs and microservices architecture" },
                            { img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Cloud Infrastructure", link: "/Cloud", desc: "Scalable cloud solutions and migration" },
                            { img: "https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "IoT Solutions", link: "/IoT", desc: "Internet of Things integration and development" },
                            { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Data Analytics", link: "/Data", desc: "Big data processing and visualization" },
                            { img: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Digital Marketing", link: "/digital", desc: "Data-driven digital marketing strategies" },
                            { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", title: "Corporate Training", link: "/training", desc: "Specialized IT training programs" },
                        ].map((service, index) => (
                            <div key={index} className="service-card">
                                <Link to={service.link} className="service-link">
                                    <div className="service-image">
                                        <img src={service.img} alt={service.title} />
                                        <div className="service-overlay">
                                            <span className="view-details">View Details</span>
                                        </div>
                                    </div>
                                    <div className="service-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                        <div className="service-arrow">→</div>
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
                    <h2>What Our <span className="brand-accent">Clients Say</span></h2>
                    <div className="testimonials-container">
                        <div className="testimonials-grid">
                            {[
                                { 
                                    text: "GK Technology transformed our business with their innovative solutions. Their team is professional and always delivers on time.", 
                                    name: "John Smith", 
                                    role: "CEO, TechCorp",
                                    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
                                },
                                { 
                                    text: "The mobile app developed by GK Technology exceeded our expectations. User engagement has increased by 45% since launch.", 
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
                                    text: "Working with GK Technology has been a game-changer for our digital transformation journey.", 
                                    name: "Emily Davis", 
                                    role: "Digital Director, Enterprise Solutions",
                                    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
                                }
                            ].map((testimonial, index) => (
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

            {/* Technology Stack Section */}
            <section 
                ref={techRef} 
                className={`tech-section ${isVisible.tech ? 'visible' : ''}`}
                data-section="tech"
            >
                <div className="container">
                    <h2>Our <span className="brand-accent">Technology Stack</span></h2>
                    <div className="tech-grid">
                        {[
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
                        ].map((tech, index) => (
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
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Banner */}
            <section className="contact-banner">
                <div className="container">
                    <div className="contact-content">
                        <h2>Sharing Expertise. Building Relationships.</h2>
                        <div className="contact-details">
                            <p>+1-314-732-7749, +1-314-354-0634</p>
                            <p>support@kgktechnology.com</p>
                            <a href="https://wa.me/13147327749" target="_blank" rel="noopener noreferrer">
                                <button className="whatsapp-btn">
                                    WhatsApp Us
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Styles */}
            <style jsx>{`
                :root {
                    --primary: #1e3a8a;
                    --accent: #f97316;
                    --light: #f8fafc;
                    --dark: #0f172a;
                    --text: #334155;
                    --transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
                
                h2 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    text-align: center;
                    color: var(--dark);
                }
                
                .brand-accent {
                    color: var(--accent);
                }
                
                section:first-of-type {
                    padding-top: 0 !important;
                }

                
                /* Hero Section */
                .hero-section {
                    position: relative;
                    height: 100vh;
                    overflow: hidden;
                    padding: 0 !important;   /* Remove top gap */
                    margin-top: 0 !important; /* Ensure no margin */
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
                }
                
                .cta-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 20px rgba(249, 115, 22, 0.6);
                }
                
                .cta-button a {
                    color: white;
                    text-decoration: none;
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
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
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
                    background: linear-gradient(to bottom, transparent 0%, rgba(30, 58, 138, 0.2) 100%);
                    opacity: 0;
                    transition: var(--transition);
                }
                
                .image-wrapper:hover .image-overlay {
                    opacity: 1;
                }
                
                .mission-content h2 {
                    text-align: left;
                    margin-bottom: 1.5rem;
                }
                
                .mission-content p {
                    margin-bottom: 2rem;
                    font-size: 1.1rem;
                    line-height: 1.8;
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
                    background: var(--accent);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(30, 58, 138, 0.2);
                }
                
                /* Stats Section */
                .stats-section {
                    background: linear-gradient(135deg, var(--primary) 0%, #2d4ba3 100%);
                    color: white;
                    opacity: 0;
                    transform: translateY(50px);
                    transition: opacity 1s ease, transform 1s ease;
                }
                
                .stats-section.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .stats-section h2 {
                    color: white;
                }
                
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                
                .stat-item {
                    text-align: center;
                    padding: 2rem;
                    background: rgba(255,255,255,0.1);
                    border-radius: 15px;
                    backdrop-filter: blur(10px);
                    transition: var(--transition);
                }
                
                .stat-item:hover {
                    transform: translateY(-10px);
                    background: rgba(255,255,255,0.15);
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
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    transition: var(--transition);
                    position: relative;
                    height: 350px;
                }
                
                .service-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
                }
                
                .service-link {
                    display: block;
                    height: 100%;
                    text-decoration: none;
                    color: inherit;
                }
                
                .service-image {
                    position: relative;
                    height: 60%;
                    overflow: hidden;
                }
                
                .service-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: var(--transition);
                }
                
                .service-card:hover .service-image img {
                    transform: scale(1.1);
                }
                
                .service-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(30, 58, 138, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: var(--transition);
                }
                
                .service-card:hover .service-overlay {
                    opacity: 1;
                }
                
                .view-details {
                    color: white;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                .service-content {
                    padding: 1.5rem;
                    position: relative;
                    height: 40%;
                }
                
                .service-content h3 {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                    color: var(--dark);
                }
                
                .service-content p {
                    color: var(--text);
                    font-size: 0.9rem;
                    margin-bottom: 1rem;
                }
                
                .service-arrow {
                    position: absolute;
                    right: 1.5rem;
                    bottom: 1.5rem;
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
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    transition: var(--transition);
                    position: relative;
                }
                
                .testimonial-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.12);
                }
                
                .quote-icon {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    font-size: 4rem;
                    color: rgba(30, 58, 138, 0.1);
                    line-height: 1;
                }
                
                .testimonial-content {
                    margin-bottom: 1.5rem;
                }
                
                .testimonial-content p {
                    font-style: italic;
                    line-height: 1.7;
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
                    color: var(--text);
                    opacity: 0.8;
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
                    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
                    transition: var(--transition);
                }
                
                .tech-item:hover {
                    transform: translateY(-5px) scale(1.05);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
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
                    background: linear-gradient(135deg, var(--accent) 0%, #fa8e3f 100%);
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
                .contact-banner {
                    background: linear-gradient(90deg, var(--primary) 0%, #2d4ba3 100%);
                    color: white;
                    padding: 3rem 0;
                }
                
                .contact-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 2rem;
                }
                
                .contact-content h2 {
                    text-align: left;
                    color: white;
                    margin: 0;
                    flex: 1;
                }
                
                .contact-details {
                    text-align: right;
                }
                
                .contact-details p {
                    margin-bottom: 0.5rem;
                }
                
                .whatsapp-btn {
                    background: #25D366;
                    color: white;
                    padding: 0.7rem 1.5rem;
                    border: none;
                    border-radius: 50px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition);
                    margin-top: 1rem;
                }
                
                .whatsapp-btn:hover {
                    background: #128C7E;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(18, 140, 126, 0.3);
                }
                
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
                    text-align: center;
                    width: 100%;
                    padding: 0 1rem;
                    line-height: 1.3;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 100%;
                    box-sizing: border-box;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                    hyphens: auto;
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
                    line-height: 1.5;
                    max-height: 4.5em;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                    }
                    
                    .cta-button {
                        padding: 0.8rem 1.5rem;
                        font-size: 0.9rem;
                    }
                    
                    .tech-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .service-card {
                        height: 300px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;