
const experience = [
  {
    period: "Oct. 2026 · Actualidad",
    position: "Analista de datos",
    company: "Deal Brand",
    current: true,
    description:
      "",
    achievements: [
      "Pronto ;)"
    ],
    tools: ["SQL",  "Power BI", "Excel"],
  },
  {
    period: "Ago. 2025 · Oct. 2026",
    position: "Asistente de Soporte de Aplicaciones Digitales",
    company: "Laive S.A.",
    current: false,
    description:
      "Análisis de datos, soporte de aplicaciones y mejora de procesos operativos.",
    achievements: [
      "Desarrollo y optimización de consultas SQL para validar la calidad e integridad de los datos, identificar inconsistencias y analizar procesos operativos.",
      "Desarrollo de dashboards en Power BI: modelado y transformación de datos, y construcción de KPIs de SLA, backlog, tiempos de atención y rendimiento operativo.",
      "Diseño de un pipeline ETL con Python, APIs REST y SQL para extraer datos de Jira y cargarlos en Google Cloud SQL para su análisis en Power BI.",
      "Diseño de modelos dimensionales con tablas de hechos, dimensiones y snapshots para el seguimiento histórico de indicadores.",
      "Mejora de la atención de soporte mediante nuevas herramientas, flujos de trabajo, automatización y estandarización de datos en Jira Service Management.",
      "Extracción y consolidación de datos para generar reportes y atender requerimientos de Product Owners y usuarios clave.",
      "Análisis de logs y trazabilidad de transacciones en Google Cloud Platform para detectar anomalías, investigar incidencias y validar integraciones.",
    ],
    tools: ["SQL", "Python", "Power BI", "Jira", "Google Cloud SQL"],
  },
  {
    period: "Ene. 2025 · Jul. 2025",
    position: "Practicante TI",
    company: "Laive S.A.",
    current: false,
    description:
      "Soporte técnico y validación de datos en aplicaciones y servicios corporativos.",
    achievements: [
      "Validación de inconsistencias en entornos productivos mediante consultas SQL y revisión de procedimientos almacenados y vistas.",
      "Gestión de accesos a bases de datos SQL, incluido el retiro de usuarios y la habilitación de accesos a entornos de desarrollo en Google Cloud SQL.",
      "Uso de Google Cloud Shell para tareas operativas en la nube, como la compresión de imágenes almacenadas en Google Cloud Storage.",
      "Revisión de estadísticas y métricas de instancias de Google Cloud SQL para detectar saturaciones, anomalías y problemas de rendimiento.",
      "Soporte a aplicaciones de Power Apps y Power Automate para Marketing e Investigación y Desarrollo (I+D), y atención de incidencias en otras aplicaciones corporativas.",
      "Pruebas de APIs con Postman para validar respuestas, integraciones y comportamiento de servicios.",
      "Configuración de alertas en Google Cloud Platform para detectar respuestas HTTP 500 y errores en aplicaciones productivas, junto con validaciones de datos de procesos operativos.",
    ],
    tools: ["SQL", "Google Cloud SQL", "Google Cloud Shell", "Power Apps", "Power Automate", "Postman"],
  },
];

const education = [
  {
    period: "2019 · 2024",
    title: "Ingeniería de Computación y Sistemas",
    institution: "Universidad de San Martin de Porres",
    description:
      "Formación orientada al desarrollo de software, bases de datos, gestión de tecnologías y análisis de información.",
    type: "Carrera profesional",
  },
];

const complementaryEducation = [
  {
    title: "Data Engineering Associate",
    institution: "DataCamp",
    year: "2026",
    certificateUrl: "https://www.datacamp.com/certificate/DEA0011449697264",
  },
  {
    title: "SQL Server Fundamentals",
    institution: "Perú Digital",
    year: "2024",
    certificateUrl: "https://drive.google.com/file/d/15KEjw6f_ic58C82cCHTMi2gRKSCtpjL8/view",
  },
  {
    title: "SQL (Intermediate)",
    institution: "HackerRank",
    year: "2024",
    certificateUrl: "https://www.hackerrank.com/certificates/dbd36c3d8853",
  },
  {
    title: "SQL Intermedio",
    institution: "Netzun",
    year: "2024",
    certificateUrl: "https://drive.google.com/file/d/1QH_kKMuyvgrCUn5CSNXRHKfjPMV9utF2/view",
  },
  {
    title: "Excel Completo de Cero a Avanzado",
    institution: "Udemy",
    year: "2024",
    certificateUrl: "https://www.udemy.com/certificate/UC-f8c8a2df-c742-4240-9278-2cf80460d7a8/",
  },
  {
    title: "Scrum Fundamentals",
    institution: "VMEdu",
    year: "2023",
    certificateUrl: "https://www.scrumstudy.com/certification/verify?type=SFC&number=959131",
  },
];

function Trajectory() {
  return (
    <section id="trayectoria" className="section trajectory-section">
      <div className="trajectory-heading">
        <span>Perfil profesional</span>

        <h2>Experiencia y formación</h2>

        <p>
          Un recorrido que combina soporte de aplicaciones, análisis de datos,
          automatización y aprendizaje continuo.
        </p>
      </div>

      <div className="trajectory-grid">
        <div className="trajectory-column">
          <div className="trajectory-column-title">
            <div className="trajectory-title-icon">◆</div>

            <div>
              <span>Experiencia</span>
              <h3>Trayectoria profesional</h3>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.position}>
                <div className="timeline-dot"></div>

                <div className="trajectory-card experience-card">
                  <div className="trajectory-card-header">
                    <span className="trajectory-date">{item.period}</span>

                    {item.current && (
                      <span className="current-role">
                        <span></span>
                        Actual
                      </span>
                    )}
                  </div>

                  <h4>{item.position}</h4>

                  <p className="trajectory-company">{item.company}</p>

                  <p className="trajectory-description">
                    {item.description}
                  </p>

                  <ul className="achievement-list">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>

                  <div className="trajectory-tools">
                    {item.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="trajectory-column">
          <div className="trajectory-column-title">
            <div className="trajectory-title-icon">✦</div>

            <div>
              <span>Educación</span>
              <h3>Formación académica</h3>
            </div>
          </div>

          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-dot"></div>

                <div className="trajectory-card">
                  <div className="trajectory-card-header">
                    <span className="trajectory-date">{item.period}</span>

                    <span className="education-type">{item.type}</span>
                  </div>

                  <h4>{item.title}</h4>

                  <p className="trajectory-company">
                    {item.institution}
                  </p>

                  <p className="trajectory-description">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="complementary-section">
            <div className="complementary-header">
              <span>Aprendizaje continuo</span>
              <h3>Formación complementaria</h3>
            </div>

            <div className="complementary-list">
              {complementaryEducation.map((course) => (
                <article
                  className="complementary-card"
                  key={course.title}
                >
                  <div className="course-icon" aria-hidden="true">✓</div>

                  <div>
                    <h4>{course.title}</h4>

                    <span>{course.institution} · {course.year}</span>

                    <a
                      className="course-certificate-link"
                      href={course.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver certificado ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trajectory;
