import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedJob, setExpandedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobpostings/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Failed to load job postings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const toggleJobExpansion = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  if (loading) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "200px" 
      }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          style={{
            width: "40px",
            height: "40px",
            border: "4px solid #f3f3f3",
            borderTop: "4px solid #3498db",
            borderRadius: "50%"
          }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        maxWidth: "900px", 
        margin: "auto", 
        padding: "40px 20px",
        textAlign: "center",
        color: "#e74c3c"
      }}>
        <div style={{
          background: "rgba(231, 76, 60, 0.1)",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid rgba(231, 76, 60, 0.3)"
        }}>
          <h3>Error Loading Jobs</h3>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              background: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ 
        maxWidth: "900px", 
        margin: "40px auto", 
        padding: "0 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      <motion.h2
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        style={{
          color: "#2c3e50",
          marginBottom: "30px",
          fontSize: "32px",
          fontWeight: "600",
          textAlign: "center"
        }}
      >
        Career Opportunities
      </motion.h2>

      {jobs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: "rgba(52, 152, 219, 0.1)",
            padding: "30px",
            borderRadius: "8px",
            textAlign: "center",
            border: "1px solid rgba(52, 152, 219, 0.3)"
          }}
        >
          <h3 style={{ color: "#2c3e50", marginBottom: "15px" }}>No Current Openings</h3>
          <p style={{ color: "#7f8c8d", lineHeight: "1.6" }}>
            We don't have any open positions at the moment, but we're always looking for talented individuals. 
            Please check back later or submit your resume to our talent pool.
          </p>
        </motion.div>
      ) : (
        <div style={{ display: "grid", gap: "20px" }}>
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                overflow: "hidden",
                border: "1px solid #eee"
              }}
            >
              <div 
                style={{
                  padding: "20px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: expandedJob === job.id ? "#f8f9fa" : "white"
                }}
                onClick={() => toggleJobExpansion(job.id)}
              >
                <div>
                  <h3 style={{ 
                    color: "#2c3e50", 
                    marginBottom: "5px",
                    fontSize: "20px"
                  }}>
                    {job.title}
                  </h3>
                  <div style={{ display: "flex", gap: "20px", color: "#7f8c8d" }}>
                    <span>
                      <strong style={{ color: "#34495e" }}>Department:</strong> {job.department}
                    </span>
                    <span>
                      <strong style={{ color: "#34495e" }}>Location:</strong> {job.location}
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                  style={{
                    fontSize: "24px",
                    color: "#3498db"
                  }}
                >
                  ▼
                </motion.div>
              </div>

              {expandedJob === job.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: "0 20px 20px 20px",
                    borderTop: "1px solid #eee"
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ 
                      color: "#2c3e50", 
                      marginBottom: "10px",
                      fontSize: "18px"
                    }}>
                      Job Description
                    </h4>
                    <p style={{ lineHeight: "1.6", color: "#34495e" }}>{job.description}</p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ 
                      color: "#2c3e50", 
                      marginBottom: "10px",
                      fontSize: "18px"
                    }}>
                      Requirements
                    </h4>
                    <ul style={{ 
                      paddingLeft: "20px",
                      lineHeight: "1.6",
                      color: "#34495e"
                    }}>
                      {job.requirements.split('\n').map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ 
                      color: "#2c3e50", 
                      marginBottom: "10px",
                      fontSize: "18px"
                    }}>
                      Responsibilities
                    </h4>
                    <ul style={{ 
                      paddingLeft: "20px",
                      lineHeight: "1.6",
                      color: "#34495e"
                    }}>
                      {job.responsibilities.split('\n').map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                    paddingTop: "15px",
                    borderTop: "1px dashed #ddd"
                  }}>
                    <span style={{ color: "#7f8c8d", fontSize: "14px" }}>
                      Posted on: {new Date(job.created_at).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        padding: "10px 20px",
                        background: "#3498db",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "500"
                      }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default CareersPage;