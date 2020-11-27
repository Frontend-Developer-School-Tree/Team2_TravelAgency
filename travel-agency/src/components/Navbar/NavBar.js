import React from 'react'

const NavBar = (props) => {
    return (
        <div className="NavBarContainer">
            <nav className="">
                <a href="" className="logo">
                    <img src={props.logo}/></a>
                <a href=""><i className="fas fa-route"> Il mio tour</i></a>
                <a href=""><i className="fas fa-map-marked-alt"> Mappa tour</i></a>
                <a href=""><i className="fas fa-user-tie"> Agente</i></a>
                <a href=""><i className="fas fa-clipboard-list"> Info tour</i></a>
                <button id="login"><i className="fas fa-user"> Login</i></button>
            </nav>
        </div>
    )
}

export default NavBar
