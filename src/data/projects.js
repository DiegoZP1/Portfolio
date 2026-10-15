import resumen from "../assets/dashboard/resumen-ejecutivo.jpeg";
import sla from "../assets/dashboard/sla.jpeg";
import backlog from "../assets/dashboard/backlog.jpeg";
import rendimiento from "../assets/dashboard/rendimiento.jpeg";

const projects = [
  {
    title: "Análisis de Tickets de Soporte con Jira API y Power BI",
    category: "ETL / BI",
    description:
      "Desarrollo de un pipeline para extraer información de Jira mediante API, transformar los datos con Python y almacenarlos en MySQL utilizando un modelo dimensional preparado para Power BI.",
    tools: ["Python", "Jira API", "My SQL", "Power BI", "Google Cloud SQL"],
    highlights: [
      "Configuración de flujos, automatizaciones y estandarización del registro y atención de tickets.",
      "Extracción mediante API, transformación con Python y carga a MySQL para análisis histórico.",
      "Diseño de tablas de hechos, dimensiones y snapshots históricos para Business Intelligence.",
      "Creación de KPIs y métricas para dashboards, orientados al seguimiento del cumplimiento de SLA, tasa de escalamiento de tickets y otros indicadores requeridos por Gerencia para monitorear los objetivos y desempeño del equipo."
    ],
    githubUrl: "#",
    screenshots: [
      { src: resumen, title: "Resumen ejecutivo", alt: "Dashboard con volumen de tickets, escalamiento, cumplimiento de SLA y evolución del backlog." },
      { src: sla, title: "Cumplimiento de SLA", alt: "Dashboard de cumplimiento de SLA por aplicación, prioridad y mes, con tiempos de exceso." },
      { src: backlog, title: "Backlog y antigüedad", alt: "Dashboard de tickets pendientes por aplicación, estado, prioridad y antigüedad." },
      { src: rendimiento, title: "Rendimiento", alt: "Dashboard de tiempos de resolución, tickets por nivel y escalamiento por aplicación." }
    ]
  }
];

export default projects;
