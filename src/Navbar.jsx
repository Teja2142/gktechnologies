import React, { useState } from "react";
import {
  FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp, FaTelegram, FaBars, FaTimes
} from "react-icons/fa";
import gklogo from "./images/gklogo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const dropdownItems = [
    { path: "/Web", name: "Web Development", icon: "💻" },
    { path: "/Api", name: "API Services", icon: "🔌" },
    { path: "/Cloud", name: "Cloud Services", icon: "☁️" },
    { path: "/Data", name: "Data Analytics", icon: "📊" },
    { path: "/IoT", name: "IoT Solutions", icon: "🏠" },
    { path: "/Mobile", name: "Mobile Development", icon: "📱" },
    { path: "/Digital", name: "Digital Marketing", icon: "🔍" },
    { path: "/Training", name: "Corporate Training", icon: "🏢" }
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = (
    <>
      <Link to="/" style={gkNavbarStyles.navLink}>Home</Link>
      <div style={{ position: "relative", width: isMobile ? "100%" : "auto" }}
        onMouseEnter={() => !isMobile && setShowDropdown(true)}
        onMouseLeave={() => !isMobile && setShowDropdown(false)}
      >
        <span
          style={{ ...gkNavbarStyles.navLink, cursor: "pointer", display: "flex", alignItems: "center", width: isMobile ? "100%" : "auto" }}
          onClick={() => isMobile && setShowDropdown((prev) => !prev)}
        >
          Services ▼
        </span>
        {(showDropdown && (!isMobile || mobileMenuOpen)) && (
          <div style={{
            position: isMobile ? "static" : "absolute",
            top: isMobile ? undefined : "100%",
            left: isMobile ? undefined : "-120px",
            background: isMobile ? "#f7f7f7" : "#fff",
            boxShadow: isMobile ? "none" : "0 8px 20px rgba(0,0,0,0.1)",
            borderRadius: isMobile ? "0" : "8px",
            padding: isMobile ? "10px 0" : "20px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "15px",
            zIndex: 1000,
            minWidth: isMobile ? "100%" : "350px",
            width: isMobile ? "100%" : undefined
          }}>
            {dropdownItems.map((item, index) => (
              <Link key={index} to={item.path} style={{ ...gkNavbarStyles.dropdownItem, width: isMobile ? "100%" : "auto" }} onClick={() => isMobile && setMobileMenuOpen(false)}>
                <span style={{ fontSize: "1.2rem" }}>{item.icon}</span> {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <Link to="/Careers" style={gkNavbarStyles.navLink}>Careers</Link>
      <Link to="/About" style={gkNavbarStyles.navLink}>About Us</Link>
      <Link to="/Contact" style={gkNavbarStyles.navLink}>Contact Us</Link>
      <Link to="/Login" style={gkNavbarStyles.navLink}>Login</Link>
      <Link to="/Blog" style={gkNavbarStyles.navLink}></Link>
    </>
  );

  return (
    <div style={gkNavbarStyles.navbarWrapper}>
      {/* Top Contact Bar */}
      <div style={gkNavbarStyles.topBar}>
        <div style={gkNavbarStyles.contactSection}>
          <span style={gkNavbarStyles.contactItem}><FaEnvelope /> hr@kgktechnologies.com</span>
          <span style={gkNavbarStyles.contactItem}><FaPhoneAlt /> +1-314-354-0634</span>
        </div>
        <div style={gkNavbarStyles.socialSection}>
          {[["https://twitter.com/login", FaTwitter], ["https://facebook.com/login", FaFacebookF], ["https://www.linkedin.com/in/gk-technologies-20a187365/", FaLinkedinIn], ["https://www.instagram.com/gk_technologies.stl/", FaInstagram], ["https://accounts.google.com/ServiceLogin?service=youtube", FaYoutube], ["https://wa.me/13143540634", FaWhatsapp], ["https://web.telegram.org", FaTelegram]].map(([link, Icon], i) => (
            <a key={i} href={link} target="_blank" rel="noopener noreferrer" style={gkNavbarStyles.iconLink}><Icon /></a>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <div style={gkNavbarStyles.navbarContainer}>
        <div style={gkNavbarStyles.logoSection}>
          <Link to="/"><img src={gklogo} alt="GK Logo" style={{ height: "48px" }} /></Link>
          <div>
            <h1 style={gkNavbarStyles.logoTitle}>GK Tech
              <p style={gkNavbarStyles.logoSubtitle}>Stay one step ahead</p>
            </h1>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="gk-desktop-nav" style={gkNavbarStyles.navLinks}>
          {navLinks}
        </nav>

        {/* Hamburger Icon */}
        <div className="gk-mobile-menu-icon" style={gkNavbarStyles.mobileMenuIcon}>
          <button onClick={toggleMobileMenu} style={gkNavbarStyles.menuButton}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="gk-mobile-menu" style={{ 
        display: mobileMenuOpen ? "flex" : "none", 
        ...gkNavbarStyles.mobileMenu 
      }}>
        {navLinks}
      </div>

      {/* Media Queries */}
      <style>
        {`
        @media (max-width: 768px) {
          .gk-desktop-nav { display: none !important; }
          .gk-mobile-menu-icon { display: block !important; padding-right: 20px; }
          .gk-mobile-menu { display: flex; flex-direction: column; background: white; padding: 15px 20px; gap: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
          .gk-mobile-menu .dropdown { position: static !important; left: 0 !important; min-width: 100% !important; box-shadow: none !important; border-radius: 0 !important; padding: 10px 0 !important; grid-template-columns: 1fr !important; background: #f7f7f7 !important; }
        }
        
        @media (min-width: 769px) {
          .gk-mobile-menu-icon { display: none !important; }
          .gk-mobile-menu { display: none !important; }
        }
        `}
      </style>
    </div>
  );
};

const gkNavbarStyles = {
  navbarWrapper: {
    width: "100%",
    position: "relative",
    zIndex: 1000
  },
  topBar: {
    display: "flex", 
    width: "100%", 
    height: "50px", 
    position: "relative", 
    overflow: "hidden"
  },
  contactSection: {
    width: "60%", 
    backgroundColor: "#f7941d", 
    display: "flex", 
    alignItems: "center", 
    paddingLeft: "5%", 
    fontWeight: "bold", 
    color: "white", 
    clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)", 
    gap: "15px", 
    fontSize: "12px"
  },
  contactItem: { 
    display: "flex", 
    alignItems: "center", 
    gap: "8px" 
  },
  socialSection: {
    width: "55%", 
    backgroundColor: "#006c94", 
    display: "flex", 
    alignItems: "center", 
    color: "white", 
    clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)", 
    position: "absolute", 
    right: 0, 
    height: "100%", 
    paddingRight: "5%", 
    justifyContent: "flex-end", 
    gap: "15px"
  },
  iconLink: { 
    color: "white", 
    textDecoration: "none", 
    fontSize: "14px" 
  },
  navbarContainer: {
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    padding: "16px 20px", 
    backgroundColor: "white", 
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  },
  logoSection: {
    display: "flex", 
    alignItems: "center", 
    gap: "8px"
  },
  logoTitle: { 
    fontSize: "24px", 
    fontWeight: "bold", 
    color: "#1e3a8a",
    margin: 0
  },
  logoSubtitle: { 
    fontSize: "14px", 
    color: "#2563eb", 
    marginTop: "-9px",
    margin: 0
  },
  navLinks: {
    display: "flex", 
    gap: "24px", 
    fontWeight: "600", 
    alignItems: "center"
  },
  navLink: {
    color: "black", 
    textDecoration: "none",
    transition: "color 0.3s ease",
    fontSize: "16px"
  },
  dropdownItem: {
    color: "#1a1a2e", 
    textDecoration: "none", 
    padding: "10px 15px", 
    borderRadius: "6px", 
    display: "flex", 
    alignItems: "center", 
    gap: "10px", 
    transition: "background 0.3s", 
    fontSize: "0.95rem",
    backgroundColor: "transparent"
  },
  mobileMenuIcon: {
    display: "none"
  },
  menuButton: { 
    background: "none", 
    border: "none", 
    fontSize: "24px", 
    cursor: "pointer",
    color: "#1e3a8a"
  },
  mobileMenu: {
    display: "none",
    flexDirection: "column", 
    background: "white", 
    padding: "15px 20px", 
    gap: "15px", 
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  }
};

export default Navbar;