import { Fragment } from 'react'

import Menu from './componente/Menu';
import NosotrosCuerpo from './componente/NosotrosCuerpo';
import InicioCuerpo from './componente/InicioCuerpo';


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

export default App
