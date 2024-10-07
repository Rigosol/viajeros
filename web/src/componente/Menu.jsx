import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './Menu.css';

function Menu() {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="menu-bar">
      <div className="logo">
        <h1 className="logito">VIAJEROS <span>.COM</span></h1>
      </div>
      <div className="menu-center">
        <ul>
          <li>
            <Link 
              to="/" 
              className={activeLink === "inicio" ? "active" : ""} 
              onClick={() => handleClick("inicio")}
            >
              INICIO
            </Link>
          </li>
          <li>
            <Link 
              to="/nosotros" 
              className={activeLink === "nosotros" ? "active" : ""} 
              onClick={() => handleClick("nosotros")}
            >
              NOSOTROS
            </Link>
          </li>
          <li>
            <Link 
              to="/costas" 
              className={activeLink === "costas" ? "active" : ""} 
              onClick={() => handleClick("costas")}
            >
              DESTINOS <i className="bi bi-caret-down"></i>
            </Link>
            <div className="care-down">
              <ul>
                <li>
                  <Link 
                    to="/costas" 
                    className={activeLink === "costa" ? "active" : ""} 
                    onClick={() => handleClick("costa")}
                  >
                    COSTA
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/sierra" 
                    className={activeLink === "sierra" ? "active" : ""} 
                    onClick={() => handleClick("sierra")}
                  >
                    SIERRA
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/selva" 
                    className={activeLink === "selva" ? "active" : ""} 
                    onClick={() => handleClick("selva")}
                  >
                    SELVA
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link 
              to="/testimonios" 
              className={activeLink === "testimonios" ? "active" : ""} 
              onClick={() => handleClick("testimonios")}
            >
              TESTIMONIOS
            </Link>
          </li>
          <li>
            <Link 
              to="/contacto" 
              className={activeLink === "contacto" ? "active" : ""} 
              onClick={() => handleClick("contacto")}
            >
              CONTACTO
            </Link>
          </li>
        </ul>
      </div>
     
    </div>
  );
}

export default Menu;
