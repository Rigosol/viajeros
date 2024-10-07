import React, { useState } from 'react';
import './Turismo.css';

// Asegúrate de que las rutas son correctas según la estructura del proyecto
import iquitos from '../imagenes/selva_iquitos.jpg';
import tarapoto from '../imagenes/selva_tarapoto.jpg';
import pucallpa from '../imagenes/selva_pucallpa.jpg';
import tambopata from '../imagenes/selva_tambopata.jpg';
import oxapampa from '../imagenes/selva_oxapampa.jpg';
import sanMartin from '../imagenes/selva_sanMartin.jpg';
import manu from '../imagenes/selva_manu.jpg';
import tingoMaria from '../imagenes/selva_tingoMaria.jpg';
import chachapoyas from '../imagenes/selva_chachapoyas.jpg';

const Selva = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (id) => {
    setSelectedImage(selectedImage === id ? null : id);
  };

  return (
    <div className="page-container">
      <div className="turismo-container">
        <h1 className='titulo'>Descubre la Selva Peruana</h1>
        <p>Explora los paisajes tropicales, la biodiversidad y la cultura amazónica de la selva del Perú.</p>
        
        <div className="destinations-grid">
          {/* Iquitos */}
          <section>
            <img
              src={iquitos}
              alt="Iquitos"
              className={`destination-image ${selectedImage === 1 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(1)}
            />
            <h2>Iquitos</h2>
            <p><strong>Ubicación:</strong> Loreto, Amazonía peruana</p>
            <p><strong>Descripción:</strong> La ciudad más grande de la Amazonía peruana, rodeada por ríos y conocida por su biodiversidad.</p>
            <p><strong>Actividades:</strong> Visita a la Reserva Nacional Pacaya-Samiria, paseos en bote por el Amazonas, exploración de mercados flotantes.</p>
          </section>

          {/* Tarapoto */}
          <section>
            <img
              src={tarapoto}
              alt="Tarapoto"
              className={`destination-image ${selectedImage === 2 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(2)}
            />
            <h2>Tarapoto</h2>
            <p><strong>Ubicación:</strong> San Martín, región amazónica</p>
            <p><strong>Descripción:</strong> Ciudad rodeada de montañas y cataratas, ideal para el turismo de aventura.</p>
            <p><strong>Actividades:</strong> Senderismo, visitas a cascadas, tours de naturaleza, turismo ecológico.</p>
          </section>

          {/* Pucallpa */}
          <section>
            <img
              src={pucallpa}
              alt="Pucallpa"
              className={`destination-image ${selectedImage === 3 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(3)}
            />
            <h2>Pucallpa</h2>
            <p><strong>Ubicación:</strong> Ucayali, región amazónica</p>
            <p><strong>Descripción:</strong> Una ciudad ribereña conectada al mundo por el río Ucayali, con rica flora y fauna.</p>
            <p><strong>Actividades:</strong> Paseos en bote, visitas a lagos y reservas naturales, ecoturismo.</p>
          </section>

          {/* Reserva Nacional Tambopata */}
          <section>
            <img
              src={tambopata}
              alt="Reserva Nacional Tambopata"
              className={`destination-image ${selectedImage === 4 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(4)}
            />
            <h2>Reserva Nacional Tambopata</h2>
            <p><strong>Ubicación:</strong> Madre de Dios, Amazonía peruana</p>
            <p><strong>Descripción:</strong> Un refugio de biodiversidad donde la naturaleza florece en su máxima expresión.</p>
            <p><strong>Actividades:</strong> Observación de fauna y flora, safaris de vida silvestre, visitas a collpas de guacamayos.</p>
          </section>

          {/* Oxapampa */}
          <section>
            <img
              src={oxapampa}
              alt="Oxapampa"
              className={`destination-image ${selectedImage === 5 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(5)}
            />
            <h2>Oxapampa</h2>
            <p><strong>Ubicación:</strong> Pasco, zona de transición entre la sierra y la selva</p>
            <p><strong>Descripción:</strong> Una ciudad con influencia austro-alemana rodeada de naturaleza exuberante.</p>
            <p><strong>Actividades:</strong> Senderismo, visitas a reservas naturales, exploración de cavernas.</p>
          </section>

          {/* San Martín */}
          <section>
            <img
              src={sanMartin}
              alt="San Martín"
              className={`destination-image ${selectedImage === 6 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(6)}
            />
            <h2>San Martín</h2>
            <p><strong>Ubicación:</strong> San Martín, región amazónica</p>
            <p><strong>Descripción:</strong> Una región rica en cultura y paisajes naturales, con imponentes montañas y selva tropical.</p>
            <p><strong>Actividades:</strong> Rutas de naturaleza, visitas a comunidades locales, turismo de aventura.</p>
          </section>

          {/* Manu */}
          <section>
            <img
              src={manu}
              alt="Manu"
              className={`destination-image ${selectedImage === 7 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(7)}
            />
            <h2>Manu</h2>
            <p><strong>Ubicación:</strong> Cusco y Madre de Dios, Amazonía peruana</p>
            <p><strong>Descripción:</strong> Reserva biosfera mundialmente conocida por su biodiversidad.</p>
            <p><strong>Actividades:</strong> Observación de vida silvestre, visitas a reservas naturales, exploración de la selva.</p>
          </section>

          {/* Tingo María */}
          <section>
            <img
              src={tingoMaria}
              alt="Tingo María"
              className={`destination-image ${selectedImage === 8 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(8)}
            />
            <h2>Tingo María</h2>
            <p><strong>Ubicación:</strong> Huánuco, selva alta peruana</p>
            <p><strong>Descripción:</strong> Ciudad conocida por sus impresionantes paisajes montañosos y la cueva de las lechuzas.</p>
            <p><strong>Actividades:</strong> Exploración de cavernas, paseos en bote, ecoturismo.</p>
          </section>

          {/* Chachapoyas */}
          <section>
            <img
              src={chachapoyas}
              alt="Chachapoyas"
              className={`destination-image ${selectedImage === 9 ? 'expanded' : ''}`}
              onClick={() => handleImageClick(9)}
            />
            <h2>Chachapoyas</h2>
            <p><strong>Ubicación:</strong> Amazonas, región nororiental</p>
            <p><strong>Descripción:</strong> Ciudad conocida por la fortaleza de Kuélap y su rica historia preincaica.</p>
            <p><strong>Actividades:</strong> Visitas a sitios arqueológicos, senderismo en la selva, observación de aves.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Selva;
