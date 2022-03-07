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
      <Header></Header>
      <PageLayout>
        <RoutesPaths/>
        {/* Whatever we put inside pagelayout will be passed via children special destructured element and rendered to the main page.*/}
      </PageLayout>
    </>
  );
}

export default App;

