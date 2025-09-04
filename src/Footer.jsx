import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#ffffff", padding: "40px 0", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "1200px", margin: "auto", flexWrap: "wrap", padding: "0 20px" }}>
        
        {/* About Section */}
        <div style={{ flex: "1", minWidth: "250px", textAlign: "left", marginBottom: "20px" }}>
          <h3 style={{ color: "#f7941d", fontSize: "22px", marginBottom: "10px" }}>About Us</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            We specialize in cutting-edge technologies solutions, including Mobile Apps, Web Development, APIs, and Cloud Infrastructure.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1", minWidth: "250px", textAlign: "left", marginBottom: "20px" }}>
          <h3 style={{ color: "#f7941d", fontSize: "22px", marginBottom: "10px" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: "0" }}>
            {[
              { name: "Home", path: "/" },
              { name: "Careers", path: "/careers" },
              { name: "Contact", path: "/contact" },
              { name: "Privacy Policy", path: "/privacy-policy" }
            ].map((link, index) => (
              <li key={index} style={{ marginBottom: "6px" }}>
                <Link to={link.path} style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px" }}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1", minWidth: "250px", textAlign: "left", marginBottom: "20px" }}>
          <h3 style={{ color: "#f7941d", fontSize: "22px", marginBottom: "10px" }}>Contact Us</h3>
          <p style={{ fontSize: "14px", marginBottom: "6px" }}>📞 +1-314-732-7749, +1-314-354-0634</p>
          <p style={{ fontSize: "14px", marginBottom: "6px" }}>✉ hr@kgktechnologies.com</p>
          <p style={{ fontSize: "14px" }}>📍 Saint Louis, MO, United States.</p>
        </div>

        {/* Social Media Links */}
        <div style={{ flex: "1", minWidth: "250px", textAlign: "left", marginBottom: "20px" }}>
          <h3 style={{ color: "#f7941d", fontSize: "22px", marginBottom: "10px" }}>Follow Us</h3>
          <div style={{ display: "flex", gap: "12px" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", fontSize: "20px" }}><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", fontSize: "20px" }}><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/gk-technologies-20a187365/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", fontSize: "20px" }}><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/gk_technologies.stl/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff", fontSize: "20px" }}><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop: "1px solid #333", marginTop: "20px", paddingTop: "10px", fontSize: "14px" }}>
        © {new Date().getFullYear()} GK Technologies. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
