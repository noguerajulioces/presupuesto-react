import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import './App.css';

function App() {

  // definir state
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ restante, guardarRestante] = useState(0);
  const [ mostrarpregunta, actualizarPregunta] = useState(true);
  const [ gastos, guardarGastos] = useState([]);

  //cuando agreguemos un nuevo gasto
  const agregarNuevoGasto = gasto => {
    guardarGastos([
      ...gastos,
      gasto
    ])
  }


  return (
    <>
      <div className="container">
        <h1 className="text-center">Gasto Semanal</h1>
        <div className="card">
          <div className="card-body">
            { mostrarpregunta ? 
              (
                <>
                  <Pregunta 
                    guardarPresupuesto={guardarPresupuesto}
                    guardarRestante={guardarRestante}
                    actualizarPregunta={actualizarPregunta}
                  />
                </>
              ) :
              (
                <>
                  <div className="row">
                    <div className="col-6">
                      <Formulario
                        agregarNuevoGasto={agregarNuevoGasto}
                      />
                    </div>
                    <div className="col-6">
                      <Listado 
                        gastos={gastos}
                      />
                    </div>
                  </div>
                </>
              )
            }
          </div>
        </div> 
      </div>
    </>
  );
}

export default App;
