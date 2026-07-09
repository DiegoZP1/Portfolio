import profilePhoto from "../assets/profile.jpg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#inicio" className="logo">
          <img
            src={profilePhoto}
            alt="Foto de Diego Zamalloa"
            className="logo-photo"
          />
          <span>Diego Zamalloa</span>
        </a>

        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#skills">Skills</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="nav-cta">
          Disponible
        </a>
      </div>
    </header>
  );
}

export default Navbar;