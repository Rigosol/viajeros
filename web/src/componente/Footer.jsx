import React from "react";
import { Link } from 'react-router-dom';
import logito from '../imagenes/plane.jpg';


import './EstilosFooter.css'

function Footer() {
    // Crearemos una funcion para que al hacer click se active y me lleve a la parte superior de cada ventana
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer>
            <div id="arriba">
                <div className="f-izquierdo">
                    <Link to="/" onClick={scrollToTop}>
                        <img className="flogo" src={logito} alt="Logo"/>
                        GW TRAVEL
                    </Link>
                    <p>GW Travel es una agencia de turismo que brinda la más alta 
                        experiencia en viajes, y tours a nivel nacional.
                    </p>
                    <img className="redes-iconos" src="" alt=""/>
                </div>
                <div className="f-centro">
                    <ul>
                        <li><Link to="/" onClick={scrollToTop}>Inicio</Link></li>
                        <li><Link to="/" onClick={scrollToTop}>Nosotros</Link></li>
                        <li><Link to="/" onClick={scrollToTop}>Destinos</Link>
                            <ul>
                                <li><Link to="/PaginaCosta" onClick={scrollToTop}>Costa</Link></li>
                                <li><Link to="/PaginaSierra" onClick={scrollToTop}>Sierra</Link></li>
                                <li><Link to="/PaginaSelva" onClick={scrollToTop}>Selva</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="f-centro">
                    <ul>
                        <li><Link to="/PaginaTestimonios" onClick={scrollToTop}>Testimonios</Link></li>
                       
                    </ul>
                </div>
                <div className="f-centro">
                    <ul>
                        <li><Link to="/PaginaContacto" onClick={scrollToTop}>CONTACTO</Link>
                            <ul>
                                <li>+91 987655841</li>
                                <li>info@gwtravel.com</li>
                                <li>Av.travel #123</li>
                            </ul>
                        </li>
                    </ul>
                </div>                
            </div>
            <div className="linea">
                <hr/>
            </div>
            <div id="final">
                <div className="pie"><p>Copyright 2024 GW Travel s.a.c. Todos los derechos reservados</p></div>
                <div className="pie"><p>Términos & condiciones | Política de privacidad</p></div>
            </div>

          

        </footer>
    );
}

export default Footer;