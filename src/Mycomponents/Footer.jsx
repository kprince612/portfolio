import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../Mycomponents/data";  // Adjusted path to relative
import "./Footer.css";  // Import the CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="brand-link">
              <span className="brand-primary">Dev</span>
              <span>Portfolio</span>
            </a>
            <p className="footer-text">Crafting beautiful digital experiences</p>
          </div>

          <div className="footer-socials">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Web Developer Portfolio. All rights reserved.</p>
          
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>

      <a
        href="#home"
        className="back-to-top"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
