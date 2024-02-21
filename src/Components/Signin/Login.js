import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState, useRef } from 'react';
import axios from 'axios'

function Login() {

  const usernameRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState(null)


  
  function loginClick(e) {
    e.preventDefault()
    setError(null)
    if (usernameRef.current.value === '') {

      return setError("username is required")

    }

    if (passwordRef.current.value === '') {

      return setError("Password is required")

    }

    axios.post('http://localhost:3300/login',{
      "UserName":usernameRef.current.value,
      "Password":passwordRef.current.value,
    })

  }

  return (
    
    <div class="login-box">

      <form>

        <div class="user-box">
          <input type="text" name="" required=""></input>
          <label>USER NAME :</label>
        </div>

        <div class="user-box">
          <input type="password" name="" required=""></input>
          <label>PASSWORD :</label>
        </div>

        <div className="LoginDiv">
          <a href="#">
            LOGIN
            <span></span>
          </a>
        </div>



        <div className="NewSignUp">

          New to Rebel Cartel?
          <Link to="/signup">
          <button>SIGN UP NOW</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
