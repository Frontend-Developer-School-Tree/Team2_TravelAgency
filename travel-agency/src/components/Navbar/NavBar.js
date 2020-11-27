import React from 'react'

const NavBar = (props) => {
    return (
        <div className="NavBarContainer">
            <nav className="">
                <a href="" className="logo">
                    <img src={props.logo}/></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <button id="login">Login</button>
            </nav>
            
        </div>
    )
}

export default NavBar
