import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="proyectos" className="section projects-section">
      <div className="section-header">
        <span>Portafolio</span>
        <h2>Proyectos realizados</h2>
        <p>
          Casos prácticos orientados a extracción, transformación, modelado, visualización y análisis de datos .
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;