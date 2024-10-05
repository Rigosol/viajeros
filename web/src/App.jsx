import { Fragment } from 'react'
import InicioCuerpo from './componentes/InicioCuerpo'; 

import Menu from './componente/Menu';
import NosotrosCuerpo from './componente/NosotrosCuerpo';


function App() {
 
  return (   
      <div>
          <Menu />
            <Routes>
              <InicioCuerpo/>
              <Route path="/nosotros" element={<NosotrosCuerpo/>} /> 
            </Routes>
      </div>
  );
}

export default App;
