import { Fragment } from 'react'

import Menu from './componente/Menu';
import NosotrosCuerpo from './componente/Nosotros';
import InicioCuerpo from './componente/InicioCuerpo';
import Contacto from './componente/Contacto';





function App() {
 
  return (
      <>
          <Menu />
          <InicioCuerpo />
         <NosotrosCuerpo />
          <Contacto />
      

        </>
  );
}

export default App
