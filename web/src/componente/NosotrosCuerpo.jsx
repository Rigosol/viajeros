import { useState, useEffect } from 'react';
import React from 'react';
import './EstilosNosotros.css';

const images = [
    "/imagenes/nosotros.webp", // Asegúrate de que la ruta sea correcta
    "/imagenes/nosotros.jpg",
    "/imagenes/mundo.jpg",
];

function NosotrosCuerpo() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div className="carousel-container">
                <img src={images[currentIndex]} alt="Carousel" className="banner" />
            </div>
            <div className='cuer-nos'>
                <div className='nosotros'>
                    <h1>SOBRE NOSOTROS</h1>
                    <p>
                        Fundada en 2022 por un grupo de entusiastas del turismo, GW-TRAVEL nació con la visión de ofrecer 
                        experiencias de viaje excepcionales y auténticas. Desde nuestros humildes comienzos, hemos crecido para convertirnos
                        en líderes en la industria del turismo, conectando a viajeros con los destinos más fascinantes del mundo. 
                        Con una pasión por descubrir nuevas culturas y ofrecer un servicio impecable, hemos construido una reputación 
                        sólida basada en la confianza y la satisfacción del cliente.
                    </p>
                </div>
                <div className="mision">
                    <h1>MISION</h1>
                    <p>
                        Nuestra misión es ofrecer experiencias de viaje inolvidables a través de un
                        servicio personalizado y de calidad, conectando a nuestros clientes con la
                        riqueza cultural, natural y gastronómica de las tres regiones del Perú: Costa, 
                        Sierra y Selva. Nos comprometemos a promover el turismo responsable y 
                        sostenible, apoyando a las comunidades locales y preservando la biodiversidad.
                    </p>
                </div>
                <div className="vision">
                    <h1>VISION</h1>
                    <p>
                        Aspiramos a ser la agencia de turismo líder en el mercado peruano, reconocida
                        por nuestra excelencia en el servicio y por ofrecer destinos auténticos que 
                        capturan la esencia de cada región del país. 
                    </p>
                </div>
            </div>
        </>
    );
}

export default NosotrosCuerpo;
