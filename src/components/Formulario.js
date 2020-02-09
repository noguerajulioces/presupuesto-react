import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto}) => {

  const [nombre, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0);

  const [error, guardarError] = useState(false);

  // cuando el usuario agrega un gasto
  const agregarGasto = e => {
    e.preventDefault();

    // validar
    if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
      guardarError(true);
      return;
    }
    guardarError(false);

    // construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }

    // pasar al principal
    guardarGasto(gasto);

    // reset form
    guardarNombre('');
    guardarCantidad(0);
  }
  return(
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos</h2>

      { error ? <Error mensaje="Ambos campos son obligatorios" /> : null }

      <div className="form-group">
        <label>Nombre Gasto</label>
        <input
            type="text"
            className="form-control" 
            placeholder="Ej. Supermercado"
            value={nombre}
            onChange={e => guardarNombre(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Valor del gasto</label>
        <input 
            type="number"
            className="form-control"
            placeholder="Ej. 300"
            value={cantidad}
            onChange={ e => guardarCantidad( parseInt(e.target.value, 10))}
        />
      </div>

      <input 
        type="submit"
        className="btn btn-primary btn-block"
        value="Agregar gasto"
        />

    </form>
  );
}
export default Formulario;