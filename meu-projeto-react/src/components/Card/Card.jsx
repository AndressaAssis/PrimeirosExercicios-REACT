import React from "react";

export function Card ({foto, titulo, subtitulo}) {

    return (
      <>
        <header>
          <div className="card">
              <img src={foto} alt={titulo} className="card-foto" />
            <div className="card-content">
              <h3 className="card-titulo">{titulo}</h3>
              <p className="card-subtitulo">{subtitulo}</p>
            </div>
          </div>
        </header>
      </>
    )
}