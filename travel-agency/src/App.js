import React from 'react'
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import PhotoPrincipal from "./components/Navbar/PhotoPrincipal";
import CardMaps from "./components/Maps/CardMaps";
import AgenteCard from "./components/Agente/AgenteCard";
import { ApiContextProvider } from "./ApiContext";



function App() {

  return (
    <div className="App">
    
      <ApiContextProvider>
        <PhotoPrincipal />
        <CardMaps />
        <AgenteCard />
      </ApiContextProvider>

    </div>
  );
}

export default App;
