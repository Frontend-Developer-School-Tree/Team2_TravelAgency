import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRoute, faMapMarkedAlt, faClipboardList, faUserTie, faUser} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import  AuthApi  from "../Login/ProtectRoutes/AuthApi";
import Cookies from "js-cookies";


const NavBar = (props) => {
    const route = <FontAwesomeIcon icon = {faRoute}/>
    const user = <FontAwesomeIcon icon = {faMapMarkedAlt}/>
    const agente = <FontAwesomeIcon icon = {faUserTie}/>
    const info = <FontAwesomeIcon icon = {faClipboardList}/>
    const login = <FontAwesomeIcon icon = {faUser}/>


    const Auth = React.useContext(AuthApi)
	const handleOnClick = () => {
	 Auth.setAuth(false);
	 Cookies.remove("user")
	}

    return (
        <div className="NavBarContainer">
            <nav className="">
                <NavLink to='/homepage' className="logo">
                    <img src={props.logo}/></NavLink>
                <NavLink to='/maps'> {route} Il mio tour</NavLink>
                <NavLink to='maps'> {user} Mappa tour</NavLink>
                {/* <a href=""> {agente} Agente</a> */}
                <NavLink to='infotour'> {info} Info tour</NavLink>
                <button id="login" onClick={handleOnClick}> {login} Logout</button>
            </nav>
            {/* npm i --save @fortawesome/fontawesome-svg-core
            npm install --save @fortawesome/free-solid-svg-icons
            npm install --save @fortawesome/react-fontawesome */}
        </div>
    )
}

export default NavBar
