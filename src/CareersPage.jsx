import React, { useEffect, useState } from 'react';

// Mock components to replace the UI library imports
const Card = ({ children, className, style }) => (
  <div className={`card ${className}`} style={style}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`card-content ${className}`}>
    {children}
  </div>
);

const Button = ({ children, variant, onClick, className }) => (
  <button className={`btn ${variant} ${className}`} onClick={onClick}>
    {children}
  </button>
);

const Input = ({ placeholder, value, onChange, className }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`input ${className}`}
  />
);

// Jobs Component
export default function Jobs() {

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [activeOnly, setActiveOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://127.0.0.1:8000/api/v1/careers/jobs/")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch jobs');
        }
        return res.json();
      })
      .then((data) => {
        setJobs(data.results || []);
        setFilteredJobs(data.results || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = jobs;

    if (search) {
      result = result.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (locationFilter) {
      result = result.filter(
        (job) => job.location.toLowerCase() === locationFilter.toLowerCase()
      );
    }

    if (activeOnly) {
      result = result.filter((job) => job.is_active);
    }

    setFilteredJobs(result);
  }, [search, locationFilter, activeOnly, jobs]);

  const uniqueLocations = [...new Set(jobs.map((job) => job.location))];

  // Reset filters
  const resetFilters = () => {
    setSearch("");
    setLocationFilter("");
    setActiveOnly(false);
  };

  return (
    <div style={styles.pageContainer}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .card {
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          overflow: hidden;
          background: white;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }
        
        .card-content {
          padding: 20px;
        }
        
        .btn {
          padding: 10px 20px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        
        .btn:hover {
          transform: translateY(-2px);
        }
        
        .outline {
          background: transparent;
          border: 1px solid #3b82f6;
          color: #3b82f6;
        }
        
        .outline:hover {
          background: #3b82f6;
          color: white;
        }
        
        .input {
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          width: 100%;
          box-sizing: border-box;
          transition: all 0.2s ease;
        }
        
        .input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite linear;
          border-radius: 4px;
        }
      `}</style>
      
      <div style={styles.header}>
        <h1 style={styles.title}>Career Opportunities</h1>
        <p style={styles.subtitle}>Find your next professional challenge</p>
      </div>
      
      <div style={styles.gridContainer}>
        {/* Filters Section */}
        <div style={styles.filtersContainer}>
          <div style={styles.filtersCard}>
            <h2 style={styles.filtersTitle}>Filters</h2>
            
            {/* Search Input */}
            <Input
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={styles.input}
            />
            
            {/* Location Filter */}
            <h3 style={styles.filterSubtitle}>Location</h3>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              style={styles.select}
            >
              <option value="">All Locations</option>
              {uniqueLocations.map((loc, idx) => (
                <option key={idx} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            
            {/* Active Toggle */}
            <label style={styles.toggleLabel}>
              <input
                type="checkbox"
                checked={activeOnly}
                onChange={() => setActiveOnly(!activeOnly)}
                style={styles.checkbox}
              />
              <span style={styles.toggleText}>Active jobs only</span>
            </label>
            
            {/* Reset Button */}
            <Button 
              variant="outline" 
              onClick={resetFilters}
              style={styles.resetButton}
            >
              Reset Filters
            </Button>
          </div>
        </div>
        
        {/* Jobs Section */}
        <div style={styles.jobsContainer}>
          {isLoading ? (
            <div style={styles.loadingContainer}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} style={styles.skeletonCard}>
                  <div style={styles.skeletonLine} className="skeleton"></div>
                  <div style={styles.skeletonLineShort} className="skeleton"></div>
                  <div style={styles.skeletonLine} className="skeleton"></div>
                  <div style={styles.skeletonLine} className="skeleton"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div style={styles.errorContainer}>
              <div style={styles.errorIcon}>⚠️</div>
              <h3 style={styles.errorTitle}>Unable to load jobs</h3>
              <p style={styles.errorMessage}>{error}</p>
              <Button onClick={() => window.location.reload()} style={styles.retryButton}>
                Try Again
              </Button>
            </div>
          ) : filteredJobs.length > 0 ? (
            <div style={styles.jobsGrid}>
              {filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  style={styles.jobCard}
                  className="card"
                >
                  <CardContent style={styles.jobCardContent}>
                    <h3 style={styles.jobTitle}>{job.title}</h3>
                    <p style={styles.jobDescription} className="line-clamp-3">
                      {job.description}
                    </p>
                    <p style={styles.jobLocation}>
                      📍 {job.location}
                    </p>
                    <p style={{
                      ...styles.jobStatus,
                      color: job.is_active ? '#10b981' : '#ef4444'
                    }}>
                      {job.is_active ? "Active" : "Closed"}
                    </p>
                    <p style={styles.jobDate}>
                      Posted: {new Date(job.created_at).toLocaleDateString()}
                    </p>
                    <div style={styles.applyButtonContainer}>
                      <Button style={styles.applyButton}>
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </div>
              ))}
            </div>
          ) : (
            <div style={styles.noResults}>
              <div style={styles.noResultsIcon}>🔍</div>
              <h3 style={styles.noResultsTitle}>No jobs found</h3>
              <p style={styles.noResultsText}>
                Try adjusting your search filters or search terms
              </p>
              <Button onClick={resetFilters} style={styles.noResultsButton}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Styles
const styles = {
  pageContainer: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    padding: '20px',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    animation: 'fadeIn 0.8s ease-out'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1f2937',
    margin: '0 0 10px 0',
    background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#6b7280',
    margin: '0'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  filtersContainer: {
    animation: 'slideIn 0.5s ease-out'
  },
  filtersCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    position: 'sticky',
    top: '20px'
  },
  filtersTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: '0 0 20px 0',
    color: '#1f2937'
  },
  input: {
    marginBottom: '20px'
  },
  filterSubtitle: {
    fontSize: '1rem',
    fontWeight: '600',
    margin: '0 0 10px 0',
    color: '#374151'
  },
  select: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    marginBottom: '20px',
    backgroundColor: 'white',
    transition: 'all 0.2s ease'
  },
  toggleLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '25px',
    cursor: 'pointer'
  },
  checkbox: {
    marginRight: '10px',
    width: '18px',
    height: '18px',
    accentColor: '#3b82f6'
  },
  toggleText: {
    color: '#374151',
    fontSize: '0.95rem'
  },
  resetButton: {
    width: '100%'
  },
  jobsContainer: {
    minHeight: '600px'
  },
  jobsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px'
  },
  jobCard: {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    animation: 'fadeIn 0.6s ease-out',
    display: 'flex',
    flexDirection: 'column'
  },
  jobCardContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  jobTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    margin: '0 0 12px 0',
    color: '#1f2937'
  },
  jobDescription: {
    fontSize: '0.95rem',
    color: '#6b7280',
    lineHeight: '1.5',
    margin: '0 0 15px 0',
    flex: 1
  },
  jobLocation: {
    fontSize: '0.9rem',
    color: '#4b5563',
    margin: '0 0 8px 0',
    fontWeight: '500'
  },
  jobStatus: {
    fontSize: '0.85rem',
    fontWeight: '600',
    margin: '0 0 8px 0'
  },
  jobDate: {
    fontSize: '0.8rem',
    color: '#9ca3af',
    margin: '0 0 15px 0'
  },
  applyButtonContainer: {
    marginTop: 'auto'
  },
  applyButton: {
    width: '100%',
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: '600'
  },
  loadingContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px'
  },
  skeletonCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    height: '250px'
  },
  skeletonLine: {
    height: '16px',
    backgroundColor: '#f0f0f0',
    marginBottom: '12px',
    borderRadius: '4px'
  },
  skeletonLineShort: {
    height: '16px',
    width: '60%',
    backgroundColor: '#f0f0f0',
    marginBottom: '12px',
    borderRadius: '4px'
  },
  errorContainer: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    animation: 'fadeIn 0.5s ease-out'
  },
  errorIcon: {
    fontSize: '3rem',
    marginBottom: '20px'
  },
  errorTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0 0 10px 0'
  },
  errorMessage: {
    color: '#6b7280',
    margin: '0 0 25px 0'
  },
  retryButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: '600'
  },
  noResults: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    animation: 'fadeIn 0.5s ease-out'
  },
  noResultsIcon: {
    fontSize: '3rem',
    marginBottom: '20px'
  },
  noResultsTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0 0 10px 0'
  },
  noResultsText: {
    color: '#6b7280',
    margin: '0 0 25px 0'
  },
  noResultsButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: '600'
  }
};