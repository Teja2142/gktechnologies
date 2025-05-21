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
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><FaEnvelope /> support@kgktechnologies.com</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><FaPhoneAlt /> +1-314-732-7749, +1-314-732-7749</span>
          </div>

          {/* Right Section: Social Media Icons */}
          <div style={{ width: "45%", backgroundColor: "#006c94", display: "flex", alignItems: "center", fontWeight: "bold", color: "white", clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)", position: "absolute", right: 0, height: "100%", paddingRight: "5%", justifyContent: "flex-end", gap: "15px" }}>
            <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaTwitter /></a>
            <a href="https://facebook.com/login" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/gk-technologies-20a187365/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/gk_technologies.stl/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaInstagram /></a>
            <a href="https://accounts.google.com/ServiceLogin?service=youtube" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaYoutube /></a>
            <a href="https://wa.me/13147327749" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaWhatsapp /></a>
            <a href="https://web.telegram.org" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}><FaTelegram /></a>
          </div>

      </div>




      {/* Main Navbar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 40px", backgroundColor: "white", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Link to="/"> <img src={gklogo} alt="GK Technology Logo" style={{ height: "48px" }} /></Link>
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#1e3a8a" }}>GK Tech
            <p style={{ fontSize: "14px", color: "#2563eb" , marginTop: "-9px" }}>Stay one step ahead</p>
            </h1>
          </div>
        </div>
        <nav style={{ display: "flex", gap: "24px", fontWeight: "600", position: "relative" }}>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>Home</Link>
          {/* Services Dropdown */}
          <div 
            style={{ position: "relative", cursor: "pointer" }} 
            onMouseEnter={() => setShowDropdown(true)} 
            onMouseLeave={() => setShowDropdown(false)}
          >
          <span style={{ color: "black", textDecoration: "none", cursor: "pointer" }}>
            Services ▼
          </span>

          {showDropdown && (
            <div style={{ position: "absolute", top: "100%", left: "-120px", background: "#fff", boxShadow: "0 8px 20px rgba(0,0,0,0.1)", borderRadius: "8px", padding: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", zIndex: 1000, minWidth: "350px" }}>
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
                <Link key={index} to={item.path} style={{ color: "#1a1a2e", textDecoration: "none", padding: "10px 15px", borderRadius: "6px", display: "flex", alignItems: "center", gap: "10px", transition: "background 0.3s", fontSize: "0.95rem" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#f5f5f5"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <span style={{ fontSize: "1.2rem" }}>{item.icon}</span> {item.name}
                </Link>
              ))}
            </div>
          )}


          </div>
          <Link to="/Careers" style={{ color: "black", textDecoration: "none" }}>Careers</Link>

          <Link to="/About" style={{ color: "black", textDecoration: "none" }}>About Us</Link>

          
          <Link to="/Contact" style={{ color: "black", textDecoration: "none" }}>Contact Us</Link>
        </nav>
      </div>

      
    </div>
  );
};

export default Navbar;
