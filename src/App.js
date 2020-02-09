import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import ControlPresupuesto from './components/ControlPresupuesto';
import './App.css';

function App() {

  // definir state
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ restante, guardarRestante] = useState(0);
  const [ mostrarpregunta, actualizarPregunta] = useState(true);
  const [ gastos, guardarGastos] = useState([]);
  const [ gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  // use effect que actualiza restante
  useEffect(() => {
    if(crearGasto){

      // agrega el nuevo presupuest
      guardarGastos([
        ...gastos,
        gasto
      ])

      // resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
      // resetear a false
      guardarCrearGasto(false);
    }

    
  }, [gasto, crearGasto, restante, gastos]);

  //cuando agreguemos un nuevo gasto
  // const agregarNuevoGasto = gasto => {
  //   guardarGastos([
  //     ...gastos,
  //     gasto
  //   ])
  // }


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
                    <div className="col-6 col-sm-6">
                      <Formulario
                        guardarGasto={guardarGasto}
                        guardarCrearGasto={guardarCrearGasto}
                      />
                    </div>
                    <div className="col-6 col-sm-6">
                      <Listado 
                        gastos={gastos}
                      />

                      <ControlPresupuesto 
                        presupuesto={presupuesto}
                        restante={restante}
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
