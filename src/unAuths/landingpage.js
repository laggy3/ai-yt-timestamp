import React, { useEffect, useRef } from 'react';
import './landingpage.css';

function LandingPage() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const elements = [
      headlineRef.current,
      subheadingRef.current,
      buttonsRef.current
    ].filter(Boolean);

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login clicked!');
    // Add your login logic here
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    console.log('Get Started clicked!');
    // Add your get started logic here
  };

  const handleContact = (e) => {
    e.preventDefault();
    console.log('Contact Us clicked!');
    // Add your contact logic here
  };

  return (
    <div className="fashion-landing">
      <main className="hero" ref={heroRef}>
        <div className="hero-content">
          <h1 className="headline" ref={headlineRef}>
            Fashion Forward.
            <span className="gradient-text"> Style Unlimited.</span>
          </h1>
          <p className="subheading" ref={subheadingRef}>
            Discover the latest trends and express your unique style with our curated collection of premium fashion
          </p>
          <div className="button-group" ref={buttonsRef}>
            <button className="btn btn-primary" onClick={handleGetStarted}>
              Get Started
            </button>
            <button className="btn btn-secondary" onClick={handleLogin}>
              Login
            </button>
            <button className="btn btn-outline" onClick={handleContact}>
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
