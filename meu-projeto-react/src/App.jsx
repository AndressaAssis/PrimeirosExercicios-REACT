import { useState } from 'react';
import './App.css';

import { Input } from "./components/Input/Input";
import { Contador } from './components/Contador/Contador';
import { Texto } from './components/Texto/Texto';
import { Card } from './components/Card/Card';
import { Tarefas } from './components/Tarefas/Tarefas';

function App() {
  
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState('');

  const aumentar = () => setCount(count + 1)
  const diminuir = () => setCount(count - 1)
  
  return (

  <div className="container">

    <div className="Card">
      <Card
        foto="https://i.ytimg.com/vi/mJdSa3-8pPc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAjqqRgZIoD1kT8Efb6BXE_Sl15cg"
        titulo="SerraTec 2024.2"
        subtitulo="Exercícios em React"
      />
    </div>

    <div className="containerInputs">
     <Input
      type={"text"}
      placeholder={"Digite seu nome"}
      value={nome}
      onChange={(e)=>{
        setNome(e.target.value) 
        console.log(e.target.value)
      }}
      />

      <h2>Bem vindo, {nome === "" ? "Visitante" : nome}!</h2>
    
    </div>

    <div className="containerContador">
       <Contador count={count} aumentar={aumentar} diminuir={diminuir}/>
    </div>

      <Texto />

      <Tarefas />

  </div>
  
  );
}

export default App
