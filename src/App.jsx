import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

//pages imports
import Homepage from './pages/Homepage';
import About from './pages/About';
import NotFound from './pages/NotFound';

//component imports
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>


      </main>
    </>
  )
}

export default App
