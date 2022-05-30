import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quote from './pages/Quote';
import Home from './pages/Home';

function App() {
  return (
    <div className={styles.App}>
      
      <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home></Home> }></Route>
            <Route path="Quote" element={ <Quote></Quote> }></Route>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
