import { Check, Github, Linkedin, Mail, Send } from "lucide-react";
import { socialLinks } from "../Mycomponents/data"; // Adjusted path to relative
import "./Contact.css"; // Import the CSS file
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="container">
      <span className="text-gradient">Contact</span>
        <div className="grid">
          <div className="connect-container">
            <div className="contain">
              <h3 id="h3">Connect With Me</h3>
              <p id="paragraph">
                Feel free to reach out through any of the platforms below. I'm
                always open to discussing new projects, creative ideas, or
                opportunities.
              </p>
            </div>

            <div className="social-links">
              <a href={`mailto:${socialLinks.email}`} className="social-link">
                <Mail size={20} />
                <div>
                  <h4>Email</h4>
                  <p>{socialLinks.email}</p>
                </div>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={20} />
                <div>
                  <h4>GitHub</h4>
                  <p>View my projects and contributions</p>
                </div>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={20} />
                <div>
                  <h4>LinkedIn</h4>
                  <p>Connect professionally</p>
                </div>
              </a>

              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <SiLeetcode size={20} />
                <div>
                  <h4>Leetcode</h4>
                  <p>Solve coding challenges</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
