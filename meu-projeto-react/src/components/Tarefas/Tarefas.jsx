import React, { useState } from 'react';

export function Tarefas() {

  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa(''); // Limpar o campo de entrada
    }
  };

  return (
    <div className="tarefasContainer">
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
    <div className="tarefasAdd">
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div> 
    </div>
  );
}