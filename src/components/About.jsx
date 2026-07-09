import profilePhoto from "../assets/profile.jpg";

function About() {
  return (
    <section id="sobre-mi" className="section about-section">
      <div className="section-header about-header">
        <span>Perfil</span>
        <h2>Sobre mí</h2>

        
      </div>

      <article className="about-profile-card">
        <div className="about-photo-container">
          <img
            src={profilePhoto}
            alt="Diego Zamalloa"
            className="about-photo"
          />

          <div className="about-photo-overlay">
            <strong>Diego Zamalloa</strong>
            <span>Sistemas · Data · Business Intelligence</span>
          </div>
        </div>

        <div className="about-content">
          <span className="about-role">
            Service Desk · Data Analytics · Business Intelligence
          </span>

          <h3>
            Convierto información operativa en indicadores útiles para la toma
            de decisiones.
          </h3>

          <p>
            Soy profesional de Sistemas con experiencia en Service Desk 
            orientado al análisis de datos y Business Intelligence.
          </p>

          <p>
            Actualmente me desempeño en la resolución de incidencias e
            inconsistencias de datos en aplicaciones empresariales. Asimismo,
            transformo la información proveniente de tickets en indicadores,
            reportes y dashboards que permiten monitorear tiempos de atención,
            cumplimiento de SLA, backlog y rendimiento del equipo.
          </p>

          <p>
            Mi enfoque combina conocimientos de soporte TI con herramientas
            como SQL, Python, Power BI y procesos ETL, con el objetivo de
            transformar datos operativos en información útil para la toma de
            decisiones.
          </p>

          <div className="about-tech-list">
            <span>SQL</span>
            <span>Python</span>
            <span>Power BI</span>
            <span>Excel</span>
            <span>Google Cloud</span>
            <span>ETL</span>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;