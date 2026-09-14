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
            Data Engineer · Data Analytics · Business Intelligence
          </span>

          <h3>
            Convierto información operativa en indicadores útiles para la toma
            de decisiones.
          </h3>

          <p>
            Soy Bachiller en Ingeniería de Sistemas enfocado en Data, Business Intelligence y automatización.
          </p>

          <p>
           Actualmente trabajo con información proveniente de aplicaciones empresariales, transformando datos operativos en soluciones analíticas mediante SQL, Python, Power BI y procesos ETL.
          </p>

          <p>
            He desarrollado procesos de extracción y transformación de datos desde Jira mediante APIs, pipelines en Python y bases de datos SQL, además de modelos dimensionales y snapshots históricos para analizar SLA, backlog, escalamiento y rendimiento operativo.
            Mi objetivo es seguir desarrollándome en roles de Data Engineering  , Data Anlyst y Business Intelligence, construyendo soluciones que conecten integración, modelado y analítica de datos.
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