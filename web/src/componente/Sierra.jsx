import React, { useState } from 'react';
import './Turismo.css';

// Asegúrate de que las rutas son correctas según la estructura del proyecto
import arequipa from '../imagenes/sierra_arequipa.jpg';
import ayacucho from '../imagenes/sierra_ayacucho.jpg';
import cumbemayo from '../imagenes/sierra_cumbemayo.jpg';
import cusco from '../imagenes/sierra_cusco.jpg';
import huancayo from '../imagenes/sierra_huancayo.jpg';
import huaraz from '../imagenes/sierra_huaraz.jpg';
import jauja from '../imagenes/sierra_jauja.jpg';
import huayllay from '../imagenes/sierra_huayllay.jpg';
import puno from '../imagenes/sierra_puno.jpg';

const Sierra = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (id) => {
    setSelectedImage(selectedImage === id ? null : id);
  };

  return (
    <div className="page-container">
      <div className="turismo-container">
        <h1>Descubre la Sierra Peruana</h1>
        <p>Explora los hermosos paisajes, ciudades históricas y maravillas naturales de la sierra de Perú.</p>
        
        <div className="destinations-grid">
          {/* Arequipa */}
          <section>
            <img
              src={arequipa}
              alt="Arequipa"
              className={`destination-image ${selectedImage === 1 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(1)}
            />
            <h2>Arequipa</h2>
            <p><strong>Ubicación:</strong> Sur de Perú</p>
            <p><strong>Descripción:</strong> La Ciudad Blanca, con su hermosa arquitectura colonial y el impresionante Cañón del Colca.</p>
            <p><strong>Actividades:</strong> Turismo en el Cañón del Colca, visitas a museos y conventos coloniales, degustación de la gastronomía local.</p>
          </section>

          {/* Ayacucho */}
          <section>
            <img
              src={ayacucho}
              alt="Ayacucho"
              className={`destination-image ${selectedImage === 2 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(2)}
            />
            <h2>Ayacucho</h2>
            <p><strong>Ubicación:</strong> Centro-sur de Perú</p>
            <p><strong>Descripción:</strong> Famosa por sus 33 iglesias coloniales y las celebraciones de Semana Santa más grandes del Perú.</p>
            <p><strong>Actividades:</strong> Recorridos históricos, visitas a iglesias coloniales, participación en festividades religiosas.</p>
          </section>

          {/* Cumbemayo - Cajamarca */}
          <section>
            <img
              src={cumbemayo}
              alt="Cumbemayo"
              className={`destination-image ${selectedImage === 3 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(3)}
            />
            <h2>Cumbemayo - Cajamarca</h2>
            <p><strong>Ubicación:</strong> Región de Cajamarca</p>
            <p><strong>Descripción:</strong> Un enigmático complejo arqueológico con canalizaciones de piedra, parte del misterioso pasado de Cajamarca.</p>
            <p><strong>Actividades:</strong> Senderismo, exploración arqueológica, fotografía de paisajes naturales.</p>
          </section>

          {/* Cusco */}
          <section>
            <img
              src={cusco}
              alt="Cusco"
              className={`destination-image ${selectedImage === 4 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(4)}
            />
            <h2>Cusco</h2>
            <p><strong>Ubicación:</strong> Sur de Perú</p>
            <p><strong>Descripción:</strong> Capital del Imperio Inca, hogar de Machu Picchu y el Valle Sagrado. Historia, cultura y belleza natural en su máximo esplendor.</p>
            <p><strong>Actividades:</strong> Visitas a Machu Picchu, exploración del Valle Sagrado, tours históricos por la ciudad.</p>
          </section>

          {/* Huancayo */}
          <section>
            <img
              src={huancayo}
              alt="Huancayo"
              className={`destination-image ${selectedImage === 5 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(5)}
            />
            <h2>Huancayo</h2>
            <p><strong>Ubicación:</strong> Región Junín, Valle del Mantaro</p>
            <p><strong>Descripción:</strong> El corazón del Valle del Mantaro, con hermosos paisajes y tradición agrícola.</p>
            <p><strong>Actividades:</strong> Recorridos por el Valle del Mantaro, visita a ferias agrícolas, tours a artesanías locales.</p>
          </section>

          {/* Huaraz */}
          <section>
            <img
              src={huaraz}
              alt="Huaraz"
              className={`destination-image ${selectedImage === 6 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(6)}
            />
            <h2>Huaraz</h2>
            <p><strong>Ubicación:</strong> Región Áncash</p>
            <p><strong>Descripción:</strong> Puerta de entrada a la Cordillera Blanca y el Parque Nacional Huascarán, ideal para montañismo y senderismo.</p>
            <p><strong>Actividades:</strong> Montañismo, senderismo, visitas a lagunas y glaciares.</p>
          </section>

          {/* Jauja */}
          <section>
            <img
              src={jauja}
              alt="Jauja"
              className={`destination-image ${selectedImage === 7 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(7)}
            />
            <h2>Jauja</h2>
            <p><strong>Ubicación:</strong> Región Junín</p>
            <p><strong>Descripción:</strong> Conocida por su clima templado, lagunas y como una de las ciudades más antiguas de la sierra central del Perú.</p>
            <p><strong>Actividades:</strong> Pesca en lagunas, visitas a monumentos históricos, recorridos por paisajes naturales.</p>
          </section>

          {/* Huayllay - Cerro de Pasco */}
          <section>
            <img
              src={huayllay}
              alt="Huayllay"
              className={`destination-image ${selectedImage === 8 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(8)}
            />
            <h2>Huayllay</h2>
            <p><strong>Ubicación:</strong> Región Pasco</p>
            <p><strong>Descripción:</strong> Parque Nacional de Huayllay, conocido por sus impresionantes formaciones rocosas y su historia geológica única.</p>
            <p><strong>Actividades:</strong> Exploración geológica, fotografía de formaciones rocosas, caminatas al aire libre.</p>
          </section>

          {/* Puno */}
          <section>
            <img
              src={puno}
              alt="Puno"
              className={`destination-image ${selectedImage === 9 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(9)}
            />
            <h2>Puno</h2>
            <p><strong>Ubicación:</strong> Región Puno</p>
            <p><strong>Descripción:</strong> Con el majestuoso Lago Titicaca, el lago navegable más alto del mundo, y las islas flotantes de los Uros.</p>
            <p><strong>Actividades:</strong> Paseos en bote por el Lago Titicaca, visitas a las islas flotantes, experiencias culturales con los Uros.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sierra;
