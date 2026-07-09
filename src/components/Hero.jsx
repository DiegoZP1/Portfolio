function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-blur hero-blur-one"></div>
      <div className="hero-blur hero-blur-two"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            Data Analyst · BI · Python · SQL
          </span>

          <h1>
            Transformo datos operativos en dashboards, indicadores y análisis para la toma de decisiones.
          </h1>

          <p>
            Profesional de Sistemas con experiencia en Service Desk orientado al análisis de datos, Business Intelligence y
            automatización de reportes para mejorar la operación.
          </p>

          <div className="hero-actions">
           

            <a
              href="/cv/Diego-Zamalloa-CV.pdf"
              download="CV-Diego-Zamalloa.pdf"
              className="btn btn-primary"
            >
              Descargar CV
            </a>

             <a href="#proyectos" className="btn btn-secondary">
              Ver proyectos
            </a>

            <a href="#contacto" className="btn btn-secondary">
              Contactarme
            </a>
          </div>

          <div className="hero-metrics">
            <div>
              <strong>2+</strong>
              <span>Proyectos</span>
            </div>
            <div>
              <strong>8+</strong>
              <span>Herramientas</span>
            </div>
            <div>
              <strong>1+</strong>
              <span>Año en BI</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-content">
            <span className="hero-panel-tag">Mi enfoque</span>

            <h3>¿Qué hago?</h3>

            <div className="hero-feature-list">
              <div className="hero-feature-item">
                <span className="hero-feature-icon">📊</span>
                <div>
                  <strong>Análisis de datos</strong>
                  <p>Transformo información operativa en métricas e insights.</p>
                </div>
              </div>

              <div className="hero-feature-item">
                <span className="hero-feature-icon">📈</span>
                <div>
                  <strong>Dashboards </strong>
                  <p>Construyo reportes visuales para monitorear KPIs</p>
                </div>
              </div>

                <div className="hero-feature-item">
                <span className="hero-feature-icon">🧹</span>

                <div>
                  <strong>Limpieza y transformación de datos</strong>

                  <p>
                    Depuro, valido y estandarizo información para mejorar su calidad y
                    prepararla para el análisis.
                  </p>
                </div>
              </div>

               <div className="hero-feature-item">
                <span className="hero-feature-icon">⚙️</span>
                <div>
                  <strong>Automatización</strong>
                  <p>Optimizo tareas recurrente con Python y Power Platform.</p>
                </div>
              </div>

              <div className="hero-feature-item">
                <span className="hero-feature-icon">🛠️</span>
                <div>
                  <strong>Soporte TI con enfoque en data</strong>
                  <p>Resuelvo incidencias e inconsistencias de información.</p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;