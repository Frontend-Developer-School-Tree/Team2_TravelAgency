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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/Login/ProtectRoutes/ProtectedRoute";
import ProtectedLogin from "./components/Login/ProtectRoutes/ProtectedLogin";
import Routes from "./components/Login/ProtectRoutes/Routes";
import Homepage from "./pages/Homepage";

function App() {
  const Auth = React.useContext(AuthApi);
  const [auth, setAuth] = React.useState(false);

  const readCookies = () => {
    const user = Cookies.getItem("user");
    if (user) {
      setAuth(true);
    }
  };

  React.useEffect(() => {
    readCookies();
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <AuthApi.Provider value={{ auth, setAuth }}>
            <ApiStorage>
              <Switch>
                <ProtectedLogin
                  exact
                  path="/"
                  auth={auth}
                  component={Login}
                />
                <ProtectedRoute
                  path="/homepage"
                  auth={auth}
                  component={Homepage}
                />
                

                {/* <Routes>
                  <Login />
                  <PhotoPrincipal />
                  <AgenteCard />
                </Routes> */}

                {/* <Route path="/maps">
                  <PhotoPrincipal />
                  <AgenteCard />
                  <CardMaps />
                </Route>
                <Route path="/infotour">
                  <PhotoPrincipal />
                  <AgenteCard />
                  <AccordionList />
                </Route> */}
              </Switch>
            </ApiStorage>
          </AuthApi.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;
