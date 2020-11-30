import React from 'react'
import "./App.css";
import PhotoPrincipal from "./components/Navbar/PhotoPrincipal";
import CardMaps from "./components/Maps/CardMaps";
import AgenteCard from "./components/Agente/AgenteCard";
import { ApiStorage } from "./ApiContext";
import AccordionList from './components/Accordion/AccordionList/AccordionList';
import Login from './components/Login/Login';

import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
        } from 'react-router-dom';


function App() {

  return (
    
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="./components/Login/Login.js">Login</Link>
            </li>
            <li>
              <Link to="./components/Navbar/NavBar.js">Home</Link>
            </li>
          </ul>
        <Switch>
          <Route path="./components/Navbar/NavBar.js">
            <ApiStorage>
              <PhotoPrincipal />
              <CardMaps />
              <AgenteCard />
              <AccordionList />
            </ApiStorage>
          </Route>
          <Route path="./components/Login/Login.js">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
