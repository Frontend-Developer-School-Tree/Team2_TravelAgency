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

    <div className="App">

      {/* <ApiStorage> */}
      {/* <PhotoPrincipal />
        <div className="clear"></div> */}


      {/* <Login/> */}
      {/* <ApiStorage> */}
      {/* <PhotoPrincipal /> */}
      {/* <CardMaps /> */}
      {/* <AgenteCard />
        <AccordionList />
      </ApiStorage> */}

      {/* <CardMaps /> */}
      {/* <AgenteCard />
          <AccordionList /> */}

      {/* </ApiStorage> */}



      <Router>
        <div>
          {/* <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/homepage">Home</Link>
            </li>
          </ul>
          </nav> */}
          <ApiStorage>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/homepage">
                <PhotoPrincipal />
                <AgenteCard />
              </Route>
              <Route path='/maps'>
                <PhotoPrincipal />
                <AgenteCard />
                <CardMaps />
              </Route>
              <Route path='/infotour'>
                <PhotoPrincipal />
                <AgenteCard />
                <AccordionList />
              </Route>

            </Switch>
          </ApiStorage>
        </div>
      </Router>
    </div>
  );
}

export default App;
