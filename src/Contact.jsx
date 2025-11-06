import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({ fullName: "", company: "", inquiryType: "", mobile: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResponse, setSubmitResponse] = useState("");

  useEffect(() => { if (submitResponse) { const timer = setTimeout(() => setSubmitResponse(""), 10000); return () => clearTimeout(timer); } }, [submitResponse]);
  useEffect(() => { window.scrollTo(0, 0); if (location.hash) { const el = document.querySelector(location.hash); if (el) { setTimeout(() => { el.scrollIntoView({ behavior: "smooth" }); }, 100); } } }, [location]);

  const handleInputChange = (e) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); if (errors[name]) { setErrors(prev => ({ ...prev, [name]: "" })); } };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    const trimmedFullName = formData.fullName.trim();
    if (!trimmedFullName) newErrors.fullName = "Full name is required";
    else if (trimmedFullName.length < 2) newErrors.fullName = "Full name must be at least 2 characters";
    else if (!nameRegex.test(trimmedFullName)) newErrors.fullName = "Full name can only contain letters, spaces, hyphens, or apostrophes.";

    const companyRegex = /^[a-zA-Z0-9\s.,'&()-]+$/;
    const trimmedCompany = formData.company.trim();
    if (!trimmedCompany) newErrors.company = "Company name is required";
    else if (!companyRegex.test(trimmedCompany)) newErrors.company = "Company name contains invalid characters.";

    if (!formData.inquiryType) newErrors.inquiryType = "Please select an inquiry type";

    const mobileRegex = /^[6789]\d{9}$/;
    const cleanedMobile = formData.mobile.replace(/\D/g, '');
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (cleanedMobile.length !== 10) newErrors.mobile = "Mobile number must be exactly 10 digits.";
    else if (!mobileRegex.test(cleanedMobile)) newErrors.mobile = "Mobile number must start with 6, 7, 8, or 9.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) { const firstErrorKey = Object.keys(validationErrors)[0]; if (firstErrorKey) { setTimeout(() => { const errorElement = document.querySelector(`[name="${firstErrorKey}"]`); if (errorElement) { errorElement.scrollIntoView({ behavior: "smooth", block: "center" }); errorElement.focus(); } }, 0); } return; }
    setIsSubmitting(true); setSubmitResponse("");
    try {
      const params = new URLSearchParams();
      params.append("full_name", formData.fullName);
      params.append("company", formData.company);
      params.append("inquiry_type", formData.inquiryType);
      params.append("mobile", formData.mobile.replace(/\D/g, ""));
      params.append("email", formData.email);
      params.append("message", formData.message);

      const response = await fetch("https://api.kgktechnologies.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", "accept": "application/json" },
        body: params.toString(),
      });

      if (!response.ok) {
        let serverDetails = `Status ${response.status}: Failed to process entity.`;
        try { const errorData = await response.json(); if (errorData.message) serverDetails = errorData.message; else if (errorData.errors) serverDetails = `Validation failed: ${JSON.stringify(errorData.errors)}`; } catch {}
        throw new Error(`error_${serverDetails}`);
      }

      setSubmitResponse("success");
      setFormData({ fullName: "", company: "", inquiryType: "", mobile: "", email: "", message: "" });
      setTimeout(() => { const responseElement = document.getElementById("submitResponse"); if (responseElement) responseElement.scrollIntoView({ behavior: "smooth" }); }, 100);
    } catch (error) {
      console.error("Submission error:", error);
      const errorMsg = error.message.startsWith("error_") ? error.message : "error";
      setSubmitResponse(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px", width: "100%", boxSizing: "border-box" }}>
      <div style={{ background: "linear-gradient(135deg, #006c94 0%, #004d70 100%)", color: "white", padding: "40px 20px", borderRadius: "12px", marginBottom: "40px", textAlign: "center", width: "100%" }}>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: "15px", lineHeight: "1.2" }}>Contact Us</h1>
        <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", maxWidth: "700px", margin: "0 auto", lineHeight: "1.5" }}>We'd love to hear from you! Reach out to our team for any inquiries or to discuss how we can help your business grow.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "30px", marginBottom: "40px", width: "100%", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 400px", minWidth: "300px", padding: "25px 20px", background: "#f8f9fa", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", boxSizing: "border-box" }}>
          <h2 style={{ color: "#006c94", marginBottom: "20px", fontSize: "clamp(1.3rem, 3vw, 1.5rem)", textAlign: "center" }}>Contact Information</h2>
          <div style={{ marginBottom: "25px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px", flexDirection: "row" }}>
              <span style={{ background: "#006c94", color: "white", padding: "8px", borderRadius: "50%", marginRight: "15px", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", flexShrink: 0 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4z"/></svg>
              </span>
              <div><p style={{ margin: "0 0 5px 0", fontWeight: "600", fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>GK Technologies</p><p style={{ margin: "0", color: "#666", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>Saint Louis, MO, United States.</p></div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px", flexDirection: "row" }}>
              <span style={{ background: "#006c94", color: "white", padding: "8px", borderRadius: "50%", marginRight: "15px", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", flexShrink: 0 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/></svg>
              </span>
              <div><p style={{ margin: "0", color: "#666", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>+1-314-354-0634</p></div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "row" }}>
              <span style={{ background: "#006c94", color: "white", padding: "8px", borderRadius: "50%", marginRight: "15px", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", flexShrink: 0 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
              </span>
              <div><p style={{ margin: "0", fontWeight: "600", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>hr@kgktechnologies.com</p></div>
            </div>
          </div>
          <div style={{ marginTop: "25px" }}>
            <iframe title="Google Maps - Saint Louis" width="100%" height="250" frameBorder="0" style={{ border: 0, borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", minHeight: "200px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.023997671989!2d-90.19940408464783!3d38.627002579607865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b31a3f5262ff%3A0x1d389abecf4a5a6d!2sSaint%20Louis%2C%20MO%2C%20USA!5e0!3m2!1sen!2sus!4v1715600000000" allowFullScreen></iframe>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div style={{ flex: "1 1 400px", minWidth: "300px", padding: "25px 20px", background: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", boxSizing: "border-box" }}>
          <h2 id="contactForm" style={{ color: "#006c94", marginBottom: "20px", fontSize: "clamp(1.3rem, 3vw, 1.5rem)", textAlign: "center" }}>Get in Touch</h2>
          {submitResponse && (
            <div id="submitResponse" style={{ padding: "12px 15px", marginBottom: "20px", borderRadius: "8px", backgroundColor: submitResponse.startsWith("success") ? "#d4edda" : "#f8d7da", color: submitResponse.startsWith("success") ? "#155724" : "#721c24", border: `1px solid ${submitResponse.startsWith("success") ? "#c3e6cb" : "#f5c6cb"}`, fontWeight: "500", fontSize: "clamp(0.8rem, 2vw, 0.9rem)", textAlign: "center" }}>
              {submitResponse.startsWith("success") ? "✅ Success! We have received your inquiry and will get back to you soon." : <p style={{ margin: 0 }}>❌ Submission Error (422). Please ensure all fields meet the server requirements.<br />Details: {submitResponse.startsWith('error_') ? submitResponse.substring(6) : 'Could not retrieve server details.'}</p>}
            </div>
          )}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", width: "100%" }}>
            <div><label style={{ display: "block", marginBottom: "6px", fontWeight: "600", color: "#444", fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>Full Name<span style={{ color: '#dc3545' }}>*</span>:</label><input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" style={{ padding: "12px 15px", border: `1px solid ${errors.fullName ? "#dc3545" : "#ddd"}`, borderRadius: "8px", width: "100%", fontSize: "clamp(0.9rem, 2vw, 1rem)" }} />{errors.fullName && <p style={{ color: "#dc3545", margin: "5px 0 0", fontSize: "0.8rem" }}>{errors.fullName}</p>}</div>
            <div><label style={{ display: "block", marginBottom: "6px", fontWeight: "600", color: "#444", fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>Company<span style={{ color: '#dc3545' }}>*</span>:</label><input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Enter your company name" style={{ padding: "12px 15px", border: `1px solid ${errors.company ? "#dc3545" : "#ddd"}`, borderRadius: "8px", width: "100%", fontSize: "clamp(0.9rem, 2vw, 1rem)" }} />{errors.company && <p style={{ color: "#dc3545", margin: "5px 0 0", fontSize: "0.8rem" }}>{errors.company}</p>}</div>
            <div><label style={{ display: "block", marginBottom: "6px", fontWeight: "600", color: "#444", fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>Inquiry Type<span style={{ color: '#dc3545' }}>*</span>:</label><select name="inquiryType" value={formData.inquiryType} onChange={handleInputChange} style={{ padding: "12px 15px", border: `1px solid ${errors.inquiryType ? "#dc3545" : "#ddd"}`, borderRadius: "8px", width: "100%", fontSize: "clamp(0.9rem, 2vw, 1rem)", backgroundColor: "white", appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%236c757d' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.018 2.333 4 3.197 4h9.606c.864 0 1.312 1.017.747 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 15px center", paddingRight: "40px" }}>
              <option value="" disabled>Select an inquiry type</option>
              <option value="General">General Inquiry</option>
              <option value="Sales">Sales / Project Quote</option>
              <option value="Support">Technical Support</option>
              <option value="HR">HR / Career Inquiry</option>
            </select>{errors.inquiryType && <p style={{ color: "#dc3545", margin: "5px 0 0", fontSize: "0.8rem" }}>{errors.inquiryType}</p>}</div>
            <div><label style={{ display: "block", marginBottom: "6px", fontWeight: "600", color: "#444", fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>Mobile Number<span style={{ color: '#dc3545' }}>*</span>:</label><input type="text" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Enter your 10-digit mobile number" style={{ padding: "12px 15px", border: `1px solid ${errors.mobile ? "#dc3545" : "#ddd"}`, borderRadius: "8px", width: "100%", fontSize: "clamp(0.9rem, 2vw, 1rem)" }} />{errors.mobile && <p style={{ color: "#dc3545", margin: "5px 0 0", fontSize: "0.8rem" }}>{errors.mobile}</p>}</div>
            <div><label style={{ display: "block", marginBottom: "6px", fontWeight: "600", color: "#444", fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>Email<span style={{ color: '#dc3545' }}>*</span>:</label><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" style={{ padding: "12px 15px", border: `1px solid ${errors.email ? "#dc3545" : "#ddd"}`, borderRadius: "8px", width: "100%", fontSize: "clamp(0.9rem, 2vw, 1rem)" }} />{errors.email && <p style={{ color: "#dc3545", margin: "5px 0 0", fontSize: "0.8rem" }}>{errors.email}</p>}</div>
            <div><label style={{ display: "block", marginBottom: "6px", fontWeight: "600", color: "#444", fontSize: "clamp(0.85rem, 2vw, 0.9rem)" }}>Message<span style={{ color: '#dc3545' }}>*</span>:</label><textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Enter your message or comment" style={{ padding: "12px 15px", border: `1px solid ${errors.message ? "#dc3545" : "#ddd"}`, borderRadius: "8px", width: "100%", height: "120px", fontSize: "clamp(0.9rem, 2vw, 1rem)", resize: "vertical" }}></textarea>{errors.message && <p style={{ color: "#dc3545", margin: "5px 0 0", fontSize: "0.8rem" }}>{errors.message}</p>}</div>
            <button type="submit" disabled={isSubmitting} style={{ padding: "14px", background: isSubmitting ? "#6c757d" : "#006c94", color: "white", border: "none", borderRadius: "8px", cursor: isSubmitting ? "not-allowed" : "pointer", fontSize: "clamp(0.9rem, 2vw, 1rem)", fontWeight: "600", transition: "background 0.3s", marginTop: "10px", opacity: isSubmitting ? 0.7 : 1, width: "100%" }}>{isSubmitting ? "Sending..." : "Submit"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
