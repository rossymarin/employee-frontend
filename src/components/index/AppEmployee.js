import '../../App.css';
import CompShowEmployees from '../Employees/ShowEmployees.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToolBar from '../ToolBar/ToolBar'
import Header from '../Header/Header.tsx'


function AppEmployee() {
  return (
    <div className="App">
        <Header
            image={'https://fueradecirculacion.files.wordpress.com/2017/09/flexilogo.png'}    
            height={"70px"}
        />
        <div className="row">
            <div className="col">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<CompShowEmployees/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    </div>
  );
}

export default AppEmployee;