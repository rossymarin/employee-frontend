/* eslint-disable jsx-a11y/alt-text */
//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header.tsx';
import Card from './components/Card/Card.tsx';
import ReactDOM from 'react-dom/client';
import AppEmployee from './components/index/AppEmployee.js';

function App() {
  const image1 = "https://cdn-icons-png.flaticon.com/512/305/305992.png"
  const section1 = "Gestión de Empleados"
  const image2 = "https://cdn-icons-png.flaticon.com/512/305/305992.png"
  const section2 = "Estadisticas"
  const image3 = "https://scontent.fmlm2-1.fna.fbcdn.net/v/t39.30808-6/278334856_4937420873044272_8034361589372819139_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeEuL458Uzae1UargyVD4voeFm633RV4xEIWbrfdFXjEQsJT7F8pEcu-7P_pLKh-95fc7qvGTW9qhDuItf2319QP&_nc_ohc=qVnrXdISI88AX9_Muiz&_nc_ht=scontent.fmlm2-1.fna&oh=00_AT9waN0bb6K0-ZPS7BoA1jW5Ybwi6gqIskWiYy7bXV0OWQ&oe=629A78CE"
  const view1 = datosPersonales
  function datosPersonales(e){
    e.preventDefault();
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <AppEmployee />
      </React.StrictMode>
    );
  }
  return (
    <div className="App" >
      <div className="row">
        <div className="col-4">
          <img className="img" width="100%" style={{height:'750px'}} src={image3}/>
        </div>
        <div className="col-8">
          <Header
            image={'https://fueradecirculacion.files.wordpress.com/2017/09/flexilogo.png'}
          />
          <h2>Gestión de Empleados</h2>
          <div className="row">
            <div className="col-5" >
              <Card
                image={image1}
                section={section1}
                view={view1}
              />
            </div>
            <div className="col-5" >
              <Card
                image={image2}
                section={section2}
              />
            </div>
          </div>
        </div>
      </div>  
     
    </div>
  );
}

export default App;
