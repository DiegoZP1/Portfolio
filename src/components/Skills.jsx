const skillGroups = [

  {
    title: "Data / ETL",
    skills: [
      { name: "Python", icon: "/tech/python.png" },
      { name: "Excel", icon: "/tech/excel.png" },
      { name: "APIs", icon: "/tech/api.png" },
      { name: "Power BI", icon: "/tech/power.png" }
    ],
  },
  {
    title: "Bases de Datos",
    skills: [
      { name: "SQL Server", icon: "/tech/sql_Server.png" },
      { name: "MySQL", icon: "/tech/mysql.png" },
      { name: "PostgreSQL", icon: "/tech/postgres.png" },
      { name: "SQL Lite", icon: "/tech/Sqlite.png" }
    ],
  },
  {
  title: "Power Platform ",
  skills: [
    { name: "Power Apps", icon: "/tech/power apps.png"},
    { name: "Power Automate", icon: "/tech/automate.png" },
    { name: "SharePoint", icon: "/tech/sharepoint.png" },
    { name: "Microsoft 365", icon: "/tech/Microsoft_365.png" }
  ],
},
  {
    title: "Cloud",
    skills: [
      { name: "Google Cloud", icon: "/tech/gcp.png" }
    ],
  },
  {
    title: "Gestion de Proyectos / Tareas ",
    skills: [
      { name: "Scrum", icon: "/tech/scrum.png" },
      { name: "Jira", icon: "/tech/jira.png" },
      { name: "Confluence", icon: "/tech/confluence.png" },
      { name: "Trello", icon: "/tech/trello.png" },
      { name: "Slack", icon: "/tech/slack.png" },
    ],
  },
  {
    title: "Frontend Básico",
    skills: [
      { name: "React", icon: "/tech/react.png" },
      { name: "Vite", icon: "/tech/vite.png" },
      { name: "JavaScript", icon: "/tech/js.png" },
      { name: "HTML", icon: "/tech/html.png" },
      { name: "CSS", icon: "/tech/css.png" },
    ] 
  },
  {
     title: "Otros",
    skills: [
      { name: "GitHub", icon: "/tech/github.png" },
      { name: "Bitbucket", icon: "/tech/bitbucket.png" },
      { name: "Postman", icon: "/tech/postman.png" },
      { name: "Figma", icon: "/tech/figma.png" }
    ]
    }

];

function Skills() {
  return (
    <section id="skills" className="section skills-modern-section">
      <div className="skills-modern-header">
        <h2>Skills</h2>
        <p>
          Herramientas y tecnologías que he utilizado
        </p>
      </div>

      <div className="skills-category-grid">
        {skillGroups.map((group) => (
          <article className="skill-category-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-pills">
              {group.skills.map((skill) => (
                <span className="skill-pill" key={skill.name}>
                  <img src={skill.icon} alt={skill.name} className="skill-logo" />
                  {skill.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;