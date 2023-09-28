import React from "react";
import Header from "./components/Header/Header";
import EstilosGlobales from "./Global";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
    <EstilosGlobales /> 

      <Header />
      <Banner></Banner>
      <Footer />
    </>
  );
}

export default App;
