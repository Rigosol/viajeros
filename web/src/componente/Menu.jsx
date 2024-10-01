import { Fragment } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './EstilosMenu.css'
import { Link } from "react-router-dom";

const Menu = () =>{

    return (

        <>
            <nav className="men">
                <div className="menu-bar">
                <Link href="/" className="logo">VIAJEROS<span>.COM</span></Link>
                <ul>
                <li><Link href="/">INICIO</Link></li>
                <li><Link href="/nosotros">NOSOTROS</Link></li>
                <li><Link href="/">DESTINOS <i className="bi bi-caret-down"></i> </Link>      
                <div className="care-dowm">
                    <ul>
                        <li><Link href="/">COSTA</Link></li>
                        <li><Link href="/">SIERRA</Link></li>
                        <li><Link href="/">SELVA</Link></li>
                    </ul>
                </div>
                </li>
                <li><Link href="/">TESTIMONIOS</Link></li>
                <li><Link href="/">CONTACTO</Link></li>
                </ul>
                </div>
            </nav>     
       </>

    );

}

export default Menu;
