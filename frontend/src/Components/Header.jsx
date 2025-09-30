import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // shrink header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`header ${shrink ? "shrink" : ""}`}>
      {/* Logo */}
      <div className="logo">MyDbucket</div>

      {/* Hamburger (mobile only) */}
      <button className="hamburger" onClick={() => setMenuOpen(true)}>
        <Menu size={22} />
      </button>

      {/* Desktop Nav */}
      <nav className="desktop-nav">
        <a href="#">Home</a>
        <a href="#">About Us</a>

        {/* Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => !isMobile && setShowSubmenu(true)}
          onMouseLeave={() => !isMobile && setShowSubmenu(false)}
        >
          <button
            className="dropdown-btn"
            onClick={() => isMobile && setShowSubmenu(!showSubmenu)}
          >
            All Services <ChevronDown size={16} />
          </button>
          {showSubmenu && (
            <div className="submenu">
              <a href="#">Company Profile</a>
              <a href="#">Website</a>
              <a href="#">Branding</a>
              <a href="#">Video Production</a>
            </div>
          )}
        </div>

        <a href="#">Projects</a>
        <a href="#">Blog</a>
        <a href="#" className="cta">
          Get a Free Quote
        </a>
      </nav>

      {/* Slide-out Mobile Menu */}
      <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <X size={26} />
        </button>
        <nav className="mobile-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <div>
            <button
              className="dropdown-btn"
              onClick={() => setShowSubmenu(!showSubmenu)}
            >
              All Services <ChevronDown size={16} />
            </button>
            {showSubmenu && (
              <div className="submenu mobile-submenu">
                <a href="#">Company Profile</a>
                <a href="#">Website</a>
                <a href="#">Branding</a>
                <a href="#">Video Production</a>
              </div>
            )}
          </div>
          <a href="#">Projects</a>
          <a href="#">Blog</a>
          <a href="#" className="cta">
            Get a Free Quote
          </a>
        </nav>
      </aside>
    </header>
  );
}
