import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

function App() {
  return (
    <div className="App">
      <div className='fcc-logo-contenedor'>
        <img
        src= {freeCodeCampLogo}
        className='fcc-logo'
        alt='Logo freeCodeCamp'/>
      </div>
    </div>
  );
}

export default App;
