import { projects } from "./data";  // Adjusted path to relative
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import "./Projects.css";  // Import the CSS file

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section-container">
      <div className="max-width">
        <div className="text-center mb-16">
          <span className="skill-pill mb-4">Projects</span>
          <h2 className="title">Featured Work</h2>
          <p className="description">
            Explore a selection of my recent projects, showcasing my skills in 
            web development and design.
          </p>
        </div>

        <div className="grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="project-image"
                />
              </div>
              
              <div className="content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="skills-container">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="skill-pill">+{project.skills.length - 3}</span>
                  )}
                </div>
                
                <div className="links">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link demo-link"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link source-link"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
