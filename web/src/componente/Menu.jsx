import { Fragment } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './EstilosMenu.css'

function Menu (){

    return (

        <>
            <body>
                <div className="menu-bar">
                <h1 className="logo">VIAJEROS <span>.COM</span></h1>
                <ul>
                <li><a href="#">INICIO</a></li>
                <li><a href="#">NOSOTROS</a></li>
                <li><a href="#">DESTINOS <i className="bi bi-caret-down"></i> </a>      
                <div className="care-dowm">
                    <ul>
                        <li><a href="#">COSTA</a></li>
                        <li><a href="#">SIERRA</a></li>
                        <li><a href="#">SELVA</a></li>
                    </ul>
                </div>
                </li>
                <li><a href="#">TESTIMONIOS</a></li>
                <li><a href="#">CONTACTO</a></li>
                </ul>
                </div>
            </body>     
       </>

    );

}

export default Menu;
