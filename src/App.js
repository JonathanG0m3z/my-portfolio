import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Background from './components/Background/Background';

function App() {
  const [language, setLanguage] = useState('EN');
  return (
    <div className="App">
      <Background />
      <BrowserRouter>
        <Nav language={language} setLanguage={setLanguage} />
        <Home language={language} />
        <Skills language={language} />
        {/* <Projects language={language} /> */}
        <Contact language={language} />
      </BrowserRouter>
    </div>
  );
}

export default App; 