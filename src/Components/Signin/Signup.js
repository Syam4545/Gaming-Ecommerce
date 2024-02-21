import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import axios from 'axios'


function Signup() {


  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const addressRef = useRef()


  const [error, setError] = useState(null)


  function SignupClick(e) {
    e.preventDefault()
    setError(null)
    if (usernameRef.current.value === '') {

      return setError("username is required")

    }
    if (emailRef.current.value === '') {

      return setError("Email is required")

    }
    if (passwordRef.current.value === '') {

      return setError("Password is required")

    }
    if (addressRef.current.value === '') {

      return setError("Address is required")

    }


    axios.post('http://localhost:3300/signup',{
      "UserName":usernameRef.current.value,
      "Email":emailRef.current.value,
      "Password":passwordRef.current.value,
      "Address":addressRef.current.value
    })

  }




  return (
    <div class='signup-box'>
      <form >
        <div class='user-box'>
          <input type='text' name='username' ref={usernameRef} required=''></input>
          <label>USER NAME</label>
        </div>

        <div class='user-box'>
          <input type='email' name='email' ref={emailRef} required=''></input>
          <label>EMAIL</label>
        </div>

        <div class='user-box'>
          <input type='password' name='password' ref={passwordRef} required=''></input>
          <label>PASSWORD</label>
        </div>

        <div class='user-box'>
          <input type='text' name='address' ref={addressRef} required=''></input>
          <label>ADDERSS</label>
        </div>
        {error && <div>{error}</div>}


        <div className='signupDiv'>
          <button onClick={SignupClick} className='signupButton'>
            SIGNUP
            <span></span>
          </button>
        </div>

        <div className='NewLogin'>
          Already in Rebel Cartel?
          <Link to='/login'>
            <button>LOGIN NOW</button>
          </Link>
        </div>

      </form>
    </div>
  );
}

export default Signup;
