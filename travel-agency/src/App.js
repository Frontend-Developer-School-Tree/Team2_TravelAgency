import React from "react";
import "./App.css";
import { ApiStorage } from "./ApiContext";
import Login from "./components/Login/Login";
// import Cookies from "js-cookies";
// import AuthApi from "./components/Login/ProtectRoutes/AuthApi";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import ProtectedRoute from "./components/Login/ProtectRoutes/ProtectedRoute";
// import ProtectedLogin from "./components/Login/ProtectRoutes/ProtectedLogin";
// import Homepage from "./pages/Homepage";
import ProtectedRouteTest from "./components/Login/ProtectRoutes/ProtectedRouteTest";
// import PhotoPrincipal from "./components/Navbar/Header";
import Header from "./components/Navbar/Header";
import Homepage from "./components/Home/Homepage";

function App() {
  // const Auth = React.useContext(ApiContext);
  // // const [auth, setAuth] = React.useState(false);

  // const readCookies = () => {
  //   const user = Cookies.getItem("user");
  //   if (user) {
  //     setAuth(true);
  //   }
  // };

  // React.useEffect(() => {
  //   readCookies();
  // }, []);

  return (
    <div className="App">

      <BrowserRouter>
        <ApiStorage>
          <Routes>
            <Route path="/" element={<Login />} />
            <ProtectedRouteTest path="homepage/*" element={<Homepage />} />
          </Routes>
        </ApiStorage>
      </BrowserRouter>


      {/* <Router>
        <div>
          <AuthApi.Provider value={A}>
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
                >
                </ProtectedRoute>
              </Switch>
            </ApiStorage>
          </AuthApi.Provider>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
