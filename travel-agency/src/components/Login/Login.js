import React from 'react'
import './login.css'
import logo from '../../img/logo.svg';
import { Link } from 'react-router-dom';

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
                    <button type="submit" className='btnLogin'><Link to='/homepage'> Login</Link> </button>
                </div>
            </div>
        </>
    )
}

export default Login