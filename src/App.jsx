import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './samyak/components/navbar/navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>     
      <Navbar />
        <Routes>
      <Route path = "/" element={<Homepage />}/>
        </Routes>
    </BrowserRouter>
    </div>
    );
}

export default App;
