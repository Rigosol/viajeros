import React, { useState } from 'react';
import './Turismo.css';

// Asegúrate de que las rutas son correctas según la estructura del proyecto
import mancora from '../imagenes/costa_mancora.jpg';
import paracas from '../imagenes/costa_paracas.jpg';
import lima from '../imagenes/costa_lima.jpg';
import trujillo from '../imagenes/costa_trujillo.jpg';
import puntaSal from '../imagenes/costa_punta-sal.jpg';
import huacachina from '../imagenes/costa_huacachina.jpg';
import nazca from '../imagenes/costa_nazca.jpg';
import caral from '../imagenes/costa_caral.jpg';
import chiclayo from '../imagenes/costa_chiclayo.jpg';

const Costa = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (id) => {
    setSelectedImage(selectedImage === id ? null : id);
  };

  return (
    <div className="page-container">
      <div className="turismo-container">
        <h1>Descubre la Costa Peruana</h1>
        <p>Explora las hermosas playas, ciudades históricas y maravillas naturales de la costa de Perú.</p>
        
        <div className="destinations-grid">
          {/* Máncora */}
          <section>
            <img
              src={mancora}
              alt="Máncora"
              className={`destination-image ${selectedImage === 1 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(1)}
            />
            <h2>Máncora</h2>
            <p><strong>Ubicación:</strong> Piura, Norte de Perú</p>
            <p><strong>Descripción:</strong> Playas paradisíacas, sol todo el año y deportes acuáticos. Perfecto para el surf y la vida nocturna.</p>
            <p><strong>Actividades:</strong> Surf, pesca, vida nocturna, deportes acuáticos.</p>
          </section>

          {/* Paracas */}
          <section>
            <img
              src={paracas}
              alt="Paracas"
              className={`destination-image ${selectedImage === 2 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(2)}
            />
            <h2>Paracas</h2>
            <p><strong>Ubicación:</strong> Ica, Sur de Perú</p>
            <p><strong>Descripción:</strong> Reserva Nacional con impresionantes formaciones rocosas y las Islas Ballestas, hogar de diversa fauna marina.</p>
            <p><strong>Actividades:</strong> Paseos en lancha, observación de fauna, caminatas por la reserva.</p>
          </section>

          {/* Lima */}
          <section>
            <img
              src={lima}
              alt="Lima"
              className={`destination-image ${selectedImage === 3 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(3)}
            />
            <h2>Lima</h2>
            <p><strong>Ubicación:</strong> Costa Central de Perú</p>
            <p><strong>Descripción:</strong> Capital histórica con rica gastronomía, museos de clase mundial y hermosos parques costeros.</p>
            <p><strong>Actividades:</strong> Turismo gastronómico, visitas a museos, paseos por el Malecón.</p>
          </section>

          {/* Trujillo */}
          <section>
            <img
              src={trujillo}
              alt="Trujillo"
              className={`destination-image ${selectedImage === 4 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(4)}
            />
            <h2>Trujillo</h2>
            <p><strong>Ubicación:</strong> La Libertad, Norte de Perú</p>
            <p><strong>Descripción:</strong> Ciudad de la Eterna Primavera, con sitios arqueológicos como Chan Chan y las playas de Huanchaco.</p>
            <p><strong>Actividades:</strong> Visitas a Chan Chan, surf en Huanchaco, turismo cultural.</p>
          </section>

          {/* Punta Sal */}
          <section>
            <img
              src={puntaSal}
              alt="Punta Sal"
              className={`destination-image ${selectedImage === 5 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(5)}
            />
            <h2>Punta Sal</h2>
            <p><strong>Ubicación:</strong> Tumbes, Norte de Perú</p>
            <p><strong>Descripción:</strong> Hermosas playas de aguas cálidas y tranquilas, ideales para el descanso y deportes acuáticos.</p>
            <p><strong>Actividades:</strong> Buceo, pesca, deportes acuáticos, relajación en la playa.</p>
          </section>

          {/* Ica y Huacachina */}
          <section>
            <img
              src={huacachina}
              alt="Ica y Huacachina"
              className={`destination-image ${selectedImage === 6 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(6)}
            />
            <h2>Ica y Huacachina</h2>
            <p><strong>Ubicación:</strong> Ica, Sur de Perú</p>
            <p><strong>Descripción:</strong> Oasis en el desierto rodeado de dunas, perfecto para sandboarding y paseos en buggy.</p>
            <p><strong>Actividades:</strong> Sandboarding, paseos en buggy, caminatas por las dunas.</p>
          </section>

          {/* Nazca */}
          <section>
            <img
              src={nazca}
              alt="Nazca"
              className={`destination-image ${selectedImage === 7 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(7)}
            />
            <h2>Nazca</h2>
            <p><strong>Ubicación:</strong> Ica, Sur de Perú</p>
            <p><strong>Descripción:</strong> Hogar de las misteriosas Líneas de Nazca, observables desde avionetas turísticas.</p>
            <p><strong>Actividades:</strong> Vuelo en avioneta para ver las líneas, turismo arqueológico.</p>
          </section>

          {/* Caral */}
          <section>
            <img
              src={caral}
              alt="Caral"
              className={`destination-image ${selectedImage === 8 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(8)}
            />
            <h2>Caral</h2>
            <p><strong>Ubicación:</strong> Lima, Norte de Perú</p>
            <p><strong>Descripción:</strong> La civilización más antigua de América, con impresionantes pirámides y un complejo arqueológico bien preservado.</p>
            <p><strong>Actividades:</strong> Turismo arqueológico, recorridos guiados por las pirámides.</p>
          </section>

          {/* Chiclayo */}
          <section>
            <img
              src={chiclayo}
              alt="Chiclayo"
              className={`destination-image ${selectedImage === 9 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(9)}
            />
            <h2>Chiclayo</h2>
            <p><strong>Ubicación:</strong> Lambayeque, Norte de Perú</p>
            <p><strong>Descripción:</strong> Ciudad conocida por su gastronomía, playas cercanas y sitios arqueológicos como el Señor de Sipán y las pirámides de Túcume.</p>
            <p><strong>Actividades:</strong> Visitas a museos, arqueología, turismo gastronómico.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Costa;
