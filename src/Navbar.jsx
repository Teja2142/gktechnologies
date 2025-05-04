import React from "react";
import { FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp, FaTelegram } from "react-icons/fa";
import gklogo from "./images/gklogo.jpg"; 
import { Link  } from "react-router-dom";
import { useState } from "react";



const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div style={{ display: "flex", width: "100%", height: "50px", position: "relative", overflow: "hidden" }}>
      
          {/* Left Section: Contact Details */}
          <div style={{ width: "60%", backgroundColor: "#f7941d", display: "flex", alignItems: "center", paddingLeft: "5%", fontWeight: "bold", color: "white", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)", gap: "15px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><FaEnvelope /> info@gktechnologies.com</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><FaPhoneAlt /> 04021422142, 04021422142</span>
          </div>

          {/* Right Section: Social Media Icons */}
          <div style={{ width: "50%", backgroundColor: "#006c94", display: "flex", alignItems: "center", fontWeight: "bold", color: "white", clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)", position: "absolute", right: 0, height: "100%", paddingRight: "5%", justifyContent: "flex-end", gap: "15px" }}>
            <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaTwitter /></a>
            <a href="https://facebook.com/login" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaFacebookF /></a>
            <a href="https://linkedin.com/login" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaLinkedinIn /></a>
            <a href="https://instagram.com/accounts/login" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaInstagram /></a>
            <a href="https://accounts.google.com/ServiceLogin?service=youtube" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaYoutube /></a>
            <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaWhatsapp /></a>
            <a href="https://web.telegram.org" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaTelegram /></a>
          </div>

      </div>




      {/* Main Navbar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 40px", backgroundColor: "white", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={gklogo} alt="GK Technology Logo" style={{ height: "48px" }} />
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#1e3a8a" }}>GK Technology
            <p style={{ fontSize: "14px", color: "#2563eb" , marginTop: "-9px" }}>Stay one step ahead</p>
            </h1>
          </div>
        </div>
        <nav style={{ display: "flex", gap: "24px", fontWeight: "600", position: "relative" }}>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>Home</Link>
          <Link to="/About" style={{ color: "black", textDecoration: "none" }}>About Us</Link>

          {/* Services Dropdown */}
          <div 
            style={{ position: "relative", cursor: "pointer" }} 
            onMouseEnter={() => setShowDropdown(true)} 
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span style={{ color: "black", textDecoration: "none" }}>Services ▼</span>
            {showDropdown && (
              <div style={{ position: "absolute", top: "100%", left: "0", background: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "4px", padding: "10px", display: "flex", flexDirection: "column", gap: "8px", zIndex: 10 }}>
                <Link to="/Web" style={{ color: "black", textDecoration: "none", padding: "8px" }}>Web Development</Link>
                <Link to="/Api" style={{ color: "black", textDecoration: "none", padding: "8px" }}>API Services</Link>
                <Link to="/Cloud" style={{ color: "black", textDecoration: "none", padding: "8px" }}>Cloud Services</Link>
                <Link to="/Data" style={{ color: "black", textDecoration: "none", padding: "8px" }}>Data Analytics</Link>
              </div>
            )}
          </div>
          <Link to="/Careers" style={{ color: "black", textDecoration: "none" }}>Careers</Link>
          <Link to="/Contact" style={{ color: "black", textDecoration: "none" }}>Contact Us</Link>
        </nav>
      </div>

      
    </div>
  );
};

export default Navbar;
