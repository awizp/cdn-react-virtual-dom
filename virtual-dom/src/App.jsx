const App = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React.",
      status: "Completed",
      className: "completed",
    },
    {
      title: "Task Manager",
      desc: "A simple task management app.",
      status: "In Progress",
      className: "progress",
    },
  ];

  return (
    <div className="card">
      <h1 className="main-title">Developer Profile</h1>

      {/* Basic Info */}
      <section className="section">
        <h2 className="section-title">Basic Info</h2>
        <p className="info-text">
          <strong>Name:</strong> CyberDude
        </p>
        <p className="info-text">
          <strong>Role:</strong> Frontend Developer
        </p>
      </section>

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <ul className="skill-list">
          {skills.map((skill, index) => (
            <li className="skill-item" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="section">
        <h2 className="section-title">Projects</h2>

        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <span className={`status ${project.className}`}>
              Status: {project.status}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
