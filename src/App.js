import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import EstilosGlobales from "./Global";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import dataCategories from "./data/datos_iniciales.json"
import NuevoVideo from "./pages/NuevoVideo/NuevoVideo";
import NuevaCategoria from "./pages/NuevaCategoria/NuevaCategoria";


function App() {

  const [categories, setCategories] = useState(dataCategories);

  const editarCategoriaTabla = (categoryKey) => {
    console.log("Editar Categoría")
  };

  const eliminarCategoriaTabla = (categoryKey) => {
    console.log("Eliminar categoría")
  };


  return (
    <>
      <EstilosGlobales />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home dataCategories={dataCategories} />} />
          <Route path="nuevo_video" element={<NuevoVideo dataCategories={dataCategories} />} />
          <Route path="nueva_categoria"
            element={
              <NuevaCategoria
                dataCategories={dataCategories}
                editarCategoriaTabla={editarCategoriaTabla}
                eliminarCategoriaTabla={eliminarCategoriaTabla}
              />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
