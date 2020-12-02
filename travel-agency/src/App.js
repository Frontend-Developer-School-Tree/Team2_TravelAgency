import React from 'react'
import "./App.css";
import PhotoPrincipal from "./components/Navbar/PhotoPrincipal";
import CardMaps from "./components/Maps/CardMaps";
import AgenteCard from "./components/Agente/AgenteCard";
import { ApiStorage } from "./ApiContext";
import AccordionList from './components/Accordion/AccordionList/AccordionList';
import Login from './components/Login/Login';
import { useCookies } from 'react-cookie';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['']);

  function checkLogin(name){
    console.log("cookie ", name);
  }

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

          <ApiStorage>
            <Switch>
              <Route exact path="/">
                <Login onChange={checkLogin}/>
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
