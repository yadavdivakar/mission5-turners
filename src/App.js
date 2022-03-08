import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Features from './components/Features';
import Teachers from './components/Teachers';
import './App.css';




function App() {
  return (
    <Router>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home /> }/>
       <Route path='/features' element={<Features />} />
       <Route path='/teachers' element={<Teachers />} />

     </Routes>
     <Footer />
    </Router>
  );
}

export default App;

