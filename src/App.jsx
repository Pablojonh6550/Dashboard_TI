import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import ComputerPage from './components/Report/ComputerPage';
import Rede from './components/Report/Rede';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Rede />} />
          <Route path="/computer" element={<ComputerPage />} />
        </Routes>
    </Router>
    
  );
}

export default App;
