import React from 'react';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Teachers from './components/Teachers';
import { GlobalStyle } from './styles/GlobalStyles';
import PageLayout from './components/styles/PageLayout/PageLayout';
import Header from './components/styles/Header/Header';
import RoutesPaths from './RoutesPaths';
function App() {
  return (
    <>
      <GlobalStyle />
      
      <RoutesPaths>
      </RoutesPaths>
    </>
  );
}

export default App;

