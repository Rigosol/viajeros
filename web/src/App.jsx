import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';

import Menu from './componente/Menu'


function App() {
 

  return (
    <div>
      <BrowserRouter>
          <Menu />

          <Router>
          <Route path="/PaginaNosotros" element={<PaginaNosotros/>} />
          </Router>

      </BrowserRouter>
    </div>
  )
}

export default App;
