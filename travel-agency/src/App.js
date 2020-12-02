import React from "react";
import "./App.css";
import PhotoPrincipal from "./components/Navbar/PhotoPrincipal";
import CardMaps from "./components/Maps/CardMaps";
import AgenteCard from "./components/Agente/AgenteCard";
import { ApiStorage } from "./ApiContext";
import AccordionList from "./components/Accordion/AccordionList/AccordionList";
import Login from "./components/Login/Login";
// import Navbar from "./components/Navbar/NavBar";
import Cookies from "js-cookies";
import AuthApi from "./components/Login/ProtectRoutes/AuthApi";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import ProtectedRoute from "./components/Login/ProtectRoutes/ProtectedRoute";
// import ProtectedLogin from "./components/Login/ProtectRoutes/ProtectedLogin";
import Routes from "./components/Login/ProtectRoutes/Routes";

function App() {
  const [auth, setAuth] = React.useState(false);

  const readCookies = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  };

  React.useEffect(() => {
    const ac = new AbortController();
    readCookies();
    return () => ac.abort();
  }, []);

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
          <AuthApi.Provider value={{ auth, setAuth }}>
            <ApiStorage>
              <Switch>

                <Routes>
                  <Login />
                  <PhotoPrincipal />
                  <AgenteCard />
                </Routes>

                <Route path="/maps">
                  <PhotoPrincipal />
                  <AgenteCard />
                  <CardMaps />
                </Route>
                <Route path="/infotour">
                  <PhotoPrincipal />
                  <AgenteCard />
                  <AccordionList />
                </Route>
              </Switch>
            </ApiStorage>
          </AuthApi.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;
