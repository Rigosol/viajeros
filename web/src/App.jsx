import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./componente/Menu";
import InicioCuerpo from "./componente/InicioCuerpo";
import NosotrosCuerpo from "./componente/NosotrosCuerpo";
import Costa from "./componente/Costa";
import Sierra from "./componente/Sierra";
import Selva from "./componente/Selva";
import Testimonios from "./componente/Testimonios";
import Contacto from "./componente/Contacto";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<InicioCuerpo />} />
          <Route path="/nosotros" element={<NosotrosCuerpo />} />
          <Route path="/costas" element={<Costa />} />
          <Route path="/sierra" element={<Sierra />} />
          <Route path="/selva" element={<Selva />} />
          <Route path="/Testimonios" element={<Testimonios />} />
        
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
