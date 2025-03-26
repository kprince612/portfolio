import { ArrowDown } from "lucide-react";
import "./Hero.css";  // Import the CSS file

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">

        {/* Left Section - Image */}
        {/* Right Section - Text and CTA */}
        <div className="content">
          <h1 className="hero-title">
            Hi, I am <span className="text-gradient">Prince Khandelwal</span>
          </h1>

          <p className="hero-description">
            I build modern and responsive web applications using cutting-edge technologies 
            to solve real-world problems with elegant solutions.
          </p>

          <div className="cta-container">
            <a href="https://drive.google.com/file/d/1otOWZ9IZ0YfE-kFXXy6YkeMbZCiBRL-t/view?usp=drivesdk" className="btn-primary">Resume</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>

        <div className="image-container">
          <img 
            src="https://i.ibb.co/1wxPRpK/Whats-App-Image-2025-03-14-at-12-53-00-AM.jpg" 
            alt="Person working on a laptop" 
            className="person-image"
          />
        </div>


      </div>

      {/* <div className="scroll-down">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="arrow-icon" />
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
