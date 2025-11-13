import React , { useEffect , useRef} from 'react';
import { Link } from 'react-router-dom';
import teamImg from './images/team.png';
import aboutBg from './images/aboutbg.png';
import raviteja from './images/RaviTeja.jpg';




const About = () => {

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    
    const values = [
      { title: 'Client Success:', text: 'Your growth defines ours.' },
      { title: 'Innovation:', text: 'We stay on top of trends so you stay ahead of the competition.' },
      { title: 'Transparency:', text: 'Open communication, honest pricing, and measurable impact.' },
      { title: 'Community Focus:', text: 'Proudly supporting the small businesses that power St. Louis.' },
      { title: 'Excellence:', text: 'Every detail matters — from code to content.' },
    ];
  
    const listRefs = useRef([]);
  
    useEffect(() => {
      listRefs.current.forEach((item, index) => {
        setTimeout(() => {
          if (item) {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
          }
        }, index * 300);
      });
    }, []);
  
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', fontFamily: "'Arial', sans-serif", color: '#333' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '60px 20px', backgroundImage: `url(${aboutBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: '#fff', marginBottom: '40px', position: 'relative' }}>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '60px 20px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px' }}>About GK-Technologies</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Empowering small and medium businesses with innovative, practical, and scalable digital solutions tailored to help them thrive in an increasingly connected world.
          </p>
        </div>
      </div>
      {/* Who We Are */}
      <div style={{ padding: '40px 0', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '20px', color: '#2c3e50' }}>Who We Are</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px', color: '#555' }}>
              At GK Technologies, we believe every small and medium business deserves a strong digital presence. Headquartered in the heart of St. Louis, Missouri, we specialize in empowering local businesses with the tools they need to compete and grow in today's digital-first world.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px', color: '#555' }}>
              Whether you're a family-owned store, a fast-growing startup, or a long-standing neighborhood brand, we bring your vision to life through custom websites, mobile applications, and results-driven digital marketing strategies.
            </p>
          </div>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img src={teamImg} alt="GK Technologies Team" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </div>
      {/* Mission and Why We Exist */}
      <div style={{ padding: '60px 20px', backgroundColor: '#f8f9fa', margin: '60px 0' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ flex: '1 1 400px', padding: '30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '20px', color: '#2c3e50' }}>Our Mission</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#555' }}>
              To simplify digital transformation for small and medium businesses by providing affordable, high-quality, and customized digital solutions.<br></br>
              We aim to be a trusted partner for local entrepreneurs, helping them harness the power of technologies to grow, compete, and thrive in a digital-first world.
            </p>
          </div>
          <div style={{ flex: '1 1 400px', padding: '30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '20px', color: '#2c3e50' }}>Why We Exist</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#555' }}>
              We started GK Technologies with a simple observation: too many amazing local businesses were being left behind because they didn't have the technical resources or know-how to go digital. We made it our mission to change that — by delivering enterprise-level results with the personal attention of a local partner.
            </p>
          </div>
        </div>
      </div>
      {/* What Makes Us Different */}
      <div style={{ padding: '40px 0', borderBottom: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '20px', color: '#2c3e50', textAlign: 'center' }}>
            What Makes Us Different
        </h2>
        
        <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '20px', 
            justifyContent: 'center', 
            marginTop: '30px' 
        }}>
            {/* Card 1 - Local Understanding */}
            <div style={{ 
            flex: '1', 
            minWidth: '250px', 
            maxWidth: '300px', 
            padding: '20px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                borderTop: '3px solid #3498db'
            }
            }}>
            <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#3498db20',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                transition: 'all 0.3s ease'
            }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#3498db">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            </div>
            <h4 style={{ 
                color: '#3498db', 
                marginBottom: '15px', 
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
                ':hover': {
                color: '#2980b9'
                }
            }}>
                Local Understanding
            </h4>
            <p style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.5', 
                color: '#555',
                transition: 'all 0.3s ease',
                ':hover': {
                color: '#333'
                }
            }}>
                We know what St. Louis businesses need because we are one.
            </p>
            </div>

            {/* Card 2 - Client-First Culture */}
            <div style={{ 
            flex: '1', 
            minWidth: '250px', 
            maxWidth: '300px', 
            padding: '20px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                borderTop: '3px solid #3498db'
            }
            }}>
            <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#3498db20',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                transition: 'all 0.3s ease'
            }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#3498db">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V8z"/>
                </svg>
            </div>
            <h4 style={{ 
                color: '#3498db', 
                marginBottom: '15px', 
                fontSize: '1.2rem',
                transition: 'all 0.3s ease'
            }}>
                Client-First Culture
            </h4>
            <p style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.5', 
                color: '#555',
                transition: 'all 0.3s ease'
            }}>
                We don't offer one-size-fits-all packages. We listen, strategize, and build around your unique needs.
            </p>
            </div>

            {/* Card 3 - Transparent Process */}
            <div style={{ 
            flex: '1', 
            minWidth: '250px', 
            maxWidth: '300px', 
            padding: '20px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                borderTop: '3px solid #3498db'
            }
            }}>
            <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#3498db20',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                transition: 'all 0.3s ease'
            }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#3498db">
                <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
            </div>
            <h4 style={{ 
                color: '#3498db', 
                marginBottom: '15px', 
                fontSize: '1.2rem',
                transition: 'all 0.3s ease'
            }}>
                Transparent Process
            </h4>
            <p style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.5', 
                color: '#555',
                transition: 'all 0.3s ease'
            }}>
                No jargon, no hidden fees — just clear communication and dependable service.
            </p>
            </div>

            {/* Card 4 - Real Results */}
            <div style={{ 
            flex: '1', 
            minWidth: '250px', 
            maxWidth: '300px', 
            padding: '20px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                borderTop: '3px solid #3498db'
            }
            }}>
            <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#3498db20',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                transition: 'all 0.3s ease'
            }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#3498db">
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm3.5 12.09l-1.41 1.41L12 13.42 9.91 15.5 8.5 14.09 10.59 12 8.5 9.91 9.91 8.5 12 10.59l2.09-2.09 1.41 1.41L13.42 12l2.08 2.09z"/>
                </svg>
            </div>
            <h4 style={{ 
                color: '#3498db', 
                marginBottom: '15px', 
                fontSize: '1.2rem',
                transition: 'all 0.3s ease'
            }}>
                Real Results
            </h4>
            <p style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.5', 
                color: '#555',
                transition: 'all 0.3s ease'
            }}>
                We don't just build digital products; we help drive real growth.
            </p>
            </div>
        </div>
      </div>
      {/* Core Values */}
      <div style={{ padding: '40px 0', borderBottom: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '20px', color: '#2c3e50', textAlign: 'center' }}>
            Our Core Values
        </h2>
        <ul style={{ maxWidth: '600px', margin: '0 auto', listStyleType: 'none', padding: 0 }}>
            {values.map((val, i) => (
            <li
                key={i}
                ref={el => (listRefs.current[i] = el)}
                style={{
                opacity: 0,
                transform: 'translateX(100px)',
                transition: 'all 0.6s ease',
                padding: '10px 0',
                borderBottom: '1px solid #eee',
                fontSize: '1rem',
                lineHeight: '1.6',
                }}
            >
                <strong>{val.title}</strong> {val.text}
            </li>
            ))}
        </ul>
      </div>
      {/* CEO Message */}
      <div style={{ padding: '40px 0', backgroundColor: '#f8f9fa', margin: '40px 0' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src={raviteja} 
              alt="Ravi Teja Korla, Founder & CEO"
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '600px', 
                objectFit: 'cover', 
                border: '5px solid white', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                display: 'block'
              }}
            />
          </div>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', color: '#2c3e50' }}>Message from the CEO</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px', color: '#555' }}>
              At GK Technologies, we're not just building websites or apps — we're helping businesses 
              unlock their potential and compete in a fast-moving digital world.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px', color: '#555' }}>
              As someone who has worked closely with small and medium businesses, I understand the 
              challenges you face: limited time, tight budgets, and the constant pressure to grow. That's 
              why GK Technologies was founded — to give local businesses access to digital tools that 
              make a real difference, without the high costs or complexity.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px', color: '#555' }}>
              We're a passionate team of developers, designers, and marketers who care about your 
              success as much as you do. Our goal is simple: deliver powerful, tailored digital solutions 
              that drive real results — whether it's more customers, higher visibility, or a stronger online 
              brand.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px', color: '#555' }}>
              We're proud to be based in St. Louis and even prouder to serve the businesses that keep 
              our community thriving. If you're ready to grow, we're here to help.
            </p>
            <div style={{ marginTop: '30px' }}>
              <h5 style={{ fontSize: '1.2rem', marginBottom: '5px', color: '#2c3e50' }}>Ravi Teja Korla</h5>
              <p style={{ fontSize: '0.9rem', color: '#7f8c8d', margin: '0' }}>Founder & CEO</p>
              <p style={{ fontSize: '0.9rem', color: '#7f8c8d', margin: '0' }}>GK Technologies</p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Process */}
      <div style={{ padding: '40px 0', borderBottom: '1px solid #eee' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '20px', color: '#2c3e50', textAlign: 'center' }}>Our Process</h2>
        <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', padding: '60px 5%', margin: '0 auto', maxWidth: '1200px' }}>
          <svg width="100%" height="4px" viewBox="0 0 1000 4" preserveAspectRatio="none" style={{ position: 'absolute', top: '70px', left: 0, right: 0, zIndex: 0 }}>
            <path d="M 100,2 L 300,2 L 500,2 L 700,2 L 900,2" stroke="url(#lineGradient)" strokeWidth="4" strokeDasharray="1000" strokeDashoffset="1000" fill="none" style={{ animation: 'drawPath 4s ease-out infinite' }} />
            <defs><linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ff0000" /><stop offset="50%" stopColor="#ffcc00" /><stop offset="100%" stopColor="#00aa00" /></linearGradient></defs>
          </svg>
          {[{ num: 1, title: "Discover", desc: "We dive deep into your business, goals, and challenges.", color: "#ff0000" }, { num: 2, title: "Strategize", desc: "We design a tailored plan to grow your online presence.", color: "#ff6600" }, { num: 3, title: "Create", desc: "We build websites, apps, and campaigns that work for you.", color: "#ffcc00" }, { num: 4, title: "Launch & Support", desc: "We go live and stay with you every step of the way.", color: "#99cc00" }, { num: 5, title: "Optimize", desc: "We analyze, tweak, and grow as your business evolves.", color: "#00aa00" }].map((step, index) => (
            <div key={step.num} style={{ flex: '1 1 250px', maxWidth: '250px', margin: '20px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: step.color, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontWeight: 'bold', fontSize: '1.5rem', animation: `pulseStep 4s infinite ${index * 0.8}s` }}>{step.num}</div>
              <h5 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#2c3e50' }}>{step.title}</h5>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5' }}>{step.desc}</p>
            </div>
            ))}
        </div>
        <style>{`
          @keyframes drawPath { 0%,10%{stroke-dashoffset:1000;} 20%{stroke-dashoffset:800;} 40%{stroke-dashoffset:600;} 60%{stroke-dashoffset:400;} 80%{stroke-dashoffset:200;} 90%,100%{stroke-dashoffset:0;} }
          @keyframes pulseStep { 0%,100%{transform:scale(1);box-shadow:0 0 0 rgba(0,0,0,0);} 50%{transform:scale(1.1);box-shadow:0 0 10px rgba(0,0,0,0.2);} }
          @media(max-width:900px){ .about-flex, .about-flex-row{flex-direction:column!important;gap:24px!important;} .about-img{max-width:100%!important;} }
          @media(max-width:768px){
            div[style*='display: flex'][style*='gap: 40px']{flex-direction:column!important;gap:24px!important;}
            div[style*='display: flex'][style*='gap: 20px']{flex-direction:column!important;gap:16px!important;}
            div[style*='display: flex'][style*='gap: 40px'] img, .about-img{max-width:100%!important;}
            h1, h2, h3, h4, h5{font-size:1.2rem!important;}
            .about-cta{padding:32px 10px!important;}
            .about-process{padding:24px 2%!important;}
          }
          @media(max-width:500px){
            h1{font-size:1.5rem!important;}
            h2{font-size:1.1rem!important;}
            h3{font-size:1rem!important;}
            p, li{font-size:0.95rem!important;}
            div[style*='padding: 40px 0']{padding:20px 0!important;}
            div[style*='padding: 60px 20px']{padding:24px 8px!important;}
          }
        `}</style>
      </div>
      {/* CTA Section */}
      <div className="about-cta" style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#3498db', color: 'white', borderRadius: '8px', margin: '40px 0' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '15px' }}>Ready to take your business online?</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.9' }}>Let's build something powerful together.</p>
        <button style={{ padding: '12px 30px', fontSize: '1rem', fontWeight: '600', backgroundColor: 'white', color: '#3498db', border: 'none', borderRadius: '50px', cursor: 'pointer' }}>
          <Link to="/Contact#contactForm" style={{ textDecoration: 'none', color: 'black' }}>Book a free consultation today</Link>
        </button>
      </div>
    </div>
  );
};

export default About;