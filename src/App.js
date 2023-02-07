import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';

function App() {
  const [language, setLanguage] = useState('EN');
  return (
    <div className="App">
      <BrowserRouter>
        <Nav language={language} setLanguage={setLanguage} />
        <Home language={language} />
        <Skills language={language} />
      </BrowserRouter>
    </div>
  );
}

export default App; 