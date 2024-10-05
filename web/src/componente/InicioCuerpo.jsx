import React from 'react';

const InicioCuerpo = () => {
    return (
        <div className="inicio-cuerpo">
            <header className="header">
                <h1>Bienvenidos a Viajeros.COM</h1>
                <p>Explora el mundo con nosotros y descubre destinos únicos.</p>
            </header>

            <section className="seccion-destinos">
                <h2>Destinos Populares</h2>
                <div className="destinos-grid">
                    <div className="destino">
                        <img src="../public/imagenes/cusco.jpg" alt="Destino 1" />
                        <h3>Cusco</h3>
                        <p>Descubre la antigua capital del Imperio Inca, llena de historia, cultura y paisajes impresionantes. 
                            Desde las icónicas ruinas de Machu Picchu hasta las coloridas tradiciones locales, Cusco te invita a 
                            sumergirte en un viaje al pasado.</p>
                    </div>
                    <div className="destino">
                        <img src ="../public/imagenes/lima.jpg" alt="Destino 2" />
                        <h3>Lima</h3>
                        <p>Explora la vibrante capital peruana, una ciudad que combina modernidad con rica historia colonial. 
                            Conoce su deliciosa gastronomía reconocida mundialmente, visita sus museos y pasea por el malecón 
                            con vistas al océano Pacífico.</p>
                    </div>
                    <div className="destino">
                        <img src="../public/imagenes/trujillo.jpg" alt="Destino 3" />
                        <h3>Trujullo</h3>
                        <p>Sumérgete en la cuna de la civilización mochica, donde las antiguas pirámides de adobe se combinan 
                            con elegantes casonas coloniales. Trujillo te ofrece una experiencia única con sus festivales, 
                            playas cercanas y arqueología fascinante.</p>
                    </div>
                </div>
            </section>

            <section className="seccion-servicios">
                <h2>Nuestros Servicios</h2>
                <ul>
                    <li>Paquetes personalizados para cualquier destino</li>
                    <li>Asistencia 24/7 durante tu viaje</li>
                    <li>Ofertas exclusivas para viajes en grupo</li>
                </ul>
            </section>

            <footer className="footer">
                <p>Viajeros La - Tu aventura comienza aquí.</p>
                <p>Contacto: info@viajerosla.com | Tel: 123-456-789</p>
            </footer>
        </div>
    );
};

export default InicioCuerpo 