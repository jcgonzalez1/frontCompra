import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaEncabezados from './ListaEncabezados';
import AgregarEncabezado from './AgregarEncabezado';
import EditarEncabezado from './EditarEncabezado';
import Nav  from './Nav';
import ListaCompras from './ListaCompras';
import AgregarCompra from './AgregarCompra';
import EditarCompra from './EditarCompra';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
         <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path="/listaEncabezado" element={<ListaEncabezados />}/>
              <Route path="/listaCompra" element={<ListaCompras/>} />
              <Route path="/agregarEncabezado" element={<AgregarEncabezado />} />
              <Route path="/agregarCompra" element={<AgregarCompra />} />
              <Route path="/editarEncabezado/:id" element={<EditarEncabezado />} />
              <Route path="/editarCompra/:id" element={<EditarCompra />} />
            </Routes>
         </BrowserRouter>
      </header>
    </div>
  );
}

export default App;