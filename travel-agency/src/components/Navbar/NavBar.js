import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoute,
  faMapMarkedAlt,
  faClipboardList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import AccordionList from "../Accordion/AccordionList/AccordionList";
import CardMaps from "../Maps/CardMaps";
// import AuthApi from "../Login/ProtectRoutes/AuthApi";
// import Cookies from "js-cookies";
// import Homepage from "../../pages/Homepage";
import { ApiContext } from "../../ApiContext";

const NavBar = (props) => {
  const route = <FontAwesomeIcon icon={faRoute} />;
  const user = <FontAwesomeIcon icon={faMapMarkedAlt} />;
  //   const agente = <FontAwesomeIcon icon={faUserTie} />;
  const info = <FontAwesomeIcon icon={faClipboardList} />;
  const login = <FontAwesomeIcon icon={faUser} />;

  //   const Auth = React.useContext(AuthApi);

  const handleOnClick = () => {
    // Auth.setAuth(false);
    // Cookies.removeItem("user");
    userLogout();
  };

  const { userLogout } = React.useContext(ApiContext);

  return (
    <div className="NavBarContainer">
      <nav className="">
        <NavLink to="/homepage" className="logo">
          <img alt="img logo" src={props.logo} />
        </NavLink>
        <NavLink to="/homepage/maps">{route} Il mio tour</NavLink>
        <NavLink to="/homepage/infotour">{info} Info tour</NavLink>
        {/* <a href=""> {agente} Agente</a> */}
        <button id="login" onClick={handleOnClick}>
          {login} Logout
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
