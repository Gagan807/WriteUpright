import React from "react";
import "./Hero.css"; // CSS we wrote earlier

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Professional <span>Content Writing</span> That Converts
            </h1>
            <p>
              We create compelling content that engages your audience and drives
              results for your business.
            </p>
            <a href="#contact" className="btn">
              Get Started Today
            </a>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Content Writing"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
