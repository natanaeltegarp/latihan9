import './App.css'
import { Routes, Route } from 'react-router-dom'; 

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Project from './components/project';
import Header from "./components/Header";

function App() {
  
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;