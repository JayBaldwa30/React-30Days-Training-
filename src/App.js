import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Services />} />
          <Route path='contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
