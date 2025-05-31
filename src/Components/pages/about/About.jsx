import { NavLink } from "react-router-dom";
import "./About.css"

export const About = () => {
  return (
     <section className="about-section">
      <div className="about-container"> 
        <div className="about-header">
          <h2 className="about-title">About <span>Me</span></h2>
          <p className="about-subtitle">My journey as a Frontend Developer</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://marketifythemes.net/html/foliox/img/hero/avatar.png" 
              alt="Areeb Ali" 
              className="profile-image"
            />
          </div>

          <div className="about-text">
            <div className="about-bio">
              <h3>Who am I?</h3>
              <p>
                I'm Areeb Ali, a passionate Frontend Developer with expertise in modern 
                JavaScript frameworks. I specialize in creating responsive, user-friendly 
                web applications with clean, efficient code.
              </p>
            </div>

            <div className="about-skills">
              <h3>My Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-name">React</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">HTML/CSS</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">UI/UX Design</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <NavLink to="/contact" className="contact-btn">
                Contact Me
              </NavLink>
              <NavLink to="/projects" className="services-btn">
                View Projects
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}