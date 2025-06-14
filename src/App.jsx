import React from 'react'
import { useState } from "react";
import "./App.css";
import Navbar from './samyak/components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>     
      <Navbar />
    </BrowserRouter>
    </div>
    );
}

export default App;
