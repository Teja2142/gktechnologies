import React from "react";

const AuthSystem = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [loginData, setLoginData] = React.useState({ email: '', password: '' });
  const [registerData, setRegisterData] = React.useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };
  
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };
  
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  };
  
  const validateLogin = () => {
    const newErrors = {};
    
    if (!loginData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(loginData.email)) newErrors.email = 'Email is invalid';
    
    if (!loginData.password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateRegister = () => {
    const newErrors = {};
    
    if (!registerData.name) newErrors.name = 'Name is required';
    if (!registerData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(registerData.email)) newErrors.email = 'Email is invalid';
    
    if (!registerData.password) newErrors.password = 'Password is required';
    else if (registerData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    if (validateLogin()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert('Login successful!');
      }, 1500);
    }
  };
  
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    if (validateRegister()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert('Registration successful!');
      }, 1500);
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={{
        ...styles.formContainer,
        animation: isLogin ? 'slideRight 0.5s ease forwards' : 'slideLeft 0.5s ease forwards'
      }}>
        {isLogin ? (
          <>
            <h1 style={styles.title}>Welcome Back</h1>
            <p style={styles.subtitle}>Sign in to continue your journey</p>
            
            <form onSubmit={handleLoginSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Email Address"
                  style={{
                    ...styles.input,
                    ...(errors.email && styles.inputError),
                    animation: 'slideIn 0.5s ease forwards',
                    animationDelay: '0.1s'
                  }}
                />
                {errors.email && <span style={styles.errorText}>{errors.email}</span>}
              </div>
              
              <div style={styles.inputGroup}>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Password"
                  style={{
                    ...styles.input,
                    ...(errors.password && styles.inputError),
                    animation: 'slideIn 0.5s ease forwards',
                    animationDelay: '0.2s'
                  }}
                />
                {errors.password && <span style={styles.errorText}>{errors.password}</span>}
              </div>
              
              <div style={styles.rememberForgot}>
                <label style={styles.remember}>
                  <input type="checkbox" style={styles.checkbox} />
                  Remember me
                </label>
                <a href="#" style={styles.forgotLink}>Forgot Password?</a>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  ...styles.submitButton,
                  ...(isSubmitting && styles.submitButtonDisabled)
                }}
              >
                {isSubmitting ? (
                  <div style={styles.spinner}></div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
            
            <p style={styles.switchText}>
              Don't have an account? <a href="#" onClick={toggleForm} style={styles.switchLink}>Sign Up</a>
            </p>
          </>
        ) : (
          <>
            <h1 style={styles.title}>Create Account</h1>
            <p style={styles.subtitle}>Join us today and access exclusive features</p>
            
            <form onSubmit={handleRegisterSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  value={registerData.name}
                  onChange={handleRegisterChange}
                  placeholder="Full Name"
                  style={{
                    ...styles.input,
                    ...(errors.name && styles.inputError),
                    animation: 'slideIn 0.5s ease forwards',
                    animationDelay: '0.1s'
                  }}
                />
                {errors.name && <span style={styles.errorText}>{errors.name}</span>}
              </div>
              
              <div style={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  placeholder="Email Address"
                  style={{
                    ...styles.input,
                    ...(errors.email && styles.inputError),
                    animation: 'slideIn 0.5s ease forwards',
                    animationDelay: '0.2s'
                  }}
                />
                {errors.email && <span style={styles.errorText}>{errors.email}</span>}
              </div>
              
              <div style={styles.inputGroup}>
                <input
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  placeholder="Password"
                  style={{
                    ...styles.input,
                    ...(errors.password && styles.inputError),
                    animation: 'slideIn 0.5s ease forwards',
                    animationDelay: '0.3s'
                  }}
                />
                {errors.password && <span style={styles.errorText}>{errors.password}</span>}
              </div>
              
              <div style={styles.inputGroup}>
                <input
                  type="password"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  placeholder="Confirm Password"
                  style={{
                    ...styles.input,
                    ...(errors.confirmPassword && styles.inputError),
                    animation: 'slideIn 0.5s ease forwards',
                    animationDelay: '0.4s'
                  }}
                />
                {errors.confirmPassword && <span style={styles.errorText}>{errors.confirmPassword}</span>}
              </div>
              
              <div style={styles.terms}>
                <label style={styles.remember}>
                  <input type="checkbox" style={styles.checkbox} />
                  I agree to the <a href="#" style={styles.termsLink}>Terms and Conditions</a>
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  ...styles.submitButton,
                  ...(isSubmitting && styles.submitButtonDisabled)
                }}
              >
                {isSubmitting ? (
                  <div style={styles.spinner}></div>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>
            
            <p style={styles.switchText}>
              Already have an account? <a href="/Register" onClick={toggleForm} style={styles.switchLink}>SignUp</a>
            </p>
          </>
        )}
      </div>
      
      <div style={styles.decoration}>
        <div style={styles.circle1}></div>
        <div style={styles.circle2}></div>
        <div style={styles.circle3}></div>
      </div>
      
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideLeft {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-10px);
            }
          }
          
          @keyframes slideRight {
            from {
              transform: translateX(-10px);
            }
            to {
              transform: translateX(0);
            }
          }
          
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(5deg);
            }
            100% {
              transform: translateY(0) rotate(0deg);
            }
          }
        `}
      </style>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden'
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
    padding: '40px',
    width: '100%',
    maxWidth: '450px',
    zIndex: 10,
    position: 'relative'
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '10px',
    fontSize: '28px',
    fontWeight: '600'
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: '30px',
    fontSize: '14px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputGroup: {
    marginBottom: '20px',
    position: 'relative'
  },
  input: {
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
    opacity: 0,
    transform: 'translateY(20px)',
    ':focus': {
      outline: 'none',
      borderColor: '#667eea',
      boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)'
    }
  },
  inputError: {
    borderColor: '#e74c3c',
    boxShadow: '0 0 0 3px rgba(231, 76, 60, 0.2)'
  },
  errorText: {
    color: '#e74c3c',
    fontSize: '12px',
    marginTop: '5px',
    display: 'block'
  },
  rememberForgot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  terms: {
    marginBottom: '20px'
  },
  remember: {
    display: 'flex',
    alignItems: 'center',
    color: '#666',
    fontSize: '14px'
  },
  checkbox: {
    marginRight: '8px'
  },
  forgotLink: {
    color: '#667eea',
    textDecoration: 'none',
    fontSize: '14px',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  termsLink: {
    color: '#667eea',
    textDecoration: 'none',
    marginLeft: '4px',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  submitButton: {
    padding: '15px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#667eea',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    ':hover': {
      backgroundColor: '#5a6fd5',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
    }
  },
  submitButtonDisabled: {
    backgroundColor: '#b3b3b3',
    cursor: 'not-allowed',
    ':hover': {
      backgroundColor: '#b3b3b3',
      transform: 'none',
      boxShadow: 'none'
    }
  },
  spinner: {
    width: '20px',
    height: '20px',
    border: '3px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50%',
    borderTopColor: 'white',
    animation: 'spin 1s ease-in-out infinite'
  },
  switchText: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#666',
    fontSize: '14px'
  },
  switchLink: {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '600',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  decoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden'
  },
  circle1: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    top: '-100px',
    right: '-100px',
    animation: 'float 8s ease-in-out infinite'
  },
  circle2: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    bottom: '-50px',
    left: '50px',
    animation: 'float 10s ease-in-out infinite',
    animationDelay: '1s'
  },
  circle3: {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    bottom: '100px',
    right: '50px',
    animation: 'float 7s ease-in-out infinite',
    animationDelay: '2s'
  }
};

export default AuthSystem;