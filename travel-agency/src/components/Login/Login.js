import React from 'react'
import './login.css'
import logo from '../../img/logo.svg';

function Login() {

    return (
        <>
            <div className="loginContainer">
                <div className="imgLogin">
                    <img src={logo} />
                </div>
                <div className="loginformdiv">
                    <form className="loginform" noValidate>
                        <label>Email</label>
                        <input type="email" placeholder="Email..." />
                        <label>Password</label>
                        <input type="password" placeholder="Password..." />
                    </form>
                    <button type="submit" >Login</button>
                </div>
            </div>
        </>
    )
}

export default Login