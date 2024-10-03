import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Costa from './Costa';
import Sierra from './Sierra';
import Selva from './Selva';
import './Destinos.css';

const Destinos = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="destinos-container">
      {/* Header de la sección */}
      <div className="destinos-header">
        <div className="header-content">
          <h1>Explora el Perú</h1>
          <p>Descubre la magia y diversidad de nuestros destinos turísticos</p>
        </div>
      </div>

      {/* Navegación */}
      <div className="nav-container">
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`destinos-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            <li>
              <NavLink 
                to="/destinos/costa" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-icon">🏖️</span>
                Costa
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/destinos/sierra" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-icon">⛰️</span>
                Sierra
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/destinos/selva" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-icon">🌴</span>
                Selva
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Contenido principal */}
      <div className="destinos-content">
        <Routes>
          <Route path="/costa" element={<Costa />} />
          <Route path="/sierra" element={<Sierra />} />
          <Route path="/selva" element={<Selva />} />
        </Routes>
      </div>
    </div>
  );
};

export default Destinos;