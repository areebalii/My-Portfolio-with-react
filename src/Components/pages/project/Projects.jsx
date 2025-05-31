import "./Project.css";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Random Password Generator",
      description: "A full-stack password generator built with React and custom logic.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "./public/images/password.png",
      link: "https://areebalii.github.io/Advance-password-generator/"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern personal portfolio with smooth animations and responsive design.",
      tags: ["React", "CSS3", "Animations"],
      image: "https://via.placeholder.com/400x250/1F1E50/00C0FF?text=Portfolio",
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A Kanban-style productivity app with drag-and-drop features.",
      tags: ["React", "Firebase", "DnD"],
      image: "https://via.placeholder.com/400x250/1F1E50/00C0FF?text=Task+App",
      link: "#"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="project-header">
        <h2 className="project-title">
          My <span>Projects</span>
        </h2>
        <p className="project-subtitle">
          Some of my recent work
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <a
                href={project.link}
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#00C0FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
