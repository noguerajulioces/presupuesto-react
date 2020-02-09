import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import './App.css';

function App() {

  // definir state
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ restante, guardarRestante] = useState(0);


  return (
    <>
      <div className="container">
        <header>
          <h1 className="text-center">Gasto Semanal</h1>
          <Pregunta 
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
          />
        </header>
      </div> 
    </>
  );
}

export default App;
