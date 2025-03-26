import { skills } from "../Mycomponents/data";
import { Code, Layers, Palette, Server } from "lucide-react";
import "./About.css"; // Import the CSS file

const About = () => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {}); // Removed TypeScript syntax for simplicity

  const categoryIcons = {
    frontend: <Code size={20} />,
    backend: <Server size={20} />,
    tools: <Layers size={20} />,
    design: <Palette size={20} />,
  };

  const categoryTitles = {
    frontend: "Frontend",
    backend: "Backend",
    design: "Design",
    tools: "Tools & Platforms",
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="text-center section-header">
          {/* <span className="skill-pill">About Me</span> */}
          <span className="text-gradient">About Me</span>
          <h2>Building exceptional digital experiences through code</h2>
          <p className="section-description">
            I'm a passionate web developer with expertise in creating modern,
            responsive, and user-friendly applications. With a focus on clean
            code and intuitive user experiences, I transform ideas into
            functional digital solutions.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3 className="card-title">Experience</h3>
            <p className="card-description">
              <h4>
                Front-End Developer, DMatics Technologies (June 2024 – July
                2024)
              </h4>
              <p>
                ➢ Improved UI/UX to make the interface more user-friendly,
                responsive, and accessible, enhancing engagement.
              </p>
              <p>
                ➢ Optimized code for better performance, security, and
                scalability using React and Tailwind CSS.
              </p>

              <h4>
                DSA Lead, Developer Student Club RTU (Octobar 2024 – Present)
              </h4>
              <p>
                ➢ Conducting contests, mentorship sessions, and problem-solving
                discussions to strengthen programming skills.
              </p>
              <p>
                ➢ Working with peers to develop learning resources and cultivate
                a vibrant coding community.
              </p>
            </p>
          </div>

          <div className="about-card">
            <h3 className="card-title">Education</h3>
            <div className="education-item">
              <p>Rajasthan Technical University, Kota</p>
              <p>📍 Bachelor of Technology (B.Tech)</p>
              <p>📅 [2022] – [2026]</p>
              <p>🎓 CGPA: 9.12</p>
            </div>
            <h3 className="card-title">Achievements</h3>
            <p>➢ Clear flipkart Grid level 1.</p>
            <p>➢ Winner – FinQuest, THAR Tech Fest in my collage.</p>
            <p>➢ Won 30 Days DSA Challenge organize by GFG in my College.</p>
            <p>
              ➢ Participated in various Hackathon include Nirma Mined Hackathon
            </p>
          </div>
        </div>

        <span className="text-gradient">My Skills</span>
        <br />
        <br />
        <br />
        <br />

        <div className="skills-grid">
          {Object.keys(groupedSkills).map((category) => (
            <div key={category} className="skill-card">
              <div className="skill-card-header">
                <div className="icon">{categoryIcons[category]}</div>
                <h4>{categoryTitles[category]}</h4>
              </div>

              <div className="skill-list">
                {groupedSkills[category].map((skill) => (
                  <div key={skill.name} className="skill-pill">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
