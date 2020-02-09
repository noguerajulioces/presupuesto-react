import React from 'react';

const Gasto = ({gasto})  => (
    <>
        <p>
            <span className="text-center">$ {gasto.cantidad}</span>
            <span className="badge badge-primary float-right"> {gasto.nombre}</span>
            <hr/>
        </p>
    </>
);

export default Gasto;