function Contact() {
  return (
    <section id="contacto" className="section contact-modern-section">
      <div className="contact-modern-card">
        <div className="contact-glow contact-glow-one"></div>
        <div className="contact-glow contact-glow-two"></div>

        <div className="contact-content">
          <span className="contact-tag">Contacto</span>

          <h2>Conectemos</h2>

          <p className="contact-description">
            Estoy interesado en oportunidades relacionadas con análisis de
            datos, ingenieria de datos, Business Intelligence, automatización de reportes y
            proyectos de mejora operativa.
          </p>

    
          <div className="contact-actions">
            <a href="mailto:diegojzam21@gmail.com" className="contact-btn primary">
              <span>✉</span>
              Correo
            </a>

            <a
              href="https://www.linkedin.com/in/diego-zamalloa-poma-0a27992b6/"
              target="_blank"
              rel="noreferrer"
              className="contact-btn secondary"
            >
              <span>in</span>
              LinkedIn
            </a>

            <a
              href="https://wa.me/51902663622"
              target="_blank"
              rel="noreferrer"
              className="contact-btn secondary"
            >
              <span>💬</span>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="contact-side-panel">
          <div className="contact-status">
            <span className="status-dot"></span>
            <span>Disponible para nuevas oportunidades</span>
          </div>

          <div className="contact-mini-card">
            <small>Ubicación</small>
            <strong>Lima, Perú</strong>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default Contact;