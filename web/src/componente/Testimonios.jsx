import { useState } from "react";
import "./Testimonios.css";
import mancora from "../imagen/mancora.jpg";
import mancora2 from "../imagen/mancora2.jpg";
import imagen3 from "../imagen/imagen3.png";
import imagen4 from "../imagen/imagen4.png";

import testimonio1 from "../imagen/testimonio1.png";
import testimonio2 from "../imagen/testimonio2.png";
import testimonio3 from "../imagen/testimonio3.png";
import testimonio4 from "../imagen/testimonio4.png";

function Testimonios() {
  // Estado para manejar la visibilidad de las imágenes
  const [visible, setVisible] = useState({
    img1: true,
    img2: false,
    img3: true,
    img4: false,
  });

  return (
    <div>
      <div className="container-pantalla">
        <div className="content-img">
          <img
            className="img1"
            src={mancora}
            alt="Desarrollo Web 1"
            style={{ opacity: visible.img1 ? 1 : 0 }}
            onMouseOver={() => {
              setVisible({ ...visible, img1: false, img2: true });
            }}
            onMouseOut={() => {
              setVisible({ ...visible, img1: true, img2: false });
            }}
          />
          <img
            className="img2"
            src={mancora2}
            alt="Desarrollo Web 2"
            style={{ opacity: visible.img2 ? 1 : 0 }}
            onMouseOver={() => {
              setVisible({ ...visible, img1: false, img2: true });
            }}
            onMouseOut={() => {
              setVisible({ ...visible, img1: true, img2: false });
            }}
          />
        </div>
        <div className="content-text">
          <h1 className="titulo3">¿ Estás buscando una aventura ?</h1>
          <p className="descripcion">
            Por supuesto que Viajeros.com no podía faltar entre las principales
            agencias de viaje en Perú. En nuestra agencia conocerás los mejores
            destinos para relajación, con acceso a hoteles 5 estrellas, o para
            destinos exóticos, a través de los cuales conocerás los lugares más
            paradisiacos del Perú. Viajeros tiene todo lo que necesitas para
            ofrecerte unas vacaciones inolvidables. En Viajeros.com también te
            ofrecemos los mejores destinos, somos una agencia confiable que
            tiene todo el año las mejores promociones para ti.
            <br></br>
            <br></br>
En Viajeros.com, entendemos que cada viajero es único, por lo que nos esforzamos por ofrecer experiencias personalizadas y memorables 
que se adapten a tus intereses y presupuesto. Nuestra agencia de viajes se compromete a proporcionar un servicio de alta calidad, desde
 la planificación inicial hasta la ejecución del viaje, para garantizar que cada aspecto de tu experiencia sea excepcional.
          </p>
        </div>
      </div>
      <div className="container-pantalla">
        <div className="content-text">
          <p className="descripcion">
            

Descubre una nueva dimensión en tus viajes con la agencia de viajes líder: Viajeros.com. Como una agencia de viajes comprometida
 con la excelencia y la satisfacción del cliente, estamos aquí para hacer realidad tus sueños de viaje. En Viajeros.com, nos 
 enorgullecemos de ofrecer una amplia gama de servicios y paquetes turísticos diseñados para satisfacer tus necesidades y deseos de viaje.
<br></br>
<br></br>
Nuestra agencia de viajes, Viajeros.com, se distingue por su atención al detalle, su dedicación al cliente y su enfoque
 personalizado en cada experiencia de viaje. Ya sea que estés planeando unas vacaciones familiares, una escapada romántica o un viaje 
 de negocios, nuestro equipo de expertos en viajes está aquí para ayudarte en cada paso del camino.
 <br></br>
 <br></br>
No pierdas la oportunidad de descubrir el mundo con la agencia de viajes de confianza: Viajeros.com. 
¡Contáctanos hoy mismo para empezar a planificar tu próximo viaje inolvidable!
          </p>
        </div>
        <div className="content-img">
          <img
            className="img3"
            src={imagen3}
            alt="Imagen 3"
            style={{ opacity: visible.img3 ? 1 : 0 }}
            onMouseOver={() => {
              setVisible({ ...visible, img3: false, img4: true });
            }}
            onMouseOut={() => {
              setVisible({ ...visible, img3: true, img4: false });
            }}
          />
          <img
            className="img4"
            src={imagen4}
            alt="Imagen 4"
            style={{ opacity: visible.img4 ? 1 : 0 }}
            onMouseOver={() => {
              setVisible({ ...visible, img3: false, img4: true });
            }}
            onMouseOut={() => {
              setVisible({ ...visible, img3: true, img4: false });
            }}
          />
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="content-text2">
        <p className="titulo2">
          Descubre lo que dicen nuestros clientes después de experimentar
          nuestros servicios turísticos
        </p>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  
         <center>
      <div className= "centrado"> 
        <section>
          <div className="images-blog">
            <div className="image-1-blog image-blog">
              <img src={testimonio1} />
              <p className="nombres"> Cartagena María </p>
              <p className="testim">
                Todo fue maravilloso, no hay nada que mejorar, todo de primer
                nivel. Los servicios, la atención, la preparación de los guías,
                quedé encantada!!! Saludos!
              </p>
            </div>
            <div className="image-2-blog image-blog">
            <img src={testimonio2} />
              <p className="nombres"> Casadesus Paul </p>
              <p className="testim">
                Merece una mención especial la guía de Machu Picchu,quien se
                entregó a satisfacer hasta la más mínima de nuestras necesidades
                con mucha paciencia y conocimiento durante el recorrido
                explicando, y hasta sacando fotografías. Muchas gracias,
                nuevamente
              </p>
            </div>
            <div className="image-3-blog image-blog">
            <img src={testimonio3} />
              <p className="nombres"> Alvarez Anaya </p>
              <p className="testim">
                El viaje para nosotros ha sido una experiencia inolvidable. Por
                supuesto que volveremos al Perú y por supuesto que volveré a
                contactar a Viaje Perú para la organización del viaje, aparte de
                dar su recomendación a todo aquel que conozca que vaya para
                allá.
              </p>
            </div>
            <div className="image-4-blog image-blog">
            <img src={testimonio4} />
              <p className="nombres"> Custodio Pedraza </p>
              <p className="testim">
                Estamos muy agradecidos con ustedes, nos fue muy bien y las
                expectativas que teníamos fueron más que cumplidas. Nos dejó
                gratamente complacidos con todos los tours, todo fue increíble,
                quedamos con ganas de volver y visitar lo que nos faltó
                Nuevamente mil gracias y un abrazo grande!
              </p>
            </div>
          </div>
        </section>
        
      </div>
      </center>
    </div>

    //----
  );
}

export default Testimonios;
