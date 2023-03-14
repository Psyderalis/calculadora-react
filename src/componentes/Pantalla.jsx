import React from "react";

//Se suele usar este formato (arrow function) para componentes que son más sencillos y no involucran más funciones
const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;