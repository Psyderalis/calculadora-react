import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

function App() {
  return (
    <div className="App">
      <div className='fcc-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='fcc-logo'
          alt='Logo freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
