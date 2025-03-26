import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";  // Import the CSS file

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", url: "#home" },
    { title: "About", url: "#about" },
    { title: "Projects", url: "#projects" },
    { title: "Contact", url: "#contact" },
  ];

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="logo">
          {/* <span className="logo-primary">Dev</span> */}
          <span className="logo-primary">Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={link.url} className="nav-link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="nav-mobile">
            <ul className="nav-mobile-links">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.url}
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

