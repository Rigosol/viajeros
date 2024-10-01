import { Fragment } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './EstilosMenu.css'
import { Link } from "react-router-dom";


const Menu = () =>{

    return (

        <>
            <nav className="men">
                <div className="menu-bar">
                <Link to="/" className="logo">VIAJEROS<span>.COM</span></Link>
                <ul>
                <li><Link to="/">INICIO</Link></li>
                <li><Link to="/nosotros">NOSOTROS</Link></li>
                <li><Link to="/">DESTINOS <i className="bi bi-caret-down"></i> </Link>      
                <div className="care-dowm">
                    <ul>
                        <li><Link to="/">COSTA</Link></li>
                        <li><Link to="/">SIERRA</Link></li>
                        <li><Link to="/">SELVA</Link></li>
                    </ul>
                </div>
                </li>
                <li><Link to="/">TESTIMONIOS</Link></li>
                <li><Link to="/">CONTACTO</Link></li>
                </ul>
                </div>
            </nav>     
       </>

    );

}

export default Menu;
