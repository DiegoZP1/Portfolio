import ProjectGallery from "./ProjectGallery";

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-number">0{index + 1}</div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tools">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        <ul className="project-highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            Código ↗
          </a>
          {project.dashboardUrl && project.dashboardUrl !== "#" && (
            <a href={project.dashboardUrl} target="_blank" rel="noreferrer">
              Dashboard ↗
            </a>
          )}
        </div>
        {project.screenshots?.length > 0 && (
          <ProjectGallery screenshots={project.screenshots} title={project.title} />
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
