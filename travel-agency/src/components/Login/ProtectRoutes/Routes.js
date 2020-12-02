import React from "react";
import NavBar from "../../Navbar/NavBar";
import Login from "../Login";
import AuthApi from "./AuthApi";
import { Switch } from "react-router-dom";
import ProtectedLogin from "./ProtectedLogin";
import ProtectedRoute from "./ProtectedRoute";
import PhotoPrincipal from "../../Navbar/PhotoPrincipal";
import CardMaps from "../../Maps/CardMaps";

const Routes = () => {
  const Auth = React.useContext(AuthApi);
  return (
    <Switch>
      <ProtectedLogin exact path="/" auth={Auth.auth} component={Login} />
      <ProtectedRoute
        path="/homepage"
        auth={Auth.auth}
        component={(NavBar, PhotoPrincipal)}
      />
      <ProtectedRoute path="/maps" auth={Auth.auth} component={CardMaps} />
    </Switch>
  );
};

export default Routes;
