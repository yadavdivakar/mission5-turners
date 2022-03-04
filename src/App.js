import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Teachers from './components/Teachers';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
      <>
        <GlobalStyle/>
      </>
  );  
}

export default App;

