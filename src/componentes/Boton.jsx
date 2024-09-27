import React from "react";
import '../stylesheets/Boton.css';

function Boton(props) {

  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.')
  };

  return (
    <div
      //le vamos a asignar dos clases al boton, en caso de que sea un boton operador (no numero, punto o igual)
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
      //onClick espera que le pasemos una funcion, por eso se envuelve como funcion flecha, sino la funcion props.manejarClic(props.children) se traduce como el valor de retorno (string) y arroja error
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;