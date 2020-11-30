import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRoute, faMapMarkedAlt, faClipboardList, faUserTie, faUser} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
const NavBar = (props) => {
    const route = <FontAwesomeIcon icon = {faRoute}/>
    const user = <FontAwesomeIcon icon = {faMapMarkedAlt}/>
    const agente = <FontAwesomeIcon icon = {faUserTie}/>
    const info = <FontAwesomeIcon icon = {faClipboardList}/>
    const login = <FontAwesomeIcon icon = {faUser}/>

    return (
        <div className="NavBarContainer">
            <nav className="">
                <NavLink to='/homepage' className="logo">
                    <img src={props.logo}/></NavLink>
                <NavLink to='/maps'> {route} Il mio tour</NavLink>
                <NavLink to='maps'> {user} Mappa tour</NavLink>
                {/* <a href=""> {agente} Agente</a> */}
                <NavLink to='infotour'> {info} Info tour</NavLink>
                <button id="login"> {login} Login</button>
            </nav>
            {/* npm i --save @fortawesome/fontawesome-svg-core
            npm install --save @fortawesome/free-solid-svg-icons
            npm install --save @fortawesome/react-fontawesome */}
        </div>
    )
}

export default NavBar
