import { useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./ProjectGallery.css";

function ProjectGallery({ screenshots, title }) {
  const [selected, setSelected] = useState(0);
  const dialog = useRef(null);
  const headingId = useId();
  const current = screenshots[selected];

  function openGallery() {
    setSelected(0);
    dialog.current.showModal();
  }

  function move(direction) {
    setSelected((previous) => (previous + direction + screenshots.length) % screenshots.length);
  }

  return (
    <div className="project-gallery">
      <button className="gallery-preview" type="button" onClick={openGallery} aria-label={`Ver capturas de ${title}`}>
        <img src={screenshots[0].src} alt={screenshots[0].alt} loading="lazy" />
        <span>Ver capturas <span aria-hidden="true">↗</span></span>
      </button>
      <p className="gallery-caption">Power BI · {screenshots.length} vistas del dashboard</p>
      {createPortal(
        <dialog
          className="gallery-dialog"
          ref={dialog}
          aria-labelledby={headingId}
          onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close(); }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
            if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
          }}
        >
          <div className="gallery-panel">
            <header className="gallery-header">
              <div>
                <span>Capturas del dashboard · Power BI</span>
                <h2 id={headingId}>{current.title}</h2>
              </div>
              <button type="button" onClick={() => dialog.current.close()} aria-label="Cerrar galería">Cerrar ×</button>
            </header>
            <img className="gallery-image" src={current.src} alt={current.alt} />
            <div className="gallery-controls">
              <button type="button" onClick={() => move(-1)} aria-label="Captura anterior">← Anterior</button>
              <span aria-live="polite">{selected + 1} / {screenshots.length}</span>
              <button type="button" onClick={() => move(1)} aria-label="Captura siguiente">Siguiente →</button>
            </div>
            <div className="gallery-tabs" aria-label="Vistas del dashboard">
              {screenshots.map((screenshot, imageIndex) => (
                <button key={screenshot.src} type="button" aria-pressed={selected === imageIndex} onClick={() => setSelected(imageIndex)}>
                  {screenshot.title}
                </button>
              ))}
            </div>
            <a className="gallery-original" href={current.src} target="_blank" rel="noreferrer">Abrir imagen en tamaño original ↗</a>
          </div>
        </dialog>,
        document.body
      )}
    </div>
  );
}

export default ProjectGallery;
