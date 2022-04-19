import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import ComputerPage from './components/Pages/ComputerPage';
import RedePage from './components/Pages/RedePage';
import SmartphonePage from './components/Pages/SmartphonePage';
import Sidebar from './components/Sidebar/Sidebar';
import SetorPage from './components/SetorPage/SetorPage';

function App() {
  return (
    <Router>
      <Sidebar />
        <Routes>
          <Route path="/" element={<RedePage />} />
          <Route path="/computer" element={<ComputerPage />} />
          <Route path="/smartphone" element={<SmartphonePage />} />
          <Route path="/setor" element={<SetorPage />} />
        </Routes>
    </Router>
    
  );
}

export default App;
