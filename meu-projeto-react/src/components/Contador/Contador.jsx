import React from "react";

export function Contador({ count, aumentar, diminuir }) {

 return (
    <div className="contador-container">
        <h1 style={{ marginBottom: '20px' }}>Contador: {count}</h1>

        <div className="botaoContador">
          <button onClick={aumentar}>Aumentar</button>
          <button onClick={diminuir}>Diminuir</button>
        </div>
    </div>
    );
}