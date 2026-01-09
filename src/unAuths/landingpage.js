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

  const handleCart = (e) => {
    e.preventDefault();
    console.log('Shopping cart clicked!');
    // Add your cart logic here
  };

  return (
    <div className="fashion-landing">
      <button className="cart-icon-btn" onClick={handleCart} aria-label="Shopping Cart">
        <svg className="cart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 17.9 19 19 19C20.1 19 21 18.1 21 17V13M9 19.5C9.8 19.5 10.5 20.2 10.5 21C10.5 21.8 9.8 22.5 9 22.5C8.2 22.5 7.5 21.8 7.5 21C7.5 20.2 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21C21.5 21.8 20.8 22.5 20 22.5C19.2 22.5 18.5 21.8 18.5 21C18.5 20.2 19.2 19.5 20 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="cart-badge">0</span>
      </button>
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
