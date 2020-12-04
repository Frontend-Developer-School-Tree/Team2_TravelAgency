import React, { useState } from "react";
import "./login.css";
import logo from "../../img/logo.svg";
import { ApiContext } from "../../ApiContext";
import { Navigate } from "react-router-dom";

const user = { username: `admin`, password: `admin` };

function Login() {
  const [mail, setMail] = useState("");
  const [password, setpassword] = useState("");

  const { userLogin, login } = React.useContext(ApiContext);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "mail") {
      setMail({ mail: value });
    }
    if (name === "password") {
      setpassword({ password: value });
    }
  }

  const checkCredential = (event) => {
    event.preventDefault();
    console.log(" bool ", mail === user.username && password === user.password)
    /** è il controllo che da sempre false */
    if (mail.mail === user.username && password.password === user.password) {
      console.log("mail ", mail, " password ", password);
      userLogin();
    }
  };

  if (login === true) return <Navigate to="/homepage" />;
  return (
    <>
      <div className="loginContainer">
        <div className="imgLogin">
          <img src={logo} alt="logo" />
        </div>
        <div className="loginformdiv">
          <form onSubmit={checkCredential} noValidate className="loginform">
            <label>Email</label>
            <input
              type="email"
              name="mail"
              placeholder="Email..."
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password..."
              onChange={handleChange}
            />
          </form>
          <button type="submit" className="btnLogin" onClick={checkCredential}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
