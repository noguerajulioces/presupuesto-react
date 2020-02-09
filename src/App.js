import React from 'react';
import Pregunta from './components/Pregunta';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1 className="text-center">Gasto Semanal</h1>
          <Pregunta />
        </header>
      </div> 
    </>
  );
}

export default App;
