import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './samyak/components/navbar/navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>     
      <Navbar />
        <Routes>
        </Routes>
    </BrowserRouter>
    </div>
    );
}

export default App;
