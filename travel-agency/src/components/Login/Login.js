import React, { useState } from 'react'
import './login.css'
import logo from '../../img/logo.svg';
import { Link } from 'react-router-dom';

function Login({mychanges=(()=>{})}) {

    const [mail, setMail] = useState('');
    const [password, setpassword] = useState('');

    function handleChange(event){  
        const name = event.target.name;
        const value = event.target.value;
        if(name === 'mail'){ setMail({ mail:value})}
        if(name === 'password'){ setpassword({ password:value})}
        
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("event ", mail, " ", password)
        /** creare auth to provider **/
    }

    return (
        <>
            <div className="loginContainer">
                <div className="imgLogin">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="loginformdiv">
                    <form onSubmit={handleSubmit} noValidate className="loginform" >
                        <label>Email</label>
                        <input type="email"
                                name='mail' 
                                placeholder="Email..."
                                onChange={handleChange}
                        />
                        <label>Password</label>
                        <input type="password"
                                name='password' 
                                placeholder="Password..." 
                                onChange={handleChange}/>
                    </form>
                    <button type="submit" className='btnLogin' onClick={handleSubmit}> 
                    {/* <Link to='/homepage'> Login</Link> */}
                    Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login