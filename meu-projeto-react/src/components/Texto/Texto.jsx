import React, { useState } from 'react';

export function Texto() {

    const [visivel, setVisivel] = useState(false);
    const toggleTexto = () => setVisivel(!visivel);

  return (
    <div className="containerTexto">
      <button onClick={toggleTexto}>
        {visivel ? "Ocultar Texto" : "Mostrar Texto"}
      </button>
      {visivel && <p>Este é o texto oculto</p>}
    </div>
  );
}
