import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
