import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import '../styling/HODlogin.css'
const HODlogin = () => {

  const history = useNavigate(); // used to move between different routers
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  async function submit(e){
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login",{email,password})
      .then(res => {
        if(res.data=="User correct"){
          history("/hod",{state : {id:email}})
        }
        else if(res.data == "Password Incorrect"){
          setErrorMessage("Password Incorrect")
        }
        else if(res.data == "User doesn't exist"){
          setErrorMessage("User have not registered")
          console.log("User have not registered")
        }
      })
      .catch(e => {
        setErrorMessage("Wrong details");
        console.log(e)
      })

    } catch (error) {
      console.log("error");
    }
  }

  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form action="POST" className='form'>

        <input type='email' placeholder='Email' onChange = {(e) => {setEmail(e.target.value)}}/>
        <input type='password' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}/>

      <input type='submit' onClick={submit} />
      </form>

      <div className='error-message'>
        {errorMessage && <p>{errorMessage}</p>}
      </div>

      <br />
      <p>OR</p>
      <div className='end-title'>
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
};

export default HODlogin;
