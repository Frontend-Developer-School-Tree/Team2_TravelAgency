import React from 'react'
import "./App.css";
import PhotoPrincipal from "./components/Navbar/PhotoPrincipal";
import CardMaps from "./components/Maps/CardMaps";
import AgenteCard from "./components/Agente/AgenteCard";
import { ApiStorage } from "./ApiContext";
import AccordionList from './components/Accordion/AccordionList/AccordionList';
import Login from './components/Login/Login';



function App() {

  return (
    <div className="App">

      <ApiStorage>
        {/* <PhotoPrincipal />
        <div className="clear"></div> */}

      
      {/* <Login/> */}
      <ApiStorage>
        <PhotoPrincipal />
        {/* <CardMaps /> */}
        <AgenteCard />
        <AccordionList />
      </ApiStorage>
        <div className="clear"></div>

          {/* <CardMaps /> */}
          {/* <AgenteCard />
          <AccordionList /> */}
        
      </ApiStorage>

    </div>
  );
}

export default App;
