import React, { useState} from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

  // definir el state
  const [ cantidad, guardarCantidad ] = useState(0);
  const [ error , guardarError] = useState(false);

  // Función que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad( parseInt(e.target.value, 10))
  }

  //submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    //validar presupuesto
    if(cantidad < 1 || isNaN(cantidad)){
      guardarError(true)
      return;
    }
    // si se pasa la validación
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  }


  return(
    <>
      <h3 className="text-center">Ingresa tu presupuesto</h3>

      { error ? <Error mensaje="El presupuesto es incorrecto"/> : null }
      <form 
        onSubmit={agregarPresupuesto}
      >
        <div className="form-group">
          <input 
            type="number"
            className="form-control"
            placeholder="Coloca tu presupuesto"
            onChange={definirPresupuesto}
          />
        </div>
          <input 
            type="submit"
            className="btn btn-primary btn-block"
            value="Definir presupuesto"
          />
      </form>
    </>  
  );
}

export default Pregunta;