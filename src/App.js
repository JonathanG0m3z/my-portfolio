import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  const [language, setLanguage] = useState('EN');
  return (
    <div className="App">
      <BrowserRouter>
        <Nav language={language} setLanguage={setLanguage} />
        <Home language={language} />
      </BrowserRouter>
    </div>
  );
}

export default App; 