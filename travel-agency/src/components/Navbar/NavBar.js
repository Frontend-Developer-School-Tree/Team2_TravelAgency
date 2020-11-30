import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRoute, faMapMarkedAlt, faClipboardList, faUserTie, faUser} from '@fortawesome/free-solid-svg-icons'
const NavBar = (props) => {
    const route = <FontAwesomeIcon icon = {faRoute}/>
    const user = <FontAwesomeIcon icon = {faMapMarkedAlt}/>
    const agente = <FontAwesomeIcon icon = {faUserTie}/>
    const info = <FontAwesomeIcon icon = {faClipboardList}/>
    const login = <FontAwesomeIcon icon = {faUser}/>

    return (
        <div className="NavBarContainer">
            <nav className="">
                <a href="" className="logo">
                    <img src={props.logo}/></a>
                <a href=""> {route} Il mio tour</a>
                <a href=""> {user} Mappa tour</a>
                <a href=""> {agente} Agente</a>
                <a href=""> {info} Info tour</a>
                <button id="login"> {login} Login</button>
            </nav>
            {/* npm i --save @fortawesome/fontawesome-svg-core
            npm install --save @fortawesome/free-solid-svg-icons
            npm install --save @fortawesome/react-fontawesome */}
        </div>
    )
}

export default NavBar
