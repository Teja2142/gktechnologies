import React from "react";
import { Link } from "react-router-dom";

const Web = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", background: "#f8f9fa" }}>
      {/* Top Section */}
      <div style={{ background: "#1a1a2e", padding: "20px", color: "#fff", borderRadius: "8px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <h2 style={{ margin: "0", fontWeight: "bold" }}>Services</h2>
        <p style={{ margin: "5px 0 0", fontSize: "14px" }}>
          <span style={{ color: "#f7941d", fontWeight: "bold" }}>HOME</span> &gt; WEB DEVELOPMENT
        </p>
      </div>

      {/* Main Content Section */}
      <div style={{ display: "flex", marginTop: "20px", gap: "20px" }}>
        {/* Left Side (Image & Text) */}
        <div style={{ flex: "3", paddingRight: "20px" }}>
          <img src="https://emeritus.org/wp-content/uploads/2024/03/EM-PCCD_img_740x360.jpg.optimal.jpg"  alt="Web Development" 
               style={{ width: "90%", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }} 
          />
          <h2 style={{ marginTop: "20px", color: "#1a1a2e" }}>Web Development</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            At GK Technology, we create powerful, scalable, and user-friendly web applications tailored to your business needs. 
            Our expert developers leverage the latest technologies to ensure high performance, security, and smooth user experiences.
          </p>
          <ul style={{ color: "#555", paddingLeft: "20px", lineHeight: "1.6" }}>
            <li>Custom website development with cutting-edge technology</li>
            <li>Fully responsive & mobile-friendly designs</li>
            <li>SEO-optimized websites for better visibility</li>
          </ul>
        </div>

        {/* Right Sidebar */}
        <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Categories Section */}
          <div style={{ background: "#fff", padding: "15px", marginLeft: "-20px", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }}>
            <h3 style={{ color: "#1a1a2e", marginBottom: "10px" }}>Categories</h3>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {[
                { name: "Mobile Apps", path: "/mobile" },
                { name: "Web Applications", path: "/web" },
                { name: "APIs", path: "/apis" },
                { name: "Cloud Infrastructure", path: "/cloud" },
                { name: "IOT Services", path: "/ai" },
                { name: "Data Analytics", path: "/data" },
              ].map((category, index) => (
                <li
                  key={index}
                  style={{ marginBottom: "10px", borderRadius: "5px", transition: "0.3s" }}
                >
                  <Link
                    to={category.path}
                    style={{
                      textDecoration: "none",
                      color: "#1a1a2e",
                      display: "block",
                      padding: "10px",
                      borderRadius: "5px",
                      background: "#fff",
                      textAlign: "center",
                      boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#f7941d";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "#fff";
                      e.target.style.color = "#1a1a2e";
                    }}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div style={{ background: "#1a1a2e", color: "#fff", padding: "15px", marginLeft: "-20px", borderRadius: "8px", textAlign: "center", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }}>
            <h3>Do you need any help?</h3>
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>+1-314-732-7749, +1-314-732-7749</p>
            <p>support@kgktechnologies.com</p>
            <a href="https://wa.me/13147327749" target="_blank" rel="noopener noreferrer">
              <button style={{ background: "#ff9800", color: "#fff", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer", marginTop: "10px" }}>
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
