import React from "react";
import '../stylesheets/Boton.css';

function Boton(props) {

  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  };

  return (
    <div 
    //le vamos a asignar dos clases al boton, en caso de que sea un boton operador (no numero, punto o igual)
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}> 
      {props.children}
    </div>
  );
}

export default Boton;