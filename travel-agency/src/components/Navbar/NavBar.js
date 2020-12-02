import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRoute, faMapMarkedAlt, faClipboardList, faUser} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import  AuthApi  from "../Login/ProtectRoutes/AuthApi";
import Cookies from "js-cookies";


const NavBar = (props) => {

    const route = <FontAwesomeIcon icon = {faRoute}/>
    const user = <FontAwesomeIcon icon = {faMapMarkedAlt}/>
    const info = <FontAwesomeIcon icon = {faClipboardList}/>
    const login = <FontAwesomeIcon icon = {faUser}/>


    const Auth = React.useContext(AuthApi)

	const handleOnClick = () => {
        Auth.setAuth(false);
        Cookies.removeItem("user")
	}

    return (
        <div className="NavBarContainer">
            <nav className="">
                <NavLink to='/homepage' className="logo">
                    <img src={props.logo} alt="logo"/>
                </NavLink>
                <NavLink to='/maps'> {route} Il mio tour</NavLink>
                <NavLink to='maps'> {user} Mappa tour</NavLink>
                <NavLink to='infotour'> {info} Info tour</NavLink>
                <button id="login" onClick={handleOnClick}> {login} Logout</button>
            </nav>
           
        </div>
    )
}

export default NavBar
