import React, { useState } from 'react';
import './Costa.css';

const Costa = () => {
  const [activeDestino, setActiveDestino] = useState(null);

  const destinos = [
    {
      id: 1,
      nombre: 'Máncora',
      ubicacion: 'Piura',
      descripcion: 'Paraíso tropical con playas de arena dorada y aguas cristalinas, ideal para surfistas y amantes del sol.',
      imagen: '/api/placeholder/800/500',
      actividades: [
        'Surf en las mejores olas del norte',
        'Avistamiento de ballenas jorobadas (julio-octubre)',
        'Pesca deportiva de altura',
        'Buceo y snorkel en aguas cristalinas',
        'Paseos en yate al atardecer'
      ],
      mejorTemporada: 'Diciembre a Marzo',
      atracciones: [
        'Playa Máncora',
        'Playa Vichayito',
        'El Ñuro (nado con tortugas)',
        'Muelle de Máncora'
      ]
    },
    {
      id: 2,
      nombre: 'Paracas',
      ubicacion: 'Ica',
      descripcion: 'Reserva natural que combina historia, vida marina y paisajes desérticos únicos en el mundo.',
      imagen: '/api/placeholder/800/500',
      actividades: [
        'Tour a las Islas Ballestas',
        'Visita a la Reserva Nacional de Paracas',
        'Sandboarding en el desierto',
        'Paseos en buggy',
        'Deportes acuáticos'
      ],
      mejorTemporada: 'Todo el año',
      atracciones: [
        'Islas Ballestas',
        'Playa Roja',
        'Catedral de Paracas',
        'Centro de Interpretación'
      ]
    },
    {
      id: 3,
      nombre: 'Huanchaco',
      ubicacion: 'La Libertad',
      descripcion: 'Tradicional balneario conocido por sus caballitos de totora y su rica historia cultural.',
      imagen: '/api/placeholder/800/500',
      actividades: [
        'Clases de surf tradicional',
        'Paseo en caballito de totora',
        'Visita a Chan Chan',
        'Tour gastronómico',
        'Pesca artesanal'
      ],
      mejorTemporada: 'Diciembre a Abril',
      atracciones: [
        'Muelle de Huanchaco',
        'Ruinas de Chan Chan',
        'Huaca del Sol y la Luna',
        'Totorales'
      ]
    }
  ];

  return (
    <div className="costa-container">
      <div className="costa-header">
        <h2>Descubre la Costa Peruana</h2>
        <p>Explora las maravillas del litoral peruano, desde playas paradisíacas hasta reservas naturales</p>
      </div>

      <div className="destinos-grid">
        {destinos.map((destino) => (
          <div 
            key={destino.id} 
            className={`destino-card ${activeDestino === destino.id ? 'active' : ''}`}
            onClick={() => setActiveDestino(activeDestino === destino.id ? null : destino.id)}
          >
            <div className="destino-preview">
              <img src={destino.imagen} alt={destino.nombre} />
              <h3>{destino.nombre}</h3>
              <span className="ubicacion">{destino.ubicacion}</span>
            </div>

            <div className="destino-details">
              <div className="details-content">
                <h3>{destino.nombre}</h3>
                <p className="descripcion">{destino.descripcion}</p>

                <div className="section">
                  <h4>Actividades Destacadas</h4>
                  <ul>
                    {destino.actividades.map((actividad, index) => (
                      <li key={index}>{actividad}</li>
                    ))}
                  </ul>
                </div>

                <div className="section">
                  <h4>Principales Atracciones</h4>
                  <ul>
                    {destino.atracciones.map((atraccion, index) => (
                      <li key={index}>{atraccion}</li>
                    ))}
                  </ul>
                </div>

                <div className="temporada">
                  <h4>Mejor temporada para visitar</h4>
                  <p>{destino.mejorTemporada}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Costa;