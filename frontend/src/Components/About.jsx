import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About WriteUpright</h2>
            <p>Welcome to Write UpRight, where your content kingdom awaits. Founded over five years ago with a passion for storytelling and a commitment to excellence, Write UpRight has evolved into a thriving community of over 80+ talented writers, each dedicated to bringing your unique brand’s vision to life.

Today, your audience hungers for quality, and Google acts like a gatekeeper. That’s why Write UpRight is here making sure your content rocks and gets noticed.

Our team at Write UpRight understands the challenges of content creation in today’s digital landscape. That’s why we’ve built a platform that’s designed to create high-quality content at any scale. Whether you’re a Fortune 500 retailer looking to re-write and enhance 1 million product descriptions or a small business adding a few pages of content to your new website, we’ve got you covered.</p>
            
          </div>

          <div className="about-image">
            <motion.img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="About Us"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0px 20px 40px rgba(0,0,255,0.5)"
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              style={{ borderRadius: "10px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
