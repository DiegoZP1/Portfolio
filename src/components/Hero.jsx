function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-blur hero-blur-one"></div>
      <div className="hero-blur hero-blur-two"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            Data & BI · SQL · Python · ETL · Power BI
          </span>

          <h1>
            Construyo soluciones de datos que convierten información operativa en decisiones.
          </h1>

          <p>
            Desarrollo procesos ETL, modelos de datos y dashboards utilizando SQL, Python, Power BI y Cloud, desde la extracción e integración de información hasta la construcción de indicadores para negocio.
          </p>

          <div className="hero-actions">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>

            <a href="#contacto" className="btn btn-secondary">
              Contactarme
            </a>
          </div>

          <div className="hero-metrics">
            <div>
              <strong>1</strong>
              <span>Proyecto</span>
            </div>
            <div>
              <strong>8+</strong>
              <span>Herramientas</span>
            </div>
            <div>
              <strong>1+</strong>
              <span>Data & BI</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-content">
            <span className="hero-panel-tag">Mi enfoque</span>

            <h3>¿Qué hago?</h3>

            <div className="hero-feature-list">
              <div className="hero-feature-item">
                <span className="hero-feature-icon">📈</span>
                <div>
                  <strong>Análisis de datos</strong>
                  <p>Transformo información operativa en métricas e insights.</p>
                </div>
              </div>

              <div className="hero-feature-item">
                <span className="hero-feature-icon">🔄</span>
                <div>
                  <strong>Pipelines ETL </strong>
                  <p>Extraigo información mediante APIs, la transformo con Python y SQL y la cargo en bases de datos relacionales.</p>
                </div>
              </div>

                <div className="hero-feature-item">
                <span className="hero-feature-icon">🧩</span>

                <div>
                  <strong>Modelos de datos </strong>

                  <p>
                    Diseño modelos dimensionales , estrella y copo de nieve para análisis histórico.
                  </p>
                </div>
              </div>

               <div className="hero-feature-item">
                <span className="hero-feature-icon">📊</span>
                <div>
                  <strong>Business Intelligence</strong>
                  <p>Construyo dashboards en Power BI con KPIs, SLA, tendencias, backlog y métricas operativas.</p>
                </div>
              </div>

              <div className="hero-feature-item">
                <span className="hero-feature-icon">🔍</span>
                <div>
                  <strong>Data Quality & SQL</strong>
                  <p>Investigo inconsistencias, valido información y optimizo consultas sobre bases de datos productivas.</p>
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
