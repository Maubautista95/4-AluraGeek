import React from "react";
import Header from "./components/Header/Header";
import EstilosGlobales from "./Global";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import dataCategories from "./data/datos_iniciales.json"
import NuevoVideo from "./pages/NuevoVideo/NuevoVideo";


function App() {
  return (
    <>
      <EstilosGlobales />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home dataCategories={dataCategories} />} />
          <Route path="nuevo_video" element={<NuevoVideo dataCategories={dataCategories} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
