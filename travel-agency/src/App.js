import React from 'react'
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import PhotoPrincipal from "./components/Navbar/PhotoPrincipal";
import CardMaps from "./components/Maps/CardMaps";
import AgenteCard from "./components/Agente/AgenteCard";
import { ApiStorage, ApiContext } from "./ApiContext";



function App() {

  return (
    <div className="App">
     
      <ApiStorage>
        <NavBar/>
        <PhotoPrincipal />
        <CardMaps />
        <AgenteCard />
      </ApiStorage>
    </div>
  );
}

export default App;
