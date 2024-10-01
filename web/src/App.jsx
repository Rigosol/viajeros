import { Fragment } from 'react'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import Menu from './componente/Menu';
import NosotrosCuerpo from './componente/NosotrosCuerpo';


function App() {
 
  return (
    
      <Router>
          <Menu />
            <Routes>
              <Route path="/nosotros" element={<NosotrosCuerpo/>} /> 
            </Routes>

      </Router>
  );
}

export default App;
