import React from 'react';
import './App.css'
import Login from './assets/components/Login'
import Dashboard from './assets/components/Dashbord'
import Registro from './assets/components/Registro';
import Comercial from './assets/components/Comercial'
import RRHH from './assets/components/RRHH';
import Gerencia from './assets/components/Gerencia'
import Historial from "./assets/components/Historial"
import SplashScreen from './assets/components/Splash';
import {BrowserRouter,  Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Registro" element={<Registro/>} />
      <Route path="/Gerencia" element={<Gerencia/>} />
      <Route path="/Comercial" element={<Comercial/>} />
      <Route path="/RRHH" element={<RRHH/>} />
      <Route path="/Historial" element={<Historial/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
