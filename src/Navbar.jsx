import React, { useState } from "react";
import {
  FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp, FaTelegram, FaBars, FaTimes
} from "react-icons/fa";
import gklogo from "./images/gklogo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = (
    <>
      <Link to="/" style={styles.navLink}>Home</Link>
      <div style={{ position: "relative" }}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <span style={{ ...styles.navLink, cursor: "pointer" }}>Services ▼</span>
        {showDropdown && (
          <div style={styles.dropdown}>
            {[
              { path: "/Web", name: "Web Development", icon: "💻" },
              { path: "/Api", name: "API Services", icon: "🔌" },
              { path: "/Cloud", name: "Cloud Services", icon: "☁️" },
              { path: "/Data", name: "Data Analytics", icon: "📊" },
              { path: "/IoT", name: "IoT Solutions", icon: "🏠" },
              { path: "/Mobile", name: "Mobile Development", icon: "📱" },
              { path: "/Digital", name: "Digital Marketing", icon: "🔍" },
              { path: "/Training", name: "Corporate Training", icon: "🏢" }
            ].map((item, index) => (
              <Link key={index} to={item.path} style={styles.dropdownItem}>
                <span style={{ fontSize: "1.2rem" }}>{item.icon}</span> {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <Link to="/Careers" style={styles.navLink}>Careers</Link>
      <Link to="/About" style={styles.navLink}>About Us</Link>
      <Link to="/Contact" style={styles.navLink}>Contact Us</Link>
    </>
  );

  return (
    <div>
      {/* Top Contact Bar */}
      <div style={styles.topBar}>
        <div style={styles.contactSection}>
          <span style={styles.contactItem}><FaEnvelope /> support@kgktechnologies.com</span>
          <span style={styles.contactItem}><FaPhoneAlt /> +1-314-732-7749</span>
        </div>
        <div style={styles.socialSection}>
          {[["https://twitter.com/login", FaTwitter], ["https://facebook.com/login", FaFacebookF], ["https://www.linkedin.com/in/gk-technologies-20a187365/", FaLinkedinIn], ["https://www.instagram.com/gk_technologies.stl/", FaInstagram], ["https://accounts.google.com/ServiceLogin?service=youtube", FaYoutube], ["https://wa.me/13147327749", FaWhatsapp], ["https://web.telegram.org", FaTelegram]].map(([link, Icon], i) => (
            <a key={i} href={link} target="_blank" rel="noopener noreferrer" style={styles.iconLink}><Icon /></a>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <div style={styles.navbarContainer}>
        <div style={styles.logoSection}>
          <Link to="/"><img src={gklogo} alt="GK Logo" style={{ height: "48px" }} /></Link>
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#1e3a8a" }}>GK Tech
              <p style={{ fontSize: "14px", color: "#2563eb", marginTop: "-9px" }}>Stay one step ahead</p>
            </h1>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="desktop-nav" style={styles.navLinks}>
          {navLinks}
        </nav>

        {/* Hamburger Icon */}
        <div className="mobile-menu-icon" style={{ display: "none" }}>
          <button onClick={toggleMobileMenu} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer" }}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu" style={{ display: mobileMenuOpen ? "flex" : "none", flexDirection: "column", background: "white", padding: "15px 20px", gap: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
        {navLinks}
      </div>


      {/* Media Queries */}
      <style>
        {`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-icon { display: block !important; padding-right: 20px; }
          .mobile-menu { display: flex; flex-direction: column; background: white; padding: 15px 20px; gap: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        }
        `}
      </style>
    </div>
  );
};

const styles = {
  topBar: {
    display: "flex", width: "100%", height: "50px", position: "relative", overflow: "hidden"
  },
  contactSection: {
    width: "60%", backgroundColor: "#f7941d", display: "flex", alignItems: "center", paddingLeft: "5%", fontWeight: "bold", color: "white", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)", gap: "15px", fontSize: "12px"
  },
  contactItem: { display: "flex", alignItems: "center", gap: "8px" },
  socialSection: {
    width: "45%", backgroundColor: "#006c94", display: "flex", alignItems: "center", color: "white", clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)", position: "absolute", right: 0, height: "100%", paddingRight: "5%", justifyContent: "flex-end", gap: "15px"
  },
  iconLink: { color: "white", textDecoration: "none", fontSize: "14px" },
  navbarContainer: {
    display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", backgroundColor: "white", boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  },
  logoSection: {
    display: "flex", alignItems: "center", gap: "8px"
  },
  navLinks: {
    display: "flex", gap: "24px", fontWeight: "600", alignItems: "center"
  },
  navLink: {
    color: "black", textDecoration: "none"
  },
  dropdown: {
    position: "absolute", top: "100%", left: "-120px", background: "#fff", boxShadow: "0 8px 20px rgba(0,0,0,0.1)", borderRadius: "8px", padding: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", zIndex: 1000, minWidth: "350px"
  },
  dropdownItem: {
    color: "#1a1a2e", textDecoration: "none", padding: "10px 15px", borderRadius: "6px", display: "flex", alignItems: "center", gap: "10px", transition: "background 0.3s", fontSize: "0.95rem"
  },
  mobileMenu: {
    display: "none"
  }
};

export default Navbar;
