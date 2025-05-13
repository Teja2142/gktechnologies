import React from "react";
import { Link } from "react-router-dom";

const Mobile = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", background: "#f8f9fa" }}>
      {/* Top Section */}
      <div style={{ background: "#1a1a2e", padding: "20px", color: "#fff", borderRadius: "8px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <h2 style={{ margin: "0", fontWeight: "bold" }}>Services</h2>
        <p style={{ margin: "5px 0 0", fontSize: "14px" }}>
            <span style={{ color: "#f7941d", fontWeight: "bold" }}>HOME</span> &gt; MOBILE APPS
        </p>
      </div>


      {/* Main Content Section */}
      <div style={{ display: "flex", marginTop: "20px", gap: "20px" }}>
        {/* Left Side (Image & Text) */}
        <div style={{ flex: "3", paddingRight: "20px" }}>
          <img src="https://xaltam.com/blogs/wp-content/uploads/2024/11/mobile-app-development-trends-xaltam.png" alt="Mobile Apps" style={{ width: "90%", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }} />
          <h2 style={{ marginTop: "20px", color: "#1a1a2e" }}>Mobile Apps</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
          At GK Technology, we specialize in crafting high-performance, scalable, and user-friendly mobile applications that drive innovation and business growth. Our expert developers leverage the latest technologies to deliver seamless, secure, and engaging mobile experiences tailored to your needs.          </p>
          <ul style={{ color: "#555", paddingLeft: "20px", lineHeight: "1.6" }}>
            <li>Enhance the University's core business processes to increase data reliability</li>
            <li>Enable better planning, decision-making, and compliance</li>
            <li>Help students and faculty save time on administrative tasks</li>
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
          <div style={{ background: "#1a1a2e", color: "#fff", padding: "15px",marginLeft:"-20px", borderRadius: "8px", textAlign: "center", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }}>
            <h3>Do you need any help?</h3>
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>04021422142, 04021422142</p>
            <p>info@techvyver.com</p>
            <button style={{ background: "#ff9800", color: "#fff", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer", marginTop: "10px" }}>WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
